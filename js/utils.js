/* ==============================================
   FREELANCER WORKSPACE — Utility Helpers
   ============================================== */

const Utils = {
  $(selector, parent = document) {
    return parent.querySelector(selector);
  },
  $$(selector, parent = document) {
    return [...parent.querySelectorAll(selector)];
  },
  create(tag, attrs = {}, children = []) {
    const el = document.createElement(tag);
    Object.entries(attrs).forEach(([k, v]) => {
      if (k === 'className') el.className = v;
      else if (k === 'innerHTML') el.innerHTML = v;
      else if (k === 'textContent') el.textContent = v;
      else if (k.startsWith('on')) el.addEventListener(k.slice(2).toLowerCase(), v);
      else if (k === 'dataset') Object.entries(v).forEach(([dk, dv]) => el.dataset[dk] = dv);
      else el.setAttribute(k, v);
    });
    children.forEach(c => { if (typeof c === 'string') el.appendChild(document.createTextNode(c)); else if (c) el.appendChild(c); });
    return el;
  },
  formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount);
  },
  formatDate(dateStr) {
    if (!dateStr) return '—';
    return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  },
  formatDateShort(dateStr) {
    if (!dateStr) return '—';
    return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  },
  daysUntil(dateStr) {
    const diff = new Date(dateStr) - new Date();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  },
  debounce(fn, ms = 300) {
    let t;
    return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
  },
  generateId() {
    return '_' + Math.random().toString(36).slice(2, 9);
  },
  getStatusColor(status) {
    const map = { active: 'success', completed: 'success', paid: 'success', 'in-progress': 'info', pending: 'warning', review: 'warning', paused: 'neutral', inactive: 'neutral', backlog: 'neutral', draft: 'neutral', overdue: 'danger', high: 'danger', medium: 'warning', low: 'info', planning: 'primary' };
    return map[status] || 'neutral';
  },
  getInitials(name) {
    return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
  },
  showToast(message, type = 'info') {
    let container = Utils.$('.toast-container');
    if (!container) {
      container = Utils.create('div', { className: 'toast-container' });
      document.body.appendChild(container);
    }
    const icons = { success: '✓', warning: '⚠', danger: '✕', info: 'ℹ' };
    const toast = Utils.create('div', { className: `toast toast-${type}`, innerHTML: `<span style="font-size:16px">${icons[type] || 'ℹ'}</span><span class="toast-message">${message}</span><button class="toast-close" aria-label="Close">✕</button>` });
    container.appendChild(toast);
    toast.querySelector('.toast-close').addEventListener('click', () => removeToast(toast));
    setTimeout(() => removeToast(toast), 4000);
    function removeToast(t) { t.classList.add('removing'); setTimeout(() => t.remove(), 300); }
  },
  animateCounter(el, target, duration = 1000) {
    let start = 0;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target).toLocaleString();
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString();
    };
    requestAnimationFrame(step);
  },
  animateCurrencyCounter(el, target, duration = 1000) {
    let start = 0;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Utils.formatCurrency(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = Utils.formatCurrency(target);
    };
    requestAnimationFrame(step);
  },
  simulateLoading(container, duration = 800) {
    return new Promise(resolve => {
      container.style.opacity = '0';
      setTimeout(() => {
        container.style.transition = 'opacity 0.3s ease';
        container.style.opacity = '1';
        resolve();
      }, duration);
    });
  }
};
