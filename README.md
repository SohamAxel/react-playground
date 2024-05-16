# Routing

## react-router-dom library

This library is used in react to make client side page routing.
Steps to add the router

1. Create a router function defining all the routes.

```JSX
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/store", element: <Store /> },
  { path: "/about", element: <About /> },
]);
```

path defines the url path and the element defines which component to render in that path.

**path**
path defines the url path where element will be rendered.

**element**
Defines which component to render in the path

**loader**
Takes a async function, here we can fetch data from apis or some slow function and pass it as a response, this function will automatically extract the json. We have access to request, param, context in the function.

```JSX
  { path: ":userId", element: <User />,
    loader: async ({ request, params }) => {
      return fetch(`abc.com/${params.userId}`, { signal: request.signal })
    }
  },
```

We can get the data retured by loader in the component defined in element using the _useLoaderData_ hook.

```JSX
  const userData = useLoaderData()
```

**children**
We can nest the paths in order to achieve /team/it/member/1 using the children attribute. This takes an array of path objects

2. Use the router in following way

```JSX
<RouterProvider router={router} />
```

All the components inside this route will have access to route related element to implement different routing functionalities.

**Link**
One such element is Link which we need to use to utilize the client routing.

```JSX
<Link to="/store">Store</Link>
```

to -> we pass the link where we want the user to redirect. This element changes its behaviour based on its value, the defined router and other attributes.

Example Router

```JSX
const router = createBrowserRouter([
  {
    element: <NavbarLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/store", element: <Store /> },
      { path: "/about", element: <About /> },
      {
        path: "/team",
        element: <TeamMemberLayout />,
        children: [
          { index: true, element: <Team /> },
          { path: "pam", element: <TeamMember name="Pam" /> },
          { path: "jim", element: <TeamMember name="Jim" /> },
        ],
      },
    ],
  },
]);
```

1. If "/" is prefixed to the link this acts as an absolute path, i.e. for example // "/team/pam" - https://example.url/team/pam.

   ```JSX
   <Link to="/team/pam">Pam</Link>
   ```

2. if "/" is not prefixed to the link this acts as an relative path, i.e. it will get appended after the the current route from where the component is called. In router this component is a child of /team route, hence the following link will take user to /team/pam

   ```JSX
   <Link to="pam">Pam</Link>
   ```

3. To go back, use ".." and depending on the rel attribute we can define to which route/path this link is relative to.
   default is route.

```JSX
<Link to=".." relative="path">..Route</Link>
```
