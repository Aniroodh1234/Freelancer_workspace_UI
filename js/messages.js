/* ==============================================
   FREELANCER WORKSPACE — Messages Page
   ============================================== */
const MessagesPage = {
  activeContact: null,
  init() {
    this.activeContact = AppData.messages[0];
    this.renderContacts();
    this.renderChat();
    this.bindEvents();
  },
  bindEvents() {
    const sendBtn = Utils.$('.chat-send-btn');
    const input = Utils.$('.chat-input');
    if (sendBtn) sendBtn.addEventListener('click', () => this.sendMessage());
    if (input) input.addEventListener('keydown', (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); this.sendMessage(); } });
  },
  renderContacts() {
    const list = Utils.$('.chat-contacts-list');
    if (!list) return;
    list.innerHTML = '';
    AppData.messages.forEach(conv => {
      const lastMsg = conv.messages[conv.messages.length - 1];
      list.innerHTML += `<div class="chat-contact-item ${conv.id === this.activeContact?.id ? 'active' : ''}" data-contact="${conv.id}">
        <div class="avatar" style="background:${conv.contactColor}">${conv.contactInitials}</div>
        <div class="chat-contact-info">
          <div class="chat-contact-name">${conv.contactName}</div>
          <div class="chat-contact-preview">${lastMsg.text}</div>
        </div>
        <div class="chat-contact-time">${lastMsg.time}</div>
      </div>`;
    });
    Utils.$$('.chat-contact-item', list).forEach(item => {
      item.addEventListener('click', () => {
        this.activeContact = AppData.messages.find(m => m.id === item.dataset.contact);
        Utils.$$('.chat-contact-item').forEach(c => c.classList.remove('active'));
        item.classList.add('active');
        this.renderChat();
      });
    });
  },
  renderChat() {
    const container = Utils.$('.chat-messages');
    const header = Utils.$('.chat-header-name');
    if (!container || !this.activeContact) return;
    if (header) header.textContent = this.activeContact.contactName;
    container.innerHTML = '';
    this.activeContact.messages.forEach(msg => {
      container.innerHTML += `<div style="display:flex;flex-direction:column;align-items:${msg.sent ? 'flex-end' : 'flex-start'}">
        <div class="message-bubble ${msg.sent ? 'sent' : 'received'}">${msg.text}</div>
        <div class="message-time" style="text-align:${msg.sent ? 'right' : 'left'}">${msg.time}</div>
      </div>`;
    });
    container.scrollTop = container.scrollHeight;
  },
  sendMessage() {
    const input = Utils.$('.chat-input');
    if (!input || !input.value.trim() || !this.activeContact) return;
    const text = input.value.trim();
    input.value = '';
    this.activeContact.messages.push({ text, sent: true, time: 'Just now' });
    this.renderChat();
    // Simulate typing & reply
    const container = Utils.$('.chat-messages');
    const typing = Utils.create('div', { className: 'typing-indicator', innerHTML: '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>' });
    container.appendChild(typing);
    container.scrollTop = container.scrollHeight;
    setTimeout(() => {
      typing.remove();
      const replies = ['Got it, thanks!', 'Sounds good!', 'I\'ll review and get back to you.', 'Perfect, let me check.', 'Thanks for the update!'];
      this.activeContact.messages.push({ text: replies[Math.floor(Math.random() * replies.length)], sent: false, time: 'Just now' });
      this.renderChat();
      this.renderContacts();
    }, 1500 + Math.random() * 1000);
  }
};
