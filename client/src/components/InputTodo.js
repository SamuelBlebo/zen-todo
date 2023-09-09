import { React, useState } from "react";

import { AiFillPlusCircle } from "react-icons/ai";

export default function InputTodo() {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    if (description.trim() === "") {
      return;
    }
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      // Check if the response indicates a successful submission
      if (response.ok) {
        // Clear the form fields
        setDescription("");
        console.log("Posted");
      }
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="">
      <h1 className="font-bold text-[28px] mb-[10px] ml-1">Zen Task</h1>
      <form onSubmit={onSubmitForm} className="flex">
        <input
          type="text"
          placeholder="Type your task here"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-[400px] h-[50px] px-[30px] rounded-l-lg"
        />
        <button
          className="bg-black h-[50px] w-[70px] text-[#fff] text-[25px] rounded-r-lg flex justify-center items-center"
          type="submit"
        >
          +
        </button>
      </form>
    </div>
  );
}
