# UseState

State is something which changes overtime and when it changes we need to rerender the component so that the change is updated in the UI. useState() hook allows us to set a state and define a setter function which can update the state value and re-render the component.

```JSX
const [name, setName] = useState("John Doe");
```

**Default Setter function vs Value**

If a value is passed to a setter in useState hook through a function return, this function will be executed everytime the component re-renders which can reduce the performance of the app if the function is question is very slow.
```JSX
const slowFunction = () => {
  // Very slow function
  return "John Doe";
}

function App() {
  const [name, setName] = useState(slowFunction());
}
```
If instead a function is passed in the setter the function will only execute on the initial page load, and will not run on component re-render.

```JSX
function App() {
  const [name, setName] = useState(slowFunction);
}
```

**State update based on previous value**

The state update, using the setSetter function, updates the variable when the component is re-renders. Hence if we use the setter function to update the state based on prev value we should use a callback instead of directly calling the state variable.

```JSX
setCount((oldCount) => {
      return oldCount + 1;
});
```

**Using Object as a State**

when using object as a state all the properties should be present in the setter function along with the updated property as this function will replace the whole state with the value passed in the setter function. 
