export const sum = (a, b) => {
  return a + b;
};

export const delayedFunction = (cb) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cb());
    }, 1000);
  });
};
