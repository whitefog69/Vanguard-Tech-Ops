// Applies the saved theme before the first paint, so light-mode visitors don't see a dark flash.
// A classic blocking script in <head> because the CSP forbids inline scripts.
// Keep the storage key in sync with src/components/ThemeToggle.tsx.
try {
  if (localStorage.getItem('vto-theme') === 'light') document.documentElement.dataset.theme = 'light';
} catch (e) {
  // Storage blocked: stay on the default dark theme.
}
