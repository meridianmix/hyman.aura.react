const TOPICS = [
  {
    color: '#5c7a6e',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    borderColor: '#5c7a6e',
    title: 'Why implants may not be the answer',
    body: 'From implant illness to BIA-ALCL, Dr. Hyman and Dr. Kanevsky explored why thousands of women are choosing to remove \u2014 or never place \u2014 breast implants.',
  },
  {
    color: '#c9a99a',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    borderColor: '#c9a99a',
    title: 'The power of your own fat tissue',
    body: "Fat transfer breast augmentation uses your body's own cells \u2014 no foreign material, no capsular contracture risk, and natural results that move and feel like you.",
  },
  {
    color: '#8a9e92',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v11l-4 7h14l-4-7V3" />
      </svg>
    ),
    borderColor: '#b8a898',
    title: 'The Alloclae breakthrough',
    body: 'Dr. Kanevsky is one of the few surgeons in the U.S. offering Alloclae \u2014 a next-generation scaffold technology discussed in the episode that enhances and maintains fat transfer results.',
  },
];

export default function EpisodeRecap() {
  return (
    <section style={{ background: '#f0ebe4', padding: '72px 40px' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
        <p
          style={{
            fontFamily: "'Jost',sans-serif",
            fontSize: '0.75rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#5c7a6e',
            marginBottom: '14px',
          }}
        >
          From The Episode
        </p>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: 'clamp(1.8rem,3.5vw,2.6rem)',
            color: '#2a2420',
            fontWeight: 400,
            marginBottom: '48px',
          }}
        >
          What Dr. Kanevsky &amp; Dr. Hyman Discussed
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
            gap: '32px',
            textAlign: 'left',
          }}
        >
          {TOPICS.map((topic) => (
            <div
              key={topic.title}
              style={{
                background: 'white',
                borderRadius: '12px',
                padding: '32px',
                borderLeft: `3px solid ${topic.borderColor}`,
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  marginBottom: '16px',
                  background: topic.color,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {topic.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: '1.2rem',
                  color: '#2a2420',
                  fontWeight: 600,
                  marginBottom: '10px',
                }}
              >
                {topic.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Jost',sans-serif",
                  fontSize: '0.93rem',
                  color: '#6b5c52',
                  lineHeight: 1.7,
                  fontWeight: 300,
                }}
              >
                {topic.body}
              </p>
            </div>
          ))}
        </div>
        <p
          style={{
            fontFamily: "'Jost',sans-serif",
            fontSize: '0.85rem',
            color: '#b8a898',
            marginTop: '36px',
            fontStyle: 'italic',
          }}
        >
          These are placeholder talking points \u2014 replace with exact episode highlights once available.
        </p>
      </div>
    </section>
  );
}
