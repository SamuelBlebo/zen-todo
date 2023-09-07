import "./App.css";

// components
import InputTodo from "./components/InputTodo";

function App() {
  return (
    <div className="flex justify-center items-center h-[100vh] ">
      <div className=" bg-[#D9D9D9] w-[60vw] h-[80vh] rounded-[30px] p-[80px]">
        <InputTodo />
      </div>
    </div>
  );
}

export default App;
