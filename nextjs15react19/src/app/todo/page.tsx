import React from "react";
import TodoApp from "../components/ToDo/TodoApp";

const TodoPage = () => {
  return (
    <div className="max-w-lg mx-auto mt-10 p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-xl font-bold text-center mb-4">Todo List</h1>
      {/* Render the client-side TodoApp */}
      <TodoApp />
    </div>
  );
};

export default TodoPage;
