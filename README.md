<div align="center">

# ✨ Freelancer Workspace

**The modern workspace for independent professionals.**

Manage clients, projects, tasks, invoices, and analytics — all in one elegant platform.

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Vercel-black?style=for-the-badge)](https://freelancer-workspace-ui.vercel.app/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-CF6DFC.svg?style=flat-square)](LICENSE)

</div>

---

## 🎯 Overview

Freelancer Workspace is a **production-grade, frontend-only** SaaS dashboard built entirely with vanilla HTML, CSS, and JavaScript — **zero frameworks, zero dependencies, zero backend**. It's designed to look and feel like a real modern SaaS product used by freelancers to manage their entire business.

> **Design Inspiration:** Linear · Notion · Stripe · Vercel

## 🖼️ Screenshots

| Dashboard | Kanban Board |
|:---------:|:------------:|
| Stats, charts & activity | Drag-and-drop task management |

| Messages | Analytics |
|:--------:|:---------:|
| Real-time chat interface | Revenue & productivity charts |

## 🎨 Color Palette

| Color | Hex | Usage |
|:-----:|:---:|:------|
| 🟡 Cream | `#FDFBD4` | Primary text, warm highlights |
| 🫒 Gold | `#BDB96A` | Success states, positive indicators |
| 🔵 Lavender | `#C1BFFF` | Info badges, secondary accents |
| 🟣 Violet | `#CF6DFC` | Primary accent, buttons, links |

Background surfaces use deep purple-tinted darks (`#0d0b1a` to `#18152e`) for a cohesive, elegant aesthetic.

## ✅ Features

### Core Modules
- **📊 Dashboard** — Animated stat counters, revenue bar chart (Canvas API), activity timeline, project cards
- **👥 Client Management** — Search, filter chips, client cards with detail modal
- **📁 Project Tracking** — Progress bars, priority badges, deadline tracking
- **✅ Kanban Board** — 4-column drag-and-drop task management
- **💳 Invoice Management** — Summary stats, filterable data table
- **💬 Messages** — Contact list, chat bubbles, send message with auto-reply simulation
- **⏱ Time Tracker** — Live start/stop/reset timer with session log
- **📈 Analytics** — Line, bar, and donut charts (pure Canvas)
- **⚙️ Settings** — Tabbed UI (Profile, Appearance, Notifications, Workspace, Danger Zone)

### UI Components
- **🎨 Theme Toggle** — Dark / Light mode switch (in-memory)
- **⌘K Command Palette** — Keyboard-driven navigation and actions
- **🔔 Notifications Panel** — Dropdown with mark-all-read
- **📱 Responsive Sidebar** — Collapsible desktop, mobile drawer
- **🍞 Toast Notifications** — Auto-dismiss success/error/info/warning
- **📊 Canvas Charts** — Animated bar, line, and donut charts
- **✅ Form Validation** — Client-side validation on settings forms
- **🖱️ Drag and Drop** — Native HTML5 drag-and-drop for Kanban

## 🏗️ Project Structure

```
Freelancer Workspace UI/
├── index.html                 # Landing page
├── vercel.json                # Deployment config
├── README.md                  # Documentation
│
├── pages/                     # Application pages
│   ├── dashboard.html
│   ├── clients.html
│   ├── projects.html
│   ├── tasks.html
│   ├── invoices.html
│   ├── messages.html
│   ├── time-tracker.html
│   ├── analytics.html
│   └── settings.html
│
├── css/                       # Modular stylesheets
│   ├── variables.css          # Design tokens and color palette
│   ├── base.css               # Reset, typography, globals
│   ├── layout.css             # App shell, sidebar, topbar
│   ├── components.css         # Buttons, cards, modals, inputs
│   ├── pages.css              # Page-specific layouts
│   ├── animations.css         # Keyframes and transitions
│   ├── utilities.css          # Utility classes
│   └── responsive.css         # Breakpoints (mobile to desktop)
│
├── js/                        # Modular JavaScript
│   ├── data.js                # Mock data (static arrays/objects)
│   ├── utils.js               # DOM helpers, formatting
│   ├── app.js                 # Bootstrap and page detection
│   ├── theme.js               # Dark/light toggle
│   ├── sidebar.js             # Sidebar collapse/mobile drawer
│   ├── navigation.js          # Sticky nav, scroll behavior
│   ├── modal.js               # Modal open/close
│   ├── dropdown.js            # Dropdown/menu toggles
│   ├── command-palette.js     # Ctrl+K command palette
│   ├── forms.js               # Form validation
│   ├── charts.js              # Canvas-based charts
│   ├── dragdrop.js            # HTML5 drag-and-drop
│   ├── dashboard.js           # Dashboard page logic
│   ├── clients.js             # Clients page logic
│   ├── projects.js            # Projects page logic
│   ├── tasks.js               # Tasks/Kanban page logic
│   ├── invoices.js            # Invoices page logic
│   ├── messages.js            # Chat page logic
│   ├── time-tracker.js        # Timer page logic
│   ├── analytics.js           # Analytics page logic
│   └── settings.js            # Settings page logic
│
└── data/                      # Static reference data
    └── mock-data.json
```

## 🚀 Getting Started

### Prerequisites

No build tools, package managers, or servers required. Just a browser.

### Run Locally

```bash
# Clone the repository
git clone https://github.com/Aniroodh1234/Freelancer_workspace_UI.git
cd Freelancer_workspace_UI

# Option 1: Open directly
start index.html              # Windows
open index.html               # macOS

# Option 2: Use a local server (recommended)
npx -y serve -l 3000
# Visit http://localhost:3000
```

### Deploy to Vercel

```bash
# Push to GitHub
git add .
git commit -m "update: refined color palette and project structure"
git push origin main

# Vercel auto-deploys from main branch
# Or deploy manually:
npx -y vercel --prod
```

## 🛠️ Tech Stack

| Category | Technology |
|:---------|:-----------|
| Structure | HTML5 (semantic) |
| Styling | Vanilla CSS (CSS Custom Properties) |
| Logic | Vanilla JavaScript (ES6+) |
| Charts | Canvas API |
| Drag and Drop | HTML5 Drag and Drop API |
| Typography | [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts) |
| Deployment | [Vercel](https://vercel.com) |
| Icons | Inline SVGs |

<div align="center">

**[Live Demo](https://freelancer-workspace-ui.vercel.app/)** · **[Source Code](https://github.com/Aniroodh1234/Freelancer_workspace_UI)**

</div>
