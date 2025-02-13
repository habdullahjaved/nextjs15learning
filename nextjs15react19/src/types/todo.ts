export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export interface AddTodoProps {
  onAdd: (title: string) => void;
}
