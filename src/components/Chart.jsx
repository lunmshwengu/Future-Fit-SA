import { antibioticData, trendData } from '../data/mockData';

export default function Chart({ type }) {
  if (type === 'bar') {
    return <div className="bar-chart">{antibioticData.map((item, index) => <div className="bar-item" key={item.name}><div className="bar-track"><span style={{ height: `${item.resistance}%`, background: index < 3 ? '#10b981' : '#2563eb' }} /></div><small>{item.name}</small><b>{item.resistance}%</b></div>)}</div>;
  }
  const line = (key, scale) => trendData.map((d, i) => `${(i / (trendData.length - 1)) * 100},${100 - d[key] * scale}`).join(' ');
  return <div className="line-chart"><svg viewBox="0 0 100 70" preserveAspectRatio="none"><polyline points={line('ecoli', 1.35)} /><polyline className="blue-line" points={line('klebsiella', 1.55)} /><polyline className="dark-line" points={line('aureus', 1.75)} /></svg><div className="chart-legend"><span>E. coli</span><span>K. pneumoniae</span><span>S. aureus</span></div></div>;
}
