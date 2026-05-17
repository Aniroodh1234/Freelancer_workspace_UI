/* ==============================================
   FREELANCER WORKSPACE — Clients Page
   ============================================== */
const ClientsPage = {
  filteredClients: [],
  currentFilter: 'all',
  init() {
    this.filteredClients = [...AppData.clients];
    this.render();
    this.bindEvents();
  },
  bindEvents() {
    const search = Utils.$('#clientSearch');
    if (search) search.addEventListener('input', Utils.debounce(() => this.filterClients(), 200));
    Utils.$$('.filter-chip[data-filter]').forEach(chip => {
      chip.addEventListener('click', () => {
        Utils.$$('.filter-chip[data-filter]').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.currentFilter = chip.dataset.filter;
        this.filterClients();
      });
    });
  },
  filterClients() {
    const query = (Utils.$('#clientSearch')?.value || '').toLowerCase();
    this.filteredClients = AppData.clients.filter(c => {
      const matchSearch = c.name.toLowerCase().includes(query) || c.contact.toLowerCase().includes(query) || c.industry.toLowerCase().includes(query);
      const matchFilter = this.currentFilter === 'all' || c.status === this.currentFilter;
      return matchSearch && matchFilter;
    });
    this.render();
  },
  render() {
    const grid = Utils.$('.clients-grid');
    if (!grid) return;
    if (this.filteredClients.length === 0) {
      grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><div class="empty-state-icon">👥</div><div class="empty-state-title">No clients found</div><div class="empty-state-text">Try adjusting your search or filter criteria</div></div>`;
      return;
    }
    grid.innerHTML = '';
    this.filteredClients.forEach((c, i) => {
      grid.innerHTML += `<div class="card card-interactive animate-fade-in-up stagger-${(i % 6) + 1}" style="cursor:pointer" data-client-id="${c.id}">
        <div style="display:flex;align-items:center;gap:var(--space-3);margin-bottom:var(--space-4)">
          <div class="avatar" style="background:${c.color}">${c.initials}</div>
          <div><div style="font-weight:var(--fw-semibold)">${c.name}</div>
          <div style="font-size:var(--fs-xs);color:var(--text-muted)">${c.industry}</div></div>
          <span class="badge badge-${Utils.getStatusColor(c.status)}" style="margin-left:auto">${c.status}</span>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-3);font-size:var(--fs-sm)">
          <div><div style="color:var(--text-muted)">Contact</div><div>${c.contact}</div></div>
          <div><div style="color:var(--text-muted)">Revenue</div><div>${Utils.formatCurrency(c.totalRevenue)}</div></div>
          <div><div style="color:var(--text-muted)">Projects</div><div>${c.projects}</div></div>
          <div><div style="color:var(--text-muted)">Since</div><div>${Utils.formatDateShort(c.joinDate)}</div></div>
        </div>
      </div>`;
    });
    Utils.$$('.card[data-client-id]', grid).forEach(card => {
      card.addEventListener('click', () => this.showDetail(card.dataset.clientId));
    });
  },
  showDetail(id) {
    const c = AppData.clients.find(cl => cl.id === id);
    if (!c) return;
    const body = Utils.$('#clientModalBody');
    if (body) {
      body.innerHTML = `<div style="text-align:center;margin-bottom:var(--space-6)">
        <div class="avatar avatar-xl mx-auto" style="background:${c.color};margin-bottom:var(--space-3)">${c.initials}</div>
        <h3>${c.name}</h3><p style="font-size:var(--fs-sm)">${c.industry}</p>
        <span class="badge badge-${Utils.getStatusColor(c.status)} mt-2">${c.status}</span>
      </div>
      <div class="input-group"><div class="input-label">Contact Person</div><div style="font-size:var(--fs-sm)">${c.contact}</div></div>
      <div class="input-group"><div class="input-label">Email</div><div style="font-size:var(--fs-sm)">${c.email}</div></div>
      <div class="input-group"><div class="input-label">Phone</div><div style="font-size:var(--fs-sm)">${c.phone}</div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-4)">
        <div class="stat-card"><div class="stat-card-value">${c.projects}</div><div class="stat-card-label">Projects</div></div>
        <div class="stat-card"><div class="stat-card-value">${Utils.formatCurrency(c.totalRevenue)}</div><div class="stat-card-label">Revenue</div></div>
      </div>`;
    }
    Modal.open('clientModal');
  }
};
