import { renderHook, act } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useCount } from "./useCount";

describe("hook_useCount", () => {
  it("increment/decrement using custom cout hook", () => {
    const { result } = renderHook(
      ({ initialCount }) => useCount(initialCount),
      {
        initialProps: { initialCount: 0 },
      }
    );
    expect(result.current.count).toBe(0);

    act(() => result.current.increment());
    expect(result.current.count).toBe(1);

    act(() => result.current.decrement());
    expect(result.current.count).toBe(0);
  });
});
