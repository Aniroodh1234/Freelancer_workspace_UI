/* ==============================================
   FREELANCER WORKSPACE — Dropdown
   ============================================== */
const Dropdown = {
  init() {
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('[data-dropdown-toggle]');
      if (trigger) {
        e.stopPropagation();
        const menuId = trigger.dataset.dropdownToggle;
        const menu = Utils.$(`#${menuId}`);
        if (menu) {
          const isOpen = menu.classList.contains('active');
          this.closeAll();
          if (!isOpen) menu.classList.add('active');
        }
        return;
      }
      if (!e.target.closest('.dropdown-menu')) this.closeAll();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeAll();
    });
  },
  closeAll() {
    Utils.$$('.dropdown-menu.active').forEach(m => m.classList.remove('active'));
    Utils.$$('.notifications-panel.active').forEach(p => p.classList.remove('active'));
  }
};
