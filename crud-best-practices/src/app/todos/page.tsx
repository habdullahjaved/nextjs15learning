// /src/app/todos/page.tsx
"use client";

import TodoForm from "@/components/todos/TodoForm";
import TodoList from "@/components/todos/TodoList";
import { useTodos } from "@/hooks/useTodos";

export default function TodoPage() {
  const { todos, addTodo, removeTodo, toggleTodo } = useTodos();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center">Todo App</h1>
      <TodoForm onCreate={addTodo} />
      <TodoList todos={todos} onDelete={removeTodo} onToggle={toggleTodo} />
    </div>
  );
}
