import { next } from '@vercel/functions';

// Passwortschutz nur für die Staging-Kopie (nicht Teil der späteren Live-Seite).
// Benutzername beliebig, geprüft wird nur das Passwort (SHA-256-Hash).
const HASH = 'a8c7eaa01fe26b7aea6b64ec65a21cf115e45623d342beec852f99c94219c684';

async function sha256(text) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, '0')).join('');
}

export default async function middleware(request) {
  const auth = request.headers.get('authorization') || '';
  if (auth.startsWith('Basic ')) {
    try {
      const decoded = atob(auth.slice(6));
      const pw = decoded.slice(decoded.indexOf(':') + 1);
      if ((await sha256(pw)) === HASH) return next();
    } catch (e) {}
  }
  return new Response('Passwort erforderlich', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Kerstin Bonke - Entwurf", charset="UTF-8"' },
  });
}
