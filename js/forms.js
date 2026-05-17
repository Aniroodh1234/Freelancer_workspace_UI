/* ==============================================
   FREELANCER WORKSPACE — Forms
   ============================================== */
const Forms = {
  init() {
    Utils.$$('form[data-validate]').forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (this.validate(form)) {
          Utils.showToast('Changes saved successfully!', 'success');
        }
      });
    });
  },
  validate(form) {
    let valid = true;
    Utils.$$('.input-error', form).forEach(e => e.remove());
    Utils.$$('.input-field[required]', form).forEach(field => {
      field.classList.remove('error');
      if (!field.value.trim()) {
        valid = false;
        field.classList.add('error');
        const err = Utils.create('div', { className: 'input-error', textContent: 'This field is required' });
        field.parentElement.appendChild(err);
      }
      if (field.type === 'email' && field.value && !field.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        valid = false;
        field.classList.add('error');
        const err = Utils.create('div', { className: 'input-error', textContent: 'Please enter a valid email' });
        field.parentElement.appendChild(err);
      }
    });
    return valid;
  }
};
