import { React, useState, useEffect } from "react";
import EditTodo from "./EditTodo"; // Import the EditTodo component

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
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>
                {editingTodo === todo.todo_id ? (
                  <EditTodo todo={todo} onUpdate={updateTodo} />
                ) : (
                  todo.description
                )}
              </td>
              <td>
                {editingTodo === todo.todo_id ? null : ( // No "Edit" button while editing
                  <button onClick={() => setEditingTodo(todo.todo_id)}>
                    Edit
                  </button>
                )}
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
