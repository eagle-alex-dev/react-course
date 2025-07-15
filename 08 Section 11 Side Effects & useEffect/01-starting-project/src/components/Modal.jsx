import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ open, onClose, children }) {
  const dialog = useRef();

  // when this component is executed for the first time, the dialog element
  // has not been associated with the ref yet. It causes the functions
  // showModal and close to be undefined
  // so we use useEffect to sinchronize the code to be executed after the component
  // has been completely rendered
  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]); // this function needs dependencies...
  // end will run again only if dependencies change

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {open ? children : null}
    </dialog>,
    document.getElementById("modal")
  );
}
