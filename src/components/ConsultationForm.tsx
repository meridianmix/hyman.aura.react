import { useState, useCallback } from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import {
  getUTMParams,
  getFacebookCookies,
  resetLeadEventFlag,
  storeFormData,
  pushToDataLayer,
  formatPhone,
  isValidEmail,
} from '../utils/analytics';

interface ConsultationFormProps {
  formId: string;
  showTitle?: boolean;
  titleText?: string;
  subText?: string;
  showDivider?: boolean;
  trustVariant?: 'hero' | 'bottom';
}

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interest: string;
}

const INTEREST_OPTIONS = [
  'Fat Transfer Augmentation',
  'Alloclae Procedure',
  'Implant Removal + Natural Replacement',
  'Comparing My Options',
  'I heard about it on the podcast',
];

export default function ConsultationForm({
  formId,
  showTitle = false,
  titleText,
  subText,
  showDivider = false,
  trustVariant = 'hero',
}: ConsultationFormProps) {
  const navigate = useNavigate();

  const [values, setValues] = useState<FormValues>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: '',
  });
  const [emailError, setEmailError] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [loading, setLoading] = useState(false);
  const [formStarted, setFormStarted] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      if (name === 'phone') {
        setValues((prev) => ({ ...prev, phone: formatPhone(value) }));
      } else {
        setValues((prev) => ({ ...prev, [name]: value }));
      }
      if (name === 'email' && emailError) {
        if (isValidEmail(value) || value === '') setEmailError('');
      }
    },
    [emailError],
  );

  const handleEmailBlur = useCallback(() => {
    if (values.email && !isValidEmail(values.email)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  }, [values.email]);

  const handleFocusIn = useCallback(() => {
    if (!formStarted) {
      setFormStarted(true);
      const utmParams = getUTMParams();
      const fbCookies = getFacebookCookies();
      pushToDataLayer({
        event: 'form_start',
        formId,
        formName: 'Consultation Booking',
        tracking: { ...utmParams, ...fbCookies },
      });
    }
  }, [formStarted, formId]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (values.email && !isValidEmail(values.email)) {
        setEmailError('Please enter a valid email address.');
        return;
      }

      const utmParams = getUTMParams();
      const fbCookies = getFacebookCookies();

      const data = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phone: values.phone,
        interest: values.interest,
        formSource: formId,
        submittedAt: new Date().toISOString(),
        landingPage: window.location.href,
        referrer: document.referrer,
        ...utmParams,
        ...fbCookies,
      };

      resetLeadEventFlag();
      storeFormData(data);

      pushToDataLayer({
        event: 'form_submit',
        formId,
        formName: 'Consultation Booking',
        formData: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          interest: data.interest,
        },
        userData: {
          landingPage: data.landingPage,
          referrer: data.referrer,
          submittedAt: data.submittedAt,
        },
        tracking: {
          utmSource: data.utmSource,
          utmMedium: data.utmMedium,
          utmCampaign: data.utmCampaign,
          utmTerm: data.utmTerm,
          utmContent: data.utmContent,
          fbclid: data.fbclid,
          fbp: data.fbp,
          fbc: data.fbc,
        },
      });

      setLoading(true);
      setSubmitError('');

      try {
        const response = await fetch(import.meta.env.VITE_SUPABASE_FORM_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify(data),
        });

        const result = await response.json() as { success?: boolean; referenceId?: string; error?: string };

        if (response.ok && result.success) {
          storeFormData({ ...data, referenceId: result.referenceId });
          navigate('/thank-you');
        } else {
          throw new Error(result.error || 'Something went wrong');
        }
      } catch (err) {
        console.error('Form submission error:', err);
        setSubmitError(
          'Sorry, there was an error submitting your request. Please try again or call us at (310) 773-4596.',
        );
      } finally {
        setLoading(false);
      }
    },
    [values, formId, navigate],
  );

  return (
    <>
      {showTitle && titleText && (
        <h2
          className="form-card-title"
          dangerouslySetInnerHTML={{ __html: titleText }}
        />
      )}
      {subText && <p className="form-card-sub">{subText}</p>}
      {showDivider && <div className="form-divider" />}

      <form id={formId} className="consult-form" onSubmit={handleSubmit} onFocus={handleFocusIn}>
        <div className="f-row">
          <div className="f-field">
            <label className="f-label">First Name</label>
            <input
              type="text"
              name="firstName"
              className="f-input"
              placeholder="Jane"
              required
              value={values.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="f-field">
            <label className="f-label">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="f-input"
              placeholder="Smith"
              required
              value={values.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="f-field">
          <label className="f-label">Email Address</label>
          <input
            type="email"
            name="email"
            className="f-input"
            placeholder="jane@email.com"
            required
            value={values.email}
            onChange={handleChange}
            onBlur={handleEmailBlur}
            style={emailError ? { borderColor: '#c0392b' } : undefined}
          />
        </div>
        {emailError && <p className="field-error">{emailError}</p>}

        <div className="f-field">
          <label className="f-label">Phone Number</label>
          <input
            type="tel"
            name="phone"
            className="f-input"
            placeholder="(310) 000-0000"
            value={values.phone}
            onChange={handleChange}
          />
        </div>

        <div className="f-field">
          <label className="f-label">I&rsquo;m interested in</label>
          <div className="f-select-wrap">
            <select
              name="interest"
              className={`f-input ${values.interest ? '' : 'f-input-unselected'}`.trim()}
              value={values.interest}
              onChange={handleChange}
            >
              <option value="" disabled>
                Choose your goal&hellip;
              </option>
              {INTEREST_OPTIONS.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
            <Icon icon="solar:alt-arrow-down-linear" className="f-select-icon" />
          </div>
        </div>

        {submitError && <p className="form-error">{submitError}</p>}

        <button type="submit" className="f-submit" disabled={loading}>
          {loading ? 'Sending...' : 'Book My Consultation →'}
        </button>
      </form>

      {trustVariant === 'hero' ? (
        <div className="form-trust">
          <div className="trust-line">
            <Icon icon="solar:star-bold" />
            Board-Certified &middot; 5,000+ procedures &middot; Beverly Hills
          </div>
          <div className="trust-line">
            <Icon icon="solar:lock-bold" />
            Your info is 100% private and never shared
          </div>
          <div className="trust-line">
            <Icon icon="solar:check-circle-bold" />
            No obligation &mdash; just an honest conversation
          </div>
        </div>
      ) : (
        <div className="form-trust" style={{ marginTop: '16px' }}>
          <div className="trust-line">
            <Icon icon="solar:lock-bold" />
            100% private &mdash; your info is never shared
          </div>
          <div className="trust-line">
            <Icon icon="solar:check-circle-bold" />
            We respond within one business day
          </div>
        </div>
      )}
    </>
  );
}
