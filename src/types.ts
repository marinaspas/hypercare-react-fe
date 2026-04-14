export interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}
export interface TodoFormProps {
  inputValue: string;
  description: string;
  error: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDescriptionChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}
export interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}
