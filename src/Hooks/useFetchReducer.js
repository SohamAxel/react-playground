import { useEffect, useReducer } from "react";

const ACTIONS = {
  FETCH_START: "FETCH_START",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR: "FETCH_ERROR",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.FETCH_START:
      return {
        isLoading: true,
        isError: false,
      };
    case ACTIONS.FETCH_SUCCESS:
      return {
        data: payload.value,
        isLoading: false,
        isError: false,
      };
    case ACTIONS.FETCH_ERROR:
      return {
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default function useFetch(url, options) {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: true,
    isError: false,
  });

  useEffect(() => {
    dispatch({ type: ACTIONS.FETCH_START });

    const controller = new AbortController();

    fetch(url, { signal: controller.signal, ...options })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: { value: data } });
      })
      .catch((e) => {
        console.log("caught " + rando);
        if (e.name === "AbortError") return;
        dispatch({ type: ACTIONS.FETCH_ERROR });
      });

    return () => {
      // This abort will abort the running fetch request and directly go to catch block, then a new render happens
      console.log("unmounting " + rando);
      controller.abort();
    };
  }, [url]);

  return state;
}
