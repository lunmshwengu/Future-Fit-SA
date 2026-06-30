import Icon from '../components/Icon';
import { Badge, Card } from '../components/ui';

export default function AIPage() {
  return <Card className="ai"><h2><Icon name="sparkles" /> BacTraceAI Prediction Engine</h2><div className="ai-grid"><div><p>Predicted resistance increase</p><h1>+18%</h1></div><div><p>Confidence</p><div className="gauge"><span>92%</span></div></div><div><p>Risk Level</p><Badge tone="red">High</Badge></div></div><p>The increase appears correlated with elevated fluoroquinolone usage and recent emergence of multidrug-resistant Klebsiella isolates. BacTraceAI recommends targeted ward-level prescribing review, molecular confirmation, and enhanced contact tracing for linked isolates.</p></Card>;
}
