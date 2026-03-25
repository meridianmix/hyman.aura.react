import { Link } from 'react-router-dom';

interface NavProps {
  homeHref?: string;
  consultHref?: string;
}

export default function Nav({ homeHref = '/', consultHref = '/#consult' }: NavProps) {
  return (
    <nav>
      <Link to={homeHref} className="nav-logo">
        Aura Aesthetica
        <span>Dr. Jonathan Kanevsky &middot; Beverly Hills</span>
      </Link>
      <div className="nav-right">
        <a href="tel:+13107734596" className="nav-phone">(310) 773-4596</a>
        <a href={consultHref} className="nav-cta">Book a Consultation</a>
      </div>
    </nav>
  );
}
