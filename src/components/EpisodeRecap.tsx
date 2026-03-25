import { Icon } from '@iconify/react';

const TOPICS = [
  {
    color: '#5c7a6e',
    icon: <Icon icon="solar:earth-bold" width="18" height="18" color="white" />,
    title: 'Why implants may not be the answer',
    body: 'From implant illness to BIA-ALCL, Dr. Hyman and Dr. Kanevsky explored why thousands of women are choosing to remove — or never place — breast implants.',
  },
  {
    color: '#c9a99a',
    icon: <Icon icon="solar:heart-bold" width="18" height="18" color="white" />,
    title: 'The power of your own fat tissue',
    body: "Fat transfer breast augmentation uses your body's own cells — no foreign material, no capsular contracture risk, and natural results that move and feel like you.",
  },
  {
    color: '#8a9e92',
    icon: <Icon icon="solar:flask-bold" width="18" height="18" color="white" />,
    title: 'The Alloclae breakthrough',
    body: 'Dr. Kanevsky is one of the few surgeons in the U.S. offering Alloclae — a next-generation scaffold technology discussed in the episode that enhances and maintains fat transfer results.',
  },
];

export default function EpisodeRecap() {
  return (
    <section className="episode-section">
      <div className="episode-header">
        <p className="section-eyebrow">From The Episode</p>
        <h2 className="section-title">What Dr. Kanevsky &amp; Dr. Hyman Discussed</h2>
      </div>
      <div className="episode-grid">
        {TOPICS.map((topic) => (
          <div key={topic.title} className="episode-card">
            <div
              className="episode-card-icon"
              style={{ background: topic.color }}
            >
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
