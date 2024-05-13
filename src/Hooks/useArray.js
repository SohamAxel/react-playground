import { useCallback, useState } from "react";

const useArray = (initialValue) => {
  let [array, setArray] = useState(initialValue);

  const push = useCallback((value) => {
    setArray((prevArray) => [...prevArray, value]);
  }, []);

  const replace = useCallback((at, value) => {
    setArray((prevArray) =>
      prevArray.map((item, index) => {
        if (index == at) return value;
        return item;
      })
    );
  }, []);

  const filter = useCallback((condition) => {
    setArray((prevArray) => prevArray.filter(condition));
  }, []);

  const remove = useCallback((at) => {
    setArray((prevArray) => prevArray.filter((item, index) => index != at));
  }, []);

  const clear = useCallback(() => {
    setArray([]);
  }, []);
  const reset = useCallback(() => {
    setArray(initialValue);
  }, [initialValue]);

  return {
    array,
    set: setArray,
    push,
    replace,
    filter,
    remove,
    clear,
    reset,
  };
};

export default useArray;
