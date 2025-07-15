import { forwardRef, useImperativeHandle, useRef } from "react";

// para enviar um ref de um componente para o pai
// é necessário escrever o componente dessa forma

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
  // para desacoplar o dialog desse componente de qualquer outro dialog
  // em qualquer outro lugar da aplicação, usa-se o useImperativeHandle() hook
  const dialogRef = useRef();

  // useImperativeHandle retorna um objeto com as funções customizadas
  // que são expostas para uso comum na aplicação, generalizando o componente
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal(); // built-in method of dialog, to dim background
      },
    };
  });

  return (
    <dialog ref={dialogRef} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
