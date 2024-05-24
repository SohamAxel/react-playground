# Typescript

To add types for props the recommended way is to create a type.

```JSX
type ChildProps = {
  name: string;
  age: number;
  children?: ReactNode;
} & ComponentProps<"button">;

const ChildOne = ({ name, age, children }: ChildProps) => {
```

This will add types to the props which typescript will be able to validate during compile time.

**ReactNode**

This type is provided by React library and used for any react component or html element.

**ComponentProps**
This is a method provided by react which allows us to fetch all the prop types of a specific element. Hence the above implementation will add all the types for every type of attribute/prop a normal button supports such as disabled, autofocus, type, etc.
This method also works with custom components.

```JSX
ComponentProps<typeof CustomComponent>
```
