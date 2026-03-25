import { Icon } from '@iconify/react';

const BENEFITS = [
  {
    icon: <Icon icon="solar:leaf-bold" width="28" height="28" />,
    title: '100% Natural',
    body: 'No silicone, no saline, no foreign object. Your results are made entirely from your own body \u2014 so they look, feel, and move like you.',
  },
  {
    icon: <Icon icon="solar:refresh-circle-bold" width="28" height="28" />,
    title: 'Two Results in One',
    body: "Fat is harvested from areas where you don\u2019t want it \u2014 abdomen, flanks, thighs \u2014 and transferred to where you do. Augmentation and contouring in a single procedure.",
  },
  {
    icon: <Icon icon="solar:shield-check-bold" width="28" height="28" />,
    title: 'Eliminate Implant Risks',
    body: 'Implant illness, BIA-ALCL, capsular contracture, rupture \u2014 these are real risks you eliminate entirely when there\u2019s no implant involved.',
  },
  {
    icon: <Icon icon="solar:sun-bold" width="28" height="28" />,
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
          <strong>Dr. Kanevsky</strong> and <strong>Dr. Hyman</strong> discussed it plainly on the podcast: your body has everything
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
