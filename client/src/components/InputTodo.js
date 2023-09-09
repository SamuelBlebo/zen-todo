import { React, useState } from "react";

export default function InputTodo() {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
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
      <h1>Input Todo</h1>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          className="bg-black px-[10px] py-[7px] text-[#fff]"
          type="submit"
        >
          add
        </button>
      </form>
    </div>
  );
}
