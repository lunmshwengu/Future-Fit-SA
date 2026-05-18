import { useMemo, useState } from 'react';
import ApsCalculator from './components/ApsCalculator';
import BursaryList from './components/BursaryList';
import BursaryModal from './components/BursaryModal';
import { bursaries } from './data/bursaries';

export default function App() {
  const [search, setSearch] = useState('');
  const [level, setLevel] = useState('All');
  const [selected, setSelected] = useState(null);

  const levels = useMemo(() => ['All', ...new Set(bursaries.map((b) => b.level))], []);
  const filtered = useMemo(() => bursaries.filter((b) =>
    b.name.toLowerCase().includes(search.toLowerCase()) && (level === 'All' || b.level === level)
  ), [search, level]);

  return (
    <main className="container">
      <header className="hero">
        <h1>Future Fit SA · Bursary Finder</h1>
        <p>Professional bursary search with APS planning.</p>
        <div className="filters">
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search bursaries" />
          <select value={level} onChange={(e) => setLevel(e.target.value)}>
            {levels.map((l) => <option key={l}>{l}</option>)}
          </select>
        </div>
      </header>
      <ApsCalculator />
      <BursaryList bursaries={filtered} onSelect={setSelected} />
      <BursaryModal bursary={selected} onClose={() => setSelected(null)} />
    </main>
  );
}
