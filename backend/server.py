import os
import http.server
import socketserver
import json
import urllib.parse
import datetime
import uuid

PORT = 8000

# Dedicated Persistent Database File for Registered Accounts
DATA_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "data")
os.makedirs(DATA_DIR, exist_ok=True)
USERS_DB_FILE = os.path.join(DATA_DIR, "users_registered.json")

def load_registered_users():
    if os.path.exists(USERS_DB_FILE):
        try:
            with open(USERS_DB_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            return {}
    return {}

def save_registered_users(users_dict):
    try:
        with open(USERS_DB_FILE, "w", encoding="utf-8") as f:
            json.dump(users_dict, f, indent=2)
    except Exception as e:
        print(f"Error saving users DB: {e}")

REGISTERED_USERS_DB = load_registered_users()

# ==================== DETERMINISTIC DEMO DATABASE ====================

USERS_DB = {
    "farmer@farm2flow.in": {
        "id": "f-101",
        "name": "Ramesh Ghosh",
        "email": "farmer@farm2flow.in",
        "phone": "+91 98310 44210",
        "role": "farmer",
        "location": "Hooghly (Singur)",
        "address": "Singur Vegetable Cluster, Hooghly, WB",
        "dob": "1982-05-14",
        "password": "demo1234",
        "verified": True,
        "fpo_name": "Singur Vegetable Cluster FPO"
    },
    "subhash.farmer@farm2flow.in": {
        "id": "f-102",
        "name": "Subhash Mondal",
        "email": "subhash.farmer@farm2flow.in",
        "phone": "+91 98321 55678",
        "role": "farmer",
        "location": "Burdwan (Shaktigarh)",
        "address": "Paddy & Cereal Mandi Yard, Purba Bardhaman, WB",
        "dob": "1978-11-20",
        "password": "demo1234",
        "verified": True
    },
    "animesh.farmer@farm2flow.in": {
        "id": "f-103",
        "name": "Animesh Biswas",
        "email": "animesh.farmer@farm2flow.in",
        "phone": "+91 98333 77890",
        "role": "farmer",
        "location": "Nadia (Ranaghat)",
        "address": "Ranaghat Agro Hub, Nadia, WB",
        "dob": "1985-03-10",
        "password": "demo1234",
        "verified": True
    },
    "buyer@farm2flow.in": {
        "id": "b-201",
        "name": "Sourav Mukherjee",
        "email": "buyer@farm2flow.in",
        "phone": "+91 98300 12345",
        "role": "buyer",
        "location": "Salt Lake (Sector 1), Kolkata",
        "address": "AD-Block, Sector 1, Salt Lake, Kolkata - 700064",
        "dob": "1988-08-22",
        "password": "demo1234",
        "verified": True
    },
    "sourav.consumer@farm2flow.in": {
        "id": "b-201",
        "name": "Sourav Mukherjee",
        "email": "sourav.consumer@farm2flow.in",
        "phone": "+91 98300 12345",
        "role": "buyer",
        "location": "Salt Lake (Sector 1), Kolkata",
        "address": "AD-Block, Sector 1, Salt Lake, Kolkata - 700064",
        "dob": "1988-08-22",
        "password": "demo1234",
        "verified": True
    },
    "priyanka.consumer@farm2flow.in": {
        "id": "b-202",
        "name": "Priyanka Sen",
        "email": "priyanka.consumer@farm2flow.in",
        "phone": "+91 98344 66789",
        "role": "buyer",
        "location": "New Town (Action Area 1), Kolkata",
        "address": "Tower 4, Uniworld City, New Town, Kolkata - 700156",
        "dob": "1992-01-18",
        "password": "demo1234",
        "verified": True
    },
    "debojyoti.consumer@farm2flow.in": {
        "id": "b-203",
        "name": "Debojyoti Banerjee",
        "email": "debojyoti.consumer@farm2flow.in",
        "phone": "+91 98355 88990",
        "role": "buyer",
        "location": "Ballygunge, South Kolkata",
        "address": "42/1 Dover Road, Ballygunge, Kolkata - 700019",
        "dob": "1980-09-05",
        "password": "demo1234",
        "verified": True
    },
    "admin@farm2flow.in": {
        "id": "adm-001",
        "name": "Dr. A. K. Banerjee (Supply Chain Director)",
        "email": "admin@farm2flow.in",
        "phone": "+91 98309 00001",
        "role": "admin",
        "location": "Department of Agriculture, West Bengal",
        "address": "Khadya Bhavan, Kolkata",
        "dob": "1972-04-12",
        "password": "demo1234",
        "verified": True
    }
}

PRODUCE_DB = [
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

ORDERS_DB = [
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

AUDIT_LOGS_DB = [
    {
        "timestamp": datetime.datetime.now().isoformat(),
        "admin_id": "adm-001",
        "action": "SYSTEM_INIT",
        "entity": "System",
        "details": "Farm2Flow Core API operational for SIH 2026 PS 26033"
    }
]

def rank_smart_suppliers(crop, required_kg=2000.0):
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

class Farm2FlowHandler(http.server.BaseHTTPRequestHandler):
    def _send_cors_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "*")

    def do_OPTIONS(self):
        self.send_response(200)
        self._send_cors_headers()
        self.end_headers()

    def _send_json(self, data, status=200):
        body = json.dumps(data).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self._send_cors_headers()
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path
        query = urllib.parse.parse_qs(parsed.query)

        if path == "/":
            self._send_json({
                "app": "Farm2Flow Core API",
                "ps_number": "SIH 2026 PS 26033",
                "tagline": "From Farm to Market, Smarter.",
                "status": "Healthy & Operational",
                "docs_url": "/api/docs"
            })
        elif path == "/api/users/me":
            self._send_json({
                "id": "f-101",
                "name": "Ramesh Ghosh",
                "role": "farmer",
                "location": "Hooghly, West Bengal",
                "verified": True
            })
        elif path == "/api/produce":
            self._send_json(PRODUCE_DB)
        elif path == "/api/demand/forecast":
            crop = query.get("crop", ["Tomato"])[0]
            region = query.get("region", ["Hooghly"])[0]
            self._send_json({
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
            })
        elif path == "/api/pricing/estimate":
            crop = query.get("crop", ["Tomato"])[0]
            location = query.get("location", ["Hooghly"])[0]
            is_tomato = "tomato" in crop.lower()
            self._send_json({
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
            })
        elif path.startswith("/api/matching/"):
            crop = path.split("/")[-1]
            req_kg = float(query.get("required_kg", [2000.0])[0])
            self._send_json(rank_smart_suppliers(crop, req_kg))
        elif path == "/api/orders":
            self._send_json(ORDERS_DB)
        elif path in ["/api/routes/optimize", "/api/admin/logistics"]:
            self._send_json({
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
            })
        elif path == "/api/admin/dashboard":
            self._send_json({
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
            })
        elif path == "/api/admin/heatmap":
            self._send_json({
                "pilot_region": "Kolkata & West Bengal Districts",
                "districts": [
                    {"name": "Hooghly", "status": "SHORTAGE", "top_crop": "Tomato", "gap_tonnes": 4.6, "active_farmers": 420},
                    {"name": "Barasat", "status": "BALANCED", "top_crop": "Tomato", "gap_tonnes": 0.0, "active_farmers": 310},
                    {"name": "Howrah", "status": "SURPLUS", "top_crop": "Potato", "gap_tonnes": -12.5, "active_farmers": 290},
                    {"name": "Kolkata", "status": "HIGH_DEMAND", "top_crop": "Tomato", "gap_tonnes": 18.2, "active_farmers": 0}
                ]
            })
        elif path == "/api/admin/audit-logs":
            self._send_json(AUDIT_LOGS_DB)
        elif path == "/api/users":
            safe_users = [{k: v for k, v in u.items() if k != "password"} for u in REGISTERED_USERS_DB.values()]
            self._send_json(safe_users)
        else:
            self._send_json({"detail": "Not Found"}, status=404)

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path
        length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(length).decode("utf-8") if length > 0 else "{}"
        try:
            req_data = json.loads(body)
        except Exception:
            req_data = {}

        if path == "/api/auth/register":
            name = req_data.get("name", "").strip()
            address = req_data.get("address", "").strip()
            dob = req_data.get("dob", "").strip()
            phone = req_data.get("phone", "").strip()
            role = req_data.get("role", "buyer").strip().lower()  # 'farmer' or 'buyer'
            email = req_data.get("email", "").strip()
            password = req_data.get("password", "").strip()

            if not name or not address or not phone or not password:
                self._send_json({"error": "Missing required fields: Name, Address, Phone, Password"}, status=400)
                return

            new_user_id = f"usr-{uuid.uuid4().hex[:6]}"
            new_user = {
                "id": new_user_id,
                "name": name,
                "address": address,
                "location": address.split(",")[-2].strip() if "," in address else address,
                "dob": dob,
                "phone": phone,
                "role": role,
                "email": email or f"{phone}@farm2flow.in",
                "password": password,
                "created_at": datetime.datetime.now().isoformat(),
                "verified": True
            }

            # Save in real-time persistent dictionary and file
            REGISTERED_USERS_DB[new_user_id] = new_user
            save_registered_users(REGISTERED_USERS_DB)

            token = f"f2f-token-{role}-{new_user_id}"
            user_safe = {k: v for k, v in new_user.items() if k != "password"}
            self._send_json({"message": "Account created successfully", "access_token": token, "user": user_safe}, status=201)

        elif path == "/api/auth/login":
            identifier = req_data.get("identifier", "").strip().lower()
            password = req_data.get("password", "").strip()
            role = req_data.get("role", "farmer").lower()

            # Search in registered persistent database first
            user_match = None
            for uid, u in REGISTERED_USERS_DB.items():
                if (u.get("email", "").lower() == identifier or u.get("phone", "").replace(" ", "") == identifier.replace(" ", "")):
                    if password and u.get("password") == password:
                        user_match = u
                        break
                    elif not password:
                        user_match = u
                        break

            # Search in deterministic built-in demo profiles
            if not user_match:
                for k, u in USERS_DB.items():
                    if (k.lower() == identifier or u.get("email", "").lower() == identifier or u.get("phone", "").replace(" ", "") == identifier.replace(" ", "")):
                        user_match = u
                        break

            # Fallback creation if not found
            if not user_match:
                user_match = {
                    "id": f"usr-{uuid.uuid4().hex[:6]}",
                    "name": identifier.split("@")[0].capitalize() if "@" in identifier else "Verified User",
                    "email": identifier if "@" in identifier else "",
                    "phone": identifier if not "@" in identifier else "+91 98300 00000",
                    "role": role,
                    "location": "Kolkata, West Bengal" if role == "buyer" else "Hooghly, West Bengal",
                    "address": "Kolkata Hub, West Bengal" if role == "buyer" else "Hooghly Agro Hub, WB",
                    "verified": True
                }

            token = f"f2f-token-{user_match.get('role', role)}-{user_match.get('id', 'usr-1')}"
            user_safe = {k: v for k, v in user_match.items() if k != "password"}
            self._send_json({"access_token": token, "token_type": "bearer", "user": user_safe})
        elif path == "/api/produce":
            new_produce = {
                "id": f"prod-{len(PRODUCE_DB) + 1:03d}",
                "farmer_id": req_data.get("farmer_id", "f-101"),
                "farmer_name": req_data.get("farmer_name", "Farmer A"),
                "farmer_location": req_data.get("farmer_location", "Hooghly (32 km)"),
                "crop_name": req_data.get("crop_name", "Tomato"),
                "variety": req_data.get("variety", "Hybrid Red"),
                "grade": req_data.get("grade", "Grade A"),
                "quantity_kg": float(req_data.get("quantity_kg", 500)),
                "expected_price_per_kg": float(req_data.get("expected_price_per_kg", 30)),
                "market_suggested_min": 28.0 if "tomato" in str(req_data.get("crop_name", "")).lower() else 16.0,
                "market_suggested_max": 32.0 if "tomato" in str(req_data.get("crop_name", "")).lower() else 20.0,
                "harvest_date": req_data.get("harvest_date", "2026-09-08"),
                "demand_status": "High",
                "status": "Available",
                "fpo_verified": True,
                "created_at": datetime.datetime.now().isoformat()
            }
            PRODUCE_DB.insert(0, new_produce)
            self._send_json(new_produce, status=200)
        elif path == "/api/orders":
            crop = req_data.get("crop", "Tomato")
            req_kg = float(req_data.get("required_kg", 2000.0))
            buyer = req_data.get("buyer_name", "Kolkata Wholesale Mandi Aggregator")
            match_res = rank_smart_suppliers(crop, req_kg)
            new_order = {
                "id": f"ord-{len(ORDERS_DB) + 1:03d}",
                "order_number": f"FF-{uuid.uuid4().hex[:4].upper()}",
                "buyer_id": "b-201",
                "buyer_name": buyer,
                "destination": "Posta Mandi, Kolkata",
                "items": [
                    {
                        "produce_id": s["produce_id"],
                        "farmer_name": s["farmer_name"],
                        "crop_name": f"{crop} ({s['grade']})",
                        "quantity_kg": s["matched_kg"],
                        "price_per_kg": s["price_per_kg"],
                        "subtotal": s["matched_kg"] * s["price_per_kg"]
                    } for s in match_res["suppliers"]
                ],
                "total_quantity_kg": match_res["fulfilled_kg"],
                "total_amount": match_res["estimated_total_cost"],
                "savings_realized": round(match_res["estimated_total_cost"] * 0.18, 2),
                "status": "Confirmed",
                "expected_delivery": "Tomorrow, 2:30 PM",
                "created_at": datetime.datetime.now().isoformat(),
                "route_id": "route-opt-101"
            }
            ORDERS_DB.insert(0, new_order)
            self._send_json(new_order, status=200)
        else:
            self._send_json({"detail": "Not Found"}, status=404)

print(f"Farm2Flow Core API running on http://127.0.0.1:{PORT}")
socketserver.TCPServer.allow_reuse_address = True
with socketserver.TCPServer(("", PORT), Farm2FlowHandler) as httpd:
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
