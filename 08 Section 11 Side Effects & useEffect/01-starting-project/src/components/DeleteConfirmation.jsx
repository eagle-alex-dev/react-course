import { useEffect } from "react";
import ProgressBar from "./ProgressBar";

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  // this is a side effect
  // if I open the dialog and click on No, the timer is not reset
  // it still keeps running on background
  useEffect(() => {
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);

    // useEffect accepts returning a function that runs right before
    // this component is removed from the DOM
    return () => {
      clearTimeout(timer);
    };
  }, [onConfirm]); // problem using functions as dependencies is because
  // functions will always be changed, will be different from the previous one
  // and can cause an infinite loop
  // we should use the useCallback hook to avoi that the function that updates
  // the state at App() does not re-execute again when useEffect compares the function here

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar timer={TIMER} />
    </div>
  );
}
