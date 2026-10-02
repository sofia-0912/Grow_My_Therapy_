export default function ServiceCard({ id, num, title, children, bullets }) {
  return (
    <div
      id={id}
      className="rounded-sm border border-line bg-paper p-7 transition hover:-translate-y-1 hover:shadow-card"
    >
      {num && <div className="font-serif text-[1.02rem] font-bold text-accent">{num}</div>}
      <h3 className="mb-2.5 mt-2 font-serif text-[1.18rem] text-primary-deep">{title}</h3>
      <p className="text-[0.93rem] text-muted">{children}</p>
      {bullets && (
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[0.92rem] text-muted">
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
