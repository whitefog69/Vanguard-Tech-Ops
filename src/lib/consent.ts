// Cookie consent state, stored in the visitor's browser (not a cookie).
// CNIL recommends asking again after 6 months, so stored choices expire.
//
// When analytics are added: load them only when getConsent()?.analytics is true,
// listen for CONSENT_CHANGED_EVENT to start/stop them, and update the Privacy Policy.

export interface ConsentChoice {
  analytics: boolean;
  date: string;
}

const STORAGE_KEY = 'vto-consent';
const MAX_AGE_MS = 1000 * 60 * 60 * 24 * 182; // ~6 months

export const CONSENT_CHANGED_EVENT = 'vto:consent-changed';
export const OPEN_SETTINGS_EVENT = 'vto:open-cookie-settings';

export function getConsent(): ConsentChoice | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const choice = JSON.parse(raw) as ConsentChoice;
    if (Date.now() - new Date(choice.date).getTime() > MAX_AGE_MS) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return choice;
  } catch {
    return null;
  }
}

export function saveConsent(analytics: boolean) {
  const choice: ConsentChoice = { analytics, date: new Date().toISOString() };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(choice));
  } catch {
    // Storage blocked: the banner will simply show again next visit.
  }
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGED_EVENT, { detail: choice }));
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}
