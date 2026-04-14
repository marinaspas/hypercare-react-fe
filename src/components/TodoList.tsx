import { TodoItem } from "./TodoItem";
import type { TodoListProps } from "../types";

export function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  return (
    <div className="max-w-md mx-auto mt-6">
      {todos.length === 0 ? (
        <p className="text-center text-gray-400">No tasks yet ✨</p>
      ) : (
        <ol className="space-y-3">
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))}
        </ol>
      )}
    </div>
  );
}
