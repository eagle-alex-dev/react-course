/*  generalizar os componentes para serem usados de forma abrangente
 *  em toda a aplicação é uma prática constante
 */
export default function Tabs({ children, buttons, buttonsContainer = "menu" }) {
  // create a variable starting with Uppercase Letter
  // dynamically set different elements
  // the parameter can be set with Uppercase directly
  const ButtonContainer = buttonsContainer;
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}
