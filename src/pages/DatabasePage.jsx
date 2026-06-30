import Icon from '../components/Icon';
import { Badge, Card } from '../components/ui';

export default function DatabasePage({ query, setQuery, filter, setFilter, rows, setSample }) {
  return <Card><div className="table-toolbar"><div className="search"><Icon name="search" size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search samples, hospitals, species..." /></div><select value={filter} onChange={(event) => setFilter(event.target.value)}>{['All', 'Low', 'Moderate', 'High', 'Critical'].map((level) => <option key={level}>{level}</option>)}</select></div><div className="table-wrap"><table><thead><tr>{['Sample ID', 'Hospital', 'Species', 'Sample Type', 'Resistance Level', 'Collection Date', 'Status'].map((heading) => <th key={heading}>{heading}</th>)}</tr></thead><tbody>{rows.map((row) => <tr key={row.id} onClick={() => setSample(row)}>{[row.id, row.hospital, row.species, row.type, row.resistance, row.date, row.status].map((cell, index) => <td key={`${row.id}-${cell}`}>{index === 4 ? <Badge tone={cell === 'Critical' ? 'red' : cell === 'High' ? 'orange' : 'emerald'}>{cell}</Badge> : cell}</td>)}</tr>)}</tbody></table></div></Card>;
}
