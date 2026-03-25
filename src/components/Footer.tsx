import { Link } from 'react-router-dom';

interface FooterProps {
  homePrefix?: string;
}

export default function Footer({ homePrefix = '' }: FooterProps) {
  return (
    <footer className="footer">
      {/* Logo */}
      <img
        src="/Aurafav-white.avif"
        alt="Aura Logo"
        className="footer-logo-img"
      />

      {/* Brand name */}
      <p className="footer-brand">AURA AESTHETICA</p>

      {/* Nav links */}
      <div className="footer-links">
        <a href={`${homePrefix}#why`} className="footer-link">Why Natural</a>
        <a href={`${homePrefix}#reviews`} className="footer-link">Patient Stories</a>
        <a href={`${homePrefix}#doctors`} className="footer-link">The Doctors</a>
        <Link to="/apply" className="footer-link">Book a Consultation</Link>
      </div>

      {/* Divider */}
      <div className="footer-divider" />

      {/* Address block */}
      <div className="footer-address">
        <p>© 2026 Aura Aesthetica by Dr. Jonathan Kanevsky</p>
        <p>433 N Camden Dr, Suite 770, Beverly Hills, CA 90210</p>
        <a href="tel:+13107734596" className="footer-phone">(310) 773-4596</a>
      </div>

      {/* Medical disclaimer */}
      <p className="footer-disclaimer">
        <strong>Medical Disclaimer:</strong> The information on this page is for educational
        purposes only and does not constitute medical advice. Individual results vary. Fat
        transfer breast augmentation and Alloclae procedures carry inherent risks. A
        consultation with Dr. Kanevsky is required to determine candidacy. Testimonials
        reflect individual patient experiences and are not a guarantee of results. This
        website is not intended to replace professional medical guidance.
      </p>
    </footer>
  );
}
