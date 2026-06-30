export const months = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

export const trendData = months.map((month, index) => ({
  month,
  ecoli: [28, 29, 31, 32, 34, 36, 35, 38, 40, 42, 43, 45][index],
  klebsiella: [21, 22, 24, 25, 28, 30, 33, 34, 36, 39, 41, 44][index],
  aureus: [17, 18, 18, 20, 21, 23, 22, 24, 26, 27, 28, 30][index],
}));

export const antibioticData = [
  { name: 'Amoxicillin', resistance: 68 },
  { name: 'Ciprofloxacin', resistance: 57 },
  { name: 'Ceftriaxone', resistance: 49 },
  { name: 'Meropenem', resistance: 18 },
  { name: 'Vancomycin', resistance: 12 },
];

export const hospitals = [
  { id: 1, name: 'Groote Schuur Hospital', city: 'Cape Town', x: 18, y: 78, status: 'normal', rate: 24, organisms: ['E. coli', 'S. aureus'], rec: 'Continue weekly urinary isolate surveillance.' },
  { id: 2, name: 'Charlotte Maxeke Johannesburg Academic', city: 'Johannesburg', x: 54, y: 38, status: 'outbreak', rate: 61, organisms: ['K. pneumoniae', 'A. baumannii'], rec: 'Initiate carbapenemase screen and isolate contact network.' },
  { id: 3, name: 'Inkosi Albert Luthuli Central Hospital', city: 'Durban', x: 72, y: 63, status: 'rising', rate: 42, organisms: ['MRSA', 'E. coli'], rec: 'Audit fluoroquinolone utilization in surgical wards.' },
  { id: 4, name: 'Tygerberg Hospital', city: 'Cape Town', x: 20, y: 73, status: 'normal', rate: 21, organisms: ['E. faecalis'], rec: 'No immediate escalation required.' },
  { id: 5, name: 'Steve Biko Academic Hospital', city: 'Pretoria', x: 56, y: 34, status: 'rising', rate: 39, organisms: ['P. aeruginosa'], rec: 'Review ICU device-associated infection bundle.' },
  { id: 6, name: 'Universitas Academic Hospital', city: 'Bloemfontein', x: 43, y: 56, status: 'normal', rate: 27, organisms: ['S. aureus'], rec: 'Maintain routine AST reporting cadence.' },
];

export const samples = [
  ['BTX-24061', 'Groote Schuur', 'Escherichia coli', 'Urine', 'Moderate', '2026-06-28', 'Sequenced'],
  ['BTX-24062', 'Charlotte Maxeke', 'Klebsiella pneumoniae', 'Blood culture', 'Critical', '2026-06-28', 'Alerted'],
  ['BTX-24063', 'Inkosi Albert Luthuli', 'Staphylococcus aureus', 'Wound swab', 'High', '2026-06-27', 'Validated'],
  ['BTX-24064', 'Steve Biko', 'Pseudomonas aeruginosa', 'Sputum', 'High', '2026-06-26', 'In review'],
  ['BTX-24065', 'Tygerberg', 'Enterococcus faecalis', 'Urine', 'Low', '2026-06-26', 'Validated'],
  ['BTX-24066', 'Universitas', 'Acinetobacter baumannii', 'Blood culture', 'Critical', '2026-06-25', 'Escalated'],
  ['BTX-24067', 'Red Cross War Memorial', 'Salmonella enterica', 'Stool', 'Moderate', '2026-06-25', 'Sequenced'],
  ['BTX-24068', 'Chris Hani Baragwanath', 'Klebsiella pneumoniae', 'Urine', 'High', '2026-06-24', 'Validated'],
].map(([id, hospital, species, type, resistance, date, status]) => ({ id, hospital, species, type, resistance, date, status }));

export const alerts = [
  { severity: 'Critical', text: 'Rapid increase in carbapenem-resistant Klebsiella', site: 'Charlotte Maxeke', time: '18 min ago' },
  { severity: 'High', text: 'Hospital resistance exceeded baseline by 30%', site: 'Inkosi Albert Luthuli', time: '2 hr ago' },
  { severity: 'Medium', text: 'Emerging MRSA cluster in surgical ward', site: 'Tygerberg', time: '1 day ago' },
  { severity: 'High', text: 'ESBL E. coli positivity above provincial threshold', site: 'Steve Biko', time: '2 days ago' },
];

export const astResults = [
  ['Amoxicillin', '>32', 'Resistant'],
  ['Ciprofloxacin', '4', 'Resistant'],
  ['Ceftriaxone', '8', 'Intermediate'],
  ['Meropenem', '0.25', 'Susceptible'],
  ['Vancomycin', '1', 'Susceptible'],
];
