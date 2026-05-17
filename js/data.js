/* ==============================================
   FREELANCER WORKSPACE — Mock Data
   ============================================== */

const AppData = {
  user: {
    name: 'Alex Rivera',
    email: 'alex@riverastudio.co',
    role: 'Freelance Designer & Developer',
    initials: 'AR',
    avatar: null
  },

  clients: [
    { id: 'c1', name: 'Acme Corp', contact: 'Sarah Chen', email: 'sarah@acmecorp.com', phone: '+1 (415) 555-0142', status: 'active', projects: 3, totalRevenue: 42500, industry: 'Technology', initials: 'AC', color: '#8b5cf6', joinDate: '2025-03-15' },
    { id: 'c2', name: 'Bloom Studio', contact: 'James Park', email: 'james@bloomstudio.io', phone: '+1 (212) 555-0198', status: 'active', projects: 2, totalRevenue: 28000, industry: 'Marketing', initials: 'BS', color: '#22c55e', joinDate: '2025-05-22' },
    { id: 'c3', name: 'NovaTech', contact: 'Maria Santos', email: 'maria@novatech.dev', phone: '+1 (310) 555-0167', status: 'active', projects: 1, totalRevenue: 15800, industry: 'SaaS', initials: 'NT', color: '#38bdf8', joinDate: '2025-08-10' },
    { id: 'c4', name: 'Craft & Co', contact: 'David Kim', email: 'david@craftco.com', phone: '+1 (503) 555-0134', status: 'inactive', projects: 1, totalRevenue: 9200, industry: 'E-commerce', initials: 'CC', color: '#f59e0b', joinDate: '2025-01-08' },
    { id: 'c5', name: 'Zenith Labs', contact: 'Emily Wong', email: 'emily@zenithlabs.ai', phone: '+1 (650) 555-0189', status: 'active', projects: 2, totalRevenue: 36700, industry: 'AI/ML', initials: 'ZL', color: '#ef4444', joinDate: '2025-06-30' },
    { id: 'c6', name: 'Pulse Media', contact: 'Ryan O\'Brien', email: 'ryan@pulsemedia.co', phone: '+1 (312) 555-0156', status: 'active', projects: 1, totalRevenue: 12400, industry: 'Media', initials: 'PM', color: '#6366f1', joinDate: '2025-09-14' },
    { id: 'c7', name: 'Verde Health', contact: 'Lisa Tran', email: 'lisa@verdehealth.com', phone: '+1 (617) 555-0173', status: 'paused', projects: 1, totalRevenue: 18500, industry: 'Healthcare', initials: 'VH', color: '#14b8a6', joinDate: '2025-04-20' },
    { id: 'c8', name: 'Atlas Finance', contact: 'Michael Brown', email: 'michael@atlasfinance.io', phone: '+1 (202) 555-0145', status: 'active', projects: 2, totalRevenue: 54000, industry: 'Fintech', initials: 'AF', color: '#a855f7', joinDate: '2025-02-12' },
    { id: 'c9', name: 'Luminary Design', contact: 'Anna Kowalski', email: 'anna@luminary.design', phone: '+1 (720) 555-0191', status: 'active', projects: 1, totalRevenue: 8900, industry: 'Design', initials: 'LD', color: '#ec4899', joinDate: '2025-10-05' },
    { id: 'c10', name: 'Orbit Systems', contact: 'Tom Hughes', email: 'tom@orbitsystems.net', phone: '+1 (408) 555-0168', status: 'inactive', projects: 0, totalRevenue: 0, industry: 'IT Services', initials: 'OS', color: '#64748b', joinDate: '2025-07-18' }
  ],

  projects: [
    { id: 'p1', name: 'Acme Web Redesign', client: 'Acme Corp', clientId: 'c1', status: 'in-progress', progress: 72, priority: 'high', budget: 18000, spent: 12960, deadline: '2026-06-15', description: 'Complete redesign of corporate website with modern UI', tags: ['Web', 'UI/UX'] },
    { id: 'p2', name: 'Bloom Brand Identity', client: 'Bloom Studio', clientId: 'c2', status: 'in-progress', progress: 45, priority: 'medium', budget: 12000, spent: 5400, deadline: '2026-07-01', description: 'Full brand identity package including logo, guidelines, and collateral', tags: ['Branding', 'Design'] },
    { id: 'p3', name: 'NovaTech Dashboard', client: 'NovaTech', clientId: 'c3', status: 'in-progress', progress: 88, priority: 'high', budget: 15800, spent: 13904, deadline: '2026-05-30', description: 'Analytics dashboard for SaaS platform', tags: ['Dashboard', 'React'] },
    { id: 'p4', name: 'Craft & Co Shopify', client: 'Craft & Co', clientId: 'c4', status: 'completed', progress: 100, priority: 'low', budget: 9200, spent: 9200, deadline: '2026-03-20', description: 'Custom Shopify theme development', tags: ['E-commerce', 'Shopify'] },
    { id: 'p5', name: 'Zenith AI Landing', client: 'Zenith Labs', clientId: 'c5', status: 'in-progress', progress: 35, priority: 'high', budget: 22000, spent: 7700, deadline: '2026-08-10', description: 'Marketing website for AI product launch', tags: ['Web', 'Marketing'] },
    { id: 'p6', name: 'Atlas Mobile App', client: 'Atlas Finance', clientId: 'c8', status: 'planning', progress: 10, priority: 'high', budget: 35000, spent: 3500, deadline: '2026-10-01', description: 'Mobile banking app UI/UX design', tags: ['Mobile', 'Fintech'] },
    { id: 'p7', name: 'Pulse Social Redesign', client: 'Pulse Media', clientId: 'c6', status: 'in-progress', progress: 60, priority: 'medium', budget: 12400, spent: 7440, deadline: '2026-06-20', description: 'Social media management dashboard redesign', tags: ['Dashboard', 'Social'] },
    { id: 'p8', name: 'Verde Patient Portal', client: 'Verde Health', clientId: 'c7', status: 'paused', progress: 30, priority: 'medium', budget: 18500, spent: 5550, deadline: '2026-09-01', description: 'Patient portal with appointment scheduling', tags: ['Healthcare', 'Portal'] },
    { id: 'p9', name: 'Zenith Data Viz', client: 'Zenith Labs', clientId: 'c5', status: 'planning', progress: 5, priority: 'medium', budget: 14700, spent: 735, deadline: '2026-09-15', description: 'Data visualization components library', tags: ['Data Viz', 'Library'] },
    { id: 'p10', name: 'Luminary Portfolio', client: 'Luminary Design', clientId: 'c9', status: 'completed', progress: 100, priority: 'low', budget: 8900, spent: 8900, deadline: '2026-04-10', description: 'Portfolio website with CMS integration', tags: ['Web', 'CMS'] }
  ],

  tasks: [
    { id: 't1', title: 'Design homepage wireframe', project: 'Acme Web Redesign', projectId: 'p1', status: 'completed', priority: 'high', dueDate: '2026-05-10', tags: ['Design'], assignee: 'AR' },
    { id: 't2', title: 'Implement navigation component', project: 'Acme Web Redesign', projectId: 'p1', status: 'completed', priority: 'medium', dueDate: '2026-05-15', tags: ['Dev'], assignee: 'AR' },
    { id: 't3', title: 'Create hero section animations', project: 'Acme Web Redesign', projectId: 'p1', status: 'in-progress', priority: 'medium', dueDate: '2026-05-25', tags: ['Dev', 'Animation'], assignee: 'AR' },
    { id: 't4', title: 'Design contact form', project: 'Acme Web Redesign', projectId: 'p1', status: 'in-progress', priority: 'low', dueDate: '2026-05-28', tags: ['Design'], assignee: 'AR' },
    { id: 't5', title: 'Logo concepts — Round 2', project: 'Bloom Brand Identity', projectId: 'p2', status: 'review', priority: 'high', dueDate: '2026-05-20', tags: ['Branding'], assignee: 'AR' },
    { id: 't6', title: 'Color palette finalization', project: 'Bloom Brand Identity', projectId: 'p2', status: 'in-progress', priority: 'medium', dueDate: '2026-05-22', tags: ['Branding'], assignee: 'AR' },
    { id: 't7', title: 'Build chart components', project: 'NovaTech Dashboard', projectId: 'p3', status: 'review', priority: 'high', dueDate: '2026-05-18', tags: ['Dev', 'Charts'], assignee: 'AR' },
    { id: 't8', title: 'User settings page', project: 'NovaTech Dashboard', projectId: 'p3', status: 'in-progress', priority: 'medium', dueDate: '2026-05-24', tags: ['Dev'], assignee: 'AR' },
    { id: 't9', title: 'API integration testing', project: 'NovaTech Dashboard', projectId: 'p3', status: 'backlog', priority: 'high', dueDate: '2026-05-28', tags: ['Dev', 'Testing'], assignee: 'AR' },
    { id: 't10', title: 'Landing page copy review', project: 'Zenith AI Landing', projectId: 'p5', status: 'backlog', priority: 'medium', dueDate: '2026-06-01', tags: ['Content'], assignee: 'AR' },
    { id: 't11', title: 'Design pricing section', project: 'Zenith AI Landing', projectId: 'p5', status: 'backlog', priority: 'low', dueDate: '2026-06-05', tags: ['Design'], assignee: 'AR' },
    { id: 't12', title: 'Mobile app user flows', project: 'Atlas Mobile App', projectId: 'p6', status: 'in-progress', priority: 'high', dueDate: '2026-05-30', tags: ['UX'], assignee: 'AR' },
    { id: 't13', title: 'Dashboard wireframes', project: 'Pulse Social Redesign', projectId: 'p7', status: 'completed', priority: 'medium', dueDate: '2026-05-08', tags: ['Design'], assignee: 'AR' },
    { id: 't14', title: 'Implement data tables', project: 'Pulse Social Redesign', projectId: 'p7', status: 'review', priority: 'medium', dueDate: '2026-05-19', tags: ['Dev'], assignee: 'AR' },
    { id: 't15', title: 'Performance optimization', project: 'Acme Web Redesign', projectId: 'p1', status: 'backlog', priority: 'medium', dueDate: '2026-06-10', tags: ['Dev'], assignee: 'AR' },
    { id: 't16', title: 'Design system documentation', project: 'Bloom Brand Identity', projectId: 'p2', status: 'backlog', priority: 'low', dueDate: '2026-06-15', tags: ['Docs'], assignee: 'AR' },
    { id: 't17', title: 'Onboarding flow design', project: 'Atlas Mobile App', projectId: 'p6', status: 'backlog', priority: 'high', dueDate: '2026-06-08', tags: ['UX', 'Design'], assignee: 'AR' },
    { id: 't18', title: 'Analytics export feature', project: 'NovaTech Dashboard', projectId: 'p3', status: 'in-progress', priority: 'low', dueDate: '2026-05-26', tags: ['Dev'], assignee: 'AR' },
    { id: 't19', title: 'Social media templates', project: 'Bloom Brand Identity', projectId: 'p2', status: 'backlog', priority: 'low', dueDate: '2026-06-20', tags: ['Design'], assignee: 'AR' },
    { id: 't20', title: 'Icon set creation', project: 'Zenith AI Landing', projectId: 'p5', status: 'in-progress', priority: 'medium', dueDate: '2026-05-27', tags: ['Design', 'Icons'], assignee: 'AR' }
  ],

  invoices: [
    { id: 'INV-001', client: 'Acme Corp', clientId: 'c1', project: 'Acme Web Redesign', amount: 6500, status: 'paid', issuedDate: '2026-04-01', dueDate: '2026-04-15', paidDate: '2026-04-12' },
    { id: 'INV-002', client: 'NovaTech', clientId: 'c3', project: 'NovaTech Dashboard', amount: 8200, status: 'paid', issuedDate: '2026-04-10', dueDate: '2026-04-25', paidDate: '2026-04-23' },
    { id: 'INV-003', client: 'Bloom Studio', clientId: 'c2', project: 'Bloom Brand Identity', amount: 5400, status: 'pending', issuedDate: '2026-05-01', dueDate: '2026-05-15', paidDate: null },
    { id: 'INV-004', client: 'Zenith Labs', clientId: 'c5', project: 'Zenith AI Landing', amount: 7700, status: 'pending', issuedDate: '2026-05-05', dueDate: '2026-05-20', paidDate: null },
    { id: 'INV-005', client: 'Atlas Finance', clientId: 'c8', project: 'Atlas Mobile App', amount: 3500, status: 'draft', issuedDate: '2026-05-15', dueDate: '2026-05-30', paidDate: null },
    { id: 'INV-006', client: 'Craft & Co', clientId: 'c4', project: 'Craft & Co Shopify', amount: 9200, status: 'paid', issuedDate: '2026-03-01', dueDate: '2026-03-15', paidDate: '2026-03-14' },
    { id: 'INV-007', client: 'Pulse Media', clientId: 'c6', project: 'Pulse Social Redesign', amount: 4200, status: 'overdue', issuedDate: '2026-04-20', dueDate: '2026-05-05', paidDate: null },
    { id: 'INV-008', client: 'Acme Corp', clientId: 'c1', project: 'Acme Web Redesign', amount: 6460, status: 'paid', issuedDate: '2026-05-01', dueDate: '2026-05-15', paidDate: '2026-05-13' },
    { id: 'INV-009', client: 'Verde Health', clientId: 'c7', project: 'Verde Patient Portal', amount: 5550, status: 'pending', issuedDate: '2026-05-10', dueDate: '2026-05-25', paidDate: null },
    { id: 'INV-010', client: 'Luminary Design', clientId: 'c9', project: 'Luminary Portfolio', amount: 8900, status: 'paid', issuedDate: '2026-03-15', dueDate: '2026-03-30', paidDate: '2026-03-28' }
  ],

  notifications: [
    { id: 'n1', type: 'payment', title: 'Payment received', message: 'Acme Corp paid $6,460 for INV-008', time: '2 hours ago', read: false, icon: '💰' },
    { id: 'n2', type: 'comment', title: 'New feedback', message: 'Sarah Chen commented on homepage wireframe', time: '3 hours ago', read: false, icon: '💬' },
    { id: 'n3', type: 'deadline', title: 'Deadline approaching', message: 'NovaTech Dashboard due in 12 days', time: '5 hours ago', read: false, icon: '⏰' },
    { id: 'n4', type: 'task', title: 'Task completed', message: 'Dashboard wireframes marked as done', time: '8 hours ago', read: true, icon: '✅' },
    { id: 'n5', type: 'invoice', title: 'Invoice overdue', message: 'Pulse Media INV-007 is 13 days overdue', time: '1 day ago', read: false, icon: '🔴' },
    { id: 'n6', type: 'client', title: 'New client inquiry', message: 'Orbit Systems requested a project proposal', time: '1 day ago', read: true, icon: '👤' },
    { id: 'n7', type: 'project', title: 'Project milestone', message: 'NovaTech Dashboard reached 88% completion', time: '2 days ago', read: true, icon: '🎯' },
    { id: 'n8', type: 'payment', title: 'Payment received', message: 'NovaTech paid $8,200 for INV-002', time: '3 days ago', read: true, icon: '💰' },
    { id: 'n9', type: 'review', title: 'Review requested', message: 'Logo concepts ready for client review', time: '3 days ago', read: true, icon: '👁' },
    { id: 'n10', type: 'task', title: 'Task assigned', message: 'Mobile app user flows added to your board', time: '4 days ago', read: true, icon: '📋' },
    { id: 'n11', type: 'system', title: 'System update', message: 'Workspace updated to version 2.4', time: '5 days ago', read: true, icon: '⚙️' },
    { id: 'n12', type: 'comment', title: 'Client approved', message: 'David Kim approved the Shopify theme', time: '1 week ago', read: true, icon: '✨' }
  ],

  messages: [
    { id: 'm1', contactId: 'c1', contactName: 'Sarah Chen', contactInitials: 'SC', contactColor: '#8b5cf6', messages: [
      { text: 'Hi Alex! How is the homepage redesign coming along?', sent: false, time: '10:30 AM' },
      { text: 'Going great! I finished the wireframes and starting on the high-fidelity mockups today.', sent: true, time: '10:35 AM' },
      { text: 'Awesome! Can you share a preview by end of day?', sent: false, time: '10:38 AM' },
      { text: 'Absolutely, I\'ll send a Figma link by 5 PM.', sent: true, time: '10:40 AM' },
      { text: 'Perfect, looking forward to it! 🙌', sent: false, time: '10:42 AM' }
    ]},
    { id: 'm2', contactId: 'c2', contactName: 'James Park', contactInitials: 'JP', contactColor: '#22c55e', messages: [
      { text: 'James, here are the three logo directions we discussed.', sent: true, time: '9:15 AM' },
      { text: 'These look incredible! The team really loves option B.', sent: false, time: '11:20 AM' },
      { text: 'Great choice! I\'ll refine option B and prepare the variations.', sent: true, time: '11:25 AM' },
      { text: 'Can we also get a monochrome version?', sent: false, time: '11:30 AM' }
    ]},
    { id: 'm3', contactId: 'c5', contactName: 'Emily Wong', contactInitials: 'EW', contactColor: '#ef4444', messages: [
      { text: 'Alex, we\'re planning the landing page content this week.', sent: false, time: 'Yesterday' },
      { text: 'Perfect timing. I have the layout structure ready for review.', sent: true, time: 'Yesterday' },
      { text: 'Let\'s sync tomorrow at 2 PM to go over everything.', sent: false, time: 'Yesterday' }
    ]},
    { id: 'm4', contactId: 'c8', contactName: 'Michael Brown', contactInitials: 'MB', contactColor: '#a855f7', messages: [
      { text: 'The initial user flow diagrams are ready for the mobile app.', sent: true, time: 'May 16' },
      { text: 'Thanks Alex. The product team will review this week.', sent: false, time: 'May 16' }
    ]},
    { id: 'm5', contactId: 'c6', contactName: 'Ryan O\'Brien', contactInitials: 'RO', contactColor: '#6366f1', messages: [
      { text: 'Hey Ryan, just a reminder about the invoice from last month.', sent: true, time: 'May 14' },
      { text: 'Sorry about that! Processing it today.', sent: false, time: 'May 15' }
    ]}
  ],

  activities: [
    { id: 'a1', type: 'task', text: 'Completed dashboard wireframes for Pulse Social', time: '2 hours ago' },
    { id: 'a2', type: 'payment', text: 'Received $6,460 from Acme Corp', time: '3 hours ago' },
    { id: 'a3', type: 'project', text: 'Updated NovaTech Dashboard to 88%', time: '5 hours ago' },
    { id: 'a4', type: 'client', text: 'Added Luminary Design as new client', time: '1 day ago' },
    { id: 'a5', type: 'task', text: 'Submitted logo concepts for review', time: '1 day ago' },
    { id: 'a6', type: 'invoice', text: 'Created invoice INV-005 for Atlas Finance', time: '2 days ago' },
    { id: 'a7', type: 'project', text: 'Started Atlas Mobile App planning phase', time: '3 days ago' },
    { id: 'a8', type: 'task', text: 'Finished implementing navigation component', time: '4 days ago' }
  ],

  analytics: {
    revenue: [
      { month: 'Jan', amount: 12400 }, { month: 'Feb', amount: 15800 },
      { month: 'Mar', amount: 18100 }, { month: 'Apr', amount: 21300 },
      { month: 'May', amount: 19600 }, { month: 'Jun', amount: 24500 },
      { month: 'Jul', amount: 22800 }, { month: 'Aug', amount: 27200 }
    ],
    taskCompletion: [
      { week: 'W1', completed: 8, total: 12 }, { week: 'W2', completed: 11, total: 14 },
      { week: 'W3', completed: 6, total: 10 }, { week: 'W4', completed: 13, total: 15 },
      { week: 'W5', completed: 9, total: 11 }, { week: 'W6', completed: 14, total: 16 }
    ],
    clientActivity: [
      { client: 'Acme Corp', hours: 45 }, { client: 'NovaTech', hours: 38 },
      { client: 'Bloom Studio', hours: 28 }, { client: 'Zenith Labs', hours: 22 },
      { client: 'Atlas Finance', hours: 15 }, { client: 'Pulse Media', hours: 18 }
    ],
    productivity: [
      { day: 'Mon', hours: 7.5 }, { day: 'Tue', hours: 8.2 },
      { day: 'Wed', hours: 6.8 }, { day: 'Thu', hours: 9.1 },
      { day: 'Fri', hours: 7.0 }, { day: 'Sat', hours: 3.5 },
      { day: 'Sun', hours: 1.2 }
    ]
  },

  timeEntries: [
    { id: 'te1', project: 'Acme Web Redesign', task: 'Hero section animations', duration: '02:45:00', date: '2026-05-18' },
    { id: 'te2', project: 'Bloom Brand Identity', task: 'Logo concepts', duration: '03:15:00', date: '2026-05-18' },
    { id: 'te3', project: 'NovaTech Dashboard', task: 'Chart components', duration: '04:30:00', date: '2026-05-17' },
    { id: 'te4', project: 'Pulse Social Redesign', task: 'Data tables', duration: '02:00:00', date: '2026-05-17' },
    { id: 'te5', project: 'Atlas Mobile App', task: 'User flows', duration: '03:45:00', date: '2026-05-16' },
    { id: 'te6', project: 'Acme Web Redesign', task: 'Navigation component', duration: '05:10:00', date: '2026-05-16' },
    { id: 'te7', project: 'Zenith AI Landing', task: 'Icon set creation', duration: '01:30:00', date: '2026-05-15' },
    { id: 'te8', project: 'NovaTech Dashboard', task: 'Analytics export', duration: '02:15:00', date: '2026-05-15' }
  ]
};
