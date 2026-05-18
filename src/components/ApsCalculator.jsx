import { useMemo, useState } from 'react';
import { calculateAPS, getApsCategory } from '../utils/aps';
import { electiveSubjects } from '../data/bursaries';

export default function ApsCalculator() {
  const [selectedElectives, setSelectedElectives] = useState(['', '', '']);
  const [marks, setMarks] = useState({
    'Home Language': '',
    'First Additional Language': '',
    Mathematics: '',
    'Mathematical Literacy': '',
    'Life Orientation': '',
  });

  const activeSubjects = useMemo(
    () => [
      'Home Language',
      'First Additional Language',
      marks.Mathematics ? 'Mathematics' : 'Mathematical Literacy',
      'Life Orientation',
      ...selectedElectives.filter(Boolean),
    ],
    [marks.Mathematics, selectedElectives]
  );

  const totalAPS = useMemo(
    () => activeSubjects.reduce((sum, s) => sum + calculateAPS(marks[s]), 0),
    [activeSubjects, marks]
  );

  return <section className="card"><h2>APS Calculator</h2><p>Total APS: <strong>{totalAPS}</strong> ({getApsCategory(totalAPS)})</p></section>;
}
