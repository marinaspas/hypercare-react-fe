import type { TodoFormProps } from "../types";

export function TodoForm({
  inputValue,
  description,
  error,
  onInputChange,
  onDescriptionChange,
  onSubmit,
  onKeyDown,
}: TodoFormProps) {
  return (
    <form
      className="max-w-md mx-auto mt-6 bg-white shadow-md rounded-2xl p-5 space-y-4"
      onSubmit={e => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={inputValue}
          onChange={onInputChange}
          className={`w-full px-4 py-2 rounded-lg border outline-none transition
            ${
              error
                ? "border-red-500 focus:ring-2 focus:ring-red-200"
                : "border-gray-300 focus:ring-2 focus:ring-blue-200"
            }`}
        />

        {error && <p className="text-red-500 text-sm mt-1 ml-1">{error}</p>}
      </div>

      <textarea
        placeholder="Add description (optional)..."
        value={description}
        onChange={onDescriptionChange}
        onKeyDown={onKeyDown}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 
        focus:ring-2 focus:ring-blue-200 outline-none transition resize-none"
        rows={3}
      />

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg 
        hover:bg-blue-600 active:scale-[0.98] transition
        "
      >
        Add Task
      </button>
    </form>
  );
}
