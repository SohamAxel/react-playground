# Async React

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
