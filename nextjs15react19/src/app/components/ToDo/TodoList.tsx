import React from "react";
import { TodoListProps } from "@/types/todo";

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
  return (
    <ul className="space-y-2 mt-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`p-2 border rounded-md mt-2 ${
            todo.completed ? "bg-green-100" : "bg-red-100"
          }`}
        >
          <div className="flex justify-between items-center">
            <span
              onClick={() => onToggle(todo.id)}
              className={`cursor-pointer ${
                todo.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {todo.title}
            </span>
            <button
              onClick={() => onDelete(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>

            <button
              onClick={() => onDelete(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
