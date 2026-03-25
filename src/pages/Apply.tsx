import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ConsultationForm from '../components/ConsultationForm';

export default function Apply() {
  return (
    <>
      <Nav consultHref="#apply-form" />

      <main
        style={{
          background: '#faf8f5',
          minHeight: '100vh',
          padding: '80px 24px 100px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div style={{ maxWidth: '560px', width: '100%' }}>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.72rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#5c7a6e',
              marginBottom: '14px',
              textAlign: 'center',
            }}
          >
            Your Next Step
          </p>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 400,
              color: '#2a2420',
              lineHeight: 1.18,
              marginBottom: '16px',
              textAlign: 'center',
            }}
          >
            Book Your <em style={{ fontStyle: 'italic', color: '#c9a99a' }}>Consultation</em>
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.97rem',
              lineHeight: 1.8,
              color: '#6b5c52',
              fontWeight: 300,
              marginBottom: '48px',
              textAlign: 'center',
            }}
          >
            A private, unhurried conversation about what&rsquo;s possible for you.
            Dr. Kanevsky will give you an honest assessment &mdash; no upselling, no pressure.
          </p>

          <div
            id="apply-form"
            style={{
              background: 'white',
              borderRadius: '0.375rem',
              padding: '40px',
              boxShadow: '0 4px 24px rgba(42,36,32,0.07)',
            }}
          >
            <p className="form-card-label">Book a Consultation</p>
            <ConsultationForm
              formId="applyForm"
              showTitle
              titleText="Request <em>Your Spot</em>"
              subText="Limited consultations available each month. Spaces reserved on a first-come basis."
              showDivider
              trustVariant="bottom"
            />
          </div>
        </div>
      </main>

      <Footer homePrefix="/" />
    </>
  );
}
