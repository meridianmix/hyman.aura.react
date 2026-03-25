import { Link } from 'react-router-dom';

export default function AnnouncementBar() {
  return (
    <div className="announce-bar">
      <span className="announce-dot"></span>
      <p>As heard on Dr. Mark Hyman's podcast — Natural Alternatives to Implants &amp; Alloclae</p>
      <span className="announce-dot"></span>
      <Link to="/apply">Book Your Consultation &rarr;</Link>
    </div>
  );
}
