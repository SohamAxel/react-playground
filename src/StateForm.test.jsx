import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { StateForm } from "./StateForm";
import { RefForm } from "./RefForm";
import userEvent from "@testing-library/user-event";

describe("StateForm", () => {
  it("error messages do not show up when submitting a valid form", async () => {
    const onSubmit = vi.fn();
    const user = userEvent.setup();
    render(<RefForm onSubmit={onSubmit} />);
    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const submitButton = screen.getByText("Submit");
    const email = "abc@webdevsimplified.com";
    const password = "qwertyuiop1P";

    await user.type(emailInput, email);
    await user.type(passwordInput, password);
    await user.click(submitButton);

    expect(onSubmit).toHaveBeenCalledOnce();
    expect(onSubmit).toHaveBeenCalledWith({ email, password });
  });

  it("Ensure error messages show up when submitting an invalid form", async () => {
    const onSubmit = vi.fn();
    const user = userEvent.setup();
    render(<StateForm onSubmit={onSubmit} />);
    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const submitButton = screen.getByText("Submit");
    const email = "abc@anc";
    const password = "qwer1P";

    await user.type(emailInput, email);
    await user.type(passwordInput, password);
    await user.click(submitButton);

    expect(onSubmit).not.toHaveBeenCalledOnce();
    // Can also be achieved using data-testid.
    const errorElement = screen.getByText(
      "Must end with @webdevsimplified.com"
    );
    expect(errorElement).toBeInTheDocument();
  });

  // @TODO: same for password validation.

  it("Ensure the error messages update when the user changes the input values after the first submit.", async () => {
    const onSubmit = vi.fn();
    const user = userEvent.setup();
    render(<StateForm onSubmit={onSubmit} />);
    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const submitButton = screen.getByText("Submit");
    const email = "abc@webdevsimplified.com";
    const password = "qwertyuiop1P";

    await user.type(emailInput, email);
    await user.type(passwordInput, password);
    await user.click(submitButton);

    expect(onSubmit).toHaveBeenCalledOnce();
    expect(onSubmit).toHaveBeenCalledWith({ email, password });

    const newPassword = "qwert1P";

    await user.type(emailInput, email);
    await user.clear(passwordInput);
    await user.type(passwordInput, newPassword);
    await user.click(submitButton);

    const errorElement = screen.getByText("Must be at least 10 characters");
    expect(errorElement).toBeInTheDocument();
  });
});
