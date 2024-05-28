import { act, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { useLocalStorage } from "./useLocalStorage";

describe("hook_useLocalStorage", () => {
  function renderLocalStorageHook(key, initialValue) {
    return renderHook(
      ({ key, initialValue }) => useLocalStorage(key, initialValue),
      {
        initialProps: { key, initialValue },
      }
    );
  }

  afterEach(() => {
    localStorage.clear();
  });

  it("Ensure the initial value passed to the useLocalStorage hook is stored in localStorage as value", () => {
    const LOCAL_KEY = "MY_KEY";
    const initialValue = "initial";
    const { result } = renderLocalStorageHook(LOCAL_KEY, initialValue);

    expect(result.current[0]).toBe(initialValue);
    expect(localStorage.getItem(LOCAL_KEY)).toBe(JSON.stringify(initialValue));
  });

  it("Ensure the initial value passed to the useLocalStorage hook is stored in localStorage as function", () => {
    const LOCAL_KEY = "MY_KEY";
    const initialValue2 = "initial_test_2";
    const { result } = renderLocalStorageHook(LOCAL_KEY, () => initialValue2);

    expect(result.current[0]).toBe(initialValue2);
    expect(localStorage.getItem(LOCAL_KEY)).toBe(JSON.stringify(initialValue2));
  });

  it("Ensure localStorage is updated whenever setValue is called", () => {
    const LOCAL_KEY = "MY_KEY";
    const initialValue2 = "initial_test_2";
    const { result } = renderLocalStorageHook(LOCAL_KEY, () => initialValue2);
    const newValue = "initial_test_updated";

    act(() => result.current[1](newValue));
    expect(result.current[0]).toBe(newValue);
    expect(localStorage.getItem(LOCAL_KEY)).toBe(JSON.stringify(newValue));
  });

  it("Ensure localStorage is cleared whenever setValue is called with undefined", () => {
    const LOCAL_KEY = "MY_KEY";
    const initialValue2 = "initial_test_2";
    const { result } = renderLocalStorageHook(LOCAL_KEY, () => initialValue2);
    const newValue = undefined;

    expect(result.current[0]).toBe(initialValue2);
    act(() => result.current[1](newValue));
    expect(localStorage.getItem(LOCAL_KEY)).toBeNull();
  });

  it("Ensure useLocalStorage uses the value from localStorage if it exists instead of the initial value passed to useLocalStorage", () => {
    const LOCAL_KEY = "MY_KEY";
    const initialValue1 = "initial_test_1";
    const initialValue2 = "initial_test_2";

    localStorage.setItem(LOCAL_KEY, JSON.stringify(initialValue1));
    let { result } = renderLocalStorageHook(LOCAL_KEY, initialValue2);

    expect(result.current[0]).toBe(initialValue1);
    expect(localStorage.getItem(LOCAL_KEY)).toBe(JSON.stringify(initialValue1));
  });
});
