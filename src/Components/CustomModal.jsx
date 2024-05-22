import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";

const CustomModal = () => {
  const [ishidden, setHidden] = useState(true);
  const [isDialoghidden, setDialogHidden] = useState(true);
  // throw Error("Tst error");
  return (
    <>
      <button onClick={() => setHidden(false)}>Show Modal</button>
      <button onClick={() => setDialogHidden(false)}>Show Dailog Modal</button>
      <CustomModalDialog
        ishidden={ishidden}
        onModalClose={() => setHidden(true)}
      >
        <p>This is custom modal</p>
      </CustomModalDialog>
      <HtmlDialogModal
        ishidden={isDialoghidden}
        onModalClose={() => setDialogHidden(true)}
      >
        <p>This is dialog modal</p>
      </HtmlDialogModal>
    </>
  );
};

const CustomModalDialog = ({ ishidden, onModalClose, children }) => {
  useEffect(() => {
    const escHandler = (e) => {
      if (e.key === "Escape") {
        onModalClose();
      }
    };
    document.addEventListener("keydown", escHandler);

    return () => {
      document.removeEventListener("keydown", escHandler);
    };
  }, [onModalClose]);

  return createPortal(
    <>
      <div hidden={ishidden}>
        <div id="modal-body">{children}</div>
        <button id="close" onClick={onModalClose}>
          Close
        </button>
      </div>
    </>,
    document.querySelector("#modals")
  );
};

const HtmlDialogModal = ({ ishidden, onModalClose, children }) => {
  const dialogRef = useRef();
  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog != null && !ishidden) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [ishidden]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog != null) {
      dialog.addEventListener("close", onModalClose);
    }

    return () => {
      dialog.removeEventListener("close", onModalClose);
    };
  }, [onModalClose]);

  return createPortal(
    <dialog ref={dialogRef}>
      {children}
      <button onClick={onModalClose}>Close</button>
    </dialog>,
    document.querySelector("#modals")
  );
};

export default CustomModal;
