import { useEffect } from "react";
import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [data, setData] = useState(() => {
    const localValue = localStorage.getItem(key);
    if (localValue == null) {
      if (typeof initialValue == "function") {
        return initialValue();
      } else {
        return initialValue;
      }
    } else {
      return JSON.parse(localValue);
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data, key]);

  return [data, setData];
}
