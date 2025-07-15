export default function Section({ title, children, ...props }) {
  // use proxy props approach, a forwarding pattern
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
