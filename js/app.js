/* ==============================================
   FREELANCER WORKSPACE — App Bootstrap
   ============================================== */
const App = {
  init() {
    Theme.init();
    Sidebar.init();
    Navigation.init();
    Modal.init();
    Dropdown.init();
    CommandPalette.init();
    Forms.init();
    this.initNotifications();
    this.detectPage();
  },

  detectPage() {
    const page = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    const pageModules = {
      'dashboard': () => typeof DashboardPage !== 'undefined' && DashboardPage.init(),
      'clients': () => typeof ClientsPage !== 'undefined' && ClientsPage.init(),
      'projects': () => typeof ProjectsPage !== 'undefined' && ProjectsPage.init(),
      'tasks': () => typeof TasksPage !== 'undefined' && TasksPage.init(),
      'invoices': () => typeof InvoicesPage !== 'undefined' && InvoicesPage.init(),
      'messages': () => typeof MessagesPage !== 'undefined' && MessagesPage.init(),
      'time-tracker': () => typeof TimeTrackerPage !== 'undefined' && TimeTrackerPage.init(),
      'analytics': () => typeof AnalyticsPage !== 'undefined' && AnalyticsPage.init(),
      'settings': () => typeof SettingsPage !== 'undefined' && SettingsPage.init(),
      'index': () => typeof LandingPage !== 'undefined' && LandingPage.init()
    };
    if (pageModules[page]) pageModules[page]();
  },

  initNotifications() {
    const panel = Utils.$('.notifications-panel');
    const list = Utils.$('.notifications-list');
    if (!panel || !list) return;
    let html = '';
    AppData.notifications.forEach(n => {
      html += `<div class="notification-item ${n.read ? '' : 'unread'}" data-id="${n.id}">
        ${n.read ? '' : '<div class="notification-dot"></div>'}
        <div style="flex:1">
          <div style="font-size:var(--fs-sm);font-weight:var(--fw-medium)">${n.icon} ${n.title}</div>
          <div style="font-size:var(--fs-xs);color:var(--text-muted);margin-top:2px">${n.message}</div>
          <div style="font-size:var(--fs-xs);color:var(--text-disabled);margin-top:4px">${n.time}</div>
        </div>
      </div>`;
    });
    list.innerHTML = html;
    const markAllBtn = Utils.$('.mark-all-read');
    if (markAllBtn) {
      markAllBtn.addEventListener('click', () => {
        Utils.$$('.notification-item.unread', list).forEach(i => i.classList.remove('unread'));
        Utils.$$('.notification-dot', list).forEach(d => d.remove());
        const badge = Utils.$('.notif-badge');
        if (badge) badge.style.display = 'none';
        Utils.showToast('All notifications marked as read', 'success');
      });
    }
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());
