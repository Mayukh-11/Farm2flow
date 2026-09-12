'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { registerNewAccount, getRegisteredAccounts, syncRegisteredAccountsFromBackend, RegisteredAccount } from '@/services/api';
import { InDriveMapModal, LocationData } from '@/components/InDriveMapModal';


export default function LoginPage() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'farmer' | 'buyer'>('farmer');
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showProfiles, setShowProfiles] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [registeredAccounts, setRegisteredAccounts] = useState<RegisteredAccount[]>([]);
  const router = useRouter();

  // Create Account Modal States
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [regName, setRegName] = useState('');
  const [regAddress, setRegAddress] = useState('');
  const [regDob, setRegDob] = useState('');
  const [regPhone, setRegPhone] = useState('');
  const [regRole, setRegRole] = useState<'farmer' | 'buyer'>('farmer');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regHasEnam, setRegHasEnam] = useState(false);
  const [regEnamId, setRegEnamId] = useState('');
  const [regEnamPassword, setRegEnamPassword] = useState('');
  const [regError, setRegError] = useState('');
  const [regSuccess, setRegSuccess] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [isRegMapOpen, setIsRegMapOpen] = useState(false);


  // Real Person Profiles with Home Addresses (15 Consumers & 15 Farmers)
  const DEMO_PROFILES = {
    buyer: [
      {
        id: 'consumer-1',
        name: 'Sourav Mukherjee',
        occupation: 'Household Consumer',
        location: 'Salt Lake (Sector 1), Kolkata',
        address: 'AD-Block, Sector 1, Salt Lake, Kolkata - 700064',
        email: 'sourav.consumer@farm2flow.in',
        phone: '+91 98300 12345',
        icon: '👨‍💼'
      },
      {
        id: 'consumer-2',
        name: 'Priyanka Sen',
        occupation: 'Family Consumer',
        location: 'New Town (Action Area 1), Kolkata',
        address: 'Tower 4, Uniworld City, New Town, Kolkata - 700156',
        email: 'priyanka.consumer@farm2flow.in',
        phone: '+91 98344 66789',
        icon: '👩‍🏫'
      },
      {
        id: 'consumer-3',
        name: 'Debojyoti Banerjee',
        occupation: 'Independent Consumer',
        location: 'Ballygunge, South Kolkata',
        address: '42/1 Dover Road, Ballygunge, Kolkata - 700019',
        email: 'debojyoti.consumer@farm2flow.in',
        phone: '+91 98355 88990',
        icon: '👨‍⚕️'
      },
      {
        id: 'consumer-4',
        name: 'Ananya Roy',
        occupation: 'Gourmet Organic Chef',
        location: 'Alipore, South Kolkata',
        address: '14B Burdwan Road, Alipore, Kolkata - 700027',
        email: 'ananya.roy@farm2flow.in',
        phone: '+91 98311 22334',
        icon: '👩‍🍳'
      },
      {
        id: 'consumer-5',
        name: 'Amitava Bose',
        occupation: 'Apartment Collective Lead',
        location: 'Jadavpur, Kolkata',
        address: '88 Central Road, Jadavpur, Kolkata - 700032',
        email: 'amitava.bose@farm2flow.in',
        phone: '+91 98322 33445',
        icon: '👨‍💻'
      },
      {
        id: 'consumer-6',
        name: 'Sarmistha Ganguly',
        occupation: 'School Administrator',
        location: 'Behala Chowrasta, Kolkata',
        address: '12 Diamond Harbour Road, Behala, Kolkata - 700034',
        email: 'sarmistha.ganguly@farm2flow.in',
        phone: '+91 98333 44556',
        icon: '👩‍💼'
      },
      {
        id: 'consumer-7',
        name: 'Rajesh Agarwal',
        occupation: 'Bulk Kitchen Purchaser',
        location: 'Posta Bazar, Central Kolkata',
        address: '22 Kalakar Street, Posta, Kolkata - 700007',
        email: 'rajesh.agarwal@farm2flow.in',
        phone: '+91 98344 55667',
        icon: '👨‍💼'
      },
      {
        id: 'consumer-8',
        name: 'Sneha Majumder',
        occupation: 'Fitness & Nutrition Coach',
        location: 'Gariahat, South Kolkata',
        address: '5/2 Hindustan Park, Gariahat, Kolkata - 700029',
        email: 'sneha.majumder@farm2flow.in',
        phone: '+91 98355 66778',
        icon: '🏃‍♀️'
      },
      {
        id: 'consumer-9',
        name: 'Kaushik Chakraborty',
        occupation: 'Hostel Mess Contractor',
        location: 'Dum Dum Cantonment, Kolkata',
        address: '18 Gorabazar, Dum Dum, Kolkata - 700028',
        email: 'kaushik.chakraborty@farm2flow.in',
        phone: '+91 98366 77889',
        icon: '👨‍🍳'
      },
      {
        id: 'consumer-10',
        name: 'Ritu Kothari',
        occupation: 'Boutique Cafe Owner',
        location: 'Park Street, Kolkata',
        address: '77A Park Street, 3rd Floor, Kolkata - 700016',
        email: 'ritu.kothari@farm2flow.in',
        phone: '+91 98377 88990',
        icon: '☕'
      },
      {
        id: 'consumer-11',
        name: 'Subrata Dutta',
        occupation: 'Housing Society Secretary',
        location: 'Rajarhat, Action Area 2',
        address: 'Greenwood Sonata, Major Arterial Road, Kolkata - 700135',
        email: 'subrata.dutta@farm2flow.in',
        phone: '+91 98388 99001',
        icon: '🏘️'
      },
      {
        id: 'consumer-12',
        name: 'Moumita Das',
        occupation: 'Ayurveda Wellness Practitioner',
        location: 'Shyambazar, North Kolkata',
        address: '104 Bidhan Sarani, Shyambazar, Kolkata - 700004',
        email: 'moumita.das@farm2flow.in',
        phone: '+91 98399 00112',
        icon: '🌿'
      },
      {
        id: 'consumer-13',
        name: 'Vikram Mehta',
        occupation: 'Retail Fresh Mart Lead',
        location: 'Howrah AC Market',
        address: '16 Grand Trunk Road, Howrah - 711101',
        email: 'vikram.mehta@farm2flow.in',
        phone: '+91 98400 11223',
        icon: '🏪'
      },
      {
        id: 'consumer-14',
        name: 'Tanushree Bhattacharya',
        occupation: 'Culinary Blogger',
        location: 'Tollygunge, South Kolkata',
        address: '32 Deshapran Sasmal Road, Tollygunge, Kolkata - 700033',
        email: 'tanushree.b@farm2flow.in',
        phone: '+91 98411 22334',
        icon: '🥗'
      },
      {
        id: 'consumer-15',
        name: 'Indranil Roychowdhury',
        occupation: 'Family Grocery Planner',
        location: 'Kankurgachi, East Kolkata',
        address: 'P-12 CIT Road, Scheme VI-M, Kankurgachi, Kolkata - 700054',
        email: 'indranil.rc@farm2flow.in',
        phone: '+91 98422 33445',
        icon: '🛒'
      }
    ],
    farmer: [
      {
        id: 'farmer-1',
        name: 'Ramesh Ghosh',
        occupation: 'Vegetable Farmer (Tomato/Brinjal)',
        location: 'Hooghly (Singur)',
        address: 'Singur Vegetable Cluster, Hooghly, WB',
        email: 'ramesh.farmer@farm2flow.in',
        phone: '+91 98310 44210',
        icon: '🌾'
      },
      {
        id: 'farmer-2',
        name: 'Subhash Mondal',
        occupation: 'Paddy & Grain Cultivator',
        location: 'Burdwan (Shaktigarh)',
        address: 'Paddy & Cereal Mandi Yard, Purba Bardhaman, WB',
        email: 'subhash.farmer@farm2flow.in',
        phone: '+91 98321 55678',
        icon: '🚜'
      },
      {
        id: 'farmer-3',
        name: 'Animesh Biswas',
        occupation: 'Spices & Chilli Grower',
        location: 'Nadia (Ranaghat)',
        address: 'Ranaghat Agro Hub, Nadia, WB',
        email: 'animesh.farmer@farm2flow.in',
        phone: '+91 98333 77890',
        icon: '🌱'
      },
      {
        id: 'farmer-4',
        name: 'Bimal Halder',
        occupation: 'Potato Specialist',
        location: 'Tarakeswar, Hooghly',
        address: 'Tarakeswar Cold Storage Belt, Hooghly, WB',
        email: 'bimal.halder@farm2flow.in',
        phone: '+91 98313 11540',
        icon: '🥔'
      },
      {
        id: 'farmer-5',
        name: 'Vasantrao Patil',
        occupation: 'Onion & Pomegranate Grower',
        location: 'Lasalgaon Mandi, Nashik, MH',
        address: 'Lasalgaon APMC Market, Nashik, Maharashtra',
        email: 'vasant.patil@farm2flow.in',
        phone: '+91 94222 31089',
        icon: '🧅'
      },
      {
        id: 'farmer-6',
        name: 'Basavaraj Gowda',
        occupation: 'Tomato & Capsicum Grower',
        location: 'Kolar APMC Mandi, Karnataka',
        address: 'Kolar Vegetable Cluster, Kolar, Karnataka',
        email: 'basavaraj.gowda@farm2flow.in',
        phone: '+91 98450 12890',
        icon: '🍅'
      },
      {
        id: 'farmer-7',
        name: 'Ramkishore Yadav',
        occupation: 'Cold Store Potato Producer',
        location: 'Khandauli, Agra, UP',
        address: 'Agra Potato Consortium, Khandauli, Uttar Pradesh',
        email: 'ramkishore.yadav@farm2flow.in',
        phone: '+91 94120 78231',
        icon: '🥔'
      },
      {
        id: 'farmer-8',
        name: 'Gurpreet Singh',
        occupation: 'Wheat & Grain Cultivator',
        location: 'Khanna Mandi, Ludhiana, Punjab',
        address: 'Malwa Progressive Farmers Yard, Khanna, Punjab',
        email: 'gurpreet.singh@farm2flow.in',
        phone: '+91 98140 55102',
        icon: '🌾'
      },
      {
        id: 'farmer-9',
        name: 'Chander Mohan Thakur',
        occupation: 'Highland Apple Orchardist',
        location: 'Kotkhai, Shimla, HP',
        address: 'Shimla Valley Apple Union, Kotkhai, Himachal Pradesh',
        email: 'chander.thakur@farm2flow.in',
        phone: '+91 94180 55190',
        icon: '🍎'
      },
      {
        id: 'farmer-10',
        name: 'K. Venkata Rao',
        occupation: 'Mirchi & Chilli Producer',
        location: 'Guntur Mirchi Yard, Andhra Pradesh',
        address: 'Guntur Spices Yard, Guntur, Andhra Pradesh',
        email: 'venkata.rao@farm2flow.in',
        phone: '+91 98481 22910',
        icon: '🌶️'
      },
      {
        id: 'farmer-11',
        name: 'Bhawani Singh Rathore',
        occupation: 'Mustard & Oilseed Grower',
        location: 'Kumher Mandi, Bharatpur, Rajasthan',
        address: 'Bharatpur Oilseeds Collective, Kumher, Rajasthan',
        email: 'bhawani.rathore@farm2flow.in',
        phone: '+91 94140 19820',
        icon: '🌼'
      },
      {
        id: 'farmer-12',
        name: 'Pravinbhai Patel',
        occupation: 'White Onion & Garlic Grower',
        location: 'Mahuva APMC, Bhavnagar, Gujarat',
        address: 'Saurashtra Onion Guild, Mahuva, Gujarat',
        email: 'pravin.patel@farm2flow.in',
        phone: '+91 98251 99014',
        icon: '🧅'
      },
      {
        id: 'farmer-13',
        name: 'Prabhat Mondal',
        occupation: 'Cauliflower & Cabbage Grower',
        location: 'Bongaon, North 24 Parganas, WB',
        address: 'Bongaon Border Agri Hub, North 24 Parganas, WB',
        email: 'prabhat.mondal@farm2flow.in',
        phone: '+91 98314 66778',
        icon: '🥦'
      },
      {
        id: 'farmer-14',
        name: 'Debabrata Das',
        occupation: 'Exotic Vegetable & Greens Grower',
        location: 'Baruipur, South 24 Parganas, WB',
        address: 'Baruipur Horticulture Green Belt, South 24 Parganas, WB',
        email: 'debabrata.das@farm2flow.in',
        phone: '+91 98315 88990',
        icon: '🥬'
      },
      {
        id: 'farmer-15',
        name: 'Manoj Mandal',
        occupation: 'Aromatic Fragrant Rice Grower',
        location: 'Katihar Mandi, Bihar',
        address: 'Kosi Seemanchal Grain Yard, Katihar, Bihar',
        email: 'manoj.mandal@farm2flow.in',
        phone: '+91 98351 22901',
        icon: '🍚'
      }
    ]
  };

  useEffect(() => {
    // Load registered accounts from persistent database (local + backend)
    setRegisteredAccounts(getRegisteredAccounts());
    syncRegisteredAccountsFromBackend().then(synced => {
      if (synced && synced.length > 0) {
        setRegisteredAccounts(synced);
      }
    });

    const handleAccountsUpdated = () => {
      setRegisteredAccounts(getRegisteredAccounts());
    };
    window.addEventListener('farm2flow_accounts_updated', handleAccountsUpdated);
    return () => window.removeEventListener('farm2flow_accounts_updated', handleAccountsUpdated);
  }, []);

  const handleProfileLogin = (profile: { id: string; name: string; location: string; address: string; email: string; isEnamVerified?: boolean; enamId?: string }, selectedRole: 'farmer' | 'buyer') => {
    setRole(selectedRole);
    setIdentifier(profile.email);
    setPassword('demo1234');
    
    setIsLoading(true);
    setError('');

    setTimeout(() => {
      const isEnam = selectedRole === 'farmer' ? (profile.isEnamVerified ?? true) : false;
      const userSession = {
        identifier: profile.email,
        name: profile.name,
        location: profile.location,
        address: profile.address,
        role: selectedRole === 'buyer' ? 'consumer' : 'farmer',
        isEnamVerified: isEnam,
        enamId: profile.enamId || (isEnam ? 'ENAM-APMC-WB-712409' : undefined),
        token: `f2f-token-${profile.id}-${Date.now()}`
      };
      if (typeof window !== 'undefined') {
        localStorage.setItem('farm2flow_user_session', JSON.stringify(userSession));
      }

      setIsLoading(false);

      if (selectedRole === 'buyer') {
        router.push('/buyer');
      } else {
        router.push('/farmer');
      }
    }, 450);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier) {
      setError('Please enter your phone number or email address.');
      return;
    }
    if (!password) {
      setError('Please enter your password.');
      return;
    }
    executeLogin(role);
  };

  const executeLogin = (selectedRole: 'farmer' | 'buyer') => {
    setIsLoading(true);
    setError('');

    setTimeout(() => {
      // 1. Check custom registered accounts first
      const cleanIdent = identifier.trim().toLowerCase();
      const cleanPhone = identifier.replace(/\s+/g, '');
      const registeredMatch = registeredAccounts.find(
        u => (u.email && u.email.toLowerCase() === cleanIdent) || u.phone.replace(/\s+/g, '') === cleanPhone
      );

      // 2. Check predefined demo profiles
      const demoList = selectedRole === 'farmer' ? DEMO_PROFILES.farmer : DEMO_PROFILES.buyer;
      const demoMatch = demoList.find(
        d => d.email.toLowerCase() === cleanIdent || d.phone.replace(/\s+/g, '') === cleanPhone
      );

      let profileName = registeredMatch?.name || demoMatch?.name || (selectedRole === 'buyer' ? 'Sourav Mukherjee' : 'Ramesh Ghosh');
      let profileLocation = registeredMatch?.location || demoMatch?.location || (selectedRole === 'buyer' ? 'Salt Lake, Kolkata' : 'Hooghly (Singur)');
      let profileAddress = registeredMatch?.address || demoMatch?.address || (selectedRole === 'buyer' ? 'AD-Block, Sector 1, Salt Lake, Kolkata - 700064' : 'Singur Vegetable Cluster, Hooghly, WB');

      // For registered custom accounts: depends strictly on whether enamId was provided during registration!
      // For demo farmers: default verified. For buyers: false.
      const isEnamVerified = registeredMatch 
        ? Boolean(registeredMatch.isEnamVerified)
        : (selectedRole === 'farmer');

      const userSession = {
        identifier: identifier || (selectedRole === 'buyer' ? 'sourav.consumer@farm2flow.in' : 'ramesh.farmer@farm2flow.in'),
        name: profileName,
        location: profileLocation,
        address: profileAddress,
        role: selectedRole === 'buyer' ? 'consumer' : selectedRole,
        isEnamVerified,
        enamId: registeredMatch?.enamId || (isEnamVerified ? 'ENAM-APMC-WB-712409' : undefined),
        token: `f2f-token-${selectedRole}-${Date.now()}`
      };

      if (typeof window !== 'undefined') {
        localStorage.setItem('farm2flow_user_session', JSON.stringify(userSession));
      }

      setIsLoading(false);

      if (selectedRole === 'buyer') {
        router.push('/buyer');
      } else {
        router.push('/farmer');
      }
    }, 450);
  };

  // Handle New Account Creation
  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setRegError('');
    setRegSuccess('');

    if (!regName.trim()) {
      setRegError('Full Name is required.');
      return;
    }
    if (!regAddress.trim()) {
      setRegError('Permanent or Farm Address is required.');
      return;
    }
    if (!regDob) {
      setRegError('Date of Birth is required.');
      return;
    }
    if (!regPhone.trim()) {
      setRegError('Phone number is required.');
      return;
    }
    if (!regPassword || regPassword.length < 4) {
      setRegError('Password must be at least 4 characters.');
      return;
    }

    setIsRegistering(true);

    try {
      const hasEnamProvided = regHasEnam || Boolean(regEnamId.trim());
      const created = await registerNewAccount({
        name: regName.trim(),
        address: regAddress.trim(),
        dob: regDob,
        phone: regPhone.trim(),
        role: regRole,
        email: regEmail.trim() || undefined,
        password: regPassword,
        enamId: hasEnamProvided ? (regEnamId.trim() || `ENAM-${Date.now().toString().slice(-6)}`) : undefined,
        isEnamVerified: hasEnamProvided
      });

      setIsRegistering(false);
      setRegSuccess(`Account successfully created for ${created.name}! Logging you in...`);

      setTimeout(() => {
        // Auto sign in with the new account
        const userSession = {
          identifier: created.email || created.phone,
          name: created.name,
          location: created.location,
          address: created.address,
          role: created.role === 'buyer' ? 'consumer' : 'farmer',
          isEnamVerified: created.isEnamVerified || false,
          enamId: created.enamId,
          token: `f2f-token-${created.id}-${Date.now()}`
        };
        if (typeof window !== 'undefined') {
          localStorage.setItem('farm2flow_user_session', JSON.stringify(userSession));
        }

        setIsRegisterModalOpen(false);
        if (created.role === 'buyer') {
          router.push('/buyer');
        } else {
          router.push('/farmer');
        }
      }, 1000);
    } catch (err: any) {
      setIsRegistering(false);
      setRegError('Failed to register account. Please check your network.');
    }
  };

  const isFarmerTheme = role === 'farmer';

  // Custom accounts registered under the currently active role tab
  const activeCustomAccounts = registeredAccounts.filter(a => a.role === role);

  return (
    <div
      className="min-h-screen relative flex flex-col justify-center items-center p-4 sm:p-6 bg-cover bg-center transition-all duration-700 select-none overflow-x-hidden"
      style={{
        backgroundImage: isFarmerTheme
          ? "linear-gradient(rgba(10, 35, 18, 0.40), rgba(8, 28, 14, 0.60)), url('/login-bg.jpg')"
          : "linear-gradient(rgba(8, 30, 60, 0.25), rgba(4, 18, 40, 0.45)), url('/consumer-login-bg.jpg')"
      }}
    >
      {/* Top Floating Brand & Role Switcher */}
      <div className="w-full max-w-[390px] flex items-center justify-between mb-4 z-10 px-1">
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-white shadow-lg backdrop-blur-md border ${
            isFarmerTheme
              ? 'bg-emerald-600/80 border-emerald-300/40 shadow-emerald-950/40'
              : 'bg-blue-600/80 border-blue-300/40 shadow-blue-950/40'
          }`}>
            <span className="material-symbols-outlined text-[18px]">
              {isFarmerTheme ? 'agriculture' : 'storefront'}
            </span>
          </div>
          <span className="text-[17px] font-black text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] tracking-tight">
            Farm2Flow
          </span>
        </div>

        {/* Role Pill Switcher */}
        <div className="flex items-center bg-black/35 backdrop-blur-md p-1 rounded-full border border-white/20 shadow-inner">
          <button
            type="button"
            onClick={() => setRole('farmer')}
            className={`px-3 py-1 rounded-full text-[11px] font-extrabold transition-all duration-300 ${
              isFarmerTheme
                ? 'bg-gradient-to-r from-lime-500 to-emerald-600 text-white shadow-md'
                : 'text-white/80 hover:text-white'
            }`}
          >
            🌾 Farmer
          </button>
          <button
            type="button"
            onClick={() => setRole('buyer')}
            className={`px-3 py-1 rounded-full text-[11px] font-extrabold transition-all duration-300 ${
              !isFarmerTheme
                ? 'bg-gradient-to-r from-sky-400 to-blue-600 text-white shadow-md'
                : 'text-white/80 hover:text-white'
            }`}
          >
            🛍️ Consumer
          </button>
        </div>
      </div>

      {/* Glassmorphism Frosted Card */}
      <div
        className="relative w-full max-w-[390px] rounded-[36px] p-7 sm:p-8 flex flex-col gap-6 text-white z-10 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/35"
        style={{
          background: isFarmerTheme
            ? 'rgba(255, 255, 255, 0.14)'
            : 'rgba(255, 255, 255, 0.16)',
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)',
          boxShadow: isFarmerTheme
            ? '0 25px 50px -12px rgba(0, 0, 0, 0.55), inset 0 1px 1px 0 rgba(255, 255, 255, 0.55)'
            : '0 25px 50px -12px rgba(0, 0, 0, 0.55), inset 0 1px 1px 0 rgba(255, 255, 255, 0.55)'
        }}
      >
        {/* Card Header Title */}
        <div className="flex flex-col gap-1.5">
          <h2 className="text-[34px] font-black text-white tracking-tight leading-tight drop-shadow-sm">
            Login
          </h2>
          <p className="text-[13px] text-white/85 font-medium leading-snug">
            Welcome back please login to your {isFarmerTheme ? 'farmer' : 'consumer'} account
          </p>
        </div>

        {/* Credentials Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {error && (
            <div className="bg-rose-500/25 border border-rose-400/60 text-white text-[12px] p-3 rounded-2xl font-bold backdrop-blur-md animate-in fade-in">
              {error}
            </div>
          )}

          {/* User Name Input with Profile Icon */}
          <div className="relative">
            <input
              type="text"
              value={identifier}
              onChange={e => setIdentifier(e.target.value)}
              placeholder="User Name"
              className="w-full h-[52px] pl-5 pr-12 bg-white/10 hover:bg-white/15 focus:bg-white/20 border border-white/35 focus:border-white/80 rounded-2xl text-[14px] text-white placeholder-white/60 font-medium focus:outline-none transition-all duration-200 shadow-inner"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-[20px] text-white/70 pointer-events-none">
              person
            </span>
          </div>

          {/* Password Input with Eye Toggle Icon */}
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full h-[52px] pl-5 pr-12 bg-white/10 hover:bg-white/15 focus:bg-white/20 border border-white/35 focus:border-white/80 rounded-2xl text-[14px] text-white placeholder-white/60 font-medium focus:outline-none transition-all duration-200 shadow-inner"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
              title={showPassword ? 'Hide Password' : 'Show Password'}
            >
              <span className="material-symbols-outlined text-[20px]">
                {showPassword ? 'visibility_off' : 'visibility'}
              </span>
            </button>
          </div>

          {/* Remember Me Checkbox Row */}
          <div className="flex items-center justify-between text-[13px] text-white/90 font-medium px-0.5">
            <label className="flex items-center gap-2.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={e => setRememberMe(e.target.checked)}
                className={`w-4 h-4 rounded border-white/40 bg-white/10 focus:ring-0 ${
                  isFarmerTheme ? 'accent-emerald-500' : 'accent-blue-500'
                }`}
              />
              <span>Remember me</span>
            </label>
          </div>

          {/* Quick 1-Click Fast Sign In Profiles Strip */}
          <div className="flex flex-col gap-2 pt-1">
            <div className="flex items-center justify-between px-0.5">
              <span className="text-[11px] font-black uppercase tracking-wider text-white/90 flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px] text-amber-300">bolt</span>
                <span>Fast Sign In ({isFarmerTheme ? 'Farmers' : 'Consumers'})</span>
              </span>
              <button
                type="button"
                onClick={() => setShowProfiles(!showProfiles)}
                className={`text-[11px] font-extrabold underline transition-colors cursor-pointer ${
                  isFarmerTheme ? 'text-lime-300 hover:text-lime-200' : 'text-sky-300 hover:text-sky-200'
                }`}
              >
                {showProfiles ? 'Close All' : 'View All (15+)'}
              </button>
            </div>

            {/* Horizontal Fast Sign In Quick Chips */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1.5 no-scrollbar">
              {/* Show top 5 instant click badges */}
              {(role === 'farmer' ? DEMO_PROFILES.farmer : DEMO_PROFILES.buyer).slice(0, 5).map(profile => (
                <button
                  key={profile.id}
                  type="button"
                  onClick={() => handleProfileLogin(profile, role)}
                  className="shrink-0 px-3 py-2 rounded-xl bg-white/15 hover:bg-white/25 active:scale-95 border border-white/25 flex items-center gap-2 text-left transition-all backdrop-blur-md shadow-xs"
                  title={`Fast Login as ${profile.name}`}
                >
                  <span className="text-[16px]">{profile.icon}</span>
                  <div className="min-w-0">
                    <p className="text-[11px] font-extrabold text-white leading-tight truncate max-w-[100px]">{profile.name}</p>
                    <p className="text-[9px] text-white/70 leading-tight truncate max-w-[100px]">{profile.occupation}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Collapsible Full Verified Profiles List (All 15 Consumers / 15 Farmers + Custom Accounts) */}
          {showProfiles && (
            <div className="p-3 bg-black/50 backdrop-blur-2xl rounded-2xl border border-white/30 flex flex-col gap-2 max-h-[220px] overflow-y-auto no-scrollbar animate-in slide-in-from-top-2 duration-200 shadow-2xl">
              <div className="flex items-center justify-between pb-1.5 border-b border-white/20 sticky top-0 bg-transparent z-10">
                <span className="text-[11px] font-black uppercase tracking-wider text-white">
                  {isFarmerTheme ? '🌾 All 15 Verified Farmers' : '🛍️ All 15 Verified Consumers'}
                </span>
                <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-white/20 text-white">
                  1-Click Sign In
                </span>
              </div>

              {/* Custom registered accounts */}
              {activeCustomAccounts.map(account => (
                <button
                  key={account.id}
                  type="button"
                  onClick={() => {
                    handleProfileLogin({
                      id: account.id,
                      name: account.name,
                      location: account.location,
                      address: account.address,
                      email: account.email || `${account.phone}@farm2flow.in`
                    }, role);
                  }}
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 flex items-start gap-2.5 text-left transition-all active:scale-98"
                >
                  <span className="text-xl shrink-0 mt-0.5">{isFarmerTheme ? '🌾' : '👨‍💼'}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-extrabold text-[12px] text-white truncate">{account.name}</p>
                      <span className="text-[9px] font-bold bg-amber-400 text-amber-950 px-1.5 py-0.2 rounded">New</span>
                    </div>
                    <p className="text-[10px] text-white/70 truncate">Ph: {account.phone} • {account.location}</p>
                    <p className="text-[9px] text-white/60 truncate">📍 {account.address}</p>
                  </div>
                </button>
              ))}

              {/* All 15 Demo Profiles */}
              {(role === 'farmer' ? DEMO_PROFILES.farmer : DEMO_PROFILES.buyer).map(profile => (
                <button
                  key={profile.id}
                  type="button"
                  onClick={() => handleProfileLogin(profile, role)}
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 flex items-start gap-2.5 text-left transition-all active:scale-98"
                >
                  <span className="text-xl shrink-0 mt-0.5">{profile.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-extrabold text-[12px] text-white truncate">{profile.name}</p>
                      <span className="text-[9px] font-extrabold text-emerald-300 bg-emerald-950/60 px-1.5 py-0.2 rounded">
                        Fast Sign In
                      </span>
                    </div>
                    <p className="text-[10px] text-white/80 font-medium truncate">{profile.occupation}</p>
                    <p className="text-[9px] text-white/60 truncate mt-0.5">📍 {profile.address}</p>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Login Button with Custom Gradient */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full h-[54px] rounded-2xl text-[16px] font-black transition-all duration-300 shadow-lg active:scale-98 flex items-center justify-center cursor-pointer mt-1 ${
              isFarmerTheme
                ? 'bg-gradient-to-r from-[#b7c920] to-[#25a04e] hover:from-[#c5d826] hover:to-[#2cb859] text-white shadow-emerald-950/40'
                : 'bg-gradient-to-r from-[#1e88e5] to-[#0d47a1] hover:from-[#2196f3] hover:to-[#1565c0] text-white shadow-blue-950/40'
            }`}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                <span className="text-[14px]">Logging in...</span>
              </div>
            ) : (
              <span>Login</span>
            )}
          </button>
        </form>

        {/* Signup Link */}
        <div className="flex items-center justify-center gap-1.5 text-[13px] text-white/85 font-medium -mt-1">
          <span>Don&apos;t have an account?</span>
          <button
            type="button"
            onClick={() => {
              setRegRole(role);
              setIsRegisterModalOpen(true);
            }}
            className="font-black text-white hover:underline transition-all cursor-pointer"
          >
            Signup
          </button>
        </div>

        {/* Creator / Brand Footer Signature */}
        <div className="text-center pt-2 border-t border-white/15">
          <p className="text-[11px] text-white/70 font-medium tracking-wide">
            Created for <span className="font-extrabold italic text-white">Farm2Flow Ecosystem</span>
          </p>
        </div>
      </div>

      {/* ==================== CREATE ACCOUNT MODAL ==================== */}
      {isRegisterModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-[430px] bg-white rounded-3xl p-5 border border-slate-200 shadow-2xl flex flex-col gap-4 max-h-[92vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <h3 className="text-[17px] font-black text-slate-900">Create Farm2Flow Account</h3>
                <p className="text-[11px] text-slate-500 font-medium">Saved real-time to agricultural database</p>
              </div>
              <button 
                onClick={() => setIsRegisterModalOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {/* Notification messages */}
            {regError && (
              <div className="p-2.5 bg-red-50 border border-red-200 text-red-800 text-[12px] font-bold rounded-xl">
                {regError}
              </div>
            )}
            {regSuccess && (
              <div className="p-2.5 bg-emerald-100 border border-emerald-300 text-emerald-900 text-[12px] font-extrabold rounded-xl text-center">
                {regSuccess}
              </div>
            )}

            <form onSubmit={handleRegisterSubmit} className="flex flex-col gap-3 text-[12px]">
              
              {/* Type Selection (Farmer vs Buyer) */}
              <div>
                <label className="font-extrabold text-slate-700 block mb-1">Account Type *</label>
                <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setRegRole('farmer')}
                    className={`py-2 rounded-lg font-black transition-all ${
                      regRole === 'farmer' ? 'bg-emerald-700 text-white shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    🌾 Farmer
                  </button>
                  <button
                    type="button"
                    onClick={() => setRegRole('buyer')}
                    className={`py-2 rounded-lg font-black transition-all ${
                      regRole === 'buyer' ? 'bg-emerald-700 text-white shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    🏪 Buyer / Consumer
                  </button>
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="font-extrabold text-slate-700 block mb-0.5">Full Name *</label>
                <input
                  type="text"
                  required
                  value={regName}
                  onChange={e => setRegName(e.target.value)}
                  placeholder="e.g. Alok Ghosh"
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white"
                />
              </div>

              {/* Address with Map Selector */}
              <div>
                <div className="flex items-center justify-between mb-0.5">
                  <label className="font-extrabold text-slate-700">
                    {regRole === 'farmer' ? 'Farm / Mandi Address *' : 'Home / Delivery Address *'}
                  </label>
                  <button
                    type="button"
                    onClick={() => setIsRegMapOpen(true)}
                    className="text-[11px] font-black text-emerald-700 hover:text-emerald-800 hover:underline flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200"
                  >
                    <span className="material-symbols-outlined text-[14px]">map</span>
                    <span>Pick from Map</span>
                  </button>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={regAddress}
                    onChange={e => setRegAddress(e.target.value)}
                    placeholder={
                      regRole === 'farmer'
                        ? 'e.g. Singur Vegetable Belt, Hooghly, West Bengal - 712409'
                        : 'e.g. AD-Block, Sector 1, Salt Lake, Kolkata - 700064'
                    }
                    className="w-full pl-3 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white"
                  />
                  <button
                    type="button"
                    onClick={() => setIsRegMapOpen(true)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-800 flex items-center justify-center transition-colors"
                    title="Open Map Location Picker"
                  >
                    <span className="material-symbols-outlined text-[16px]">pin_drop</span>
                  </button>
                </div>
              </div>


              {/* DOB & Phone Grid */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="font-extrabold text-slate-700 block mb-0.5">Date of Birth *</label>
                  <input
                    type="date"
                    required
                    value={regDob}
                    onChange={e => setRegDob(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="font-extrabold text-slate-700 block mb-0.5">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={regPhone}
                    onChange={e => setRegPhone(e.target.value)}
                    placeholder="+91 98300 00000"
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white"
                  />
                </div>
              </div>

              {/* Email (Optional) */}
              <div>
                <div className="flex items-center justify-between mb-0.5">
                  <label className="font-extrabold text-slate-700">Email ID</label>
                  <span className="text-[10px] text-slate-400 font-bold bg-slate-100 px-1.5 py-0.2 rounded">Optional</span>
                </div>
                <input
                  type="email"
                  value={regEmail}
                  onChange={e => setRegEmail(e.target.value)}
                  placeholder="alok.ghosh@example.com (optional)"
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white"
                />
              </div>

              {/* e-NAM Verification Details (Recommended) */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50/70 border border-emerald-300/80 rounded-2xl p-3.5 flex flex-col gap-2.5 shadow-2xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-emerald-700 text-[18px]">verified</span>
                    <span className="font-extrabold text-[13px] text-emerald-950">e-NAM Verification Details</span>
                  </div>
                  <span className="text-[10px] font-black text-emerald-800 bg-emerald-200/80 border border-emerald-300 px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Recommended
                  </span>
                </div>

                {/* Exact requested explanation text */}
                <div className="text-[11px] text-slate-700 leading-relaxed bg-white/90 p-2.5 rounded-xl border border-emerald-200/70 shadow-2xs">
                  <p className="font-semibold text-emerald-950 mb-0.5">Login ID and Password:</p>
                  <p className="text-slate-600">
                    A temporary login ID and password are sent to your registered email address upon initial registration. After APMC (Agricultural Produce Market Committee) verification and KYC completion, you receive a permanent login ID.
                  </p>
                </div>

                {/* Optional Checkbox toggle */}
                <label className="flex items-center gap-2 cursor-pointer pt-0.5">
                  <input
                    type="checkbox"
                    checked={regHasEnam}
                    onChange={e => setRegHasEnam(e.target.checked)}
                    className="w-4 h-4 rounded text-emerald-700 focus:ring-emerald-600 border-slate-300"
                  />
                  <span className="text-[12px] font-bold text-emerald-950 select-none">
                    Link my e-NAM / APMC Registered Account
                  </span>
                </label>

                {/* e-NAM Credentials Input Fields (Visible if toggled or user types) */}
                {(regHasEnam || regRole === 'farmer') && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    <div>
                      <label className="text-[11px] font-extrabold text-slate-700 block mb-0.5">
                        e-NAM Login ID {regHasEnam ? '*' : '(Optional)'}
                      </label>
                      <input
                        type="text"
                        value={regEnamId}
                        onChange={e => {
                          setRegEnamId(e.target.value);
                          if (e.target.value.trim().length > 0) setRegHasEnam(true);
                        }}
                        placeholder="e.g. WB-APMC-712409"
                        className="w-full px-3 py-2 bg-white border border-emerald-200 rounded-xl font-bold text-slate-900 text-[12px] focus:outline-none focus:border-emerald-600"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-extrabold text-slate-700 block mb-0.5">
                        e-NAM Passcode / Auth Code
                      </label>
                      <input
                        type="password"
                        value={regEnamPassword}
                        onChange={e => setRegEnamPassword(e.target.value)}
                        placeholder="e-NAM APMC Password"
                        className="w-full px-3 py-2 bg-white border border-emerald-200 rounded-xl font-bold text-slate-900 text-[12px] focus:outline-none focus:border-emerald-600"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="font-extrabold text-slate-700 block mb-0.5">Create Password *</label>
                <input
                  type="password"
                  required
                  value={regPassword}
                  onChange={e => setRegPassword(e.target.value)}
                  placeholder="At least 4 characters"
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isRegistering}
                className="w-full py-3 text-white rounded-xl text-[13px] font-black transition-all shadow-md active:scale-98 flex items-center justify-center gap-1.5 mt-2 bg-emerald-700 hover:bg-emerald-800"
              >
                {isRegistering ? (
                  <span>Registering to Real-Time Database...</span>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[18px]">how_to_reg</span>
                    <span>Register & Instant Login</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* InDrive Interactive Map Modal for Registration (Both Farmer & Buyer) */}
      <InDriveMapModal
        isOpen={isRegMapOpen}
        userRole={regRole}
        currentLocationName={regAddress}
        onClose={() => setIsRegMapOpen(false)}
        onSelectLocation={(loc: LocationData) => {
          setRegAddress(loc.address);
        }}
      />
    </div>
  );
}

