import Icon from './Icon';

export default function Logo({ compact = false }) {
  return <div className="logo"><div className="logo-mark"><Icon name="shield" size={28} /><Icon name="dna" size={17} className="dna" /><Icon name="radar" size={16} className="radar" /></div>{!compact && <div><b>BacTrace</b><span>Real-Time Antimicrobial Intelligence</span></div>}</div>;
}
