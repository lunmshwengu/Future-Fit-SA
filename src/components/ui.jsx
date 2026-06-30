export function Badge({ children, tone = 'slate' }) { return <span className={`badge ${tone}`}>{children}</span>; }
export function Card({ children, className = '' }) { return <section className={`card ${className}`}>{children}</section>; }
export function Skeleton() { return <div className="skeleton-grid"><div /><div /><div /></div>; }
