import Chart from '../components/Chart';
import { Badge, Card } from '../components/ui';
import { hospitals } from '../data/mockData';

export default function SurveillanceMap({ hospital, setHospital }) {
  return <div className="map-layout"><Card className="sa-map"><h3>South Africa BacTrace Resistance Network</h3><div className="map-shape">{hospitals.map((site) => <button key={site.id} title={site.name} onClick={() => setHospital(site)} className={`dot ${site.status}`} style={{ left: `${site.x}%`, top: `${site.y}%` }} />)}</div><div className="map-legend"><span className="normal">Normal</span><span className="rising">Increasing resistance</span><span className="outbreak">Outbreak</span></div></Card><Card className="side"><h2>{hospital.name}</h2><p>{hospital.city}</p><h3>{hospital.rate}% current resistance rate</h3><div>{hospital.organisms.map((organism) => <Badge key={organism} tone="blue">{organism}</Badge>)}</div><p className="recommend"><b>Recommended investigation:</b> {hospital.rec}</p><div className="mini-trend"><Chart type="line" /></div></Card></div>;
}
