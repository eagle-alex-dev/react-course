import { useRef } from "react";
import CustomInput from "./CustomInput";
import Modal from "./Modal";

export default function NewProject({ onSave, onCancel }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  const modalRef = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modalRef.current.open();
      return;
    }

    onSave({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Okay">
        <h2 className="font-bold text-3xl text-stone-700 my-4">
          Invalid Input
        </h2>
        <p className="text-stone-600 mb-4">
          Oops... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for each of the input
          fields.
        </p>
      </Modal>
      <div className="w-[35rem] mt-14">
        <menu className="flex items-center justify-end gap-4 mt-4 px-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-xs md:text-base rounded-md hover:bg-red-400 hover:text-stone-100"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-500 text-stone-100 hover:bg-stone-700 hover:text-stone-100"
          >
            Save
          </button>
        </menu>
        <div className="flex flex-col gap-1 px-4 pt-16">
          <CustomInput ref={titleRef} label="title" type="text" />
          <CustomInput ref={descriptionRef} label="description" isTextArea />
          <CustomInput ref={dueDateRef} label="due date" type="date" />
        </div>
      </div>
    </>
  );
}
