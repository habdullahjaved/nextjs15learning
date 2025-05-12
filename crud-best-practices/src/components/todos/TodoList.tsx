// /src/components/TodoList.tsx
"use client";

import { Todo } from "@/types/todos";

export default function TodoList({
  todos,
  onDelete,
  onToggle,
}: {
  todos: Todo[];
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}) {
  return (
    <div className="w-full max-w-lg mx-auto">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="bg-purple-400 flex justify-between items-center p-2 my-2 rounded cursor:pointer "
        >
          <span
            className={todo.completed ? "line-through" : ""}
            onClick={() => onToggle(todo.id)}
          >
            {todo.title}
          </span>
          <button onClick={() => onDelete(todo.id)} className="btn">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
