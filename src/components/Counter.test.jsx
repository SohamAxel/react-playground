import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";

describe("Counter Component", () => {
  it("should render the Counter component", () => {
    render(<Counter initialCount={3} />);
    expect(screen.getByTestId("count")).toBeInTheDocument();
  });

  it("should increment/decrement upon +/- button click", async () => {
    const user = userEvent.setup();
    render(<Counter initialCount={0} />);
    const plusButton = screen.getByText("+");
    const minusButton = screen.getByText("-");

    await user.click(plusButton);
    expect(screen.getByTestId("count")).toBeInTheDocument();
    await user.click(minusButton);
    expect(screen.getByTestId("count")).toBeInTheDocument();
  });
});
