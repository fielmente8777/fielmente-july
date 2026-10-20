// Checks shared by the website forms (in the browser) and the /api/lead route (on the server),
// so a real visitor sees the same rule as an error message before the server would refuse it.

/** Hidden field that people never see or fill in. Bots that fill every input fill this one too. */
export const HONEYPOT_FIELD = "company_website";

/** Nobody types a name, phone number and email in under this time; form-filling bots do. */
export const MIN_FILL_MS = 3000;

const digitsOnly = (s: string) => s.replace(/\D/g, "");

/**
 * Returns an error message, or null when the number looks real.
 * India: exactly 10 digits starting with 6-9 (every Indian mobile). Spam leads often use numbers
 * like +91 59xxxxxxxx that cannot exist. Other countries vary (UAE mobiles have 9 digits): 7-15 digits.
 */
export function phoneError(countryCode: string, phone: string): string | null {
  const digits = digitsOnly(phone);
  if (countryCode.trim() === "+91") {
    if (digits.length !== 10) return "Please enter a 10-digit mobile number";
    if (!/^[6-9]/.test(digits)) return "Please enter a valid Indian mobile number";
    if (/^(\d)\1{9}$/.test(digits)) return "Please enter a valid mobile number";
    return null;
  }
  if (digits.length < 7 || digits.length > 15) return "Please enter a valid phone number";
  return null;
}

/**
 * True for names made of random letters, like "Zjtkhxra Cbqqb" (the bot leads in the CRM).
 * Deliberately narrow so real names are never caught: a word of 5+ letters with no vowel at all,
 * or 6 or more consonants in a row (real names in any common language do not have these).
 */
export function looksRandom(name: string): boolean {
  const words = name.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").match(/[a-z]+/g) || [];
  return words.some((w) => (w.length >= 5 && !/[aeiouy]/.test(w)) || /[^aeiouy]{6,}/.test(w));
}

export function nameError(name: string): string | null {
  const n = name.trim();
  if (n.length < 2) return "Please enter your name";
  if (n.length > 80) return "Please enter a shorter name";
  if (/https?:|www\.|<|>/i.test(n)) return "Please enter your name only";
  if (!/\p{L}/u.test(n)) return "Please enter your name";
  if (looksRandom(n)) return "Please enter your real name";
  return null;
}

export const emailError = (email: string): string | null =>
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim()) ? null : "Please enter a valid email address";

/** What the website sends to /api/lead. */
export interface LeadPayload {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  description?: string;
  sourceUrl: string;
  /** Value of the hidden honeypot field (empty for real visitors). */
  hp?: string;
  /** Milliseconds between the form appearing and being sent. */
  elapsedMs?: number;
  /** Cloudflare Turnstile token, when Turnstile is switched on. */
  turnstileToken?: string;
}
