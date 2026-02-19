GITGPT: Autonomous CI/CD Healing Agent
RIFT 2026 Hackathon | Track: GEN AI

Live Deployment: []

LinkedIn Demo: []

Team Name: [SHECODES] | Team Leader: [AYUSHA SAGAR]  | Team Members: [ MISTHI JAISWAL, HEMANT DUA]

---

## 🚀 Live Deployment

🔗 **Website:** [https://your-deployment-url.vercel.app](https://your-deployment-url.vercel.app)  
📹 **LinkedIn Demo Video:** [Watch Here](https://linkedin.com/your-video-link)

---

## 📌 Project Overview

**GitGPT** is an autonomous DevOps agent that detects, fixes, and verifies code issues in GitHub repositories — without human intervention. Powered by a multi-agent AI architecture and a production-ready React dashboard, GitGPT takes any GitHub repository URL, clones it, runs all tests, identifies failures, applies targeted fixes, commits them with an `[AI-AGENT]` prefix, and iterates until all CI/CD checks pass.

Developers spend **40–60%** of their time debugging CI/CD failures. GitGPT eliminates this bottleneck.

Core Features
Multi-Agent Orchestration: Powered by LangGraph for stateful, cyclic error correction.

Sandboxed Execution: All test runs occur inside isolated Docker containers to prevent host contamination.

Auto-Healing Loop: Automatically iterates until all unit tests pass.

Production-Ready Dashboard: Real-time visualization of agent progress, scoring, and fix logs.
# 🤖 GitGPT — Autonomous CI/CD Healing Agent


---

## 🏗️ Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        GitGPT System                            │
│                                                                 │
│  ┌──────────────┐        ┌──────────────────────────────────┐  │
│  │   React      │ REST   │         FastAPI Backend           │  │
│  │  Dashboard   │◄──────►│         (Orchestrator)            │  │
│  │  (Frontend)  │        └───────────┬──────────────────────┘  │
│  └──────────────┘                    │                          │
│                                      ▼                          │
│                         ┌────────────────────────┐             │
│                         │   Multi-Agent Core      │             │
│                         │  (LangGraph / CrewAI)   │             │
│                         └───────────┬────────────┘             │
│                                     │                           │
│          ┌──────────────────────────┼──────────────────┐       │
│          ▼                          ▼                   ▼       │
│  ┌───────────────┐       ┌──────────────────┐  ┌─────────────┐ │
│  │  Repo Cloner  │       │  Code Analyzer   │  │  Fix Agent  │ │
│  │  Agent        │       │  Agent           │  │  Agent      │ │
│  │               │       │  (AST + Linting) │  │  (GPT-4o)   │ │
│  └───────────────┘       └──────────────────┘  └──────┬──────┘ │
│                                                        │        │
│                          ┌─────────────────────────────▼──────┐ │
│                          │       Test Runner Agent             │ │
│                          │  (pytest / jest / mocha sandboxed)  │ │
│                          └────────────────┬────────────────────┘ │
│                                           │                      │
│                          ┌────────────────▼────────────────────┐ │
│                          │       CI/CD Monitor Agent            │ │
│                          │  (GitHub Actions / Webhook Poller)   │ │
│                          └─────────────────────────────────────┘ │
│                                                                   │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │                  Docker Sandbox                             │  │
│  │        (Isolated code execution environment)                │  │
│  └────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────┘
```

### Agent Workflow

```
Input: GitHub Repo URL
        │
        ▼
  ┌─────────────┐
  │ Clone Repo  │
  └──────┬──────┘
         │
         ▼
  ┌─────────────────┐
  │ Discover & Run  │
  │   Test Files    │
  └──────┬──────────┘
         │
         ▼
  ┌─────────────────┐    No Failures?
  │ Analyze Failures│───────────────► ✅ Done (PASSED)
  └──────┬──────────┘
         │ Has Failures
         ▼
  ┌─────────────────┐
  │  Generate Fixes │
  │  (per bug type) │
  └──────┬──────────┘
         │
         ▼
  ┌────────────────────────────┐
  │ Commit [AI-AGENT] + Push   │
  │ to TEAM_NAME_LEADER_AI_Fix │
  └──────┬─────────────────────┘
         │
         ▼
  ┌─────────────────┐
  │ Monitor CI/CD   │◄──── Retry (max 5 iterations)
  │  Pipeline       │
  └──────┬──────────┘
         │
         ▼
  ┌─────────────────┐
  │ Generate        │
  │ results.json    │
  └──────┬──────────┘
         │
         ▼
  React Dashboard Updates
```

---

## ✨ Features

- 🔍 **Autonomous Repository Analysis** — Clones any public GitHub repo and discovers all test files
- 🐛 **Multi-Type Bug Detection** — Catches LINTING, SYNTAX, LOGIC, TYPE_ERROR, IMPORT, and INDENTATION issues
- 🛠️ **Targeted AI Fixes** — Generates precise fixes using GPT-4o with contextual awareness
- 🔁 **Iterative CI/CD Healing** — Monitors pipeline and retries until all tests pass (up to 5 iterations)
- 📊 **Live React Dashboard** — Real-time updates with score breakdown, fix tables, and CI/CD timeline
- 🐳 **Sandboxed Execution** — All code runs inside Docker for safety and isolation
- 📝 **Structured Output** — Generates `results.json` after every run

---

## 🖥️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18, Vite, TailwindCSS, Recharts, Zustand |
| **Backend** | Python, FastAPI, LangGraph |
| **AI/LLM** | OpenAI GPT-4o, LangChain |
| **Agent Framework** | LangGraph (multi-agent orchestration) |
| **Code Analysis** | AST, Flake8, Pylint, ESLint |
| **Test Runners** | pytest, jest, mocha |
| **Sandboxing** | Docker |
| **Version Control** | GitHub API (PyGitHub) |
| **Deployment** | Vercel (Frontend), Railway (Backend) |

---

## 📁 Repository Structure

```
gitgpt/
├── frontend/                  # React Dashboard
│   ├── src/
│   │   ├── components/
│   │   │   ├── InputSection.jsx
│   │   │   ├── RunSummaryCard.jsx
│   │   │   ├── ScoreBreakdown.jsx
│   │   │   ├── FixesTable.jsx
│   │   │   └── CICDTimeline.jsx
│   │   ├── store/             # Zustand state management
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/                   # FastAPI + Agent Core
│   ├── agents/
│   │   ├── repo_cloner.py
│   │   ├── code_analyzer.py
│   │   ├── fix_agent.py
│   │   ├── test_runner.py
│   │   └── cicd_monitor.py
│   ├── graph/
│   │   └── workflow.py        # LangGraph orchestration
│   ├── api/
│   │   └── routes.py          # REST API endpoints
│   ├── sandbox/
│   │   └── docker_runner.py
│   ├── main.py
│   └── requirements.txt
│
├── docker/
│   ├── Dockerfile
│   └── docker-compose.yml
│
├── results.json               # Auto-generated after each run
└── README.md
```

---

## ⚙️ Installation & Setup

### Prerequisites

- Node.js >= 18
- Python >= 3.10
- Docker & Docker Compose
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/gitgpt.git
cd gitgpt
```

### 2. Environment Variables

Create a `.env` file in the `backend/` directory:

```env
# OpenAI
OPENAI_API_KEY=your_openai_api_key_here

# GitHub
GITHUB_TOKEN=your_github_personal_access_token

# App Config
MAX_RETRIES=5
AGENT_TIMEOUT=300
SANDBOX_MEMORY_LIMIT=512m
PORT=8000
```

Create a `.env` file in the `frontend/` directory:

```env
VITE_API_BASE_URL=http://localhost:8000
```

### 3. Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### 4. Frontend Setup

```bash
cd frontend
npm install
```

### 5. Docker Setup (Sandbox)

```bash
docker build -t gitgpt-sandbox ./docker/
```

---

## 🚀 Running the Application

### Development Mode

**Start the backend:**
```bash
cd backend
uvicorn main:app --reload --port 8000
```

**Start the frontend:**
```bash
cd frontend
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Mode with Docker Compose

```bash
docker-compose up --build
```

---

## 📋 Usage

1. Open the GitGPT dashboard in your browser
2. Enter the **GitHub Repository URL** you want to analyze
3. Enter your **Team Name** (e.g., `RIFT ORGANISERS`)
4. Enter your **Team Leader Name** (e.g., `Saiyam Kumar`)
5. Click **"Run Agent"**
6. Watch the real-time dashboard as GitGPT:
   - Clones and analyzes the repo
   - Runs all test files
   - Identifies and fixes bugs
   - Commits fixes to branch `RIFT_ORGANISERS_SAIYAM_KUMAR_AI_Fix`
   - Monitors CI/CD until all tests pass
7. Review the **Score Breakdown**, **Fixes Table**, and **CI/CD Timeline**

---

## 🌿 Branch Naming Format

GitGPT automatically creates branches using this exact format:

```
TEAM_NAME_LEADER_NAME_AI_Fix
```

**Rules:**
- All uppercase
- Spaces replaced with underscores
- No special characters except underscores
- Always ends with `_AI_Fix`

**Examples:**

| Team Name | Leader Name | Branch |
|---|---|---|
| RIFT ORGANISERS | Saiyam Kumar | `RIFT_ORGANISERS_SAIYAM_KUMAR_AI_Fix` |
| Code Warriors | John Doe | `CODE_WARRIORS_JOHN_DOE_AI_Fix` |

---

## 🐛 Supported Bug Types

| Bug Type | Description | Example |
|---|---|---|
| `LINTING` | Unused imports, style violations | `Unused import 'os'` |
| `SYNTAX` | Missing colons, brackets, semicolons | `Missing colon after if statement` |
| `LOGIC` | Incorrect conditionals, off-by-one errors | `Wrong comparison operator` |
| `TYPE_ERROR` | Type mismatches, wrong argument types | `Expected int, got str` |
| `IMPORT` | Missing or circular imports | `Module not found` |
| `INDENTATION` | Incorrect indentation levels | `Expected 4 spaces, got 2` |

---

## 📊 Scoring System

| Component | Points |
|---|---|
| Base Score | 100 |
| Speed Bonus (< 5 min) | +10 |
| Efficiency Penalty (per commit over 20) | −2 each |

---

## 📄 results.json Structure

After each run, GitGPT generates a `results.json`:

```json
{
  "repo_url": "https://github.com/example/repo",
  "team_name": "RIFT ORGANISERS",
  "leader_name": "Saiyam Kumar",
  "branch": "RIFT_ORGANISERS_SAIYAM_KUMAR_AI_Fix",
  "total_failures": 8,
  "total_fixes": 8,
  "final_status": "PASSED",
  "time_taken_seconds": 187,
  "score": 110,
  "iterations": [
    {
      "run": 1,
      "status": "FAILED",
      "timestamp": "2026-01-15T10:30:00Z"
    },
    {
      "run": 2,
      "status": "PASSED",
      "timestamp": "2026-01-15T10:33:07Z"
    }
  ],
  "fixes": [
    {
      "file": "src/utils.py",
      "bug_type": "LINTING",
      "line": 15,
      "commit_message": "[AI-AGENT] Remove unused import 'os' in src/utils.py",
      "status": "FIXED"
    },
    {
      "file": "src/validator.py",
      "bug_type": "SYNTAX",
      "line": 8,
      "commit_message": "[AI-AGENT] Add missing colon in src/validator.py line 8",
      "status": "FIXED"
    }
  ]
}
```

---

## ⚠️ Known Limitations

- Currently supports **Python** and **JavaScript/TypeScript** repositories only
- Requires repositories to be **publicly accessible** on GitHub
- Maximum repository size: **500 MB**
- Agent retry limit is capped at **5 iterations** by default (configurable)
- Complex logic bugs requiring deep semantic understanding may not always be resolved automatically
- Private repositories require a GitHub token with appropriate permissions

---

## 🔌 API Reference

### Trigger Agent Run

```http
POST /api/run
Content-Type: application/json

{
  "repo_url": "https://github.com/example/repo",
  "team_name": "RIFT ORGANISERS",
  "leader_name": "Saiyam Kumar"
}
```

### Get Run Status

```http
GET /api/status/{run_id}
```

### Get Results

```http
GET /api/results/{run_id}
```

---


## 📜 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

</div>
