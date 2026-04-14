import { useState } from "react";
import { ConfirmDialog } from "./ConfirmDialog";
import type { Todo } from "../types";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <li
        onClick={() => onToggle(todo.id)}
        className={`group flex items-start justify-between gap-3 
        rounded-xl p-4 border cursor-pointer transition-all
        ${
          todo.completed
            ? "bg-gray-50 border-gray-200"
            : "bg-white border-gray-100 hover:shadow-md"
        }`}
      >
        {/* Left content */}
        <div className="flex-1">
          <h2
            className={`font-medium text-base transition ${
              todo.completed ? "line-through text-gray-400" : "text-gray-800"
            }`}
          >
            {todo.title}
          </h2>

          {todo.description && (
            <p className="text-sm text-gray-500 mt-1">{todo.description}</p>
          )}
        </div>

        {/* Delete button */}
        <button
          onClick={e => {
            e.stopPropagation();
            setOpen(true);
          }}
          className="text-red-500 text-lg font-bold 
  hover:text-red-600 hover:bg-red-50 
  rounded-full w-8 h-8 flex items-center justify-center transition cursor-pointer"
        >
          ✕
        </button>
      </li>

      <ConfirmDialog
        open={open}
        onCancel={() => setOpen(false)}
        onConfirm={() => {
          onDelete(todo.id);
          setOpen(false);
        }}
      />
    </>
  );
}
