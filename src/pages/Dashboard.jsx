import Chart from '../components/Chart';
import Icon from '../components/Icon';
import { Badge, Card } from '../components/ui';

export default function Dashboard() {
  const kpis = [['Total Samples Processed', 128430, 'microscope', 'emerald', ''], ['Active Hospitals', 42, 'hospital', 'blue', ''], ['Resistant Isolates Detected', 8924, 'alert', 'red', ''], ['New Alerts This Week', 17, 'bell', 'orange', ''], ['Antibiotic Effectiveness Score', 84, 'gauge', 'emerald', '%']];
  return <div className="page"><div className="kpis">{kpis.map(([title, value, icon, tone, suffix]) => <Card className="kpi" key={title}><Icon name={icon} /><p>{title}</p><h2 className="counter">{Number(value).toLocaleString()}{suffix}</h2><Badge tone={tone}>Live</Badge></Card>)}</div><div className="two"><Card><h3>Resistance trends · 12 months</h3><Chart type="line" /></Card><Card><h3>Most Resistant Antibiotics</h3><Chart type="bar" /></Card></div></div>;
}
