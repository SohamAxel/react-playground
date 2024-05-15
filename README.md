# Advanced Stateful Components

## useReducer HOOK

This hook is used when we want to manage multiple states that have some sort of dependencies among them and we have specific actions defined where these dependent states changes.

```JSX
  const [count, dispatch] = useReducer(reducer, initialValue);
```

We can even pass a function if some slow computation is required on initial value, and this function will execute once on first render.

```JSX
const [count, dispatch] = useReducer(
    reducer,
    initialValue,
    (initialValue) => {
      // Very slow function
      return initialValue + 1;
    }
  );
```

**reducer**
reducer is a callback function that takes in 2 parameter, 1. current state and 2. action. The action parameter is the exact object which we pass in the dispatch() call. This reducer returns the new state which completely replaces the old state and re-renders the component.

```JSX
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return state + 1;
    case ACTIONS.DECREMENT:
      return state - 1;
    case ACTIONS.RESET:
      return action.payload.value;
    case ACTIONS.INCREMENT_BY:
      return state + action.payload.value;
    default:
      return state;
  }
};
```

Useage -

```JSX
dispatch({ type: ACTIONS.INCREMENT_BY, payload: { value: 5 } })
```

_The type and payload attributes in the object is purely personal preferance and the object can have any data which will be need to determine the next state_

## useContext hook

In a scenario where a state is defined in a parent component and the state needs to change way down in a grand child equivant components or multiple components down the nested components, it quickly gets tidious to send the state data into child components as props. It introduces an issue called _prop drilling_ i.e. many in between child components might not need the state data but we have to send it to these components just to pass it to the next child component which needs the state.
Hence to resolve this issue, we use the function createContext in parent and the hook useContext in child or grandchild.

**createContext**
This fucntion is used to create the context and pass in the values which will be available to all child components of the parent component which is wrapped by this context.

```JSX
export const ThemeContext = createContext();

<ThemeContext.Provider value={{ isDarkMode, setDarkMode }}>
  <ContextChild />
</ThemeContext.Provider>
```

**useContext**
In which ever child component we need the values we just need to use the useContext hook to access the value passed from the parent component

```JSX
const { isDarkMode, setDarkMode } = useContext(ThemeContext);
```
