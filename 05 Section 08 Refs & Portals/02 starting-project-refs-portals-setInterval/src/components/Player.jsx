import { useState, useRef } from "react";

export default function Player() {
  // useRef é uma forma de conectar componentes
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  function handleClick() {
    // acessando o componente por refs, usar essa forma do current
    // essa ferramenta expõe todas as propriedades, métodos e funcionalidades do elemento
    // ao qual a ref está sendo conectada
    setEnteredPlayerName(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        {/* a prop ref é onde recebe a variável de ref */}
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
