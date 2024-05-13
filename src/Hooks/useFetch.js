import { useEffect, useState } from "react";

export default function useFetch(url, options) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const rando = Math.floor(Math.random() * 100);
    console.log("mounting " + rando);
    setLoading(true);
    setData(undefined);
    setError(false);

    const controller = new AbortController();

    fetch(url, { signal: controller.signal, ...options })
      .then((response) => {
        return response.json();
      })
      .then((data) => setData(data))
      .catch((e) => {
        console.log("caught " + rando);
        if (e.name === "AbortError") return;
        setError(true);
      })
      .finally(() => {
        if (controller.signal.aborted) return;
        setLoading(false);
      });

    return () => {
      // This abort will abort the running fetch request and directly go to catch block, then a new render happens
      console.log("unmounting " + rando);
      controller.abort();
    };
  }, [url]);

  return {
    data,
    isLoading,
    isError,
  };
}
