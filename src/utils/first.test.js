import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { delayedFunction, sum } from "./first";

describe("first", () => {
  it("Should add the numbers", () => {
    const a = 1;
    const b = 2;
    expect(sum(a, b)).toBe(a + b);
  });

  it("Should call function after delay - 1", async () => {
    const func = vi.fn();
    await delayedFunction(func);
    expect(func).toHaveBeenCalledOnce();
    expect(func).toHaveBeenCalledWith();
  });
});

describe("delayedfunctions", () => {
  beforeEach(() => {
    // to not wait for delay.
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });
  it("Should call function after delay - 2", () => {
    const func = vi.fn();
    delayedFunction(func);
    vi.runAllTimers();
    expect(func).toHaveBeenCalledOnce();
    expect(func).toHaveBeenCalledWith();
  });
});
