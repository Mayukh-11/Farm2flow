from fastapi import FastAPI, HTTPException, Depends, Header
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional, Dict, Any
import datetime
import uuid

app = FastAPI(
    title="Farm2Flow Core API",
    description="FastAPI Backend & Intelligence Layer for Farm2Flow (Field PWA + Admin Web Command Center) SIH 2026 PS 26033",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ==================== DATA MODELS & SCHEMAS ====================

class User(BaseModel):
    id: str
    name: str
    email: str
    phone: str
    role: str # farmer, fpo, buyer, admin, consumer
    location: str
    verified: bool
    fpo_name: Optional[str] = None

class LoginRequest(BaseModel):
    identifier: str # phone or email
    password: str
    role: str # farmer, fpo, buyer, admin, consumer

class ProduceListing(BaseModel):
    id: str
    farmer_id: str
    farmer_name: str
    farmer_location: str
    crop_name: str
    variety: str
    grade: str
    quantity_kg: float
    expected_price_per_kg: float
    market_suggested_min: float
    market_suggested_max: float
    harvest_date: str
    demand_status: str
    status: str # Available, Reserved, Sold
    fpo_verified: bool
    created_at: str

class CreateProduceRequest(BaseModel):
    farmer_id: str
    farmer_name: str
    farmer_location: str
    crop_name: str
    variety: str
    grade: str
    quantity_kg: float
    expected_price_per_kg: float
    harvest_date: str

class BuyerRequirement(BaseModel):
    id: str
    buyer_id: str
    buyer_name: str
    crop_name: str
    grade: str
    required_quantity_kg: float
    max_budget_per_kg: float
    destination_location: str
    urgency: str

class OrderItem(BaseModel):
    produce_id: str
    farmer_name: str
    crop_name: str
    quantity_kg: float
    price_per_kg: float
    subtotal: float

class Order(BaseModel):
    id: str
    order_number: str
    buyer_id: str
    buyer_name: str
    destination: str
    items: List[OrderItem]
    total_quantity_kg: float
    total_amount: float
    savings_realized: float
    status: str # Confirmed, Produce Reserved, Pickup Scheduled, In Transit, Delivered, Completed
    expected_delivery: str
    created_at: str
    route_id: str

# ==================== DETERMINISTIC DEMO DATABASE ====================

USERS_DB: Dict[str, Dict[str, Any]] = {
    "farmer@farm2flow.in": {
        "id": "f-101",
        "name": "Ramesh Ghosh",
        "email": "farmer@farm2flow.in",
        "phone": "+91 98310 44210",
        "role": "farmer",
        "location": "Hooghly, West Bengal",
        "verified": True,
        "fpo_name": "Hooghly Agri Producers Cooperative"
    },
    "fpo@farm2flow.in": {
        "id": "fpo-301",
        "name": "Hooghly FPO Hub (Singur)",
        "email": "fpo@farm2flow.in",
        "phone": "+91 98312 99430",
        "role": "fpo",
        "location": "Singur, Hooghly",
        "verified": True,
        "fpo_name": "NABARD Hooghly Farmers Producer Organization"
    },
    "buyer@farm2flow.in": {
        "id": "b-201",
        "name": "Kolkata Wholesale Mandi Aggregator",
        "email": "buyer@farm2flow.in",
        "phone": "+91 98300 12345",
        "role": "buyer",
        "location": "Posta, Kolkata",
        "verified": True
    },
    "admin@farm2flow.in": {
        "id": "adm-001",
        "name": "Dr. A. K. Banerjee (Supply Chain Director)",
        "email": "admin@farm2flow.in",
        "phone": "+91 98309 00001",
        "role": "admin",
        "location": "Department of Agriculture, West Bengal",
        "verified": True
    }
}

PRODUCE_DB: List[Dict[str, Any]] = [
    {
        "id": "prod-001",
        "farmer_id": "f-101",
        "farmer_name": "Farmer A (Ramesh Ghosh)",
        "farmer_location": "Hooghly (32 km)",
        "crop_name": "Tomato",
        "variety": "Hybrid Red",
        "grade": "Grade A",
        "quantity_kg": 800.0,
        "expected_price_per_kg": 30.0,
        "market_suggested_min": 28.0,
        "market_suggested_max": 32.0,
        "harvest_date": "2026-09-06",
        "demand_status": "High",
        "status": "Available",
        "fpo_verified": True,
        "created_at": datetime.datetime.now().isoformat()
    },
    {
        "id": "prod-002",
        "farmer_id": "f-102",
        "farmer_name": "Farmer B (Suhas Biswas)",
        "farmer_location": "Barasat (24 km)",
        "crop_name": "Tomato",
        "variety": "Roma Organic",
        "grade": "Grade A",
        "quantity_kg": 500.0,
        "expected_price_per_kg": 29.0,
        "market_suggested_min": 28.0,
        "market_suggested_max": 32.0,
        "harvest_date": "2026-09-06",
        "demand_status": "High",
        "status": "Available",
        "fpo_verified": True,
        "created_at": datetime.datetime.now().isoformat()
    },
    {
        "id": "prod-003",
        "farmer_id": "fpo-301",
        "farmer_name": "FPO C (Hooghly Collective)",
        "farmer_location": "Singur (18 km)",
        "crop_name": "Tomato",
        "variety": "Desi Hybrid",
        "grade": "Grade A",
        "quantity_kg": 400.0,
        "expected_price_per_kg": 28.0,
        "market_suggested_min": 28.0,
        "market_suggested_max": 32.0,
        "harvest_date": "2026-09-05",
        "demand_status": "High",
        "status": "Available",
        "fpo_verified": True,
        "created_at": datetime.datetime.now().isoformat()
    },
    {
        "id": "prod-004",
        "farmer_id": "f-104",
        "farmer_name": "Farmer D (Bimal Halder)",
        "farmer_location": "Tarakeswar (45 km)",
        "crop_name": "Tomato",
        "variety": "Red Globe",
        "grade": "Grade A",
        "quantity_kg": 300.0,
        "expected_price_per_kg": 31.0,
        "market_suggested_min": 28.0,
        "market_suggested_max": 32.0,
        "harvest_date": "2026-09-07",
        "demand_status": "High",
        "status": "Available",
        "fpo_verified": False,
        "created_at": datetime.datetime.now().isoformat()
    },
    {
        "id": "prod-005",
        "farmer_id": "f-101",
        "farmer_name": "Ramesh Ghosh",
        "farmer_location": "Hooghly (32 km)",
        "crop_name": "Potato",
        "variety": "Jyoti",
        "grade": "Grade A",
        "quantity_kg": 1200.0,
        "expected_price_per_kg": 18.0,
        "market_suggested_min": 16.0,
        "market_suggested_max": 20.0,
        "harvest_date": "2026-09-04",
        "demand_status": "Steady",
        "status": "Available",
        "fpo_verified": True,
        "created_at": datetime.datetime.now().isoformat()
    }
]

ORDERS_DB: List[Dict[str, Any]] = [
    {
        "id": "ord-001",
        "order_number": "FF-2048",
        "buyer_id": "b-201",
        "buyer_name": "Kolkata Wholesale Mandi Aggregator",
        "destination": "Posta Mandi, Kolkata",
        "items": [
            {"produce_id": "prod-001", "farmer_name": "Farmer A (Ramesh Ghosh)", "crop_name": "Tomato (Grade A)", "quantity_kg": 800.0, "price_per_kg": 30.0, "subtotal": 24000.0},
            {"produce_id": "prod-002", "farmer_name": "Farmer B (Suhas Biswas)", "crop_name": "Tomato (Grade A)", "quantity_kg": 500.0, "price_per_kg": 29.0, "subtotal": 14500.0},
            {"produce_id": "prod-003", "farmer_name": "FPO C (Hooghly Collective)", "crop_name": "Tomato (Grade A)", "quantity_kg": 400.0, "price_per_kg": 28.0, "subtotal": 11200.0},
            {"produce_id": "prod-004", "farmer_name": "Farmer D (Bimal Halder)", "crop_name": "Tomato (Grade A)", "quantity_kg": 300.0, "price_per_kg": 31.0, "subtotal": 9300.0}
        ],
        "total_quantity_kg": 2000.0,
        "total_amount": 59000.0,
        "savings_realized": 11800.0,
        "status": "In Transit",
        "expected_delivery": "Tomorrow, 2:30 PM",
        "created_at": "2026-09-04T10:00:00Z",
        "route_id": "route-opt-101"
    }
]

AUDIT_LOGS_DB: List[Dict[str, Any]] = [
    {
        "timestamp": datetime.datetime.now().isoformat(),
        "admin_id": "adm-001",
        "action": "SYSTEM_INIT",
        "entity": "System",
        "details": "Farm2Flow Core FastAPI Backend operational for SIH 2026 PS 26033"
    }
]

# ==================== API ENDPOINTS ====================

@app.get("/")
def read_root():
    return {
        "app": "Farm2Flow Core FastAPI Backend",
        "ps_number": "SIH 2026 PS 26033",
        "tagline": "From Farm to Market, Smarter.",
        "status": "Healthy & Operational",
        "docs_url": "/docs"
    }

# 1. AUTHENTICATION & RBAC (PRD Section 17)
@app.post("/api/auth/login")
def login(req: LoginRequest):
    user = USERS_DB.get(req.identifier.lower())
    if not user:
        # Fallback dynamic demo user generation
        user = {
            "id": f"usr-{uuid.uuid4().hex[:6]}",
            "name": req.identifier.split("@")[0].capitalize() + " User",
            "email": req.identifier,
            "phone": "+91 98300 00000",
            "role": req.role,
            "location": "Hooghly, West Bengal",
            "verified": True
        }
    
    # Issue JWT / Mock Token containing role claims
    token = f"f2f-token-{user['role']}-{user['id']}"
    return {
        "access_token": token,
        "token_type": "bearer",
        "user": user
    }

@app.get("/api/users/me")
def get_current_user(authorization: Optional[str] = Header(None)):
    return {
        "id": "f-101",
        "name": "Ramesh Ghosh",
        "role": "farmer",
        "location": "Hooghly, West Bengal",
        "verified": True
    }

# 2. PRODUCE LISTINGS
@app.get("/api/produce")
def get_produce():
    return PRODUCE_DB

@app.post("/api/produce")
def create_produce(req: CreateProduceRequest):
    new_produce = {
        "id": f"prod-{len(PRODUCE_DB) + 1:03d}",
        "farmer_id": req.farmer_id,
        "farmer_name": req.farmer_name,
        "farmer_location": req.farmer_location,
        "crop_name": req.crop_name,
        "variety": req.variety,
        "grade": req.grade,
        "quantity_kg": req.quantity_kg,
        "expected_price_per_kg": req.expected_price_per_kg,
        "market_suggested_min": 28.0 if "tomato" in req.crop_name.lower() else 16.0,
        "market_suggested_max": 32.0 if "tomato" in req.crop_name.lower() else 20.0,
        "harvest_date": req.harvest_date,
        "demand_status": "High",
        "status": "Available",
        "fpo_verified": True,
        "created_at": datetime.datetime.now().isoformat()
    }
    PRODUCE_DB.insert(0, new_produce)
    return new_produce

@app.put("/api/produce/{produce_id}")
def update_produce_status(produce_id: str, status: str):
    for item in PRODUCE_DB:
        if item["id"] == produce_id:
            item["status"] = status
            return item
    raise HTTPException(status_code=404, detail="Produce listing not found")

# 3. DEMAND AI & PRICE INTELLIGENCE (PRD Section 13 & 14)
@app.get("/api/demand/forecast")
def get_demand_forecast(crop: str = "Tomato", region: str = "Hooghly"):
    return {
        "crop_name": crop,
        "region": region,
        "current_supply_tonnes": 21.8,
        "forecast_demand_tonnes": 26.4,
        "supply_gap_tonnes": 4.6,
        "percentage_change": 21.0,
        "confidence_pct": 87.0,
        "trend": "HIGH_SHORTAGE",
        "mandi_location": "Kolkata Central Wholesale Mandi",
        "recommendation": f"Encourage nearby farmers and FPOs in {region} to list additional {crop} supply to capture peak mandi rates.",
        "generated_at": datetime.datetime.now().isoformat()
    }

@app.get("/api/pricing/estimate")
def get_price_estimate(crop: str = "Tomato", location: str = "Hooghly"):
    is_tomato = "tomato" in crop.lower()
    return {
        "crop_name": crop,
        "location": location,
        "historical_avg": 22.0 if is_tomato else 14.0,
        "current_reference_price": 25.0 if is_tomato else 16.0,
        "estimated_fair_min": 28.0 if is_tomato else 18.0,
        "estimated_fair_max": 32.0 if is_tomato else 21.0,
        "confidence_pct": 89.0,
        "price_spread_simulation": {
            "traditional_middlemen": {
                "farmer": 22.0,
                "aggregator": 25.0,
                "wholesaler": 29.0,
                "retailer": 40.0
            },
            "farm2flow_direct": {
                "farmer_realization": 30.0,
                "buyer_procurement": 35.0
            }
        },
        "disclaimer": "Illustrative / Prototype Simulation"
    }

# 4. SMART MATCHING ENGINE (PRD Section 15)
@app.get("/api/matching/{crop}")
def rank_smart_suppliers(crop: str, required_kg: float = 2000.0):
    available = [p for p in PRODUCE_DB if p["crop_name"].lower() == crop.lower() and p["status"] == "Available"]
    fulfilled = 0.0
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
            "score": 95 if item["fpo_verified"] else 87,
            "reasons": [
                f"Fulfills {int((taken/required_kg)*100)}% of requested requirement",
                "Price is within buyer's target budget",
                "Nearby West Bengal regional supplier",
                "Grade A quality certified"
            ]
        })
        
    total_cost = sum(s["matched_kg"] * s["price_per_kg"] for s in suppliers)
    return {
        "crop_name": crop,
        "requested_kg": required_kg,
        "fulfilled_kg": fulfilled,
        "overall_match_pct": 94.0 if suppliers else 0.0,
        "suppliers": suppliers,
        "estimated_total_cost": total_cost,
        "savings_vs_middlemen_pct": 18.0
    }

# 5. ORDERS & SHIPMENTS (PRD Section 10)
@app.get("/api/orders")
def get_orders():
    return ORDERS_DB

@app.post("/api/orders")
def create_order(buyer_name: str = "Kolkata Wholesale Mandi Aggregator", crop: str = "Tomato", required_kg: float = 2000.0):
    match_result = rank_smart_suppliers(crop, required_kg)
    
    new_order = {
        "id": f"ord-{len(ORDERS_DB) + 1:03d}",
        "order_number": f"FF-{uuid.uuid4().hex[:4].upper()}",
        "buyer_id": "b-201",
        "buyer_name": buyer_name,
        "destination": "Posta Mandi, Kolkata",
        "items": [
            {
                "produce_id": s["produce_id"],
                "farmer_name": s["farmer_name"],
                "crop_name": f"{crop} ({s['grade']})",
                "quantity_kg": s["matched_kg"],
                "price_per_kg": s["price_per_kg"],
                "subtotal": s["matched_kg"] * s["price_per_kg"]
            } for s in match_result["suppliers"]
        ],
        "total_quantity_kg": match_result["fulfilled_kg"],
        "total_amount": match_result["estimated_total_cost"],
        "savings_realized": round(match_result["estimated_total_cost"] * 0.18, 2),
        "status": "Confirmed",
        "expected_delivery": "Tomorrow, 2:30 PM",
        "created_at": datetime.datetime.now().isoformat(),
        "route_id": "route-opt-101"
    }
    ORDERS_DB.insert(0, new_order)
    return new_order

# 6. LOGISTICS OPTIMIZER (PRD Section 11 & 15)
@app.post("/api/routes/optimize")
@app.get("/api/admin/logistics")
def get_logistics_optimization():
    return {
        "order_id": "ORD-FF2048",
        "baseline_unoptimized": {
            "distance_km": 184.0,
            "estimated_cost_rs": 18400.0,
            "vehicles_count": 6,
            "travel_time_hours": 6.5
        },
        "or_tools_optimized": {
            "distance_km": 132.0,
            "estimated_cost_rs": 13750.0,
            "vehicles_count": 4,
            "travel_time_hours": 4.2
        },
        "simulation_savings": {
            "savings_rs": 4650.0,
            "savings_pct": 25.2
        },
        "route_sequence_stops": [
            {"stop": 1, "name": "Farmer A (Ramesh) Farm Gate", "location": "Hooghly Lot #4", "cargo_kg": 800},
            {"stop": 2, "name": "Farmer B (Suhas) Pickup Point", "location": "Barasat Hub", "cargo_kg": 500},
            {"stop": 3, "name": "FPO C & Farmer D Pooling Point", "location": "Singur Aggregation Hub", "cargo_kg": 700},
            {"stop": 4, "name": "Kolkata Central Wholesale Buyer", "location": "Posta Mandi, Kolkata", "cargo_kg": 2000}
        ],
        "label": "Illustrative Prototype Simulation"
    }

# 7. ADMIN COMMAND CENTER & HEATMAP (PRD Section 7, 8 & 9)
@app.get("/api/admin/dashboard")
def get_admin_dashboard():
    return {
        "kpis": {
            "total_farmers": 1248,
            "active_fpos": 42,
            "active_buyers": 156,
            "listed_produce_tonnes": 482.0,
            "active_orders": 3842,
            "fulfillment_rate_pct": 98.4,
            "farmer_realization_pct": 17.0,
            "logistics_savings_pct": 23.0
        },
        "alerts": [
            {"severity": "HIGH", "type": "SHORTAGE", "message": "Tomato shortage gap of 4.6T detected in Hooghly/Kolkata corridor."},
            {"severity": "MEDIUM", "type": "LOGISTICS", "message": "Vehicle consolidation recommended for Singur aggregation hub."}
        ]
    }

@app.get("/api/admin/heatmap")
def get_regional_heatmap():
    return {
        "pilot_region": "Kolkata & West Bengal Districts",
        "districts": [
            {"name": "Hooghly", "status": "SHORTAGE", "top_crop": "Tomato", "gap_tonnes": 4.6, "active_farmers": 420},
            {"name": "Barasat", "status": "BALANCED", "top_crop": "Tomato", "gap_tonnes": 0.0, "active_farmers": 310},
            {"name": "Howrah", "status": "SURPLUS", "top_crop": "Potato", "gap_tonnes": -12.5, "active_farmers": 290},
            {"name": "Kolkata", "status": "HIGH_DEMAND", "top_crop": "Tomato", "gap_tonnes": 18.2, "active_farmers": 0}
        ]
    }

@app.get("/api/admin/audit-logs")
def get_audit_logs():
    return AUDIT_LOGS_DB
