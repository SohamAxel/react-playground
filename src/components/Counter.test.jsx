import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import Counter from "./Counter";

it("should render the Counter component", () => {
  render(<Counter />);
  screen.debug();

  expect(0).toBe(0);
});
