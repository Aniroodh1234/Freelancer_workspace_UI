/* ==============================================
   FREELANCER WORKSPACE — Theme Toggle
   ============================================== */

const Theme = {
  current: 'light',
  init() {
    // Restore saved theme from sessionStorage (persists across page navigations)
    const saved = sessionStorage.getItem('fw-theme');
    if (saved === 'dark' || saved === 'light') {
      this.current = saved;
    }
    this.applyTheme(this.current);
    const toggleBtns = Utils.$$('[data-theme-toggle]');
    toggleBtns.forEach(btn => btn.addEventListener('click', () => this.toggle()));
  },
  toggle() {
    this.current = this.current === 'light' ? 'dark' : 'light';
    sessionStorage.setItem('fw-theme', this.current);
    this.applyTheme(this.current);
  },
  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const toggleBtns = Utils.$$('[data-theme-toggle]');
    toggleBtns.forEach(btn => {
      const icon = btn.querySelector('.theme-icon');
      if (icon) icon.innerHTML = theme === 'light' ? '🌙' : '☀️';
    });
    const toggleSwitches = Utils.$$('.theme-toggle-switch');
    toggleSwitches.forEach(s => s.classList.toggle('active', theme === 'dark'));
  }
};
