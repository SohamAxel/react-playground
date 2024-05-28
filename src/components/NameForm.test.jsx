import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import NameForm from "./NameForm";
import userEvent from "@testing-library/user-event";

describe("NameformComponent", () => {
  it("should call onSubmit for valid name", async () => {
    const onSubmitMock = vi.fn();
    const user = userEvent.setup();
    render(<NameForm onSubmit={onSubmitMock} />);
    const name = "Jake";
    const nameInput = screen.getByLabelText("Name");
    const submitButton = screen.getByText("Submit");

    await user.clear(nameInput);
    await user.click(submitButton);

    expect(onSubmitMock).not.toHaveBeenCalledOnce();

    await user.type(nameInput, name);
    await user.click(submitButton);

    expect(onSubmitMock).toHaveBeenCalledWith(name);
  });
});
