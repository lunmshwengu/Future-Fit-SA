import { Card } from '../components/ui';
import { hospitals } from '../data/mockData';

export default function SettingsPage({ dark, setDark }) {
  return <Card><h2>Settings</h2><div className="settings-grid"><label>Theme<select value={dark ? 'Dark' : 'Light'} onChange={(event) => setDark(event.target.value === 'Dark')}><option>Light</option><option>Dark</option></select></label><label>Notification preferences<select><option>Critical + High</option><option>All alerts</option><option>Daily digest</option></select></label><label>Hospital selection<select>{hospitals.map((site) => <option key={site.id}>{site.name}</option>)}</select></label><label>Language<select><option>English</option><option>Afrikaans</option><option>isiZulu</option><option>isiXhosa</option></select></label></div></Card>;
}
