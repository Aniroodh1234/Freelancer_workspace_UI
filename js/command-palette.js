/* ==============================================
   FREELANCER WORKSPACE — Command Palette
   ============================================== */
const CommandPalette = {
  overlay: null,
  input: null,
  list: null,
  commands: [
    { group: 'Navigation', items: [
      { label: 'Go to Dashboard', action: () => window.location.href = 'dashboard.html', shortcut: 'G D', icon: '📊' },
      { label: 'Go to Clients', action: () => window.location.href = 'clients.html', shortcut: 'G C', icon: '👥' },
      { label: 'Go to Projects', action: () => window.location.href = 'projects.html', shortcut: 'G P', icon: '📁' },
      { label: 'Go to Tasks', action: () => window.location.href = 'tasks.html', shortcut: 'G T', icon: '✅' },
      { label: 'Go to Invoices', action: () => window.location.href = 'invoices.html', shortcut: 'G I', icon: '💳' },
      { label: 'Go to Messages', action: () => window.location.href = 'messages.html', shortcut: 'G M', icon: '💬' },
      { label: 'Go to Time Tracker', action: () => window.location.href = 'time-tracker.html', icon: '⏱' },
      { label: 'Go to Analytics', action: () => window.location.href = 'analytics.html', icon: '📈' },
      { label: 'Go to Settings', action: () => window.location.href = 'settings.html', shortcut: 'G S', icon: '⚙️' }
    ]},
    { group: 'Actions', items: [
      { label: 'Toggle Theme', action: () => { Theme.toggle(); CommandPalette.close(); }, shortcut: 'T T', icon: '🎨' },
      { label: 'Create New Task', action: () => { CommandPalette.close(); Utils.showToast('New task dialog opened', 'info'); }, icon: '➕' },
      { label: 'Search Clients', action: () => { window.location.href = 'clients.html'; }, icon: '🔍' }
    ]}
  ],

  init() {
    this.overlay = Utils.$('.command-overlay');
    if (!this.overlay) return;
    this.input = Utils.$('.command-input');
    this.list = Utils.$('.command-list');
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); this.toggle(); }
      if (e.key === 'Escape' && this.isOpen()) this.close();
    });
    const searchBtn = Utils.$('.topbar-search');
    if (searchBtn) searchBtn.addEventListener('click', () => this.open());
    this.overlay.addEventListener('click', (e) => { if (e.target === this.overlay) this.close(); });
    if (this.input) this.input.addEventListener('input', Utils.debounce(() => this.filter(), 150));
    this.render();
  },

  isOpen() { return this.overlay && this.overlay.classList.contains('active'); },
  toggle() { this.isOpen() ? this.close() : this.open(); },
  open() {
    if (!this.overlay) return;
    this.overlay.classList.add('active');
    if (this.input) { this.input.value = ''; this.input.focus(); }
    this.render();
  },
  close() {
    if (this.overlay) this.overlay.classList.remove('active');
  },

  render(filterText = '') {
    if (!this.list) return;
    const query = filterText.toLowerCase();
    let html = '';
    this.commands.forEach(group => {
      const filtered = group.items.filter(i => i.label.toLowerCase().includes(query));
      if (filtered.length === 0) return;
      html += `<div class="command-group-title">${group.group}</div>`;
      filtered.forEach(item => {
        html += `<div class="command-item" data-action="${item.label}">
          <span>${item.icon}</span>
          <span>${item.label}</span>
          ${item.shortcut ? `<span class="command-item-shortcut">${item.shortcut}</span>` : ''}
        </div>`;
      });
    });
    this.list.innerHTML = html || '<div style="padding:24px;text-align:center;color:var(--text-muted)">No results found</div>';
    Utils.$$('.command-item', this.list).forEach(el => {
      el.addEventListener('click', () => {
        const label = el.dataset.action;
        this.commands.forEach(g => g.items.forEach(i => { if (i.label === label) i.action(); }));
      });
    });
  },

  filter() {
    if (this.input) this.render(this.input.value);
  }
};
