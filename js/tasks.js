/* ==============================================
   FREELANCER WORKSPACE — Tasks / Kanban Page
   ============================================== */
const TasksPage = {
  init() {
    this.render();
    DragDrop.init();
  },
  render() {
    const columns = [
      { id: 'backlog', title: 'Backlog', icon: '📋' },
      { id: 'in-progress', title: 'In Progress', icon: '🔄' },
      { id: 'review', title: 'Review', icon: '👁' },
      { id: 'completed', title: 'Completed', icon: '✅' }
    ];
    const board = Utils.$('.kanban-board');
    if (!board) return;
    board.innerHTML = '';
    columns.forEach(col => {
      const tasks = AppData.tasks.filter(t => t.status === col.id);
      const colEl = Utils.create('div', { className: 'kanban-column', innerHTML: `
        <div class="kanban-column-header">
          <div class="kanban-column-title">${col.icon} ${col.title} <span class="kanban-count">${tasks.length}</span></div>
          <button class="btn-icon btn-ghost" aria-label="Add task">+</button>
        </div>
        <div class="kanban-cards" data-status="${col.id}">
          ${tasks.map(t => this.renderTaskCard(t)).join('')}
        </div>
      `});
      board.appendChild(colEl);
    });
  },
  renderTaskCard(task) {
    const priorityColor = Utils.getStatusColor(task.priority);
    return `<div class="task-card" draggable="true" data-task-id="${task.id}">
      <div class="task-card-tags">${task.tags.map(t => `<span class="task-tag">${t}</span>`).join('')}</div>
      <div class="task-card-title">${task.title}</div>
      <div class="task-card-meta">
        <span class="badge badge-${priorityColor}" style="font-size:10px">${task.priority}</span>
        <span style="font-size:var(--fs-xs);color:var(--text-disabled)">${Utils.formatDateShort(task.dueDate)}</span>
      </div>
    </div>`;
  }
};
