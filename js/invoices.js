/* ==============================================
   FREELANCER WORKSPACE — Invoices Page
   ============================================== */
const InvoicesPage = {
  currentFilter: 'all',
  init() {
    this.renderSummary();
    this.render();
    this.bindEvents();
  },
  bindEvents() {
    Utils.$$('.filter-chip[data-filter]').forEach(chip => {
      chip.addEventListener('click', () => {
        Utils.$$('.filter-chip[data-filter]').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.currentFilter = chip.dataset.filter;
        this.render();
      });
    });
  },
  renderSummary() {
    const paid = AppData.invoices.filter(i => i.status === 'paid').reduce((s, i) => s + i.amount, 0);
    const pending = AppData.invoices.filter(i => i.status === 'pending').reduce((s, i) => s + i.amount, 0);
    const overdue = AppData.invoices.filter(i => i.status === 'overdue').reduce((s, i) => s + i.amount, 0);
    const grid = Utils.$('.invoice-summary');
    if (!grid) return;
    grid.innerHTML = `
      <div class="stat-card"><div class="stat-card-icon" style="background:var(--color-success-bg);color:var(--color-success)">💰</div>
        <div class="stat-card-value">${Utils.formatCurrency(paid)}</div><div class="stat-card-label">Paid</div></div>
      <div class="stat-card"><div class="stat-card-icon" style="background:var(--color-warning-bg);color:var(--color-warning)">⏳</div>
        <div class="stat-card-value">${Utils.formatCurrency(pending)}</div><div class="stat-card-label">Pending</div></div>
      <div class="stat-card"><div class="stat-card-icon" style="background:var(--color-danger-bg);color:var(--color-danger)">🔴</div>
        <div class="stat-card-value">${Utils.formatCurrency(overdue)}</div><div class="stat-card-label">Overdue</div></div>`;
  },
  render() {
    const tbody = Utils.$('.invoice-tbody');
    if (!tbody) return;
    let invoices = this.currentFilter === 'all' ? AppData.invoices : AppData.invoices.filter(i => i.status === this.currentFilter);
    if (invoices.length === 0) {
      tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;padding:var(--space-12);color:var(--text-muted)">No invoices found</td></tr>`;
      return;
    }
    tbody.innerHTML = '';
    invoices.forEach(inv => {
      tbody.innerHTML += `<tr>
        <td><span style="font-weight:var(--fw-medium);color:var(--text-primary)">${inv.id}</span></td>
        <td>${inv.client}</td>
        <td>${inv.project}</td>
        <td><span style="font-weight:var(--fw-semibold);color:var(--text-primary)">${Utils.formatCurrency(inv.amount)}</span></td>
        <td><span class="badge badge-${Utils.getStatusColor(inv.status)}">${inv.status}</span></td>
        <td>${Utils.formatDateShort(inv.dueDate)}</td>
      </tr>`;
    });
  }
};
