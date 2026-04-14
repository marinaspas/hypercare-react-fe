import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ConfirmDialog } from "./ConfirmDialog";

describe("ConfirmDialog", () => {
  it("renders nothing when closed", () => {
    render(
      <ConfirmDialog open={false} onConfirm={jest.fn()} onCancel={jest.fn()} />,
    );
    expect(screen.queryByText("Delete item")).not.toBeInTheDocument();
  });

  it("renders when open", () => {
    render(
      <ConfirmDialog open={true} onConfirm={jest.fn()} onCancel={jest.fn()} />,
    );
    expect(screen.getByText("Delete item")).toBeInTheDocument();
  });

  it("calls onCancel when Cancel is clicked", async () => {
    const onCancel = jest.fn();
    render(
      <ConfirmDialog open={true} onConfirm={jest.fn()} onCancel={onCancel} />,
    );
    await userEvent.click(screen.getByText("Cancel"));
    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  it("calls onConfirm when Delete is clicked", async () => {
    const onConfirm = jest.fn();
    render(
      <ConfirmDialog open={true} onConfirm={onConfirm} onCancel={jest.fn()} />,
    );
    await userEvent.click(screen.getByText("Delete"));
    expect(onConfirm).toHaveBeenCalledTimes(1);
  });
});
