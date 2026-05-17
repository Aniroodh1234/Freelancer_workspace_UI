/* ==============================================
   FREELANCER WORKSPACE — Dashboard Page
   ============================================== */
const DashboardPage = {
  init() {
    this.renderStats();
    this.renderChart();
    this.renderActivity();
    this.renderRecentProjects();
    this.renderUpcomingDeadlines();
  },
  renderStats() {
    const totalRevenue = AppData.invoices.filter(i => i.status === 'paid').reduce((s, i) => s + i.amount, 0);
    const activeProjects = AppData.projects.filter(p => p.status === 'in-progress').length;
    const pendingTasks = AppData.tasks.filter(t => t.status !== 'completed').length;
    const activeClients = AppData.clients.filter(c => c.status === 'active').length;
    const stats = [
      { value: totalRevenue, label: 'Total Revenue', change: '+12.5%', positive: true, icon: '💰', isCurrency: true },
      { value: activeProjects, label: 'Active Projects', change: '+2', positive: true, icon: '📁' },
      { value: pendingTasks, label: 'Pending Tasks', change: '-3', positive: true, icon: '✅' },
      { value: activeClients, label: 'Active Clients', change: '+1', positive: true, icon: '👥' }
    ];
    const grid = Utils.$('.stats-grid');
    if (!grid) return;
    grid.innerHTML = '';
    stats.forEach((s, i) => {
      const card = Utils.create('div', { className: `stat-card animate-fade-in-up stagger-${i + 1}`, innerHTML: `
        <div class="stat-card-icon" style="background:var(--gradient-glow);color:var(--accent-primary)">${s.icon}</div>
        <div class="stat-card-value" data-target="${s.value}" data-currency="${s.isCurrency || false}">0</div>
        <div class="stat-card-label">${s.label}</div>
        <div class="stat-card-change ${s.positive ? 'positive' : 'negative'}">${s.positive ? '↑' : '↓'} ${s.change}</div>
      `});
      grid.appendChild(card);
    });
    setTimeout(() => {
      Utils.$$('.stat-card-value', grid).forEach(el => {
        const target = parseInt(el.dataset.target);
        if (el.dataset.currency === 'true') Utils.animateCurrencyCounter(el, target, 1200);
        else Utils.animateCounter(el, target, 1000);
      });
    }, 300);
  },
  renderChart() {
    setTimeout(() => {
      Charts.drawBarChart('revenueChart', AppData.analytics.revenue.map(r => ({ label: r.month, value: r.amount })), {
        height: 260,
        formatLabel: v => '$' + (v / 1000).toFixed(0) + 'k',
        color: '#8b5cf6'
      });
    }, 500);
  },
  renderActivity() {
    const container = Utils.$('.activity-timeline');
    if (!container) return;
    container.innerHTML = '';
    AppData.activities.slice(0, 6).forEach(a => {
      container.innerHTML += `<div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">${a.text}</div>
        <div class="timeline-time">${a.time}</div>
      </div>`;
    });
  },
  renderRecentProjects() {
    const container = Utils.$('.recent-projects-list');
    if (!container) return;
    container.innerHTML = '';
    AppData.projects.filter(p => p.status !== 'completed').slice(0, 4).forEach(p => {
      container.innerHTML += `<div class="card card-interactive" style="padding:var(--space-4);margin-bottom:var(--space-3)">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-3)">
          <span style="font-weight:var(--fw-medium);font-size:var(--fs-sm)">${p.name}</span>
          <span class="badge badge-${Utils.getStatusColor(p.status)}">${p.status}</span>
        </div>
        <div style="font-size:var(--fs-xs);color:var(--text-muted);margin-bottom:var(--space-2)">${p.client}</div>
        <div class="progress-bar"><div class="progress-fill" style="width:${p.progress}%"></div></div>
        <div style="display:flex;justify-content:space-between;font-size:var(--fs-xs);color:var(--text-disabled);margin-top:var(--space-2)">
          <span>${p.progress}%</span><span>Due ${Utils.formatDateShort(p.deadline)}</span>
        </div>
      </div>`;
    });
  },
  renderUpcomingDeadlines() {
    const container = Utils.$('.upcoming-deadlines');
    if (!container) return;
    const upcoming = AppData.projects.filter(p => p.status !== 'completed').sort((a, b) => new Date(a.deadline) - new Date(b.deadline)).slice(0, 5);
    container.innerHTML = '';
    upcoming.forEach(p => {
      const days = Utils.daysUntil(p.deadline);
      const urgency = days <= 7 ? 'danger' : days <= 14 ? 'warning' : 'info';
      container.innerHTML += `<div style="display:flex;align-items:center;justify-content:space-between;padding:var(--space-3) 0;border-bottom:1px solid var(--border-soft)">
        <div><div style="font-size:var(--fs-sm);font-weight:var(--fw-medium)">${p.name}</div>
        <div style="font-size:var(--fs-xs);color:var(--text-muted)">${p.client}</div></div>
        <span class="badge badge-${urgency}">${days}d left</span>
      </div>`;
    });
  }
};
