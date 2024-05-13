# Advanced Components

## Condtional Rendering

**using Short circuting**

```JSX
{A && B}
```

In javascript the above statement(Considering A and B are booleans) works in the following way,

1. If A is true then it checks for the B value, if its true, result is true
2. If A is false then it will not check for B and return false, and false renders nothing in jsx (as we are using and statement)

We can utilize this to our advantage like this

```JSX
{ A == 25 && (<h1>"I am executed"</h1>)}
```

Hence, as per js if the value of A is true, it will check for B, i.e. the h1 tag, and it will print that.
Same we can do with OR operator (||),

```JSX
{A || B}
```

if A is present it will print A, if A is falsy it will print B.

**using Ternary Operator**

one line if else

```JSX
  { A == 25 ? "I am 25" : "I am not 25"}
```

## Rendering Lists

To print list use map function in javascript with a key. Key is necessary as React uses it as a identifier for each List element.

## Fragments

To remove element dependency for react components. Every react component must have a single parent, if we use div or any other element as parent, it might create unnecessary hierarchy in the DOM which might not be required. Hence if we use fragments all the elements inside the component will render in the dom as siblings, without any wrapping div.

```JSX
  <>
    <h1>Hello</h1>
    <p>World</p>
  <>
```

If we want to add key to a list render, where the elements is being rendered as fragments use React.Fragment instead of <>

```JSX
  items.map(item => (
    <React.Fragment key={item.id}>
      <h1>Hello</h1>
      <p>World</p>
    </React.Fragment>
  ))
```

## Custom HTML

```JSX
const CUSTOM_HTML = `
  <h1>Hi</h1>
`

function App() { return dangerouslySetInnerHTML={{ _html: CUSTOM_HTML }} }
```

This should almost never be used as it has security implications. If a user input is present here, outsiders can easily inject scripts and hack the site(cross-site scripting)
