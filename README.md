# UseState

State is something which changes overtime and when it changes we need to rerender the component so that the change is updated in the UI.

**Notes**
1. States are immutable, hence we need to return a new state and not overwrite the same one.
2. Change in state re-render's the component
3. If the new state value depends on prev state value, callback function must be used in setState function.

## Function based Component
useState() hook allows us to set a state and define a setter function which can update the state value and re-render the component.

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
If instead a function is passed in the setter the function will only execute on the initial page load, and will not run on every component re-render.

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

## Class based Component

Class based components handle state internally using the constructor. We set object in this.state property containg all the data we want handled by state. And the setter function this.setState() is called by passing only the specific data of the object we want to update.

```JSX
  constructor(props) {
    super(props);

    this.state = {
      name: "John Doe",
      age: "30"
    }
  }

  handleClick() {
    this.setState({name: "Jane Doe"})
  }
```

**Note**
If a slow function is passed in the default setter in constructor, this will get executed only once and not on every component re-render.

As the state is handled in class internally using "this", it's important we don't lose the class "this" binding while creating new methods/functions to handle action. We can ensure it is not lost by manually binding class "this" to the method/function or we can use arrowfunction inside a method which has the class "this" binding.

## General

Direct state manupulation is not allowed as state are immutable.

The following won't work -
```JSX
const addElementAtStart = (element) => {
  setArray(oldArray => {
    oldArray.push(element)
    return oldArray
  })
}
```
This is will work -
```JSX
const addElementAtStart = (element) => {
  setArray(oldArray => {
    return [
      element,
      ...oldArray
    ]
  })
}
```