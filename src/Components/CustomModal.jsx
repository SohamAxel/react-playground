import React, { useState } from "react";
import { createPortal } from "react-dom";

const CustomModal = () => {
  const [ishidden, setHidden] = useState(true);
  return (
    <>
      <button onClick={() => setHidden((prev) => !prev)}>Show Modal</button>
      <CustomModalDialog ishidden={ishidden} />
    </>
  );
};

const CustomModalDialog = ({ ishidden }) => {
  return createPortal(
    <>
      <div hidden={ishidden}>
        <p>THis is custom modal</p>
      </div>
    </>,
    document.querySelector("#modals")
  );
};

export default CustomModal;
