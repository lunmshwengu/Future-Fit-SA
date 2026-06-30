import Chart from '../components/Chart';
import { Badge, Card } from '../components/ui';

export default function Stewardship() {
  return <div className="two"><Card><h2>Antibiotic Stewardship</h2><p>Avoid empirical <b>Ciprofloxacin</b> use in Hospital A for complicated UTI pathways.</p><p>Preferred therapy: <b>Nitrofurantoin</b>, pending renal function and local formulary approval.</p><Badge tone="emerald">Evidence-backed recommendation</Badge></Card><Card><h3>Supporting resistance profile</h3><Chart type="bar" /></Card></div>;
}
