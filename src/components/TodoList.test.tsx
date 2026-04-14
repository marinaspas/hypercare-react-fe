import { render, screen } from "@testing-library/react";
import { TodoList } from "./TodoList";

const mockTodos = [
  { id: "1", title: "Buy milk", description: "", completed: false },
  { id: "2", title: "Walk dog", description: "In the park", completed: true },
];

describe("TodoList", () => {
  it("renders all todos", () => {
    render(
      <TodoList todos={mockTodos} onToggle={jest.fn()} onDelete={jest.fn()} />,
    );
    expect(screen.getByText("Buy milk")).toBeInTheDocument();
    expect(screen.getByText("Walk dog")).toBeInTheDocument();
  });

  it("shows empty state when no todos", () => {
    render(<TodoList todos={[]} onToggle={jest.fn()} onDelete={jest.fn()} />);
    expect(screen.getByText("No tasks yet ✨")).toBeInTheDocument();
  });
});
