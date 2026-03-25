import { Icon } from '@iconify/react';

const TOPICS = [
  {
    icon: <Icon icon="solar:adhesive-plaster-2-bold-duotone" width="32" height="32" color="#d2a679" />,
    title: 'Why implants may not be the answer',
    body: 'From implant illness to BIA-ALCL, Dr. Hyman and Dr. Kanevsky explored why thousands of women are choosing to remove — or never place — breast implants.',
  },
  {
    icon: <Icon icon="solar:cloud-bold" width="32" height="32" color="#c98f7c" />,
    title: 'The power of your own fat tissue',
    body: "Fat transfer breast augmentation uses your body's own cells — no foreign material, no capsular contracture risk, and natural results that move and feel like you.",
  },
  {
    icon: <Icon icon="solar:stethoscope-bold-duotone" width="32" height="32" color="#5c7a6e" />,
    title: 'The Alloclae breakthrough',
    body: 'Dr. Kanevsky is one of the few surgeons in the U.S. offering Alloclae — a next-generation scaffold technology discussed in the episode that enhances and maintains fat transfer results.',
  },
];

const NAME = (n: string) => (
  <em style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', color: '#b8897a', fontWeight: 500 }}>
    {n}
  </em>
);

export default function EpisodeRecap() {
  return (
    <section className="episode-section">
      <div className="episode-header">
        <p className="section-eyebrow">From The Episode</p>
        <h2 className="section-title">
          What {NAME('Dr. Kanevsky')} &amp; {NAME('Dr. Hyman')} Discussed
        </h2>
      </div>
      <div className="episode-grid">
        {TOPICS.map((topic) => (
          <div key={topic.title} className="episode-card">
            <div className="episode-card-icon">
              {topic.icon}
            </div>
            <h3 className="episode-card-title">{topic.title}</h3>
            <p className="episode-card-body">{topic.body}</p>
          </div>
        ))}
      </div>
      <p className="episode-disclaimer">
        These are placeholder talking points — replace with exact episode highlights once available.
      </p>
    </section>
  );
}
