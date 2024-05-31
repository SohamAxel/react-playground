# Async React

## React Lazy

Whenever we have some conditional component based on some state or some boolean, React downloads the conditional component even if the component is not used down the line (maybe the condition never met). Hence the user is downloaing this additional resource from the server even though it is not required.
We need to download the file asynchronously when requested. We can achieve it using the following

```JSX
const Comments = () => import("./Comments ");
```

This returns a promise. We can call this function when the component is needed. We can wait for the file the download using react.lazy. We can use it with suspense to have a loading state as such.

```JSX
const Comments = lazy(() => import("./Comments "));

<Suspense fallback={<h1>Loading</h1>}>
  <Comments />
</Suspense>
```

The lazy function expects a return promise which has object like the { default: Component }. So if we want to use unnamed exports we can use as such.

```JSX
const Comments = lazy(() =>
  import("./Comments").then((module) => ({
    default: module.Comments,
  }))
);
```

## Suspense

We can use Suspense for contents which takes some time to load. It has a attribute called fallback which will show until the Component loads. And to handle error, wrap the Suspense in error boundary.

```JSX
<Suspense fallback={<h1>Loading</h1>}>
  <Comments />
</Suspense>
```

If we have multiple async components in a single suspense block it will wait for all the components to load then it will render the components. Ex if we have ComponentA and ComponentB in a single suspense block. ComponentA takes 1s to load and ComponentB takes 5s to load. Suspense will wait for complete 5s and then render both the components. We can counter this by wrapping the components in different Suspense block

## Suspense with react router

We can use the defer function present in react router and use it in the loader function. It expects an object with a property and value should be a promise. We can then wrap our component in Suspense to work like following

```JSX
const loader = ({ request, param }) => {
  // return wait({ data: "Loaded" }, 5000);
  return defer({ dataPromise: wait("Loaded", 1000) });
};

const Posts = () => {
  const { dataPromise } = useLoaderData();

  // return <div>Posts - {data}</div>;
  return (
    <>
      Posts -
      <Suspense fallback={"Loading"}>
        <Await resolve={dataPromise}>
          { data => data}
        </Await>
      </Suspense>
    </>
  );
};
```

We can even use React.lazy load the element while creating the browser router.
Note-While creating a lazy loading component in browser router, we have to keep the component and loader function seperately as while defining the route it will need the loader function hence the loader file will auto download when the RouterProivder loads and if the component is in the same file it will download as well. Hence keep the 2 files seperate

## useDefered hook

This hook will defer the actual value and return the defered value which will act like debounce/throttle strategy. Whenever it will find the value inside the hook changing frequenty it will return the old stale value and when the value is not changing it will return the new value.
This is useful when we are doing some lengthy computation on that value, such that the application does not slow down

## useTransition Hook

We can use this to say any state change is a low priority change and other state change can overwrite this.

```JSX
const [isPending, startTransition] = useTransition()

const handleChangeTab = (tab) => {
    setTransition(() => {
      setTab(tab);
    });
  };
```

Any state update passed in the startTransition function will have a low prioity.
By default if a slow function is running the whole application freezes, this kinda make the component async hence other components will be working when this slow function starts and if the setTab state is changed while the slow function was running, it will stop that and change the tab to latest state.

1. state change must happen immediately inside the setTransition function. The following will not work as state change is not immediate child

```JSX
setTransition(() => {
  setTimeout(() => {
    setTab(tab);
  }, 10)
});
```
