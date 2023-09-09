import { React, useState, useEffect } from "react";
import EditTodo from "./EditTodo"; // Import the EditTodo component

// icons import
import { BiSolidEditAlt } from "react-icons/bi";
import { BsCheckCircleFill } from "react-icons/bs";

export default function ListTodo() {
  const [todos, setTodos] = useState([]);

  //delete todo function
  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });

      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  // State to manage the currently editing todo
  const [editingTodo, setEditingTodo] = useState(null);
  // Function to update a todo after editing
  const updateTodo = (id, newDescription) => {
    const updatedTodos = todos.map((todo) =>
      todo.todo_id === id ? { ...todo, description: newDescription } : todo
    );
    setTodos(updatedTodos);
    setEditingTodo(null); // Hide the EditTodo component
  };

  // get todos function
  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <table class="table mt-5 w-[460px] ">
        <tbody>
          {todos.map((todo) => (
            <tr
              key={todo.todo_id}
              className=" flex items-center justify-center mb-4 w-[460px]"
            >
              <td className="w-[460px] bg-green-300 h-[50px] flex items-center rounded-l-lg px-[25px]">
                {editingTodo === todo.todo_id ? (
                  <EditTodo todo={todo} onUpdate={updateTodo} />
                ) : (
                  todo.description
                )}
              </td>
              <td className="bg-[#000] text-[#fff] h-[50px] w-[40px] flex items-center justify-center">
                {editingTodo === todo.todo_id ? null : ( // No "Edit" button while editing
                  <BiSolidEditAlt
                    onClick={() => setEditingTodo(todo.todo_id)}
                  />
                )}
              </td>
              <td className="bg-[#000] text-green-300 h-[50px] w-[40px] flex items-center justify-center rounded-r-lg">
                <BsCheckCircleFill onClick={() => deleteTodo(todo.todo_id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
