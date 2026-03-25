const BENEFITS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12" /><path d="M5 12C5 7 8.5 3 12 3c3.5 0 7 4 7 9-2-1-4.5-1.5-7-1.5S7 13 5 12z" />
      </svg>
    ),
    title: '100% Natural',
    body: 'No silicone, no saline, no foreign object. Your results are made entirely from your own body \u2014 so they look, feel, and move like you.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="17 1 21 5 17 9" /><path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <polyline points="7 23 3 19 7 15" /><path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    ),
    title: 'Two Results in One',
    body: "Fat is harvested from areas where you don\u2019t want it \u2014 abdomen, flanks, thighs \u2014 and transferred to where you do. Augmentation and contouring in a single procedure.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: 'Eliminate Implant Risks',
    body: 'Implant illness, BIA-ALCL, capsular contracture, rupture \u2014 these are real risks you eliminate entirely when there\u2019s no implant involved.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="2" />
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    title: 'Alloclae Technology',
    body: 'As discussed on the podcast \u2014 Alloclae is a regenerative tissue matrix that integrates with your body, enabling greater volume and shape than fat transfer alone can achieve.',
  },
];

export default function Benefits() {
  return (
    <section className="benefits-section" id="why">
      <div className="benefits-header">
        <div>
          <p className="section-eyebrow">Why Women Are Switching</p>
          <h2 className="section-title">What Implants <em>Can&rsquo;t</em> Give You</h2>
        </div>
        <p className="section-sub">
          Dr. Kanevsky and Dr. Hyman discussed it plainly on the podcast: your body has everything
          it needs. Fat transfer and Alloclae simply harness it &mdash; with zero foreign materials
          and results that feel entirely natural.
        </p>
      </div>
      <div className="benefits-grid">
        {BENEFITS.map((b) => (
          <div key={b.title} className="benefit-card">
            <div className="benefit-icon">{b.icon}</div>
            <h3 className="benefit-title">{b.title}</h3>
            <p className="benefit-body">{b.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
