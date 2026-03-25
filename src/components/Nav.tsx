import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

interface NavProps {
  homeHref?: string;
  consultHref?: string;
}

export default function Nav({ homeHref = '/', consultHref = '/apply' }: NavProps) {
  return (
    <nav style={{ height: '64px', justifyContent: 'space-between' }}>

      {/* Left: icon + brand text side by side */}
      <Link
        to={homeHref}
        className="nav-logo"
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '12px' }}
      >
        <img
          src="/Aurafav-black.avif"
          alt="Aura Logo"
          style={{ height: '36px', width: 'auto', flexShrink: 0 }}
        />
        <span style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.05rem', fontWeight: 400, letterSpacing: '0.06em', color: 'var(--charcoal)', lineHeight: 1, textTransform: 'none' }}>
            Aura Aesthetica
          </span>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.57rem', fontWeight: 400, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--taupe)', lineHeight: 1 }}>
            By Dr. Jonathan Kanevsky
          </span>
        </span>
      </Link>

      {/* Right: phone + CTA */}
      <div className="nav-right" style={{ gap: '24px' }}>
        <a
          href="tel:+13107734596"
          className="nav-phone"
          style={{ alignItems: 'center', gap: '6px' }}
        >
          <Icon icon="solar:phone-bold" style={{ width: '13px', height: '13px', color: 'var(--taupe)', flexShrink: 0 }} />
          (310) 773-4596
        </a>
        <Link to={consultHref} className="nav-cta" style={{ whiteSpace: 'nowrap' }}>Book a Consultation</Link>
      </div>

    </nav>
  );
}
