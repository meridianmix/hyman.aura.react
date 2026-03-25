import { Icon } from '@iconify/react';

const STATS = [
  { value: '5,000+', label: 'Successful Procedures' },
  { value: 'Zero',   label: 'Implants Since 2016' },
  { value: '15+',    label: 'Years Experience' },
  { value: '100%',   label: 'Board-Certified' },
];

export default function ProofStrip() {
  return (
    <div className="stats-strip">
      <div className="stats-grid">
        {STATS.map((stat) => (
          <div key={stat.label} className="stat-item">
            <p className="stat-value">{stat.value}</p>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="stats-podcast-row">
        <div className="stats-podcast-badge">
          <Icon icon="solar:microphone-bold" width="16" height="16" color="var(--blush)" />
          <span className="stat-podcast-as">As Heard on</span>
          <span className="stat-podcast-show">The Dr. Hyman Show</span>
        </div>
      </div>
    </div>
  );
}
