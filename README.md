# Advanced React Concepts

## Portals

We can create portal elements in components which can be appended to any part of the DOM using a query selector. In general and event listner in child component bubbles up to the html through its parents, how ever while using portals it will bubble upto the parent element present in the component this portal is added.
Example in PortalComponent.jsx file

## forward Ref

If we pass a ref (using useRef()) to a custom component as props this will not work. In order to make it work we need to wrap the custom component in a function provided by react called forwardRef

## Error Boundaries

By default during redering if React encounters an error it shows a WSOD page which is not user friendly. To counter this, we need to wrap Components in ErrorBoundary component, hence whenever any error occurs in the component it will tigger the first ErrorBoundary wrapping the component and show a fallback element and keep rest of the sibling/parent components intact.
This errorBoundary component must be a class component to work.
This boundary only work while react renders a component and not work for asyc functions like api call, timeout, e.t.c

## Advanced Key Concept

If two same component is being rendered it must have a key property which will make them unique

```JSX
{
  isDogs ?
  (<>
  <p>Number of Dogs</p>
  <Counter >
  </>)
  :
  (<>
  <p>Number of Cats</p>
  <Counter >
  </>)
}
```

Even though we are unloading one counter and rendering other React virtual dom will not unload the counter as the underlying elements are same as React's virtual DOM works based on changed elements. Hence to have a seperate identity of each counter use Key

```JSX
<Counter key="dogs">
<Counter key="cats">
```

## Event Capturing

In js event's goes through 2 phases the Capture phase (top to bottom) and the bubble phase (bottom to up). By default all event are Bubble phase and in order to add capture phase event use Capture at end of event. Eg. onClick and onClickCapture
Click the child p in each div to verify the behavior in EventCapturing.jsx.

# Advanced Hooks

## useLayoutEffect

The useEffect hook runs only after the initial component is renderer. UseLayoutEffect runs before the component is rendered. This hook runs all the changes synchronously before rendering the element and hence should not be used to perform complex or slow action unless absolutely necessary. For slow, async function useEffect hook must be used.

## useId

This hook returns unique id to use in diffent html element ids. If we need to use id for multiple element use prefix string rather than calling a new useId hook

```JSX
const id = useId();
<div id={`${id}-first`}></div>
<div id={`${id}-second`}></div>
```

## useImperativeHandle

useImperativeHandle hook can be used to alter the ref that is passed down from parent, it can be used to just expose certain part of an element rather than the full element, or may be target 2 element in the single ref. Not recommeded unless absolutely necessary.

## useCallback as Ref

We can add functions in the ref attribute of an html element. This function will get called in 3 scenarios

1. When element having the ref mounts. (Example in CallbackRef.jsx)
1. When element having the ref unmounts. (Example in CallbackRef.jsx)
1. When element having the ref changes. (Example in CallbackRefElementChanges.jsx)
