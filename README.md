# Clean Code.

## Scenario 1

**Problem**: We have a _Button_ component which renders a button with all button propertries. We want the same button properties to be added to a anchor tag in order to show the link as button

**Solution**

We can do the following

```JSX
<Button size="sm" disabled={true}>Click Me</Button>
<Button size="sm" disabled={true}>
  <a href="/" >
    Home
  </a>
</Button>
```

This is not the ideal way as it loses its accessibility aspect. Instead we can use the example in Button.tsx file.

## Scenario 2

**Problem**: When we define a new Context using the createContext hook, we have to initialize it with null. Hence even after creating the Context provider with value when we will try to use these context variables in child component, we have to make sure the variable value is not null as it is defined as typeContext | null.

**Solution**

To fix this repeatative codes we can create a custom hook which will return the value through the useContext hook after null checking. Follow the example in useContentext function in CounterContext.tsx
It is also generally a good idea to have the Context code and the provider in a seperate file as a component and use that component.

**Improve performance of useContext**
In the current implemtation we can see CounterUpdate and CounterDisplay has buttons to increment/decrement and display count respectively. If we inspect the profile after few actions, even though technically no change is happening in the CounterUpdate component, it still reruns when the Context changes.
We can improve this by spliting the count and dispatch in 2 seperate contexts and wrapping the children as

```JSX
<dispathContext><valueContext>{children}</dispathContext></valueContext>
```

This will only update the value Context when the count changes
