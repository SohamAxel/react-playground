# Notes

1. Even if we are not printing any state in a component, if the state updates the component rerenders. But virtual dom will not update the actual DOM as nothing changed

2. UseCallback is used to cache the function. Take the example from HookUseCallback.jsx file.
   As myFunction has a usecallback dependency on parentState, so the console.log output will remain same until the parentState changes. We can verify that from line 14 and line 15.

3. Even it may seem wrapping every component in React.memo will increase performance, it is not the case in certain scenarios which will add an extra overhead. a. If the component is already lightweight it will add an extra overhead. b. If the props on the component frequently changes c. If the component relies on internal state rather than external props.
