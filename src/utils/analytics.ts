declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

window.dataLayer = window.dataLayer || [];

const LEAD_EVENT_KEY = 'lead_event_fired';
const FORM_SUBMIT_KEY = 'form_submit_data';

export interface TrackingData {
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmTerm: string;
  utmContent: string;
  fbclid: string;
  fbp: string;
  fbc: string;
}

export interface FormSubmitData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interest: string;
  formSource: string;
  submittedAt: string;
  landingPage: string;
  referrer: string;
  referenceId?: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmTerm: string;
  utmContent: string;
  fbclid: string;
  fbp: string;
  fbc: string;
}

export function pushToDataLayer(event: Record<string, unknown>): void {
  window.dataLayer.push(event);
  console.log('📊 [DATALAYER] Event pushed:', event);
}

export function getUTMParams(): Omit<TrackingData, 'fbp' | 'fbc'> {
  const params = new URLSearchParams(window.location.search);
  return {
    utmSource: params.get('utm_source') || '',
    utmMedium: params.get('utm_medium') || '',
    utmCampaign: params.get('utm_campaign') || '',
    utmTerm: params.get('utm_term') || '',
    utmContent: params.get('utm_content') || '',
    fbclid: params.get('fbclid') || '',
  };
}

export function getFacebookCookies(): { fbp: string; fbc: string } {
  const cookies = document.cookie.split(';');
  let fbp = '';
  let fbc = '';
  cookies.forEach((cookie) => {
    const [name, value] = cookie.trim().split('=');
    if (name === '_fbp') fbp = value;
    if (name === '_fbc') fbc = value;
  });
  return { fbp, fbc };
}

export function shouldFireLeadEvent(): boolean {
  return sessionStorage.getItem(LEAD_EVENT_KEY) !== 'true';
}

export function markLeadEventFired(): void {
  sessionStorage.setItem(LEAD_EVENT_KEY, 'true');
}

export function resetLeadEventFlag(): void {
  sessionStorage.removeItem(LEAD_EVENT_KEY);
}

export function storeFormData(data: FormSubmitData): void {
  sessionStorage.setItem(FORM_SUBMIT_KEY, JSON.stringify(data));
}

export function getStoredFormData(): FormSubmitData | null {
  const data = sessionStorage.getItem(FORM_SUBMIT_KEY);
  return data ? (JSON.parse(data) as FormSubmitData) : null;
}

export function formatPhone(value: string): string {
  let val = value.replace(/\D/g, '').substring(0, 10);
  if (val.length >= 7) {
    val = '(' + val.substring(0, 3) + ') ' + val.substring(3, 6) + '-' + val.substring(6);
  } else if (val.length >= 4) {
    val = '(' + val.substring(0, 3) + ') ' + val.substring(3);
  } else if (val.length > 0) {
    val = '(' + val;
  }
  return val;
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function firePageView(): void {
  const utmParams = getUTMParams();
  const fbCookies = getFacebookCookies();
  pushToDataLayer({
    event: 'PageView',
    page: {
      title: document.title,
      url: window.location.href,
      path: window.location.pathname,
      referrer: document.referrer,
    },
    tracking: {
      ...utmParams,
      fbp: fbCookies.fbp,
      fbc: fbCookies.fbc,
    },
  });
}

export function fireLeadEvent(formData: FormSubmitData): void {
  const utmParams = getUTMParams();
  if (!shouldFireLeadEvent()) {
    console.log('🚫 [DATALAYER] Lead event blocked - already fired this session');
    return;
  }
  pushToDataLayer({
    event: 'Lead',
    lead: {
      formId: formData.formSource || 'unknown',
      formName: 'Consultation Booking',
      referenceId: formData.referenceId || '',
      submittedAt: formData.submittedAt || new Date().toISOString(),
    },
    user: {
      firstName: formData.firstName || '',
      lastName: formData.lastName || '',
      email: formData.email || '',
      phone: formData.phone || '',
      interest: formData.interest || '',
    },
    page: {
      landingPage: formData.landingPage || window.location.href,
      referrer: formData.referrer || document.referrer,
      conversionPage: window.location.href,
    },
    tracking: {
      utmSource: formData.utmSource || utmParams.utmSource,
      utmMedium: formData.utmMedium || utmParams.utmMedium,
      utmCampaign: formData.utmCampaign || utmParams.utmCampaign,
      utmTerm: formData.utmTerm || utmParams.utmTerm,
      utmContent: formData.utmContent || utmParams.utmContent,
      fbclid: formData.fbclid || utmParams.fbclid,
      fbp: formData.fbp || '',
      fbc: formData.fbc || '',
    },
  });
  markLeadEventFired();
  console.log('✅ [DATALAYER] Lead event fired successfully (deduplicated)');
}
