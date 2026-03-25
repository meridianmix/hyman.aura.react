const STATS = [
  { value: '5,000+', label: 'Successful Procedures', accent: false },
  { value: 'Zero',   label: 'Implants Since 2016',   accent: false },
  { value: '15+',    label: 'Years Experience',       accent: false },
  { value: '100%',   label: 'Board-Certified',        accent: false },
  { value: '♦',      label: "As Heard on Dr. Hyman's Show", accent: true },
];

export default function ProofStrip() {
  return (
    <div className="stats-strip">
      <div className="stats-grid">
        {STATS.map((stat) => (
          <div key={stat.label} className="stat-item">
            <p className={`stat-value${stat.accent ? ' accent' : ''}`}>{stat.value}</p>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
