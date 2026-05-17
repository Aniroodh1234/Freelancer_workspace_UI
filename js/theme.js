/* ==============================================
   FREELANCER WORKSPACE — Theme Toggle
   ============================================== */

const Theme = {
  current: 'dark',
  init() {
    this.applyTheme(this.current);
    const toggleBtns = Utils.$$('[data-theme-toggle]');
    toggleBtns.forEach(btn => btn.addEventListener('click', () => this.toggle()));
  },
  toggle() {
    this.current = this.current === 'dark' ? 'light' : 'dark';
    this.applyTheme(this.current);
    Utils.showToast(`Switched to ${this.current} mode`, 'info');
  },
  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const toggleBtns = Utils.$$('[data-theme-toggle]');
    toggleBtns.forEach(btn => {
      const icon = btn.querySelector('.theme-icon');
      if (icon) icon.innerHTML = theme === 'dark' ? '☀️' : '🌙';
    });
    const toggleSwitches = Utils.$$('.theme-toggle-switch');
    toggleSwitches.forEach(s => s.classList.toggle('active', theme === 'light'));
  }
};
