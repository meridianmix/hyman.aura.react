import { Link } from 'react-router-dom';

export default function MidCta() {
  return (
    <div className="mid-cta">
      <div>
        <h2 className="mid-cta-title">
          Ready to explore your <em>natural options?</em>
        </h2>
        <p className="mid-cta-sub">
          Dr. Kanevsky&rsquo;s consultations are private, no-pressure, and completely personalized.
          Find out in one conversation if you&rsquo;re a candidate &mdash; no commitment required.
        </p>
      </div>
      <Link to="/apply" className="mid-cta-btn">Book Your Consultation &rarr;</Link>
    </div>
  );
}
