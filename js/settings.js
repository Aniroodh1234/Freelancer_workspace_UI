/* ==============================================
   FREELANCER WORKSPACE — Settings Page
   ============================================== */
const SettingsPage = {
  activeTab: 'profile',
  init() {
    this.bindEvents();
    this.showTab('profile');
  },
  bindEvents() {
    Utils.$$('.settings-nav-item').forEach(item => {
      item.addEventListener('click', () => {
        this.showTab(item.dataset.tab);
      });
    });
    const themeToggle = Utils.$('.theme-toggle-switch');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        themeToggle.classList.toggle('active');
        Theme.toggle();
      });
    }
    Utils.$$('.toggle[data-setting]').forEach(toggle => {
      toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        Utils.showToast('Setting updated', 'success');
      });
    });
  },
  showTab(tabId) {
    this.activeTab = tabId;
    Utils.$$('.settings-nav-item').forEach(i => i.classList.toggle('active', i.dataset.tab === tabId));
    Utils.$$('.settings-section').forEach(s => s.classList.toggle('active', s.id === 'settings-' + tabId));
  }
};
