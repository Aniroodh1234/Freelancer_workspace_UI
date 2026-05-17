/* ==============================================
   FREELANCER WORKSPACE — Time Tracker Page
   ============================================== */
const TimeTrackerPage = {
  seconds: 0,
  running: false,
  interval: null,
  init() {
    this.renderSessions();
    this.bindEvents();
    this.updateDisplay();
  },
  bindEvents() {
    const startBtn = Utils.$('#timerStart');
    const stopBtn = Utils.$('#timerStop');
    const resetBtn = Utils.$('#timerReset');
    if (startBtn) startBtn.addEventListener('click', () => this.start());
    if (stopBtn) stopBtn.addEventListener('click', () => this.stop());
    if (resetBtn) resetBtn.addEventListener('click', () => this.reset());
  },
  start() {
    if (this.running) return;
    this.running = true;
    Utils.$('#timerStart')?.classList.add('hidden');
    Utils.$('#timerStop')?.classList.remove('hidden');
    this.interval = setInterval(() => { this.seconds++; this.updateDisplay(); }, 1000);
    Utils.showToast('Timer started', 'info');
  },
  stop() {
    this.running = false;
    clearInterval(this.interval);
    Utils.$('#timerStart')?.classList.remove('hidden');
    Utils.$('#timerStop')?.classList.add('hidden');
    Utils.showToast('Timer stopped — ' + this.formatTime(this.seconds), 'success');
  },
  reset() {
    this.stop();
    this.seconds = 0;
    this.updateDisplay();
  },
  updateDisplay() {
    const display = Utils.$('.timer-display');
    if (display) display.textContent = this.formatTime(this.seconds);
  },
  formatTime(s) {
    const h = Math.floor(s / 3600).toString().padStart(2, '0');
    const m = Math.floor((s % 3600) / 60).toString().padStart(2, '0');
    const sec = (s % 60).toString().padStart(2, '0');
    return `${h}:${m}:${sec}`;
  },
  renderSessions() {
    const list = Utils.$('.sessions-list');
    if (!list) return;
    list.innerHTML = '';
    AppData.timeEntries.forEach(e => {
      list.innerHTML += `<div style="display:flex;align-items:center;justify-content:space-between;padding:var(--space-3) var(--space-4);border-bottom:1px solid var(--border-soft)">
        <div><div style="font-size:var(--fs-sm);font-weight:var(--fw-medium)">${e.task}</div>
        <div style="font-size:var(--fs-xs);color:var(--text-muted)">${e.project}</div></div>
        <div style="text-align:right"><div style="font-size:var(--fs-sm);font-weight:var(--fw-semibold);font-family:var(--font-mono)">${e.duration}</div>
        <div style="font-size:var(--fs-xs);color:var(--text-disabled)">${Utils.formatDateShort(e.date)}</div></div>
      </div>`;
    });
  }
};
