# Testing

Using Vitest

## Fundamentals

1. Setup the vite.config.js with the test setup and update package.json to run tests
2. Create test for any file.js by adding file.test.js in the same location.
3. We can run different assertions using expect function from vitest.
4. use beforEach and afterEach to run piece of code/cleanup after every test

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
