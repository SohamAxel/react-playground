# Testing

Using Vitest

## Fundamentals

1. Setup the vite.config.js with the test setup and update package.json to run tests
2. Create test for any file.js by adding file.test.js in the same location.
3. We can run different assertions using expect function from vitest.
4. use beforEach and afterEach to run piece of code/cleanup after every test

## Get DOM elements

**getByText**
This will search the screen for element with that specific text

**getByTestId**
This will search the screen for element which matches with data-testId attribute

**queryByTest**
If the query fails it will return null and not stop other test with error as get does.

**findByTest**
This does an asynchronous check. If an element is having animations it takes a while for the element to load. This will constantly try to find an element and timeouts if it is not found.

**getByText**
Gets all the elements having the text. This works with query and find

## assertion

**toBe**
referencial check, check if both reference is same in case or object or value in case of literals.

**toEqual**
value check

**not**
add .not before any assertion to negate the condition
Eg. .not.toBe, .not.toEqual

**toHaveBeenCalledOnce**
It checks if the function has been called once
eg. expect(func).toHaveBeenCalledOnce()

**toBeInTheDocument**
check if dom element is present in document
