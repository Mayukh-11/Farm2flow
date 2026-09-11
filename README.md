# Farm2Flow — SIH 2026 PS 26033 (Frontend)

> **Multiple intermediaries reduce farmers' earnings and increase consumer prices.**  
> **Tagline:** From Farm to Market, Smarter.

---

## 📁 Repository Structure (Frontend)

```text
Farm2flow/
├── apps/
│   ├── pwa/         # Consumer / Farmer / Buyer Luxury Mobile PWA (Next.js + TypeScript + Tailwind)
│   └── admin-web/   # Admin Command Center & Analytics (Next.js + TypeScript + Tailwind)
├── shared/          # Shared TypeScript Domain Interfaces
└── public/          # Static Assets & Luxury Photography
```

> **Backend Service**: The backend is maintained in a dedicated standalone repository:  
> 🔗 [`Farm2flow-backend`](../Farm2flow-backend) (Python FastAPI + PostgreSQL/JSON store at `http://localhost:8000`).

---

## 🚀 Quick Start Instructions

### 1. Consumer & Farmer Luxury PWA (`apps/pwa`)
```bash
cd apps/pwa
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or [http://localhost:3000/buyer](http://localhost:3000/buyer) for the luxury e-commerce experience).

### 2. Admin Web Command Center (`apps/admin-web`)
```bash
cd apps/admin-web
npm install
npm run dev -p 3001
```
Open [http://localhost:3001](http://localhost:3001) for the Desktop Command Center.

### 3. Running with Backend
To start the backend, open the sibling repository:
```bash
cd ../Farm2flow-backend
pip install -r requirements.txt
python server.py
```
Open API docs at [http://localhost:8000/docs](http://localhost:8000/docs).
