# Farm2Flow — SIH 2026 PS 26033

> **Multiple intermediaries reduce farmers' earnings and increase consumer prices.**
> **Tagline:** From Farm to Market, Smarter.

---

## 📁 Repository Structure

```text
farm2flow/
├── apps/
│   ├── pwa/         # Product A: Farmer / FPO / Buyer / Consumer Mobile PWA (Next.js + TypeScript + Tailwind)
│   └── admin-web/   # Product B: Admin Web Command Center (Next.js + TypeScript + Tailwind)
├── backend/         # Shared System of Record & Intelligence Layer (Python FastAPI + PostgreSQL)
│   └── app/
│       └── main.py  # FastAPI API Endpoints (Auth, Produce, Matching, Logistics, AI Demand, Admin)
├── shared/          # Shared TypeScript Domain Interfaces
│   └── types/
└── data/            # Seeded Realistic West Bengal Agricultural Demo Data (Hooghly, Barasat, Kolkata)
```

---

## 🚀 Quick Start Instructions

### 1. Field Mobile PWA (`apps/pwa`)
```bash
cd apps/pwa
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (Mobile View 360px–430px).

### 2. Admin Web Command Center (`apps/admin-web`)
```bash
cd apps/admin-web
npm install
npm run dev -p 3001
```
Open [http://localhost:3001](http://localhost:3001) for Desktop Command Center.

### 3. FastAPI Backend (`backend`)
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```
Open API docs at [http://localhost:8000/docs](http://localhost:8000/docs).
