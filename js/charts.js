/* ==============================================
   FREELANCER WORKSPACE — Charts (Canvas-based)
   ============================================== */
const Charts = {
  colors: {
    primary: '#CF6DFC',
    secondary: '#C1BFFF',
    success: '#BDB96A',
    warning: '#E0C94E',
    info: '#C1BFFF',
    grid: 'rgba(148,144,184,0.1)',
    text: '#9490b8'
  },

  drawBarChart(canvasId, data, options = {}) {
    const canvas = Utils.$(`#${canvasId}`);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = (options.height || 250) * dpr;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = (options.height || 250) + 'px';
    ctx.scale(dpr, dpr);
    const w = rect.width, h = options.height || 250;
    const pad = { top: 20, right: 20, bottom: 40, left: 50 };
    const cw = w - pad.left - pad.right;
    const ch = h - pad.top - pad.bottom;
    const max = Math.max(...data.map(d => d.value)) * 1.15;
    const barW = Math.min(cw / data.length * 0.6, 40);
    const gap = cw / data.length;

    // Grid lines
    ctx.strokeStyle = this.colors.grid;
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = pad.top + (ch / 4) * i;
      ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(w - pad.right, y); ctx.stroke();
      ctx.fillStyle = this.colors.text; ctx.font = '11px Inter, sans-serif'; ctx.textAlign = 'right';
      const val = Math.round(max - (max / 4) * i);
      ctx.fillText(options.formatLabel ? options.formatLabel(val) : val, pad.left - 8, y + 4);
    }

    // Bars with animation
    const animate = (progress) => {
      data.forEach((d, i) => {
        const x = pad.left + gap * i + (gap - barW) / 2;
        const barH = (d.value / max) * ch * progress;
        const y = pad.top + ch - barH;
        const grad = ctx.createLinearGradient(x, y, x, pad.top + ch);
        grad.addColorStop(0, options.color || this.colors.primary);
        grad.addColorStop(1, (options.color || this.colors.primary) + '44');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.roundRect(x, y, barW, barH, [4, 4, 0, 0]);
        ctx.fill();
        // Label
        ctx.fillStyle = this.colors.text; ctx.font = '11px Inter, sans-serif'; ctx.textAlign = 'center';
        ctx.fillText(d.label, pad.left + gap * i + gap / 2, h - pad.bottom + 20);
      });
    };

    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 800, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      ctx.clearRect(0, 0, w, h);
      // Redraw grid
      ctx.strokeStyle = this.colors.grid; ctx.lineWidth = 1;
      for (let i = 0; i <= 4; i++) {
        const y = pad.top + (ch / 4) * i;
        ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(w - pad.right, y); ctx.stroke();
        ctx.fillStyle = this.colors.text; ctx.font = '11px Inter, sans-serif'; ctx.textAlign = 'right';
        const val = Math.round(max - (max / 4) * i);
        ctx.fillText(options.formatLabel ? options.formatLabel(val) : val, pad.left - 8, y + 4);
      }
      animate(eased);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  },

  drawLineChart(canvasId, data, options = {}) {
    const canvas = Utils.$(`#${canvasId}`);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = (options.height || 250) * dpr;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = (options.height || 250) + 'px';
    ctx.scale(dpr, dpr);
    const w = rect.width, h = options.height || 250;
    const pad = { top: 20, right: 20, bottom: 40, left: 50 };
    const cw = w - pad.left - pad.right;
    const ch = h - pad.top - pad.bottom;
    const max = Math.max(...data.map(d => d.value)) * 1.15;
    const gap = cw / (data.length - 1);

    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 1000, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      ctx.clearRect(0, 0, w, h);
      // Grid
      ctx.strokeStyle = this.colors.grid; ctx.lineWidth = 1;
      for (let i = 0; i <= 4; i++) {
        const y = pad.top + (ch / 4) * i;
        ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(w - pad.right, y); ctx.stroke();
        ctx.fillStyle = this.colors.text; ctx.font = '11px Inter, sans-serif'; ctx.textAlign = 'right';
        ctx.fillText(options.formatLabel ? options.formatLabel(Math.round(max - (max / 4) * i)) : Math.round(max - (max / 4) * i), pad.left - 8, y + 4);
      }
      // Labels
      data.forEach((d, i) => {
        ctx.fillStyle = this.colors.text; ctx.font = '11px Inter, sans-serif'; ctx.textAlign = 'center';
        ctx.fillText(d.label, pad.left + gap * i, h - pad.bottom + 20);
      });
      // Line
      const drawCount = Math.ceil(data.length * eased);
      const color = options.color || this.colors.primary;
      // Fill area
      ctx.beginPath();
      ctx.moveTo(pad.left, pad.top + ch);
      for (let i = 0; i < drawCount; i++) {
        const x = pad.left + gap * i;
        const y = pad.top + ch - (data[i].value / max) * ch;
        if (i === 0) ctx.lineTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.lineTo(pad.left + gap * (drawCount - 1), pad.top + ch);
      ctx.closePath();
      const fillGrad = ctx.createLinearGradient(0, pad.top, 0, pad.top + ch);
      fillGrad.addColorStop(0, color + '33'); fillGrad.addColorStop(1, color + '05');
      ctx.fillStyle = fillGrad; ctx.fill();
      // Stroke
      ctx.beginPath();
      for (let i = 0; i < drawCount; i++) {
        const x = pad.left + gap * i;
        const y = pad.top + ch - (data[i].value / max) * ch;
        if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.lineJoin = 'round'; ctx.stroke();
      // Dots
      for (let i = 0; i < drawCount; i++) {
        const x = pad.left + gap * i;
        const y = pad.top + ch - (data[i].value / max) * ch;
        ctx.beginPath(); ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = color; ctx.fill();
        ctx.strokeStyle = 'var(--bg-card)'; ctx.lineWidth = 2; ctx.stroke();
      }
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  },

  drawDonutChart(canvasId, data, options = {}) {
    const canvas = Utils.$(`#${canvasId}`);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const size = options.size || 200;
    canvas.width = size * dpr; canvas.height = size * dpr;
    canvas.style.width = size + 'px'; canvas.style.height = size + 'px';
    ctx.scale(dpr, dpr);
    const cx = size / 2, cy = size / 2, r = size / 2 - 10, inner = r * 0.6;
    const total = data.reduce((s, d) => s + d.value, 0);
    const colors = options.colors || [this.colors.primary, this.colors.success, this.colors.warning, this.colors.info, '#ec4899', '#f97316'];
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 800, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      ctx.clearRect(0, 0, size, size);
      let angle = -Math.PI / 2;
      data.forEach((d, i) => {
        const slice = (d.value / total) * Math.PI * 2 * eased;
        ctx.beginPath(); ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, r, angle, angle + slice);
        ctx.closePath();
        ctx.fillStyle = colors[i % colors.length]; ctx.fill();
        angle += slice;
      });
      ctx.beginPath(); ctx.arc(cx, cy, inner, 0, Math.PI * 2);
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--bg-card').trim() || '#18152e';
      ctx.fill();
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
};
