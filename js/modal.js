/* ==============================================
   FREELANCER WORKSPACE — Modal
   ============================================== */
const Modal = {
  init() {
    document.addEventListener('click', (e) => {
      if (e.target.matches('[data-modal-open]')) {
        const id = e.target.dataset.modalOpen;
        this.open(id);
      }
      if (e.target.matches('.modal-close') || e.target.matches('.modal-overlay')) {
        this.closeAll();
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeAll();
    });
  },
  open(id) {
    const overlay = Utils.$(`#${id}`);
    if (overlay) { overlay.classList.add('active'); document.body.style.overflow = 'hidden'; }
  },
  close(id) {
    const overlay = Utils.$(`#${id}`);
    if (overlay) { overlay.classList.remove('active'); document.body.style.overflow = ''; }
  },
  closeAll() {
    Utils.$$('.modal-overlay.active').forEach(m => m.classList.remove('active'));
    Utils.$$('.drawer-overlay.active').forEach(d => d.classList.remove('active'));
    Utils.$$('.drawer.active').forEach(d => d.classList.remove('active'));
    document.body.style.overflow = '';
  }
};
