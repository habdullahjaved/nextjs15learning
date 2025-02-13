import React, { useState } from "react";
import { AddTodoProps } from "@/types/todo";

const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (title.trim()) {
      onAdd(title);
      setTitle("");
    }
  };

  return (
    <div className="flex space-x-2">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo"
        className="flex-1 p-2 border rounded-md"
      />
      <button
        onClick={handleAdd}
        className="p-2 bg-blue-500 text-white rounded-md"
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
