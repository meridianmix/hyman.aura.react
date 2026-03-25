import kanevskyImg from '../assets/images/kanevsky.avif';
import hymanImg from '../assets/images/hyman.avif';

const DOCTORS = [
  {
    variant: 'kanevsky',
    photoSrc: kanevskyImg,
    photoAlt: 'Dr. Jonathan Kanevsky',
    name: 'Dr. Jonathan Kanevsky',
    title: 'Board-Certified Plastic Surgeon \u00b7 Beverly Hills, CA',
    bio: 'Since 2016, Dr. Kanevsky has performed zero implant procedures \u2014 a decision rooted in patient safety and long-term wellbeing. His exclusive focus on fat transfer and regenerative approaches has made him one of the most sought-after natural augmentation surgeons in the country.',
    creds: [
      'American Board of Plastic Surgery Certified',
      '5,000+ natural procedures performed',
      'Alloclae clinical specialist',
      '15+ years in Beverly Hills',
    ],
  },
  {
    variant: 'hyman',
    photoSrc: hymanImg,
    photoAlt: 'Dr. Mark Hyman',
    name: 'Dr. Mark Hyman',
    title: 'Functional Medicine Physician \u00b7 Bestselling Author',
    bio: 'Dr. Mark Hyman is one of the most trusted names in modern medicine \u2014 a 20-time NYT bestselling author, founder of the UltraWellness Center, and relentless advocate for treatments that work with the body. His conversation with Dr. Kanevsky has already reached hundreds of thousands of listeners.',
    creds: [
      'Founder, UltraWellness Center',
      '20+ NYT bestselling books',
      'Millions of podcast listeners worldwide',
      'Leading functional medicine authority',
    ],
  },
];

export default function Doctors() {
  return (
    <section className="doctors-section" id="doctors">
      <p className="section-eyebrow">Featured in the Episode</p>
      <h2 className="section-title">Two Doctors. <em>One Truth.</em></h2>
      <div className="doctors-grid">
        {DOCTORS.map((doc) => (
          <div key={doc.variant} className={`doctor-card ${doc.variant}`}>
            <img
              src={doc.photoSrc}
              alt={doc.photoAlt}
              className="doctor-photo"
              onError={(e) => {
                // Fallback: hide image if not found
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
            />
            <h3 className="doctor-name">{doc.name}</h3>
            <p className="doctor-title-text">{doc.title}</p>
            <p className="doctor-bio">{doc.bio}</p>
            <div className="doctor-creds">
              {doc.creds.map((cred) => (
                <div key={cred} className="doctor-cred">
                  <span className="cred-dot" />
                  {cred}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
