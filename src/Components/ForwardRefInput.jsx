import React, { forwardRef } from "react";

const InnerComponent = (props, ref) => {
  return <input type="text" ref={ref} />;
};

export const ForwardRefInput = forwardRef(InnerComponent);
