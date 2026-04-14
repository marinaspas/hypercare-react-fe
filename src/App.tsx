import { useState } from "react";
import { todos as initialTodos } from "./assets/todos";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import type { Todo } from "./types";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [error, setError] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() === "") {
      setError("Task title is required");
      return;
    }

    setError("");

    setTodos(prev => [
      {
        id: crypto.randomUUID(),
        title: inputValue,
        description,
        completed: false,
      },
      ...prev,
    ]);

    setInputValue("");
    setDescription("");
  };

  const handleDeleteTodo = (todoId: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== todoId));
  };

  const handleCompletedToggle = (todoId: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-center mt-6">Todo App</h1>

      <TodoForm
        inputValue={inputValue}
        description={description}
        error={error}
        onInputChange={e => {
          setInputValue(e.target.value);
          if (e.target.value.trim() !== "") setError("");
        }}
        onDescriptionChange={e => setDescription(e.target.value)}
        onSubmit={handleAddTodo}
        onKeyDown={e => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleAddTodo();
          }
        }}
      />

      <TodoList
        todos={todos}
        onToggle={handleCompletedToggle}
        onDelete={handleDeleteTodo}
      />
    </>
  );
}

export default App;
