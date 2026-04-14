import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TodoForm } from "./TodoForm";

const defaultProps = {
  inputValue: "",
  description: "",
  error: "",
  onInputChange: jest.fn(),
  onDescriptionChange: jest.fn(),
  onSubmit: jest.fn(),
  onKeyDown: jest.fn(),
};

describe("TodoForm", () => {
  it("renders input and textarea", () => {
    render(<TodoForm {...defaultProps} />);
    expect(screen.getByPlaceholderText("Enter a task...")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Add description (optional)..."),
    ).toBeInTheDocument();
  });

  it("calls onSubmit when Add Task is clicked", async () => {
    const onSubmit = jest.fn();
    render(<TodoForm {...defaultProps} onSubmit={onSubmit} />);
    await userEvent.click(screen.getByText("Add Task"));
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it("shows error message when error prop is set", () => {
    render(<TodoForm {...defaultProps} error="Task title is required" />);
    expect(screen.getByText("Task title is required")).toBeInTheDocument();
  });
});
