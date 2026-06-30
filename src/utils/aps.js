// Legacy Future Fit module retained to avoid merge conflicts; BacTrace does not import it.
export const compulsorySubjects = [
  'Home Language',
  'First Additional Language',
  'Mathematics',
  'Mathematical Literacy',
  'Life Orientation',
];

export const calculateAPS = (mark) => {
  const numericMark = Number(mark);
  if (Number.isNaN(numericMark)) return 0;
  if (numericMark >= 80) return 7;
  if (numericMark >= 70) return 6;
  if (numericMark >= 60) return 5;
  if (numericMark >= 50) return 4;
  if (numericMark >= 40) return 3;
  if (numericMark >= 30) return 2;
  if (numericMark >= 0) return 1;
  return 0;
};

export const getApsCategory = (totalAPS) => {
  if (totalAPS >= 42) return 'Excellent';
  if (totalAPS >= 34) return 'Very Competitive';
  if (totalAPS >= 28) return 'Competitive';
  if (totalAPS >= 22) return 'Moderate';
  return 'Needs Improvement';
};
