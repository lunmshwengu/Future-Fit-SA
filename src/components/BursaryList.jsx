export default function BursaryList({ bursaries, onSelect }) {
  return (
    <section>
      <div className="grid">
        {bursaries.map((b) => (
          <article key={b.id} className="card">
            <h3>{b.name}</h3>
            <p>{b.university}</p>
            <p>{b.course} · {b.level}</p>
            <button onClick={() => onSelect(b)}>View Details</button>
          </article>
        ))}
      </div>
    </section>
  );
}
