import React from "react";

const wait = async (data, delay) => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
};

export default wait;
