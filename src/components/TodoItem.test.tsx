import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TodoItem } from "./TodoItem";

const mockTodo = {
  id: "1",
  title: "Buy milk",
  description: "From the store",
  completed: false,
};

describe("TodoItem", () => {
  it("renders title and description", () => {
    render(
      <TodoItem todo={mockTodo} onToggle={jest.fn()} onDelete={jest.fn()} />,
    );
    expect(screen.getByText("Buy milk")).toBeInTheDocument();
    expect(screen.getByText("From the store")).toBeInTheDocument();
  });

  it("calls onToggle when clicked", async () => {
    const onToggle = jest.fn();
    render(
      <TodoItem todo={mockTodo} onToggle={onToggle} onDelete={jest.fn()} />,
    );
    await userEvent.click(screen.getByText("Buy milk"));
    expect(onToggle).toHaveBeenCalledWith("1");
  });

  it("opens confirm dialog when delete is clicked", async () => {
    render(
      <TodoItem todo={mockTodo} onToggle={jest.fn()} onDelete={jest.fn()} />,
    );
    await userEvent.click(screen.getByText("✕"));
    expect(
      screen.getByText("Are you sure you want to delete this?"),
    ).toBeInTheDocument();
  });

  it("calls onDelete after confirming delete", async () => {
    const onDelete = jest.fn();
    render(
      <TodoItem todo={mockTodo} onToggle={jest.fn()} onDelete={onDelete} />,
    );
    await userEvent.click(screen.getByText("✕"));
    await userEvent.click(screen.getByText("Delete"));
    expect(onDelete).toHaveBeenCalledWith("1");
  });
});
