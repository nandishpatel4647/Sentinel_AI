<div align="center">

# 🛡️ SENTINEL AI

### Next-Generation Cybersecurity Intelligence Platform

[![Live Demo](https://img.shields.io/badge/🔴_LIVE_DEMO-sentinel--ai.vercel.app-00FFEA?style=for-the-badge&labelColor=080C18)](https://sentinel-ai-nandish.vercel.app)
[![React](https://img.shields.io/badge/React_18-61DAFB?style=for-the-badge&logo=react&logoColor=000)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite_8-646CFF?style=for-the-badge&logo=vite&logoColor=fff)](https://vitejs.dev)
[![Claude AI](https://img.shields.io/badge/Claude_AI-FF6B35?style=for-the-badge&logo=anthropic&logoColor=fff)](https://anthropic.com)
[![Vercel](https://img.shields.io/badge/Vercel-000?style=for-the-badge&logo=vercel&logoColor=fff)](https://vercel.com)

<br/>

> **⚡ AI-powered threat analysis engine that identifies phishing, malware, and social engineering attacks in real-time.**

<br/>

<img src="https://img.shields.io/badge/STATUS-PRODUCTION_READY-00FFA3?style=flat-square&labelColor=111827" />
<img src="https://img.shields.io/badge/HACKATHON-CODESTORM_2K26-FFB700?style=flat-square&labelColor=111827" />
<img src="https://img.shields.io/badge/UNIVERSITY-GTU_School_of_Engineering-00FFEA?style=flat-square&labelColor=111827" />

---

</div>

## 🎯 What is SENTINEL AI?

**SENTINEL AI** is a full-stack cybersecurity intelligence platform that uses AI to detect and analyze digital threats. Built for the **CODESTORM 2K26 Hackathon** at GTU School of Engineering, it provides real-time threat classification, interactive security training, and comprehensive awareness scoring.

> Think of it as your personal cybersecurity analyst — paste any suspicious email, URL, message, or code, and SENTINEL will tell you exactly what's wrong, why it's dangerous, and what to do about it.

---

## ✨ Core Features

### ⚡ Threat Analyzer
The flagship feature — a dual-panel analysis engine with real-time AI classification.

| Feature | Description |
|---------|-------------|
| **Multi-Type Analysis** | Supports EMAIL, URL, MESSAGE, and CODE content types |
| **Threat Classification** | Categorizes as Phishing, Malware, Social Engineering, or Safe |
| **Severity Scoring** | Low / Medium / High with visual threat meter |
| **Confidence Rating** | 0-100% AI confidence score |
| **Threat DNA** | 5-axis breakdown: Urgency, Impersonation, Link Manipulation, Authority Abuse, Fear Tactics |
| **Attack Vector ID** | Identifies the specific attack technique used |
| **Threat Indicators** | Highlights specific red flags found in the content |
| **Educational Tips** | Learn from each analysis with actionable security advice |
| **Deep Scan Mode** | Enhanced analysis depth for obfuscated threats |

### 🎯 Phishing Simulator
Interactive training module with 6 real-world phishing scenarios.

- ⏱️ **30-second timed challenges** — think fast under pressure
- 🔴 **Red flag highlighting** — shows exactly what to look for
- 📊 **Scoring system** — earn points for correct identifications
- 📝 **Detailed explanations** — learn why each email is safe or dangerous
- 🏆 **Performance rating** — from Novice to Cyber Defender

### 🤖 SENTINEL Chat
AI-powered cybersecurity assistant for learning and Q&A.

- Pre-built suggestion chips for common questions
- Explains phishing, malware, social engineering, safe browsing
- Powered by Claude AI with fallback responses

### 📊 Intelligence Dashboard
Real-time analytics and session overview.

- **KPI Cards** — Total Scans, Threats Found, Safe Cleared, Awareness Score
- **Threat Type Breakdown** — Visual chart of detection categories
- **Severity Distribution** — Bar chart of Low/Medium/High threats
- **Live Threat Feed** — Real-time log of all analyses

### 📋 Threat History
Complete audit log with full report drill-down.

- Searchable and filterable scan history
- Slide-out drawer with full analysis details
- Classification badges, severity chips, confidence scores

### 🧠 Awareness Score Hub
Gamified cybersecurity learning with achievement badges.

- **Dynamic Score Ring** — Visual progress indicator (0-100)
- **6 Achievement Badges** — First Catch, Eagle Eye, Safe Zone, Simulator Pro, Speed Analyst, Perfect Score
- **Score Progression Chart** — Track your growth over time
- **Level System** — Novice → Trainee → Cyber Aware → Security Pro → Cyber Defender

### 📄 Report Center
Export professional reports for submission and documentation.

- **PDF Export** — Print-ready formatted report
- **JSON Export** — Machine-readable data export
- **Clipboard Copy** — Quick summary sharing
- CODESTORM 2K26 branded report header with threat ID

---

## 🛠️ Tech Stack

<div align="center">

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend** | React 18 + Vite 8 | Component-based UI with HMR |
| **Styling** | Custom CSS + Tailwind | Glassmorphism design system |
| **Animations** | Framer Motion | Smooth page transitions and micro-interactions |
| **Charts** | Recharts | Data visualization (line, bar, pie charts) |
| **Typography** | Syne + Space Mono | Premium cyber aesthetic |
| **Backend** | Express.js + Node.js | RESTful API server |
| **AI Engine** | Claude AI / GPT-4o | Intelligent threat analysis |
| **Fallback** | Heuristic Engine | Pattern-matching analysis (works offline) |
| **Deployment** | Vercel Serverless | Auto-deployed from GitHub |
| **Notifications** | React Hot Toast | Real-time feedback system |

</div>

---

## 🎨 Design System

SENTINEL uses a custom **cybersecurity-themed design system** built from scratch:

```
Background:    #080C18  (Deep Navy)
Cyan Accent:   #00FFEA  (Primary - actions, highlights)
Red Alert:     #FF2052  (Threats, danger indicators)
Green Safe:    #00FFA3  (Safe content, success states)
Amber Warning: #FFB700  (Medium severity, achievements)
```

- **Glassmorphism cards** with `rgba(255,255,255,0.03)` backgrounds
- **44px grid overlay** for subtle cyber-grid aesthetic
- **210px fixed sidebar** with gradient logo and pulse indicators
- **Monospace data display** using Space Mono for all metrics

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/SouLfieRce/Sentinal_Ai.git
cd Sentinal_Ai/sentinel-ai

# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```

### Running Locally

```bash
# Terminal 1 — Start the backend server
cd server
node index.js
# ⚡ SENTINEL AI Server running on port 3001

# Terminal 2 — Start the frontend dev server
cd client
npm run dev
# ➜ Local: http://localhost:5173/
```

### Environment Variables

Create a `.env` file in the root `sentinel-ai/` directory:

```env
# Optional: AI-powered analysis (leave default for heuristic fallback)
OPENAI_API_KEY=sk-your-openai-api-key-here

# Server configuration
PORT=3001
CLIENT_URL=http://localhost:5173
```

> 💡 **No API key needed!** SENTINEL works out of the box with its built-in heuristic analysis engine. Add an OpenAI API key for enhanced AI-powered analysis.

---

## 📁 Project Structure

```
sentinel-ai/
├── client/                    # React Frontend (Vite)
│   ├── api/                   # Vercel Serverless Functions
│   │   ├── analyze.js         # /api/analyze endpoint
│   │   ├── chat.js            # /api/chat endpoint
│   │   └── health.js          # /api/health endpoint
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   │   ├── Sidebar.jsx    # 210px sidebar with navigation
│   │   │   ├── Header.jsx     # Topbar with live indicators
│   │   │   ├── ThreatMeter.jsx # Circular severity gauge
│   │   │   ├── ThreatDNA.jsx  # 5-axis threat breakdown
│   │   │   ├── ScoreRing.jsx  # Animated score indicator
│   │   │   └── AnalysisLoader.jsx
│   │   ├── pages/             # Application pages
│   │   │   ├── Analyzer.jsx   # ⚡ Threat Analyzer
│   │   │   ├── Dashboard.jsx  # 📊 Intelligence HQ
│   │   │   ├── Simulator.jsx  # 🎯 Phishing Simulator
│   │   │   ├── Chat.jsx       # 🤖 SENTINEL Chat
│   │   │   ├── History.jsx    # 📋 Threat History
│   │   │   ├── Reports.jsx    # 📄 Report Center
│   │   │   └── AwarenessHub.jsx # 🧠 Awareness Score
│   │   ├── context/           # React Context (state management)
│   │   ├── hooks/             # Custom hooks
│   │   ├── utils/             # Utility functions
│   │   ├── App.jsx            # Root layout + routing
│   │   ├── index.css          # Design system (single source of truth)
│   │   └── main.jsx           # Entry point
│   ├── vercel.json            # Vercel deployment config
│   └── package.json
├── server/                    # Express Backend
│   ├── routes/
│   │   ├── analyze.js         # Threat analysis API
│   │   └── chat.js            # Chat API
│   └── index.js               # Server entry point
└── .env                       # Environment variables
```

---

## 🔒 How the Analysis Engine Works

SENTINEL uses a **dual-layer analysis architecture**:

### Layer 1: AI-Powered Analysis (with API key)
Uses Claude AI or GPT-4o for deep semantic understanding of threats, detecting:
- Obfuscated phishing attempts
- Context-aware social engineering
- Subtle malware distribution patterns

### Layer 2: Heuristic Fallback (no API key needed)
A built-in pattern-matching engine that scans for:

```
📧 Phishing Signals     → "verify your account", "click here", "urgent", "suspended"...
🦠 Malware Signals      → "download", "exe", ".bat", "powershell", "macro"...
🧠 Social Eng Signals   → "wire transfer", "gift card", "confidential", "trust me"...
🔗 URL Analysis         → IP addresses, shortened URLs, typosquatting detection
```

Both layers produce identical output format with **classification, severity, confidence, threat DNA, indicators, and educational tips**.

---

## 🏆 Scoring System

| Action | Points |
|--------|--------|
| Correctly identify a threat | +15 pts |
| Correctly clear safe content | +10 pts |
| Complete simulator correctly | +20 pts |
| False positive (wrong flag) | -5 pts |

### Achievement Badges

| Badge | Requirement |
|-------|------------|
| 🎯 First Catch | Detect your first threat |
| 🦅 Eagle Eye | 5 threats detected in a row |
| 🟢 Safe Zone | 3 safe contents cleared correctly |
| 🏆 Simulator Pro | Complete all training scenarios |
| ⚡ Speed Analyst | Analyze 10+ items |
| 💎 Perfect Score | Reach 100 awareness score |

---

## 🌐 Deployment

### Vercel (Production)
The app auto-deploys from GitHub to Vercel with serverless API functions:

- **Frontend**: Static build from `client/dist/`
- **API Routes**: Serverless functions from `client/api/`
- **Zero backend needed** — everything runs on Vercel's edge network

### Manual Deployment

```bash
cd client
npm run build
# Output in client/dist/ — deploy to any static host
```

---

## 👥 Team

<div align="center">

**CODESTORM 2K26 Hackathon**

Built with ❤️ at **GTU School of Engineering**

</div>

---

## 📝 License

This project is built for the CODESTORM 2K26 Hackathon. All rights reserved.

---

<div align="center">

**Built with 🛡️ by Team SENTINEL**

[![Deploy](https://img.shields.io/badge/DEPLOY_TO_VERCEL-000?style=for-the-badge&logo=vercel)](https://vercel.com/new/clone?repository-url=https://github.com/SouLfieRce/Sentinal_Ai)

*Protecting the digital world, one scan at a time.*

</div>
