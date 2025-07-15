export default function TabButton({ children, isSelected, ...props }) {
  // props.children é criado pelo React automaticamente
  // children refere-se a tudo que vem entre as tags do componente
  // using the forwarding pattern with onClick method
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
