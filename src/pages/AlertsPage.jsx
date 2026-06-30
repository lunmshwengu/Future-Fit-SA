import { useState } from 'react';
import { Badge, Card } from '../components/ui';
import { alerts } from '../data/mockData';

export default function AlertsPage() {
  const [severity, setSeverity] = useState('All');
  return <Card><div className="table-toolbar"><h2>Alert Center</h2><select value={severity} onChange={(event) => setSeverity(event.target.value)}>{['All', 'Critical', 'High', 'Medium'].map((level) => <option key={level}>{level}</option>)}</select></div>{alerts.filter((alert) => severity === 'All' || alert.severity === severity).map((alert) => <div className="alert-row" key={alert.text}><Badge tone={alert.severity === 'Critical' ? 'red' : alert.severity === 'High' ? 'orange' : 'blue'}>{alert.severity}</Badge><div><b>{alert.text}</b><p>{alert.site} · {alert.time}</p></div></div>)}</Card>;
}
