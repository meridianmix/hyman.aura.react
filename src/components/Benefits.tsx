import { Icon } from '@iconify/react';

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

      <div className="bento-grid">

        {/* Card 1 — tall, left */}
        <div className="bento-card bento-tall bento-natural">
          <div className="bento-icon"><Icon icon="solar:body-bold" width="32" height="32" /></div>
          <h3 className="bento-title">100% Natural</h3>
          <p className="bento-body">No silicone, no saline, no foreign object. Your results are made entirely from your own body — so they look, feel, and move like you.</p>
        </div>

        {/* Card 2 — top right */}
        <div className="bento-card bento-two">
          <div className="bento-icon"><Icon icon="solar:body-shape-bold" width="32" height="32" /></div>
          <h3 className="bento-title">Two Results in One</h3>
          <p className="bento-body">Fat is harvested from areas where you don&rsquo;t want it — abdomen, flanks, thighs — and transferred to where you do. Augmentation and contouring in one procedure.</p>
        </div>

        {/* Card 3 — bottom right */}
        <div className="bento-card bento-risks">
          <div className="bento-icon"><Icon icon="solar:shield-check-bold-duotone" width="32" height="32" /></div>
          <h3 className="bento-title">Eliminate Implant Risks</h3>
          <p className="bento-body">Implant illness, BIA-ALCL, capsular contracture, rupture — real risks you eliminate entirely when there&rsquo;s no implant involved.</p>
        </div>

        {/* Card 4 — full width bottom */}
        <div className="bento-card bento-wide bento-alloclae">
          <div className="bento-wide-inner">
            <div>
              <div className="bento-icon"><Icon icon="solar:dna-bold" width="32" height="32" /></div>
              <h3 className="bento-title">Alloclae Technology</h3>
            </div>
            <p className="bento-body">As discussed on the podcast — Alloclae is a regenerative tissue matrix that integrates with your body, enabling greater volume and shape than fat transfer alone can achieve.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
