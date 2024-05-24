# Typescript

## Prop types

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

## State types

If a default value is added while creating a new state, typescript will assume the value of the state is of that type. If nothing is present it will assume the type of undefined.
We need to specify the type if we are passing no default value as such-

```JSX
const [value, setValue] = useState<string>();
const [valueArr, setValueArr] = useState<string[]>();
```

This will add the type string | undefined for first value variable, as we are having no default value it will add undefined to the mix.

## Ref types

A ref must always be null or an ref object.
If we pass null to useRef it makes the object readonly, i.e. non mutable. Hence it should only be used when referencing HTML elements.

```JSX
const inputRef = useRef<HTMLInputElement>(null);
inputRef.current = 1; \\ Will not work.
```

If we want to update the ref value we need to define it with generic such as

```JSX
const value = useRef<number>();
value.current = 10; \\ Will work
```

## Reducer

Works same way as others. Few notes -

1. Always define a default in the switch case which returns the state
2. To create type of action use followning:

```JSX
type Action =
  | {
      type: "INCREMENT";
      increaseBy: number;
    }
  | {
      type: "DECREMENT";
      decreaseBy: number;
    };
```

This means action can be either of 2 types and each type will have seperate property for action

## Context types

By default createContext function expects an argument which defines the default context. If we don't want to pass any default context use null.
And we need to declare the type as following

```JSX
export const Context = createContext<ContextType | null>(null);
```

We will face an error while using this context in child component as it can be null. To fix that we can just do a null check like following

```JSX
export const getUserContext = () => {
  const userContext = useContext(Context);
  if (userContext === null) {
    throw Error("Users are null");
  }

  return userContext;
};
```

## Generic type

Refer to examples in ChildGenericExample.tsx
