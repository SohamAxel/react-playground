# Component Lifecycle

## Virtual Dom

React has the Virtual DOM which is a recreation of the normal DOM. This means that when an element changes in the Virtual DOM React knows which element that is in the actual DOM and is able to update just that part of the DOM and also only update the things that changed with that element. It happens in 3 steps - 
1. Executes the jsx code
2. Compare the old version of DOM with new version of DOM, to determine what have changed.
3. Make updates in real DOM.

## Component Lifecycle

Component lifecycle is broken into 3 part -
1. Mounted - The component is mounted in the page.
2. update/re-render - The component is re-rendered either by changing the state of its own or parent component.
3. Un-mounted - The component is removed from the page.

### Functional Componet

useEffect() hook is used to manage data in different parts of the lifecycle in a component. 2 parts of useEffect hook
1. Callback - callback when components re-renders.
2. Dependency array - execute callback based on depending data.

How to use the hook -

1. Whenever component re-renders
```JSX
  useEffect(() => {
    console.log("Render");
  });
```

2. When the component mounts and unmounts(the return callback). empty array in dependency array parameter means callback will execute on component mount and return call back will execute on unmount. When the useState reruns based on the dependency, the return function runs first and then the actual function.
```JSX
  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component unmounted");
    };
  }, []);
```

3. When ever component rerenders due to any of the following data
```JSX
  useEffect(() => {
    console.log(`My name is ${name} and I am ${age} years old`);
  }, [name, age]);
```

**Note: useEffect runs after the component is rendered in the component.**

### Class Component
Hooks are not allowed in class components. The lifecycle parts in class component is managed using following class methods
1. componentDidUpdate
2. componentDidMount
3. componentWillUnmount
