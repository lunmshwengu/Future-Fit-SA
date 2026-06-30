import { useMemo, useState } from 'react';

const iconPaths = {
  activity: 'M4 12h4l2-7 4 14 2-7h4',
  alert: 'M12 3 2 21h20L12 3Zm0 6v5m0 3h.01',
  bell: 'M18 16v-5a6 6 0 0 0-12 0v5l-2 2h16l-2-2Zm-8 4h4',
  database: 'M4 6c0-2 16-2 16 0v12c0 2-16 2-16 0V6Zm0 0c0 2 16 2 16 0M4 12c0 2 16 2 16 0',
  dna: 'M7 3c8 3 8 15 0 18m10-18c-8 3-8 15 0 18M8 7h8M8 12h8M8 17h8',
  file: 'M6 3h9l3 3v15H6V3Zm9 0v4h4M8 12h8M8 16h6',
  gauge: 'M4 14a8 8 0 1 1 16 0M12 14l5-5M8 19h8',
  hospital: 'M4 21V7h16v14M9 21v-5h6v5M9 11h6M12 8v6M7 14h10',
  map: 'M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3Zm0 0V3m6 18V6',
  menu: 'M4 7h16M4 12h16M4 17h16',
  microscope: 'M10 4h4v4l-2 2 4 4m-7-4 6 6M5 21h14M8 21a5 5 0 0 1 8-4',
  radar: 'M12 12l7-7M20 12a8 8 0 1 1-8-8M16 12a4 4 0 1 1-4-4',
  search: 'M10 18a8 8 0 1 1 5.7-2.3L21 21',
  settings: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0-5v3m0 12v3M4.2 4.2l2.1 2.1m11.4 11.4 2.1 2.1M3 12h3m12 0h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1',
  shield: 'M12 3 5 6v6c0 5 3.5 8 7 9 3.5-1 7-4 7-9V6l-7-3Z',
  sparkles: 'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Zm6 12 1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3Z',
  stethoscope: 'M6 4v5a4 4 0 0 0 8 0V4M4 4h4m4 0h4m-2 5v5a4 4 0 0 0 8 0v-1',
  user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm8 9a8 8 0 0 0-16 0',
  chevron: 'M9 18l6-6-6-6',
  zap: 'M13 2 4 14h7l-1 8 10-14h-7l1-6',
};

function Icon({ name, size = 20, className = '' }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d={iconPaths[name]} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const months = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const trendData = months.map((month, index) => ({
  month,
  ecoli: [28, 29, 31, 32, 34, 36, 35, 38, 40, 42, 43, 45][index],
  klebsiella: [21, 22, 24, 25, 28, 30, 33, 34, 36, 39, 41, 44][index],
  aureus: [17, 18, 18, 20, 21, 23, 22, 24, 26, 27, 28, 30][index],
}));
const antibioticData = [
  { name: 'Amoxicillin', resistance: 68 },
  { name: 'Ciprofloxacin', resistance: 57 },
  { name: 'Ceftriaxone', resistance: 49 },
  { name: 'Meropenem', resistance: 18 },
  { name: 'Vancomycin', resistance: 12 },
];
const hospitals = [
  { id: 1, name: 'Groote Schuur Hospital', city: 'Cape Town', x: 18, y: 78, status: 'normal', rate: 24, organisms: ['E. coli', 'S. aureus'], rec: 'Continue weekly urinary isolate surveillance.' },
  { id: 2, name: 'Charlotte Maxeke Johannesburg Academic', city: 'Johannesburg', x: 54, y: 38, status: 'outbreak', rate: 61, organisms: ['K. pneumoniae', 'A. baumannii'], rec: 'Initiate carbapenemase screen and isolate contact network.' },
  { id: 3, name: 'Inkosi Albert Luthuli Central Hospital', city: 'Durban', x: 72, y: 63, status: 'rising', rate: 42, organisms: ['MRSA', 'E. coli'], rec: 'Audit fluoroquinolone utilization in surgical wards.' },
  { id: 4, name: 'Tygerberg Hospital', city: 'Cape Town', x: 20, y: 73, status: 'normal', rate: 21, organisms: ['E. faecalis'], rec: 'No immediate escalation required.' },
  { id: 5, name: 'Steve Biko Academic Hospital', city: 'Pretoria', x: 56, y: 34, status: 'rising', rate: 39, organisms: ['P. aeruginosa'], rec: 'Review ICU device-associated infection bundle.' },
  { id: 6, name: 'Universitas Academic Hospital', city: 'Bloemfontein', x: 43, y: 56, status: 'normal', rate: 27, organisms: ['S. aureus'], rec: 'Maintain routine AST reporting cadence.' },
];
const samples = [
  ['SRX-24061', 'Groote Schuur', 'Escherichia coli', 'Urine', 'Moderate', '2026-06-28', 'Sequenced'],
  ['SRX-24062', 'Charlotte Maxeke', 'Klebsiella pneumoniae', 'Blood culture', 'Critical', '2026-06-28', 'Alerted'],
  ['SRX-24063', 'Inkosi Albert Luthuli', 'Staphylococcus aureus', 'Wound swab', 'High', '2026-06-27', 'Validated'],
  ['SRX-24064', 'Steve Biko', 'Pseudomonas aeruginosa', 'Sputum', 'High', '2026-06-26', 'In review'],
  ['SRX-24065', 'Tygerberg', 'Enterococcus faecalis', 'Urine', 'Low', '2026-06-26', 'Validated'],
  ['SRX-24066', 'Universitas', 'Acinetobacter baumannii', 'Blood culture', 'Critical', '2026-06-25', 'Escalated'],
  ['SRX-24067', 'Red Cross War Memorial', 'Salmonella enterica', 'Stool', 'Moderate', '2026-06-25', 'Sequenced'],
  ['SRX-24068', 'Chris Hani Baragwanath', 'Klebsiella pneumoniae', 'Urine', 'High', '2026-06-24', 'Validated'],
].map(([id, hospital, species, type, resistance, date, status]) => ({ id, hospital, species, type, resistance, date, status }));
const alerts = [
  { severity: 'Critical', text: 'Rapid increase in carbapenem-resistant Klebsiella', site: 'Charlotte Maxeke', time: '18 min ago' },
  { severity: 'High', text: 'Hospital resistance exceeded baseline by 30%', site: 'Inkosi Albert Luthuli', time: '2 hr ago' },
  { severity: 'Medium', text: 'Emerging MRSA cluster in surgical ward', site: 'Tygerberg', time: '1 day ago' },
  { severity: 'High', text: 'ESBL E. coli positivity above provincial threshold', site: 'Steve Biko', time: '2 days ago' },
];
const pages = [
  { id: 'dashboard', label: 'Dashboard', icon: 'activity' },
  { id: 'map', label: 'Live Map', icon: 'map' },
  { id: 'database', label: 'Bacterial DB', icon: 'database' },
  { id: 'ai', label: 'AI Risk', icon: 'sparkles' },
  { id: 'alerts', label: 'Alerts', icon: 'alert' },
  { id: 'stewardship', label: 'Stewardship', icon: 'stethoscope' },
  { id: 'reports', label: 'Reports', icon: 'file' },
  { id: 'settings', label: 'Settings', icon: 'settings' },
];

function Logo({ compact = false }) {
  return (
    <div className="logo">
      <div className="logo-mark">
        <Icon name="shield" size={28} />
        <Icon name="dna" size={17} className="dna" />
        <Icon name="radar" size={16} className="radar" />
      </div>
      {!compact && <div><b>SentinelRx</b><span>Real-Time Antimicrobial Intelligence</span></div>}
    </div>
  );
}
function Badge({ children, tone = 'slate' }) { return <span className={`badge ${tone}`}>{children}</span>; }
function Card({ children, className = '' }) { return <section className={`card ${className}`}>{children}</section>; }
function Skeleton() { return <div className="skeleton-grid"><div /><div /><div /></div>; }

export default function App() {
  const [authed, setAuthed] = useState(false);
  const [page, setPage] = useState('dashboard');
  const [dark, setDark] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sample, setSample] = useState(null);
  const [hospital, setHospital] = useState(hospitals[1]);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');
  const [toast, setToast] = useState('');
  const [navOpen, setNavOpen] = useState(false);

  const activePage = pages.find((item) => item.id === page);
  const filteredSamples = useMemo(() => samples.filter((row) => {
    const matchesFilter = filter === 'All' || row.resistance === filter;
    const matchesQuery = Object.values(row).join(' ').toLowerCase().includes(query.toLowerCase());
    return matchesFilter && matchesQuery;
  }), [query, filter]);

  const navigate = (nextPage) => {
    setLoading(true);
    setPage(nextPage);
    setSample(null);
    setNavOpen(false);
    setTimeout(() => setLoading(false), 350);
  };
  const demo = () => {
    setAuthed(true);
    setToast('Demo workspace loaded');
    setTimeout(() => setToast(''), 2600);
  };

  if (!authed) return <Login demo={demo} dark={dark} setDark={setDark} />;

  return (
    <div className={dark ? 'app dark' : 'app'}>
      {toast && <div className="toast"><Icon name="zap" size={16} />{toast}</div>}
      <aside className={navOpen ? 'sidebar open' : 'sidebar'}>
        <Logo />
        <nav aria-label="Primary navigation">
          {pages.map((item) => (
            <button className={page === item.id ? 'active' : ''} onClick={() => navigate(item.id)} key={item.id}>
              <Icon name={item.icon} size={18} />{item.label}
            </button>
          ))}
        </nav>
      </aside>
      <main className="shell">
        <header className="topbar">
          <button className="icon-button mobile" onClick={() => setNavOpen(!navOpen)} aria-label="Open menu"><Icon name="menu" /></button>
          <div>
            <p className="crumb">SentinelRx <Icon name="chevron" size={14} /> {activePage?.label}{sample && ' / Sample Details'}</p>
            <h1>{sample ? sample.id : activePage?.label}</h1>
          </div>
          <div className="top-actions">
            <button className="icon-button" onClick={() => setDark(!dark)} aria-label="Toggle theme">{dark ? '☀️' : '🌙'}</button>
            <button className="icon-button" aria-label="Notifications"><Icon name="bell" /></button>
            <div className="avatar"><Icon name="user" size={18} /></div>
          </div>
        </header>
        {loading ? <Skeleton /> : sample ? <SampleDetails sample={sample} /> : <Page page={page} hospital={hospital} setHospital={setHospital} query={query} setQuery={setQuery} filter={filter} setFilter={setFilter} rows={filteredSamples} setSample={setSample} dark={dark} setDark={setDark} />}
      </main>
    </div>
  );
}
function Page(props) {
  if (props.page === 'dashboard') return <Dashboard />;
  if (props.page === 'map') return <SurveillanceMap hospital={props.hospital} setHospital={props.setHospital} />;
  if (props.page === 'database') return <DatabasePage {...props} />;
  if (props.page === 'ai') return <AIPage />;
  if (props.page === 'alerts') return <AlertsPage />;
  if (props.page === 'stewardship') return <Stewardship />;
  if (props.page === 'reports') return <Reports />;
  return <SettingsPage dark={props.dark} setDark={props.setDark} />;
}
function Login({ demo, dark, setDark }) {
  return (
    <div className={dark ? 'login dark' : 'login'}>
      <button className="theme-toggle" onClick={() => setDark(!dark)}>{dark ? 'Light' : 'Dark'} mode</button>
      <div className="login-panel">
        <Logo />
        <h1>Protecting Tomorrow's Antibiotics Today.</h1>
        <p>Secure surveillance for hospitals, microbiology laboratories, infection prevention teams, and public health agencies.</p>
        <label>Email<input placeholder="epidemiologist@hospital.org" /></label>
        <label>Password<input placeholder="••••••••" type="password" /></label>
        <button className="primary">Sign In</button>
        <button className="secondary" onClick={demo}>Demo Login</button>
      </div>
      <div className="login-art"><div className="pulse-orb"><Icon name="shield" /><Icon name="dna" /><Icon name="radar" /></div><p>Live AMR signal fusion across South African care networks.</p></div>
    </div>
  );
}
function Dashboard() {
  const kpis = [
    ['Total Samples Processed', 128430, 'microscope', 'emerald', ''],
    ['Active Hospitals', 42, 'hospital', 'blue', ''],
    ['Resistant Isolates Detected', 8924, 'alert', 'red', ''],
    ['New Alerts This Week', 17, 'bell', 'orange', ''],
    ['Antibiotic Effectiveness Score', 84, 'gauge', 'emerald', '%'],
  ];
  return <div className="page"><div className="kpis">{kpis.map(([title, value, icon, tone, suffix]) => <Card className="kpi" key={title}><Icon name={icon} /><p>{title}</p><h2 className="counter">{Number(value).toLocaleString()}{suffix}</h2><Badge tone={tone}>Live</Badge></Card>)}</div><div className="two"><Card><h3>Resistance trends · 12 months</h3><Chart type="line" /></Card><Card><h3>Most Resistant Antibiotics</h3><Chart type="bar" /></Card></div></div>;
}
function Chart({ type }) {
  if (type === 'bar') return <div className="bar-chart">{antibioticData.map((item, index) => <div className="bar-item" key={item.name}><div className="bar-track"><span style={{ height: `${item.resistance}%`, background: index < 3 ? '#10b981' : '#2563eb' }} /></div><small>{item.name}</small><b>{item.resistance}%</b></div>)}</div>;
  const line = (key, scale) => trendData.map((d, i) => `${(i / (trendData.length - 1)) * 100},${100 - d[key] * scale}`).join(' ');
  return <div className="line-chart"><svg viewBox="0 0 100 70" preserveAspectRatio="none"><polyline points={line('ecoli', 1.35)} /><polyline className="blue-line" points={line('klebsiella', 1.55)} /><polyline className="dark-line" points={line('aureus', 1.75)} /></svg><div className="chart-legend"><span>E. coli</span><span>K. pneumoniae</span><span>S. aureus</span></div></div>;
}
function SurveillanceMap({ hospital, setHospital }) {
  return <div className="map-layout"><Card className="sa-map"><h3>South Africa Resistance Sentinel Network</h3><div className="map-shape">{hospitals.map((site) => <button key={site.id} title={site.name} onClick={() => setHospital(site)} className={`dot ${site.status}`} style={{ left: `${site.x}%`, top: `${site.y}%` }} />)}</div><div className="map-legend"><span className="normal">Normal</span><span className="rising">Increasing resistance</span><span className="outbreak">Outbreak</span></div></Card><Card className="side"><h2>{hospital.name}</h2><p>{hospital.city}</p><h3>{hospital.rate}% current resistance rate</h3><div>{hospital.organisms.map((organism) => <Badge key={organism} tone="blue">{organism}</Badge>)}</div><p className="recommend"><b>Recommended investigation:</b> {hospital.rec}</p><div className="mini-trend"><Chart type="line" /></div></Card></div>;
}
function DatabasePage({ query, setQuery, filter, setFilter, rows, setSample }) {
  return <Card><div className="table-toolbar"><div className="search"><Icon name="search" size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search samples, hospitals, species..." /></div><select value={filter} onChange={(event) => setFilter(event.target.value)}>{['All', 'Low', 'Moderate', 'High', 'Critical'].map((level) => <option key={level}>{level}</option>)}</select></div><div className="table-wrap"><table><thead><tr>{['Sample ID', 'Hospital', 'Species', 'Sample Type', 'Resistance Level', 'Collection Date', 'Status'].map((heading) => <th key={heading}>{heading}</th>)}</tr></thead><tbody>{rows.map((row) => <tr key={row.id} onClick={() => setSample(row)}>{[row.id, row.hospital, row.species, row.type, row.resistance, row.date, row.status].map((cell, index) => <td key={`${row.id}-${cell}`}>{index === 4 ? <Badge tone={cell === 'Critical' ? 'red' : cell === 'High' ? 'orange' : 'emerald'}>{cell}</Badge> : cell}</td>)}</tr>)}</tbody></table></div></Card>;
}
function SampleDetails({ sample }) {
  const ast = [['Amoxicillin', '>32', 'Resistant'], ['Ciprofloxacin', '4', 'Resistant'], ['Ceftriaxone', '8', 'Intermediate'], ['Meropenem', '0.25', 'Susceptible'], ['Vancomycin', '1', 'Susceptible']];
  return <Card><h2>Anonymized Patient P-{sample.id.slice(-4)}</h2><p className="muted">Species identified: <b>{sample.species}</b> · {sample.type} · {sample.hospital}</p><h3>Antibiotic Susceptibility Testing results</h3><table><thead><tr><th>Antibiotic</th><th>MIC</th><th>Interpretation</th></tr></thead><tbody>{ast.map(([antibiotic, mic, interpretation]) => <tr key={antibiotic}><td>{antibiotic}</td><td>{mic}</td><td><Badge tone={interpretation === 'Resistant' ? 'red' : interpretation === 'Intermediate' ? 'orange' : 'emerald'}>{interpretation}</Badge></td></tr>)}</tbody></table></Card>;
}
function AIPage() { return <Card className="ai"><h2><Icon name="sparkles" /> SentinelAI Prediction Engine</h2><div className="ai-grid"><div><p>Predicted resistance increase</p><h1>+18%</h1></div><div><p>Confidence</p><div className="gauge"><span>92%</span></div></div><div><p>Risk Level</p><Badge tone="red">High</Badge></div></div><p>The increase appears correlated with elevated fluoroquinolone usage and recent emergence of multidrug-resistant Klebsiella isolates. SentinelAI recommends targeted ward-level prescribing review, molecular confirmation, and enhanced contact tracing for linked isolates.</p></Card>; }
function AlertsPage() { const [severity, setSeverity] = useState('All'); return <Card><div className="table-toolbar"><h2>Alert Center</h2><select value={severity} onChange={(event) => setSeverity(event.target.value)}>{['All', 'Critical', 'High', 'Medium'].map((level) => <option key={level}>{level}</option>)}</select></div>{alerts.filter((alert) => severity === 'All' || alert.severity === severity).map((alert) => <div className="alert-row" key={alert.text}><Badge tone={alert.severity === 'Critical' ? 'red' : alert.severity === 'High' ? 'orange' : 'blue'}>{alert.severity}</Badge><div><b>{alert.text}</b><p>{alert.site} · {alert.time}</p></div></div>)}</Card>; }
function Stewardship() { return <div className="two"><Card><h2>Antibiotic Stewardship</h2><p>Avoid empirical <b>Ciprofloxacin</b> use in Hospital A for complicated UTI pathways.</p><p>Preferred therapy: <b>Nitrofurantoin</b>, pending renal function and local formulary approval.</p><Badge tone="emerald">Evidence-backed recommendation</Badge></Card><Card><h3>Supporting resistance profile</h3><Chart type="bar" /></Card></div>; }
function Reports() { return <Card className="report"><h2>Monthly AMR Intelligence Report</h2><div className="report-page"><h3>Hospital Summary</h3><p>42 active hospitals reporting 128,430 processed specimens with 8,924 resistant isolates detected.</p><h3>Monthly Resistance Trends</h3><Chart type="line" /><h3>Top Resistant Organisms</h3><p>Klebsiella pneumoniae, Escherichia coli, Staphylococcus aureus.</p><h3>Recommendations</h3><p>Escalate IPC review for carbapenem-resistant clusters and reduce empirical fluoroquinolone use where resistance exceeds baseline.</p></div><button className="primary">Generate printable PDF-style report</button></Card>; }
function SettingsPage({ dark, setDark }) { return <Card><h2>Settings</h2><div className="settings-grid"><label>Theme<select value={dark ? 'Dark' : 'Light'} onChange={(event) => setDark(event.target.value === 'Dark')}><option>Light</option><option>Dark</option></select></label><label>Notification preferences<select><option>Critical + High</option><option>All alerts</option><option>Daily digest</option></select></label><label>Hospital selection<select>{hospitals.map((site) => <option key={site.id}>{site.name}</option>)}</select></label><label>Language<select><option>English</option><option>Afrikaans</option><option>isiZulu</option><option>isiXhosa</option></select></label></div></Card>; }
