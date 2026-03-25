import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnnouncementBar from '../components/AnnouncementBar';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { getStoredFormData, fireLeadEvent } from '../utils/analytics';

export default function ThankYou() {
  useEffect(() => {
    const formData = getStoredFormData();
    if (formData) {
      fireLeadEvent(formData);
    } else {
      console.log('⚠️ [DATALAYER] No form data found for Lead event');
    }
  }, []);

  return (
    <>
      <AnnouncementBar />
      <Nav consultHref="/#consult" />

      <section className="thank-you-hero">
        <div className="thank-you-container">
          <div className="thank-you-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <p className="thank-you-eyebrow">Consultation Request Received</p>
          <h1 className="thank-you-title">
            Thank You for Reaching Out,
            <br />
            <em>We&rsquo;ll Be in Touch Soon</em>
          </h1>
          <p className="thank-you-subtitle">
            Your consultation request has been received. Our team will contact you within one
            business day to schedule your private conversation with Dr. Kanevsky.
          </p>

          <div className="next-steps-card">
            <h3 className="next-steps-title">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              What Happens Next
            </h3>

            <div className="step-item">
              <span className="step-number">1</span>
              <div className="step-content">
                <h4>Confirmation Email</h4>
                <p>
                  You&rsquo;ll receive a confirmation email with your submission details within
                  the next few minutes.
                </p>
              </div>
            </div>

            <div className="step-item">
              <span className="step-number">2</span>
              <div className="step-content">
                <h4>Personal Call</h4>
                <p>
                  Our patient coordinator will call you within 24 hours to discuss your goals
                  and find a convenient time.
                </p>
              </div>
            </div>

            <div className="step-item">
              <span className="step-number">3</span>
              <div className="step-content">
                <h4>Your Consultation</h4>
                <p>
                  Meet with Dr. Kanevsky for a private, no-pressure conversation about what&rsquo;s
                  possible for you.
                </p>
              </div>
            </div>
          </div>

          <div className="thank-you-actions">
            <Link to="/" className="btn-primary">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Return to Homepage
            </Link>
            <a href="tel:+13107734596" className="btn-secondary">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call Us Now
            </a>
          </div>

          <div className="contact-info">
            <p>
              Questions? Email us at{' '}
              <a href="mailto:info@auraaesthetica.com">info@auraaesthetica.com</a> or call{' '}
              <a href="tel:+13107734596">(310) 773-4596</a>
            </p>
          </div>
        </div>
      </section>

      <Footer homePrefix="/" />
    </>
  );
}
