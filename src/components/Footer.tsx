interface FooterProps {
  homePrefix?: string;
}

export default function Footer({ homePrefix = '' }: FooterProps) {
  return (
    <>
      <footer>
        <div className="footer-logo">
          <img src="/Aurafav-white.avif" alt="Aura Logo" style={{ height: '36px', width: 'auto', display: 'block', marginBottom: '8px' }} />
          <span style={{ fontFamily: "'Cormorant Garamond', serif", display: 'block', marginBottom: '4px' }}>AURA AESTHETICA</span>
          <span>Beverly Hills, CA &middot; (310) 773-4596</span>
        </div>
        <div className="footer-links">
          <a href={`${homePrefix}#why`} className="footer-link">Why Natural</a>
          <a href={`${homePrefix}#reviews`} className="footer-link">Patient Stories</a>
          <a href={`${homePrefix}#doctors`} className="footer-link">The Doctors</a>
          <a href={`${homePrefix}#consult`} className="footer-link">Book a Consultation</a>
        </div>
        <a href="tel:+13107734596" className="footer-phone">(310) 773-4596</a>
      </footer>
      <div className="disclaimer-bar">
        <p>
          <strong>Medical Disclaimer:</strong> The information on this page is for educational
          purposes only and does not constitute medical advice. Individual results vary. Fat
          transfer breast augmentation and Alloclae procedures carry inherent risks. A
          consultation with Dr. Kanevsky is required to determine candidacy. Testimonials
          reflect individual patient experiences and are not a guarantee of results. This
          website is not intended to replace professional medical guidance.
        </p>
      </div>
    </>
  );
}
