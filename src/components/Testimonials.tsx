import { Icon } from '@iconify/react';

const TESTIMONIALS = [
  {
    quote: "I'd had implants for 12 years and always felt something was off. After fat transfer with Dr. Kanevsky, I finally feel like myself. The results are so natural my husband can't believe the difference.",
    name: 'Sarah M.',
    detail: 'Implant removal + fat transfer · Beverly Hills',
    avatar: 'https://i.pravatar.cc/80?img=20',
  },
  {
    quote: "I heard Dr. Kanevsky on the podcast and immediately booked. The Alloclae procedure gave me exactly what I wanted — no implants, beautiful shape, and zero anxiety about what's in my body.",
    name: 'Lauren K.',
    detail: 'Alloclae procedure · Came from podcast',
    avatar: 'https://i.pravatar.cc/80?img=32',
  },
  {
    quote: "The bonus I didn't expect? My waist is smaller now too. Dr. Kanevsky took fat from my abdomen — it's like getting a tummy tuck and augmentation at the same time. I tell every woman I know.",
    name: 'Michelle T.',
    detail: 'Fat transfer augmentation · Los Angeles',
    avatar: 'https://i.pravatar.cc/80?img=51',
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
            <p className="testimonial-quote">{t.quote}</p>
            <div className="testimonial-author">
              <img src={t.avatar} alt={t.name} className="t-avatar" />
              <div>
                <p className="t-name">{t.name}</p>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} icon="solar:star-bold" width="13" height="13" />
                  ))}
                </div>
                <p className="t-detail">{t.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
