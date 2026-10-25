// Clickjacking defense: GitHub Pages can't send X-Frame-Options / CSP frame-ancestors,
// so break out of any frame an attacker tries to embed this site in. Runs first, pre-paint.
try {
  if (window.top !== window.self) {
    window.top.location = window.self.location.href;
  }
} catch (e) {
  // Cross-origin parent blocks access; navigation attempt above still applies.
}

// Applies the saved theme before the first paint, so light-mode visitors don't see a dark flash.
// A classic blocking script in <head> because the CSP forbids inline scripts.
// Keep the storage key in sync with src/components/ThemeToggle.tsx.
try {
  if (localStorage.getItem('vto-theme') === 'light') document.documentElement.dataset.theme = 'light';
} catch (e) {
  // Storage blocked: stay on the default dark theme.
}
