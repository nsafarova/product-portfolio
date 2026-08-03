// Mobile nav toggle
(() => {
  const toggle = document.getElementById('navToggle');
  const panel = document.getElementById('navMobilePanel');
  if (!toggle || !panel) return;

  toggle.addEventListener('click', () => {
    const isOpen = panel.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  panel.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      panel.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();
