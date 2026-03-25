import { Link } from 'react-router-dom';

interface FooterProps {
  homePrefix?: string;
}

export default function Footer({ homePrefix = '' }: FooterProps) {
  return (
    <>
      <footer
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: '72px 40px 48px',
          gap: 0,
        }}
      >
        {/* Logo */}
        <img
          src="/Aurafav-white.avif"
          alt="Aura Logo"
          style={{ height: '80px', width: 'auto', display: 'block', margin: '0 auto 24px' }}
        />

        {/* Brand name */}
        <div
          className="footer-logo"
          style={{ textAlign: 'center', marginBottom: '40px' }}
        >
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', letterSpacing: '0.35em', display: 'block' }}>
            AURA AESTHETICA
          </span>
        </div>

        {/* Nav links */}
        <div className="footer-links" style={{ justifyContent: 'center', marginBottom: '28px' }}>
          <a href={`${homePrefix}#why`} className="footer-link">Why Natural</a>
          <a href={`${homePrefix}#reviews`} className="footer-link">Patient Stories</a>
          <a href={`${homePrefix}#doctors`} className="footer-link">The Doctors</a>
          <Link to="/apply" className="footer-link">Book a Consultation</Link>
        </div>

        {/* Phone */}
        <a href="tel:+13107734596" className="footer-phone" style={{ display: 'block', marginBottom: '48px' }}>
          Beverly Hills, CA &middot; (310) 773-4596
        </a>

        {/* Divider */}
        <div style={{ width: '100%', maxWidth: '640px', height: '1px', background: 'rgba(250,248,245,0.08)', margin: '0 auto 28px' }} />

        {/* Disclaimer */}
        <p
          style={{
            fontSize: '0.64rem',
            color: 'rgba(250,248,245,0.28)',
            lineHeight: 1.65,
            fontWeight: 300,
            maxWidth: '640px',
            margin: '0 auto',
          }}
        >
          <strong>Medical Disclaimer:</strong> The information on this page is for educational
          purposes only and does not constitute medical advice. Individual results vary. Fat
          transfer breast augmentation and Alloclae procedures carry inherent risks. A
          consultation with Dr. Kanevsky is required to determine candidacy. Testimonials
          reflect individual patient experiences and are not a guarantee of results. This
          website is not intended to replace professional medical guidance.
        </p>
      </footer>
    </>
  );
}
