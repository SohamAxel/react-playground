import React from "react";
import { createPortal } from "react-dom";

const PortalComponent = () => {
  return (
    <div>
      PortalComponent
      <AlertComponent />
    </div>
  );
};

const AlertComponent = () => {
  return createPortal(
    <>
      <h1>Alert me!</h1>
    </>,
    document.querySelector("#alert-messages")
  );
};
export default PortalComponent;
