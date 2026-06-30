import Chart from '../components/Chart';
import { Card } from '../components/ui';

export default function Reports() {
  return <Card className="report"><h2>Monthly AMR Intelligence Report</h2><div className="report-page"><h3>Hospital Summary</h3><p>42 active hospitals reporting 128,430 processed specimens with 8,924 resistant isolates detected.</p><h3>Monthly Resistance Trends</h3><Chart type="line" /><h3>Top Resistant Organisms</h3><p>Klebsiella pneumoniae, Escherichia coli, Staphylococcus aureus.</p><h3>Recommendations</h3><p>Escalate IPC review for carbapenem-resistant clusters and reduce empirical fluoroquinolone use where resistance exceeds baseline.</p></div><button className="primary">Generate printable PDF-style report</button></Card>;
}
