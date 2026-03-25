import { useEffect } from 'react';
import { Icon } from '@iconify/react';
import { Check } from 'lucide-react';
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
      <Nav consultHref="/#consult" />

      <section className="thank-you-hero">
        <div className="thank-you-container">
          <div className="thank-you-icon">
            <Check strokeWidth={3} />
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
            <a href="tel:+13107734596" className="btn-primary">
              <Icon icon="solar:phone-bold" width="16" height="16" />
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
