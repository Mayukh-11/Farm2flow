from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import datetime

app = FastAPI(
    title="Farm2Flow Core API",
    description="FastAPI Backend & Intelligence Layer for Farm2Flow (Field PWA + Admin Web Command Center)",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Seeded In-Memory State
PRODUCE_DATABASE = [
    {
        "id": "prod-001",
        "farmer_id": "f-101",
        "farmer_name": "Farmer A (Ramesh Ghosh)",
        "farmer_location": "Hooghly (32 km)",
        "crop_name": "Tomato",
        "variety": "Hybrid Red",
        "grade": "Grade A",
        "quantity_kg": 800,
        "expected_price_per_kg": 30.0,
        "status": "Available",
        "fpo_verified": True
    },
    {
        "id": "prod-002",
        "farmer_id": "f-102",
        "farmer_name": "Farmer B (Suhas Biswas)",
        "farmer_location": "Barasat (24 km)",
        "crop_name": "Tomato",
        "variety": "Roma Organic",
        "grade": "Grade A",
        "quantity_kg": 500,
        "expected_price_per_kg": 29.0,
        "status": "Available",
        "fpo_verified": True
    },
    {
        "id": "prod-003",
        "farmer_id": "f-103",
        "farmer_name": "FPO C (Hooghly Collective)",
        "farmer_location": "Singur (18 km)",
        "crop_name": "Tomato",
        "variety": "Desi Hybrid",
        "grade": "Grade A",
        "quantity_kg": 400,
        "expected_price_per_kg": 28.0,
        "status": "Available",
        "fpo_verified": True
    },
    {
        "id": "prod-004",
        "farmer_id": "f-104",
        "farmer_name": "Farmer D (Bimal Halder)",
        "farmer_location": "Tarakeswar (45 km)",
        "crop_name": "Tomato",
        "variety": "Red Globe",
        "grade": "Grade A",
        "quantity_kg": 300,
        "expected_price_per_kg": 31.0,
        "status": "Available",
        "fpo_verified": False
    }
]

ORDERS_DATABASE = []

@app.get("/")
def read_root():
    return {
        "status": "online",
        "service": "Farm2Flow FastAPI Backend",
        "version": "1.0.0",
        "sih_ps": "26033",
        "docs": "/docs"
    }

@app.get("/api/produce")
def get_produce():
    return PRODUCE_DATABASE

class CreateProduceRequest(BaseModel):
    farmer_id: str
    farmer_name: str
    farmer_location: str
    crop_name: str
    variety: str
    grade: str
    quantity_kg: float
    expected_price_per_kg: float

@app.post("/api/produce")
def create_produce(req: CreateProduceRequest):
    new_item = {
        "id": f"prod-{len(PRODUCE_DATABASE) + 1:03d}",
        "farmer_id": req.farmer_id,
        "farmer_name": req.farmer_name,
        "farmer_location": req.farmer_location,
        "crop_name": req.crop_name,
        "variety": req.variety,
        "grade": req.grade,
        "quantity_kg": req.quantity_kg,
        "expected_price_per_kg": req.expected_price_per_kg,
        "status": "Available",
        "fpo_verified": True
    }
    PRODUCE_DATABASE.insert(0, new_item)
    return new_item

@app.get("/api/demand/forecast")
def get_demand_forecast(crop: str = "Tomato"):
    return {
        "crop_name": crop,
        "current_demand_tonnes": 21.8,
        "forecast_demand_tonnes": 26.4,
        "percentage_change": 21.0,
        "confidence_pct": 87.0,
        "mandi_location": "Kolkata Wholesale Mandi",
        "recommendation": f"{crop} demand may increase next week. Consider increasing supply to capture higher payout.",
        "trend": "up"
    }

@app.get("/api/pricing/estimate")
def get_price_estimate(crop: str = "Tomato", location: str = "Hooghly"):
    return {
        "crop_name": crop,
        "location": location,
        "current_min": 24.0,
        "current_max": 26.0,
        "suggested_min": 28.0,
        "suggested_max": 32.0,
        "confidence": 89.0
    }

@app.get("/api/matching/{crop}")
def rank_suppliers(crop: str, required_kg: float = 2000.0):
    available = [p for p in PRODUCE_DATABASE if p["crop_name"].lower() == crop.lower()]
    fulfilled = 0
    suppliers = []
    
    for item in available:
        if fulfilled >= required_kg:
            break
        needed = required_kg - fulfilled
        taken = min(item["quantity_kg"], needed)
        fulfilled += taken
        suppliers.append({
            "produce_id": item["id"],
            "farmer_name": item["farmer_name"],
            "farmer_location": item["farmer_location"],
            "available_kg": item["quantity_kg"],
            "matched_kg": taken,
            "grade": item["grade"],
            "price_per_kg": item["expected_price_per_kg"],
            "match_percentage": 96 if item["fpo_verified"] else 89
        })
        
    total_cost = sum(s["matched_kg"] * s["price_per_kg"] for s in suppliers)
    return {
        "crop_name": crop,
        "requested_kg": required_kg,
        "fulfilled_kg": fulfilled,
        "overall_match_pct": 94 if suppliers else 0,
        "suppliers": suppliers,
        "estimated_total_cost": total_cost,
        "savings_vs_middlemen_pct": 18.0
    }

@app.get("/api/routes/optimize")
def get_optimized_routes():
    return {
        "before": {
            "distance_km": 184.0,
            "estimated_cost_rs": 18400.0,
            "vehicles_count": 6
        },
        "optimized": {
            "distance_km": 132.0,
            "estimated_cost_rs": 13750.0,
            "vehicles_count": 4
        },
        "savings_rs": 4650.0,
        "savings_pct": 25.2
    }

@app.get("/api/admin/dashboard")
def get_admin_dashboard_kpis():
    return {
        "farmers_connected": 1248,
        "produce_traded_tonnes": 482.0,
        "total_orders": 3842,
        "farmer_realization_pct": 17.0,
        "logistics_savings_pct": 23.0,
        "middlemen_eliminated": 4
    }
