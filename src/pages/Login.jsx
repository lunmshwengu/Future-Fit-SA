import Icon from '../components/Icon';
import Logo from '../components/Logo';

export default function Login({ demo, dark, setDark }) {
  return <div className={dark ? 'login dark' : 'login'}><button className="theme-toggle" onClick={() => setDark(!dark)}>{dark ? 'Light' : 'Dark'} mode</button><div className="login-panel"><Logo /><h1>Protecting Tomorrow's Antibiotics Today.</h1><p>Secure surveillance for hospitals, microbiology laboratories, infection prevention teams, and public health agencies.</p><label>Email<input placeholder="epidemiologist@hospital.org" /></label><label>Password<input placeholder="••••••••" type="password" /></label><button className="primary">Sign In</button><button className="secondary" onClick={demo}>Demo Login</button></div><div className="login-art"><div className="pulse-orb"><Icon name="shield" /><Icon name="dna" /><Icon name="radar" /></div><p>Live AMR signal fusion across South African care networks.</p></div></div>;
}
