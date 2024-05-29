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

# Reduce useEffect usage

# Controlled vs Uncontrolled components

Components which are being controlled by outside state are Controlled Components and if the component handles the state and changes in itself it is unControlled Component.
Example: Accordian can be uncontrolled components, expand and collapse can be handled inside the component itself. However we might need a feature like when one acordian is expanded, collapse all other accordians. To achieve this we need to make the Accordian component a controlled Component.
It depends on the situation to use which over other.

# Compound Component

Breaking components into sections.
Let's say we have a component like -

```JSX
const Card = ({ header, footer, children }: Card) => {
  return (
    <>
      <div className="card">
        {header && <div className="card-header">{header}</div>}
        <div className="card-header">{children}</div>
        {footer && <div className="card-header">{footer}</div>}
      </div>
    </>
  );
};
```

If each of the components(header, body and footer) were complex it would be very difficult to read. Not to mention, whereever the card is used the code looks messy.

```JSX
<Card header={<>Header</>} footer={<>Footer</>}>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
  facilis natus perspiciatis accusamus amet, odio possimus quisquam
  dignissimos laudantium quis nisi delectus, dicta beatae optio doloremque
  suscipit alias officia fugit.
</Card>
```

We can fix this by separating each components. Example in Card.tsx
