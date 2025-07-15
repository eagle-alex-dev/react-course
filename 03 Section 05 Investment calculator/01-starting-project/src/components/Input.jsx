export default function Input({ id, type, label, inputValue, onChange }) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={inputValue}
        onChange={onChange}
        required
      />
    </p>
  );
}
