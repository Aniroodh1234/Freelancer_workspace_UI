/* ==============================================
   FREELANCER WORKSPACE — Navigation
   ============================================== */
const Navigation = {
  init() {
    this.handleLandingNav();
  },
  handleLandingNav() {
    const nav = Utils.$('.landing-nav');
    if (!nav) return;
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    });
    Utils.$$('.landing-nav a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        e.preventDefault();
        const target = Utils.$(a.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }
};
