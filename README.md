# Performance

## React.memo

Whenever a parent component re-renders, it re-renders all of its child component. Even if the child component has no dependency with the parent component, in this case React finds all the element in child component of Virtual Dom same as real DOM and it does not changes. But if there are any computation happening that might take a while it will slow down the render.
To fix this we can use React.memo. Using this we can say if the props of the component does not change or depend on the parent component do not re-render that component.

```JSX
const Counter = memo(Component)
```

We can also pass in a function which will take in prev and new props, and we can do custom comparision and determine if the component should re-render or not. If possible use the prev default behavior.

```JSX
const Counter = memo(Component, (prevProps, newProps) => {
  // return true // Props are same don't rerender
  // return false // Props are not same do rerender
  return prevProps === newProps;
});
```

React.memo does not work with class components, instead the class component needs to extend the PureComponent class. And we need to use the shouldComponentUpdate(nextProp, nextState) to define if the props/state is same as prev.

## Handling Large list of data

1. Memoize the list data call
2. Use Pagination
3. Infinite scroll
4. React window library or TanStack virtual library - only render list items that is visible
