# Advanced React Concepts

## Portals

We can create portal elements in components which can be appended to any part of the DOM using a query selector. In general and event listner in child component bubbles up to the html through its parents, how ever while using portals it will bubble upto the parent element present in the component this portal is added.
Example in PortalComponent.jsx file

## forward Ref

If we pass a ref (using useRef()) to a custom component as props this will not work. In order to make it work we need to wrap the custom component in a function provided by react called forwardRef
