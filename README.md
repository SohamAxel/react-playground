# Basic Hooks

## Hook Rules

1. Only use in functional component and custom hooks. Hooks cannot be called in conditional statement, loop, blocks or other functions.
2. It is recommended to add all hooks at top, and make sure for every re-render all hooks are call/definition.(i.e. don't render hooks conditionally). As React keeps all the hook calls in order and remember on every re-render, if any mismatch happen such as any hook is not being called or more hook is being called for a re-render (this happens if hook is called conditionally) the app breaks.

## More Hooks

### useRef

Used to store data as a variable which does not re-render the component when the value changes. It can also be used to store reference of an element in DOM.

**Global variable vs useRef**
The advantage of using a useRef over a global variable is, the global variable is a shared variable among all the components through out the project. Whereas useRef is maintained individually for each instance of a component and works as an isolated varible tracking changes for only a specific instance.

### useMemo

useMemo hook is used for memoization value, it works based on a value like useEffect, if this value does not change the callback in the hook does not run and uses cached data from the prev call of the callback. This hook is used for performance gain. It should not be over utilized, i.e. using this hook for fast processess, as it can add an extra overhead and slow down the fast process.

### useCallback

useCallback is used to memoizing function. We can use this to create a callback function with multiple dependency, which will re-create the callback whenever the dependency change, and if the dependency does not change the function will not be recreated. We can use this function name as a dependency in other hooks which will indirectly have the callback's dependency.
