/* ==============================================
   FREELANCER WORKSPACE — Sidebar
   ============================================== */

const Sidebar = {
  el: null,
  overlay: null,
  isCollapsed: false,
  isMobileOpen: false,

  init() {
    this.el = Utils.$('.sidebar');
    if (!this.el) return;
    this.overlay = Utils.$('.sidebar-overlay');
    const toggleBtn = Utils.$('.sidebar-toggle-btn');
    const mobileBtn = Utils.$('.mobile-menu-btn');
    if (toggleBtn) toggleBtn.addEventListener('click', () => this.toggleCollapse());
    if (mobileBtn) mobileBtn.addEventListener('click', () => this.toggleMobile());
    if (this.overlay) this.overlay.addEventListener('click', () => this.closeMobile());
    this.setActiveNav();
  },

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
    this.el.classList.toggle('collapsed', this.isCollapsed);
    const shell = Utils.$('.app-shell');
    if (shell) shell.classList.toggle('sidebar-collapsed', this.isCollapsed);
  },

  toggleMobile() {
    this.isMobileOpen ? this.closeMobile() : this.openMobile();
  },

  openMobile() {
    this.isMobileOpen = true;
    this.el.classList.add('mobile-open');
    if (this.overlay) this.overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  },

  closeMobile() {
    this.isMobileOpen = false;
    this.el.classList.remove('mobile-open');
    if (this.overlay) this.overlay.classList.remove('active');
    document.body.style.overflow = '';
  },

  setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'dashboard.html';
    Utils.$$('.sidebar-nav-item').forEach(item => {
      const href = item.getAttribute('href');
      item.classList.toggle('active', href === currentPage);
    });
  }
};
