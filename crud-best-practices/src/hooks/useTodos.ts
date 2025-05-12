// /src/hooks/useTodos.ts
"use client";
import { useState } from "react";
import { createTodo, deleteTodo } from "@/services/todoService";
import { Todo } from "@/types/todos";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = async ({ title }: { title: string }) => {
    const newTodo = await createTodo(title); // 🔥 correct call
    console.log(newTodo);
    setTodos((prev) => [...prev, newTodo]);
  };

  const removeTodo = async (id: string) => {
    const updatedTodos = await deleteTodo(id, todos); // pass current state
    setTodos(updatedTodos);
  };

  console.log(todos);

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return { todos, addTodo, removeTodo, toggleTodo };
};
