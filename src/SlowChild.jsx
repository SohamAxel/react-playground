import React from "react";

const SlowChild = ({ value }) => {
  const limit = value;

  const getElements = () => {
    let elements = [];
    for (let i = 0; i < limit; i++) {
      elements.push(
        <p key={i} hidden={true}>
          SPAM
        </p>
      );
    }
    return elements;
  };

  return (
    <>
      <div>SlowChild - {value}</div>
      {getElements()}
    </>
  );
};

export default SlowChild;
