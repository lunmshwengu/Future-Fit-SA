const iconPaths = {
  activity: 'M4 12h4l2-7 4 14 2-7h4', alert: 'M12 3 2 21h20L12 3Zm0 6v5m0 3h.01', bell: 'M18 16v-5a6 6 0 0 0-12 0v5l-2 2h16l-2-2Zm-8 4h4',
  database: 'M4 6c0-2 16-2 16 0v12c0 2-16 2-16 0V6Zm0 0c0 2 16 2 16 0M4 12c0 2 16 2 16 0', dna: 'M7 3c8 3 8 15 0 18m10-18c-8 3-8 15 0 18M8 7h8M8 12h8M8 17h8', file: 'M6 3h9l3 3v15H6V3Zm9 0v4h4M8 12h8M8 16h6',
  gauge: 'M4 14a8 8 0 1 1 16 0M12 14l5-5M8 19h8', hospital: 'M4 21V7h16v14M9 21v-5h6v5M9 11h6M12 8v6M7 14h10', map: 'M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3Zm0 0V3m6 18V6',
  menu: 'M4 7h16M4 12h16M4 17h16', microscope: 'M10 4h4v4l-2 2 4 4m-7-4 6 6M5 21h14M8 21a5 5 0 0 1 8-4', radar: 'M12 12l7-7M20 12a8 8 0 1 1-8-8M16 12a4 4 0 1 1-4-4', search: 'M10 18a8 8 0 1 1 5.7-2.3L21 21', settings: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0-5v3m0 12v3M4.2 4.2l2.1 2.1m11.4 11.4 2.1 2.1M3 12h3m12 0h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1',
  shield: 'M12 3 5 6v6c0 5 3.5 8 7 9 3.5-1 7-4 7-9V6l-7-3Z', sparkles: 'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Zm6 12 1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3Z', stethoscope: 'M6 4v5a4 4 0 0 0 8 0V4M4 4h4m4 0h4m-2 5v5a4 4 0 0 0 8 0v-1', user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm8 9a8 8 0 0 0-16 0', chevron: 'M9 18l6-6-6-6', zap: 'M13 2 4 14h7l-1 8 10-14h-7l1-6',
};

export default function Icon({ name, size = 20, className = '' }) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={iconPaths[name]} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
