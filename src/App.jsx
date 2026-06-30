import { useMemo, useState } from 'react';

import Layout from './components/Layout';
import { Skeleton } from './components/ui';
import { hospitals, samples } from './data/mockData';

import AIPage from './pages/AIPage';
import AlertsPage from './pages/AlertsPage';
import Dashboard from './pages/Dashboard';
import DatabasePage from './pages/DatabasePage';
import Login from './pages/Login';
import Reports from './pages/Reports';
import SampleDetails from './pages/SampleDetails';
import SettingsPage from './pages/SettingsPage';
import Stewardship from './pages/Stewardship';
import SurveillanceMap from './pages/SurveillanceMap';

function CurrentPage(props) {
  if (props.page === 'dashboard') return <Dashboard />;
  if (props.page === 'map') return <SurveillanceMap hospital={props.hospital} setHospital={props.setHospital} />;
  if (props.page === 'database') return <DatabasePage {...props} />;
  if (props.page === 'ai') return <AIPage />;
  if (props.page === 'alerts') return <AlertsPage />;
  if (props.page === 'stewardship') return <Stewardship />;
  if (props.page === 'reports') return <Reports />;
  return <SettingsPage dark={props.dark} setDark={props.setDark} />;
}

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

  const filteredSamples = useMemo(() => {
    return samples.filter((row) => {
      const matchesFilter = filter === 'All' || row.resistance === filter;
      const matchesQuery = Object.values(row)
        .join(' ')
        .toLowerCase()
        .includes(query.toLowerCase());
      return matchesFilter && matchesQuery;
    });
  }, [query, filter]);

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

  if (!authed) {
    return <Login demo={demo} dark={dark} setDark={setDark} />;
  }

  return (
    <Layout
      page={page}
      sample={sample}
      dark={dark}
      setDark={setDark}
      navOpen={navOpen}
      setNavOpen={setNavOpen}
      navigate={navigate}
      toast={toast}
    >
      {loading ? (
        <Skeleton />
      ) : sample ? (
        <SampleDetails sample={sample} />
      ) : (
        <CurrentPage
          page={page}
          hospital={hospital}
          setHospital={setHospital}
          query={query}
          setQuery={setQuery}
          filter={filter}
          setFilter={setFilter}
          rows={filteredSamples}
          setSample={setSample}
          dark={dark}
          setDark={setDark}
        />
      )}
    </Layout>
  );
}