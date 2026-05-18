export default function BursaryModal({ bursary, onClose }) {
  if (!bursary) return null;
  return (
    <div className="modal">
      <div className="card">
        <h2>{bursary.name}</h2>
        <p>{bursary.description || 'No description yet.'}</p>
        <p><strong>Deadline:</strong> {bursary.deadline}</p>
        <p><strong>Website:</strong> {bursary.website || 'N/A'}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
