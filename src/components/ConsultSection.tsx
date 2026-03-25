import ConsultationForm from './ConsultationForm';

const WHY_ITEMS = [
  {
    num: '01',
    title: 'Honest candidacy assessment',
    text: 'Not everyone is a candidate \u2014 and Dr. Kanevsky will tell you honestly. No upselling, no false promises.',
  },
  {
    num: '02',
    title: 'Personalized treatment plan',
    text: 'Every patient is different. You\u2019ll leave with a clear picture of what your procedure would look like and what results are realistic for your body.',
  },
  {
    num: '03',
    title: 'No pressure. No obligation.',
    text: 'Ask everything you want, take your time, and make the decision that feels right \u2014 on your timeline, not ours.',
  },
  {
    num: '04',
    title: 'Reach us any way you prefer',
    text: null, // rendered separately with phone link
  },
];

export default function ConsultSection() {
  return (
    <section className="consult-section" id="consult">
      <div className="consult-grid">
        <div className="consult-left">
          <p className="section-eyebrow">Your Next Step</p>
          <h2 className="section-title">Book Your Consultation</h2>
          <p className="section-sub">
            If you heard Dr. Kanevsky on the podcast and felt something click &mdash; this is your
            next step. A private, unhurried conversation about what&rsquo;s possible for you.
          </p>
          <div className="why-list">
            {WHY_ITEMS.map((item) => (
              <div key={item.num} className="why-item">
                <span className="why-num">{item.num}</span>
                <div>
                  <p className="why-title">{item.title}</p>
                  {item.text ? (
                    <p className="why-text">{item.text}</p>
                  ) : (
                    <p className="why-text">
                      Fill out the form, call{' '}
                      <a
                        href="tel:+13107734596"
                        style={{ color: 'var(--blush-deep)', textDecoration: 'none', fontWeight: 500 }}
                      >
                        (310) 773-4596
                      </a>
                      , or book online. We respond within one business day.
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="consult-form-box">
          <p className="form-card-label">Book a Consultation</p>
          <ConsultationForm
            formId="bottomForm"
            showTitle
            titleText="Request <em>Your Spot</em>"
            subText="Limited consultations available each month. Spaces reserved on a first-come basis."
            showDivider
            trustVariant="bottom"
          />
        </div>
      </div>
    </section>
  );
}
