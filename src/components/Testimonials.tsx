const StarIcon = () => (
  <svg viewBox="0 0 12 12" fill="currentColor">
    <path d="M6 1l1.3 2.7 3 .43-2.17 2.1.5 3L6 7.9l-2.63 1.43.5-3L1.7 4.13l3-.43z" />
  </svg>
);

const TESTIMONIALS = [
  {
    quote:
      "\u201cI\u2019d had implants for 12 years and always felt something was off. After fat transfer with Dr. Kanevsky, I finally feel like myself. The results are so natural my husband can\u2019t believe the difference.\u201d",
    initial: 'S',
    name: 'Sarah M.',
    detail: 'Implant removal + fat transfer \u00b7 Beverly Hills',
  },
  {
    quote:
      "\u201cI heard Dr. Kanevsky on the podcast and immediately booked. The Alloclae procedure gave me exactly what I wanted \u2014 no implants, beautiful shape, and zero anxiety about what\u2019s in my body.\u201d",
    initial: 'L',
    name: 'Lauren K.',
    detail: 'Alloclae procedure \u00b7 Came from podcast',
  },
  {
    quote:
      "\u201cThe bonus I didn\u2019t expect? My waist is smaller now too. Dr. Kanevsky took fat from my abdomen \u2014 it\u2019s like getting a tummy tuck and augmentation at the same time. I tell every woman I know.\u201d",
    initial: 'M',
    name: 'Michelle T.',
    detail: 'Fat transfer augmentation \u00b7 Los Angeles',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="reviews">
      <p className="section-eyebrow">Patient Experiences</p>
      <h2 className="section-title">Real Women. <em>Real Results.</em></h2>
      <div className="testimonials-grid">
        {TESTIMONIALS.map((t) => (
          <div key={t.name} className="testimonial-card">
            <div className="stars">
              {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
            </div>
            <p className="testimonial-quote">{t.quote}</p>
            <div className="testimonial-author">
              <div className="t-avatar">{t.initial}</div>
              <div>
                <p className="t-name">{t.name}</p>
                <p className="t-detail">{t.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
