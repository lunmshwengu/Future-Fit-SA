import Icon from './Icon';
import Logo from './Logo';

import { pages } from '../data/navigation';

export default function Layout({ children, page, sample, dark, setDark, navOpen, setNavOpen, navigate, toast }) {
  const activePage = pages.find((item) => item.id === page);
  return <div className={dark ? 'app dark' : 'app'}>{toast && <div className="toast"><Icon name="zap" size={16} />{toast}</div>}<aside className={navOpen ? 'sidebar open' : 'sidebar'}><Logo /><nav aria-label="Primary navigation">{pages.map((item) => <button className={page === item.id ? 'active' : ''} onClick={() => navigate(item.id)} key={item.id}><Icon name={item.icon} size={18} />{item.label}</button>)}</nav></aside><main className="shell"><header className="topbar"><button className="icon-button mobile" onClick={() => setNavOpen(!navOpen)} aria-label="Open menu"><Icon name="menu" /></button><div><p className="crumb">BacTrace <Icon name="chevron" size={14} /> {activePage?.label}{sample && ' / Sample Details'}</p><h1>{sample ? sample.id : activePage?.label}</h1></div><div className="top-actions"><button className="icon-button" onClick={() => setDark(!dark)} aria-label="Toggle theme">{dark ? '☀️' : '🌙'}</button><button className="icon-button" aria-label="Notifications"><Icon name="bell" /></button><div className="avatar"><Icon name="user" size={18} /></div></div></header>{children}</main></div>;
}
