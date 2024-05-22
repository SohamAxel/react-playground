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
