// /src/services/todoService.ts
import { Todo } from "@/types/todos";

let todos: Todo[] = []; // Temporary in-memory store for Todos

export async function createTodo(title: string): Promise<Todo> {
  const newTodo: Todo = {
    id: crypto.randomUUID(), // ✅ unique per call
    title,
    completed: false,
  };
  todos.push(newTodo);
  return newTodo;
}

export async function deleteTodo(
  id: string,
  currentTodos: Todo[]
): Promise<Todo[]> {
  return currentTodos.filter((todo) => todo.id !== id);
}
