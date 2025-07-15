import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

// para enviar um ref de um componente para o pai
// é necessário escrever o componente dessa forma

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref
) {
  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

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

  // createPortal é uma feature que transporta esse código jsx para outro local
  // na estrutura HTML, para manter o desacoplamento e melhor gerenciamento de
  // estilização, pois podem haver problemas de estilo quando o componente fica em
  // camadas mais internas da estrutura html
  return createPortal(
    <dialog ref={dialogRef} className="result-modal" onClose={onReset}>
      {userLost && <h2>You lost</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    // nome (id) do componente para onde eu quero transportar o meu componente
    // esse 'modal' é um div no body da aplicação, localizado no arquivo index.html
    document.getElementById("modal")
  );
});

export default ResultModal;
