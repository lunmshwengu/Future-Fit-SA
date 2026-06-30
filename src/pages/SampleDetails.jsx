import { Badge, Card } from '../components/ui';
import { astResults } from '../data/mockData';

export default function SampleDetails({ sample }) {
  return <Card><h2>Anonymized Patient P-{sample.id.slice(-4)}</h2><p className="muted">Species identified: <b>{sample.species}</b> · {sample.type} · {sample.hospital}</p><h3>Antibiotic Susceptibility Testing results</h3><table><thead><tr><th>Antibiotic</th><th>MIC</th><th>Interpretation</th></tr></thead><tbody>{astResults.map(([antibiotic, mic, interpretation]) => <tr key={antibiotic}><td>{antibiotic}</td><td>{mic}</td><td><Badge tone={interpretation === 'Resistant' ? 'red' : interpretation === 'Intermediate' ? 'orange' : 'emerald'}>{interpretation}</Badge></td></tr>)}</tbody></table></Card>;
}
