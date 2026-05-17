/* ==============================================
   FREELANCER WORKSPACE — Drag & Drop (Kanban)
   ============================================== */
const DragDrop = {
  draggedEl: null,
  init() {
    document.addEventListener('dragstart', (e) => {
      const card = e.target.closest('.task-card');
      if (!card) return;
      this.draggedEl = card;
      card.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', card.dataset.taskId);
    });
    document.addEventListener('dragend', (e) => {
      if (this.draggedEl) { this.draggedEl.classList.remove('dragging'); this.draggedEl = null; }
      Utils.$$('.kanban-cards').forEach(c => c.classList.remove('drag-over'));
    });
    document.addEventListener('dragover', (e) => {
      const col = e.target.closest('.kanban-cards');
      if (!col) return;
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      col.classList.add('drag-over');
    });
    document.addEventListener('dragleave', (e) => {
      const col = e.target.closest('.kanban-cards');
      if (col && !col.contains(e.relatedTarget)) col.classList.remove('drag-over');
    });
    document.addEventListener('drop', (e) => {
      const col = e.target.closest('.kanban-cards');
      if (!col || !this.draggedEl) return;
      e.preventDefault();
      col.classList.remove('drag-over');
      col.appendChild(this.draggedEl);
      const newStatus = col.dataset.status;
      const taskId = this.draggedEl.dataset.taskId;
      // Update count
      Utils.$$('.kanban-column').forEach(column => {
        const count = column.querySelector('.kanban-count');
        const cards = column.querySelectorAll('.task-card');
        if (count) count.textContent = cards.length;
      });
      Utils.showToast(`Task moved to ${newStatus.replace('-', ' ')}`, 'success');
    });
  }
};
