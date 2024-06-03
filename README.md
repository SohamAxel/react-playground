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

# Zod Learn

## What is Zod

Zod is a typescript first schema library which provides type safety and validation.

## Fundamentals

Zod provides a z import which we can use for creating schemas.Lets create a object schema which has only one property name of type string

```JSX
const UserSchema = z.object({
  name: z.string(),
  age: z.number().optional()
});

const user = { name: "John" };
const user = { name: 1 };
console.log(UserSchema.parse(user));
console.log(UserSchema.safeParse(user));
```

To make any property optional pass .optional()

We can use the parse and safeParse methods to check if the passed object follows the schema we defined, if not, parse will throw and error preventing the application to render and safeParse will just return an object with a boolean denoting if the validation was successful or not.

We can also easilt create types using this zod Object.

```JSX
type User = z.infer<typeof UserSchema>;
```

## Basic types

### Primitive types

1. string() 2. number() 3. date() 4. boolean() 5. undefined() 6. null() 7. void() 8. any() 9. unknown() 10. never()

## Basic Validations

1. .optional() - to make any property optional
2. .min(number), max(number) - min number of character

```JSX
name: z.string().min(5)
```

3. .gt(number) - greater than
4. .nullable() - can be null
5. .nullish() - can be null or undefined
6. .default() - pass default value for the property
7. .literal() - property has to be the exact value that is passed
8. .enum(["A","B","C"]) - any of the literals in list

## Object type

```JSX
const UserSchema = z.object({
  name: z.string().min(5),
  age: z.number(),
  birthday: z.date(),
  isProgrammer: z.boolean().default(false),
  hobby: z.enum(hobbies),
});

```

1. shape - returns a specific property

```JSX
UserSchema.shape.name
```

2. partial - makes all the property partial

```JSX
UserSchema.partial()
```

3. pick/omit - pick/omit one/multiple property, the schema will only contain those propertirs

```JSX
UserSchema.pick({ name: true})
UserSchema.omit({ name: true})
```

4. deepPartial() - makes even nested properties partial

5. extend() - extend the zod object with other object

```JSX
UserSchema.extend({ email: z.string() })
```

6. merge() - to merge 2 zod objects

```JSX
UserSchema.merge(z.object({ email: z.string()}))
```

7. strict() - any extra property which is not defined in schema and is present in the object we are parsing it will throw error.

8. passthrough() - any extra property which is not defined in schema and is present in the object we are parsing, we will get those properties after parsing. By default parsing strips those extra properties.

## Array Type

1. z.array(z.string()) - array of strings
2. .nonempty() - array cannot be empty
3. .length() - max length
4. z.tuple([z.number(), z.number(), z.number()]) - array will have exactly 3 numbers
5. z.tuple([z.stiring(), z.number()]).rest(z.number()) - any number value is allowed after tuple

## Union Type

z.union([z.string(), z.number()]) - value can be either string or number
z.string().or(z.number()) - same as above
