const STATS = [
  { value: '5,000+', label: 'Successful Procedures', valueColor: '#faf8f5', border: true },
  { value: 'Zero', label: 'Implants Since 2016', valueColor: '#faf8f5', border: true },
  { value: '15+', label: 'Years Experience', valueColor: '#faf8f5', border: true },
  { value: '100%', label: 'Board-Certified', valueColor: '#faf8f5', border: true },
  { value: '\u2666', label: "As Heard on Dr. Hyman\u2019s Show", valueColor: '#c9a99a', border: false },
];

export default function ProofStrip() {
  return (
    <div style={{ background: '#2a2420', padding: '52px 80px' }}>
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(5,1fr)',
          gap: 0,
          textAlign: 'center',
        }}
      >
        {STATS.map((stat) => (
          <div
            key={stat.label}
            style={{
              padding: '0 20px',
              borderRight: stat.border ? '1px solid rgba(250,248,245,0.1)' : undefined,
            }}
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: '2.6rem',
                fontWeight: 500,
                color: stat.valueColor,
                margin: 0,
                lineHeight: 1,
              }}
            >
              {stat.value}
            </p>
            <p
              style={{
                fontFamily: "'Jost',sans-serif",
                fontSize: '0.72rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(250,248,245,0.5)',
                margin: '8px 0 0',
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
