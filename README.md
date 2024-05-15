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

## Derived State

We should not create a state which is derived from another state, as it can introduce unnecassary dependency which might not work. In case we want to update the 2nd state too when the 1st state changes, it will not work with derived state. To resolve this rather than using a new state, manipulate the actual state for the desired output.

## Environment Variables

To store environment variables in vite project we use _.env_ file in the root directory. We can suffic it with development, production to have specific evironment variables for specific instances.

.env.development.local
.env.production.local

vite adds .local in gitignore so these files will not get pushed in git.

In vite, we need to use **VITE\_** prefix to the envionment variables in order to expose it to our application, else it will not be exposed.

```
VITE_URL = www.example.com
PASSWORD = password123
```

To get env value in app use

```JSX
console.log(import.meta.env.VITE_URL);
```

For the above variables only VITE_URL will return value, PASSWORD will return null.
