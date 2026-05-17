/* ==============================================
   FREELANCER WORKSPACE — Projects Page
   ============================================== */
const ProjectsPage = {
  currentFilter: 'all',
  init() {
    this.render();
    this.bindEvents();
  },
  bindEvents() {
    const search = Utils.$('#projectSearch');
    if (search) search.addEventListener('input', Utils.debounce(() => this.render(), 200));
    Utils.$$('.filter-chip[data-filter]').forEach(chip => {
      chip.addEventListener('click', () => {
        Utils.$$('.filter-chip[data-filter]').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.currentFilter = chip.dataset.filter;
        this.render();
      });
    });
  },
  render() {
    const query = (Utils.$('#projectSearch')?.value || '').toLowerCase();
    const grid = Utils.$('.projects-grid');
    if (!grid) return;
    let projects = AppData.projects.filter(p => {
      const matchSearch = p.name.toLowerCase().includes(query) || p.client.toLowerCase().includes(query);
      const matchFilter = this.currentFilter === 'all' || p.status === this.currentFilter;
      return matchSearch && matchFilter;
    });
    if (projects.length === 0) {
      grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><div class="empty-state-icon">📁</div><div class="empty-state-title">No projects found</div><div class="empty-state-text">Try adjusting your filters</div></div>`;
      return;
    }
    grid.innerHTML = '';
    projects.forEach((p, i) => {
      const days = Utils.daysUntil(p.deadline);
      const urgency = days <= 7 ? 'danger' : days <= 14 ? 'warning' : 'info';
      const priorityColor = Utils.getStatusColor(p.priority);
      grid.innerHTML += `<div class="card card-interactive animate-fade-in-up stagger-${(i % 6) + 1}">
        <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:var(--space-3)">
          <div>
            <div style="font-weight:var(--fw-semibold);margin-bottom:var(--space-1)">${p.name}</div>
            <div style="font-size:var(--fs-xs);color:var(--text-muted)">${p.client}</div>
          </div>
          <span class="badge badge-${priorityColor}">${p.priority}</span>
        </div>
        <p style="font-size:var(--fs-sm);color:var(--text-muted);margin-bottom:var(--space-4);line-height:var(--lh-relaxed)" class="line-clamp-2">${p.description}</p>
        <div style="display:flex;gap:var(--space-2);margin-bottom:var(--space-4);flex-wrap:wrap">
          ${p.tags.map(t => `<span class="task-tag">${t}</span>`).join('')}
        </div>
        <div style="margin-bottom:var(--space-3)">
          <div style="display:flex;justify-content:space-between;font-size:var(--fs-xs);color:var(--text-muted);margin-bottom:var(--space-1)">
            <span>Progress</span><span>${p.progress}%</span>
          </div>
          <div class="progress-bar"><div class="progress-fill" style="width:${p.progress}%"></div></div>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;font-size:var(--fs-xs)">
          <span style="color:var(--text-muted)">${Utils.formatCurrency(p.spent)} / ${Utils.formatCurrency(p.budget)}</span>
          <span class="badge badge-${urgency}">${p.status === 'completed' ? 'Done' : days + 'd left'}</span>
        </div>
      </div>`;
    });
  }
};
