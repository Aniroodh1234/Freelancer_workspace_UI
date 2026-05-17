/* ==============================================
   FREELANCER WORKSPACE — Analytics Page
   ============================================== */
const AnalyticsPage = {
  init() {
    this.renderKPIs();
    setTimeout(() => this.renderCharts(), 400);
  },
  renderKPIs() {
    const totalRev = AppData.analytics.revenue.reduce((s, r) => s + r.amount, 0);
    const avgWeekly = Math.round(totalRev / AppData.analytics.revenue.length);
    const completedTasks = AppData.tasks.filter(t => t.status === 'completed').length;
    const totalTasks = AppData.tasks.length;
    const grid = Utils.$('.analytics-kpi');
    if (!grid) return;
    const kpis = [
      { value: totalRev, label: 'Total Revenue', icon: '💰', isCurrency: true },
      { value: avgWeekly, label: 'Avg Monthly', icon: '📊', isCurrency: true },
      { value: completedTasks, label: 'Tasks Done', icon: '✅' },
      { value: Math.round((completedTasks / totalTasks) * 100), label: 'Completion Rate', icon: '🎯', suffix: '%' }
    ];
    grid.innerHTML = '';
    kpis.forEach((k, i) => {
      grid.innerHTML += `<div class="stat-card animate-fade-in-up stagger-${i + 1}">
        <div class="stat-card-icon" style="background:var(--gradient-glow);color:var(--accent-primary)">${k.icon}</div>
        <div class="stat-card-value" data-target="${k.value}" data-currency="${!!k.isCurrency}" data-suffix="${k.suffix || ''}">0</div>
        <div class="stat-card-label">${k.label}</div>
      </div>`;
    });
    setTimeout(() => {
      Utils.$$('.stat-card-value', grid).forEach(el => {
        const target = parseInt(el.dataset.target);
        const suffix = el.dataset.suffix;
        if (el.dataset.currency === 'true') Utils.animateCurrencyCounter(el, target, 1200);
        else {
          Utils.animateCounter(el, target, 1000);
          if (suffix) setTimeout(() => el.textContent += suffix, 1100);
        }
      });
    }, 300);
  },
  renderCharts() {
    Charts.drawLineChart('revenueLineChart', AppData.analytics.revenue.map(r => ({ label: r.month, value: r.amount })), {
      height: 280, formatLabel: v => '$' + (v / 1000).toFixed(0) + 'k', color: '#CF6DFC'
    });
    Charts.drawBarChart('productivityChart', AppData.analytics.productivity.map(p => ({ label: p.day, value: p.hours })), {
      height: 280, color: '#BDB96A'
    });
    Charts.drawBarChart('clientChart', AppData.analytics.clientActivity.map(c => ({ label: c.client.split(' ')[0], value: c.hours })), {
      height: 280, color: '#C1BFFF'
    });
    Charts.drawDonutChart('taskDonut', [
      { label: 'Completed', value: AppData.tasks.filter(t => t.status === 'completed').length },
      { label: 'In Progress', value: AppData.tasks.filter(t => t.status === 'in-progress').length },
      { label: 'Review', value: AppData.tasks.filter(t => t.status === 'review').length },
      { label: 'Backlog', value: AppData.tasks.filter(t => t.status === 'backlog').length }
    ], { size: 200 });
  }
};
