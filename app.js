/**
 * Replate — Smart Surplus Food Distribution Platform
 * Core Application Engine & Data Management
 */

// Global Platform State
const replate = {
  currentTab: 'landing', // 'landing' | 'donor' | 'receiver' | 'volunteer' | 'admin'
  filters: {
    query: '',
    category: 'all',
    diet: 'all',
    maxDistance: 15
  },
  stats: {
    mealsSaved: 28450,
    foodDonatedTons: 14.2,
    orgsConnected: 185,
    eventsSupported: 420
  },
  notifications: [
    {
      id: 'NF-1',
      title: 'Best Match Found!',
      message: 'Grand Hyatt Wedding surplus (150 meals) matched with Shree Ram Orphanage (2.4 km away).',
      time: 'Just now',
      type: 'match',
      read: false
    },
    {
      id: 'NF-2',
      title: 'New Food Listing Available',
      message: 'MIT College Symposium posted 80 snack boxes in Kothrud (1.2 km away).',
      time: '10 mins ago',
      type: 'donor',
      read: false
    },
    {
      id: 'NF-3',
      title: 'Pickup Confirmed by Volunteer',
      message: 'Volunteer Rahul S. accepted delivery run for Batch #FS-101. On the way.',
      time: '25 mins ago',
      type: 'volunteer',
      read: false
    }
  ],
  listings: [
    {
      id: 'FS-101',
      eventName: 'Mehta & Sharma Grand Wedding',
      eventType: 'Wedding Event',
      donorName: 'Grand Hyatt Regal Banquets',
      phone: '+91 98220 12345',
      address: 'Senapati Bapat Road, Pune',
      lat: 18.5340,
      lng: 73.8310,
      foodAvailable: 'Basmati Jeera Rice, Dal Makhani, Paneer Butter Masala & 160 Chapatis',
      foodCategory: 'Cooked Hot Meals',
      dietType: 'Pure Vegetarian',
      quantityServings: 150,
      weightKg: 48,
      prepTime: 'Today, 2:30 PM',
      deadlineTime: 'Today, 10:30 PM',
      safeMinutesRemaining: 110, // ~1h 50m -> Collect Soon
      urgency: 'Collect Soon',
      photoUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=80',
      specialInstructions: 'Food is sealed inside insulated stainless steel thermal containers. Untouched buffet trays.',
      status: 'AVAILABLE', // 'AVAILABLE' | 'REQUESTED' | 'ASSIGNED' | 'IN_TRANSIT' | 'COMPLETED' | 'EXPIRED'
      matchedOrgId: 'ORG-1',
      matchedOrgName: 'Shree Ram Orphanage & Child Home',
      distanceKm: 2.4,
      pickupOtp: '4821',
      deliveryOtp: '7193',
      assignedVolunteer: null
    },
    {
      id: 'FS-102',
      eventName: 'National Tech Innovation Symposium',
      eventType: 'College Event',
      donorName: 'MIT World Peace University Catering',
      phone: '+91 94220 55667',
      address: 'Paud Road, Kothrud, Pune',
      lat: 18.5080,
      lng: 73.8050,
      foodAvailable: 'Fresh Vegetable Sandwiches, Samosas, Idli-Sambar & Fruit Platters',
      foodCategory: 'Snacks & Bakery',
      dietType: 'Pure Vegetarian',
      quantityServings: 80,
      weightKg: 24,
      prepTime: 'Today, 4:00 PM',
      deadlineTime: 'Today, 11:00 PM',
      safeMinutesRemaining: 240, // 4 hours -> Fresh
      urgency: 'Fresh',
      photoUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=80',
      specialInstructions: 'Individual clean food boxes. Ideal for evening distribution.',
      status: 'AVAILABLE',
      matchedOrgId: 'ORG-2',
      matchedOrgName: 'Vatsalya Elders Shelter',
      distanceKm: 1.2,
      pickupOtp: '3391',
      deliveryOtp: '5024',
      assignedVolunteer: null
    },
    {
      id: 'FS-103',
      eventName: 'Corporate Annual Gala Dinner',
      eventType: 'Corporate Function',
      donorName: 'TechPark Convention Center',
      phone: '+91 98901 98765',
      address: 'Hinjawadi Phase 1, Pune',
      lat: 18.5910,
      lng: 73.7380,
      foodAvailable: 'Chicken Dum Biryani, Mirchi Ka Salan & Raita',
      foodCategory: 'Cooked Hot Meals',
      dietType: 'Non-Vegetarian',
      quantityServings: 110,
      weightKg: 42,
      prepTime: 'Today, 1:00 PM',
      deadlineTime: 'Today, 8:45 PM',
      safeMinutesRemaining: 45, // < 1 hour -> Urgent
      urgency: 'Urgent',
      photoUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=80',
      specialInstructions: 'Rich meat preparation. Immediate rapid pickup recommended before safe deadline.',
      status: 'AVAILABLE',
      matchedOrgId: 'ORG-4',
      matchedOrgName: 'Hope Community Night Shelter',
      distanceKm: 3.8,
      pickupOtp: '1942',
      deliveryOtp: '8831',
      assignedVolunteer: null
    },
    {
      id: 'FS-104',
      eventName: 'Silver Jubilee Birthday Celebration',
      eventType: 'Party & Gathering',
      donorName: 'Kothrud Residency Club',
      phone: '+91 97654 11223',
      address: 'Mayur Colony, Kothrud, Pune',
      lat: 18.5020,
      lng: 73.8180,
      foodAvailable: 'Chole, Steamed Basmati Rice, Poori & Gulab Jamun',
      foodCategory: 'Cooked Hot Meals',
      dietType: 'Pure Vegetarian',
      quantityServings: 65,
      weightKg: 26,
      prepTime: 'Today, 3:30 PM',
      deadlineTime: 'Today, 11:30 PM',
      safeMinutesRemaining: 210, // > 3 hours -> Fresh
      urgency: 'Fresh',
      photoUrl: 'https://images.unsplash.com/photo-1605197154284-8843949f548f?w=600&auto=format&fit=crop&q=80',
      specialInstructions: 'Dessert and main course packed in hygienic foil boxes.',
      status: 'AVAILABLE',
      matchedOrgId: 'ORG-2',
      matchedOrgName: 'Vatsalya Elders Shelter',
      distanceKm: 2.1,
      pickupOtp: '7721',
      deliveryOtp: '4192',
      assignedVolunteer: null
    }
  ],
  organizations: [
    {
      id: 'ORG-1',
      name: 'Shree Ram Orphanage & Child Home',
      type: 'Children Orphanage',
      address: 'Viman Nagar / Wadgaon Sheri, Pune',
      lat: 18.5512,
      lng: 73.9220,
      inmatesCount: 85,
      verified: true,
      dietRule: 'Pure Vegetarian Only',
      contactPerson: 'Swami Prakash (+91 98221 44556)'
    },
    {
      id: 'ORG-2',
      name: 'Vatsalya Elders Shelter & Care',
      type: 'Old Age Home',
      address: 'Karve Road, Kothrud, Pune',
      lat: 18.5080,
      lng: 73.8140,
      inmatesCount: 55,
      verified: true,
      dietRule: 'Pure Veg, Low Spice',
      contactPerson: 'Mataji Shanti Devi (+91 98902 33441)'
    },
    {
      id: 'ORG-3',
      name: 'Sai Seva Community Kitchen',
      type: 'Daily Langar & Needy Feeding',
      address: 'Shivajinagar Station Area, Pune',
      lat: 18.5310,
      lng: 73.8520,
      inmatesCount: 150,
      verified: true,
      dietRule: 'Open Community Meals',
      contactPerson: 'Rameshwar Patil (+91 97654 22334)'
    },
    {
      id: 'ORG-4',
      name: 'Hope Community Night Shelter',
      type: 'Shelter for Destitute & Laborers',
      address: 'Pune Station Central Area',
      lat: 18.5190,
      lng: 73.8740,
      inmatesCount: 60,
      verified: true,
      dietRule: 'All Edible Foods',
      contactPerson: 'Brother Anand (+91 98811 77665)'
    }
  ],
  volunteers: [
    { id: 'VOL-1', name: 'Rahul Sharma', phone: '+91 98500 44321', vehicle: 'Motorcycle + Thermal Box', tripsCompleted: 42, rating: 4.9, available: true },
    { id: 'VOL-2', name: 'Priya Deshmukh', phone: '+91 97654 33210', vehicle: 'Electric Scooter', tripsCompleted: 28, rating: 5.0, available: true }
  ],
  map: null,
  mapMarkers: []
};

// Web Audio API Sound Synthesizer (Zero External Audio Files)
let audioCtx = null;
function playSound(type = 'ping') {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    if (!audioCtx) audioCtx = new AudioContext();
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    if (type === 'urgent') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.linearRampToValueAtTime(880, now + 0.25);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.start(now);
      osc.stop(now + 0.35);
    } else {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.15);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
      osc.start(now);
      osc.stop(now + 0.2);
    }
  } catch (e) {
    console.warn('Audio playback error:', e);
  }
}

// Document Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initLeafletMap();
  renderLandingFoodShowcase();
  renderDonorDashboard();
  renderReceiverDashboard();
  renderVolunteerDashboard();
  renderAdminDashboard();
  renderNotifications();
  initListingForm();
  startUrgencyCountdownEngine();
  lucide.createIcons();
});

// Navigation & Tab Switching
function initNavigation() {
  document.querySelectorAll('[data-nav-tab]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = btn.getAttribute('data-nav-tab');
      switchTab(target);
      playSound('ping');
    });
  });
}

function switchTab(tabId) {
  replate.currentTab = tabId;

  // Update nav buttons
  document.querySelectorAll('[data-nav-tab]').forEach(btn => {
    if (btn.getAttribute('data-nav-tab') === tabId) {
      btn.classList.add('bg-emerald-50', 'text-emerald-700', 'font-bold');
      btn.classList.remove('text-slate-600', 'font-medium');
    } else {
      btn.classList.remove('bg-emerald-50', 'text-emerald-700', 'font-bold');
      btn.classList.add('text-slate-600', 'font-medium');
    }
  });

  // Switch visible section
  document.querySelectorAll('.tab-view-section').forEach(view => {
    if (view.id === `tab-${tabId}`) {
      view.classList.remove('hidden');
    } else {
      view.classList.add('hidden');
    }
  });

  // Smooth scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Refresh map size if switching to a tab containing the map
  if (replate.map) {
    setTimeout(() => {
      replate.map.invalidateSize();
    }, 250);
  }

  lucide.createIcons();
}

// Leaflet Map Initialization
function initLeafletMap() {
  const mapEl = document.getElementById('replate-interactive-map');
  if (!mapEl) return;

  replate.map = L.map('replate-interactive-map').setView([18.5250, 73.8500], 12);

  // Light clean tiles
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; CartoDB & OpenStreetMap &bull; Replate Platform',
    maxZoom: 19
  }).addTo(replate.map);

  refreshMapPins();
}

function refreshMapPins() {
  if (!replate.map) return;

  replate.mapMarkers.forEach(m => replate.map.removeLayer(m));
  replate.mapMarkers = [];

  // Plot Verified NGOs / Receivers
  replate.organizations.forEach(org => {
    const icon = L.divIcon({
      className: 'custom-pin-wrapper',
      html: `<div class="custom-map-pin receiver">🛕</div>`,
      iconSize: [38, 38],
      iconAnchor: [19, 19]
    });

    const marker = L.marker([org.lat, org.lng], { icon })
      .bindPopup(`
        <div class="p-2 text-sm font-sans">
          <div class="font-bold text-sky-800 flex items-center gap-1">
            <span>🛕</span> ${org.name}
            <span class="text-[10px] bg-sky-100 text-sky-700 font-bold px-1.5 py-0.5 rounded">Verified ✓</span>
          </div>
          <p class="text-xs text-slate-500 mt-0.5">${org.type} &bull; ${org.inmatesCount} Inmates</p>
          <p class="text-[11px] text-slate-600 mt-1">Rule: <b>${org.dietRule}</b></p>
          <div class="mt-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded inline-block border border-emerald-200">
            Ready to receive surplus
          </div>
        </div>
      `)
      .addTo(replate.map);

    replate.mapMarkers.push(marker);
  });

  // Plot Available Surplus Food Donors
  replate.listings.forEach(listing => {
    if (listing.status === 'EXPIRED') return;

    const donorIcon = L.divIcon({
      className: 'custom-pin-wrapper',
      html: `<div class="custom-map-pin donor">🍲</div>`,
      iconSize: [38, 38],
      iconAnchor: [19, 19]
    });

    const donorMarker = L.marker([listing.lat, listing.lng], { icon: donorIcon })
      .bindPopup(`
        <div class="p-2 text-sm font-sans">
          <div class="font-bold text-emerald-800 flex items-center gap-1">
            <span>🍲</span> ${listing.donorName}
          </div>
          <p class="text-xs text-slate-600 font-medium">${listing.eventName}</p>
          <div class="mt-1 text-xs">
            <span class="font-bold text-slate-800">${listing.quantityServings} Meals</span>
            <span class="text-slate-500">(${listing.dietType})</span>
          </div>
          <div class="mt-2 flex items-center justify-between text-xs pt-1 border-t border-slate-100">
            <span class="font-bold ${listing.urgency === 'Urgent' ? 'text-rose-600' : (listing.urgency === 'Collect Soon' ? 'text-amber-600' : 'text-emerald-600')}">
              ${listing.urgency} (${listing.safeMinutesRemaining}m left)
            </span>
          </div>
        </div>
      `)
      .addTo(replate.map);

    replate.mapMarkers.push(donorMarker);
  });
}

// 1. LANDING PAGE SHOWCASE & FILTERS
function renderLandingFoodShowcase() {
  const container = document.getElementById('landing-food-grid');
  if (!container) return;

  const { query, category, diet, maxDistance } = replate.filters;

  const filtered = replate.listings.filter(item => {
    if (item.status === 'EXPIRED' || item.status === 'COMPLETED') return false;

    const matchesQuery = !query || 
      item.eventName.toLowerCase().includes(query.toLowerCase()) || 
      item.foodAvailable.toLowerCase().includes(query.toLowerCase()) ||
      item.address.toLowerCase().includes(query.toLowerCase());

    const matchesCategory = category === 'all' || item.foodCategory === category;
    const matchesDiet = diet === 'all' || item.dietType === diet;
    const matchesDistance = item.distanceKm <= maxDistance;

    return matchesQuery && matchesCategory && matchesDiet && matchesDistance;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center text-slate-500 card-clean rounded-2xl p-8">
        <i data-lucide="search-x" class="w-10 h-10 mx-auto text-slate-400 mb-2"></i>
        <h4 class="font-bold text-slate-700">No surplus food listings match your filters.</h4>
        <p class="text-xs text-slate-500 mt-1">Try expanding your search distance or clearing dietary filters.</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  container.innerHTML = filtered.map(item => {
    const urgencyClass = 
      item.urgency === 'Urgent' ? 'badge-urgent' :
      item.urgency === 'Collect Soon' ? 'badge-collect-soon' : 'badge-fresh';

    return `
      <div class="card-clean rounded-2xl overflow-hidden flex flex-col justify-between group">
        <div>
          <!-- Photo Container -->
          <div class="relative h-48 w-full overflow-hidden bg-slate-100">
            <img src="${item.photoUrl}" alt="${item.foodAvailable}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
            <div class="absolute top-3 left-3 flex gap-1.5">
              <span class="text-xs font-bold px-2.5 py-1 rounded-full ${urgencyClass}">
                ${item.urgency === 'Urgent' ? '🔴' : (item.urgency === 'Collect Soon' ? '🟡' : '🟢')} ${item.urgency}
              </span>
              <span class="text-xs font-semibold px-2 py-1 rounded-full bg-white/90 backdrop-blur text-slate-700 border border-slate-200 shadow-sm">
                ${item.dietType === 'Pure Vegetarian' ? '🌿 Pure Veg' : '🍗 Non-Veg'}
              </span>
            </div>
            <div class="absolute bottom-2 right-2 bg-slate-900/80 backdrop-blur text-white text-[11px] font-mono px-2 py-0.5 rounded">
              ⏱ ${item.safeMinutesRemaining}m safe
            </div>
          </div>

          <!-- Content Details -->
          <div class="p-5 space-y-3">
            <div>
              <span class="text-[11px] font-bold uppercase tracking-wider text-emerald-700">${item.eventType}</span>
              <h3 class="font-bold text-base text-slate-900 mt-0.5 leading-snug">${item.eventName}</h3>
              <p class="text-xs text-slate-500 flex items-center gap-1 mt-1">
                <i data-lucide="map-pin" class="w-3.5 h-3.5 text-slate-400"></i> ${item.address} &bull; <b class="text-emerald-700">${item.distanceKm} km away</b>
              </p>
            </div>

            <!-- Food description box -->
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-700">
              <span class="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Available Food:</span>
              <p class="font-medium mt-0.5 line-clamp-2">${item.foodAvailable}</p>
            </div>

            <div class="flex items-center justify-between text-xs pt-1 text-slate-600">
              <div>
                <span class="text-slate-400 block text-[10px]">Quantity</span>
                <span class="font-extrabold text-sm text-slate-900">${item.quantityServings} Meals</span>
              </div>
              <div class="text-right">
                <span class="text-slate-400 block text-[10px]">Deadline</span>
                <span class="font-semibold text-slate-800">${item.deadlineTime}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Action Button -->
        <div class="p-5 pt-0">
          <button onclick="requestFoodDirect('${item.id}')" class="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs transition shadow-sm flex items-center justify-center gap-1.5">
            <i data-lucide="hand-heart" class="w-4 h-4"></i> Request Food for NGO / Shelter
          </button>
        </div>
      </div>
    `;
  }).join('');

  lucide.createIcons();
}

// Filter Event Listeners
function applySearchFilter(val) {
  replate.filters.query = val;
  renderLandingFoodShowcase();
}

function setCategoryFilter(category) {
  replate.filters.category = category;
  document.querySelectorAll('[data-category-btn]').forEach(btn => {
    if (btn.getAttribute('data-category-btn') === category) {
      btn.classList.add('bg-emerald-600', 'text-white');
      btn.classList.remove('bg-white', 'text-slate-700');
    } else {
      btn.classList.remove('bg-emerald-600', 'text-white');
      btn.classList.add('bg-white', 'text-slate-700');
    }
  });
  renderLandingFoodShowcase();
}

function setDietFilter(diet) {
  replate.filters.diet = diet;
  document.querySelectorAll('[data-diet-btn]').forEach(btn => {
    if (btn.getAttribute('data-diet-btn') === diet) {
      btn.classList.add('bg-emerald-600', 'text-white');
      btn.classList.remove('bg-white', 'text-slate-700');
    } else {
      btn.classList.remove('bg-emerald-600', 'text-white');
      btn.classList.add('bg-white', 'text-slate-700');
    }
  });
  renderLandingFoodShowcase();
}

function setDistanceFilter(distance) {
  replate.filters.maxDistance = parseFloat(distance);
  const label = document.getElementById('distance-val-label');
  if (label) label.innerText = `${distance} km`;
  renderLandingFoodShowcase();
}

// 2. FOOD DONOR DASHBOARD
function renderDonorDashboard() {
  const container = document.getElementById('donor-listings-container');
  if (!container) return;

  container.innerHTML = replate.listings.map(item => {
    const step = 
      item.status === 'COMPLETED' ? 5 :
      item.status === 'IN_TRANSIT' ? 4 :
      item.status === 'ASSIGNED' ? 3 :
      item.status === 'REQUESTED' ? 2 : 1;

    const urgencyClass = 
      item.urgency === 'Urgent' ? 'badge-urgent' :
      item.urgency === 'Collect Soon' ? 'badge-collect-soon' : 'badge-fresh';

    return `
      <div class="card-clean p-6 rounded-2xl space-y-4">
        <div class="flex items-start justify-between">
          <div>
            <div class="flex items-center gap-2">
              <span class="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                #${item.id}
              </span>
              <span class="text-xs font-bold px-2 py-0.5 rounded ${urgencyClass}">
                ${item.urgency}
              </span>
              <span class="text-xs text-slate-500 font-medium">${item.eventType}</span>
            </div>
            <h4 class="text-lg font-bold text-slate-900 mt-1.5">${item.eventName}</h4>
            <p class="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
              <i data-lucide="map-pin" class="w-3.5 h-3.5 text-slate-400"></i> ${item.address}
            </p>
          </div>
          <div class="text-right">
            <span class="text-xl font-black font-mono text-emerald-700">${item.quantityServings} Meals</span>
            <span class="text-xs text-slate-500 block">~${item.weightKg} kg</span>
          </div>
        </div>

        <!-- 5-Step Visual Status Tracker -->
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
          <div class="flex items-center justify-between text-[11px] mb-2 font-semibold">
            <span class="${step >= 1 ? 'text-emerald-700 font-bold' : 'text-slate-400'}">1. Food Available</span>
            <span class="${step >= 2 ? 'text-emerald-700 font-bold' : 'text-slate-400'}">2. Receiver Matched</span>
            <span class="${step >= 3 ? 'text-emerald-700 font-bold' : 'text-slate-400'}">3. Volunteer Assigned</span>
            <span class="${step >= 4 ? 'text-emerald-700 font-bold' : 'text-slate-400'}">4. In Transit</span>
            <span class="${step >= 5 ? 'text-emerald-700 font-bold' : 'text-slate-400'}">5. Completed</span>
          </div>
          <div class="flex items-center">
            <div class="status-step-circle ${step >= 1 ? (step === 1 ? 'active' : 'completed') : 'pending'}">1</div>
            <div class="status-step-line ${step >= 2 ? 'completed' : ''}"></div>
            <div class="status-step-circle ${step >= 2 ? (step === 2 ? 'active' : 'completed') : 'pending'}">2</div>
            <div class="status-step-line ${step >= 3 ? 'completed' : ''}"></div>
            <div class="status-step-circle ${step >= 3 ? (step === 3 ? 'active' : 'completed') : 'pending'}">3</div>
            <div class="status-step-line ${step >= 4 ? 'completed' : ''}"></div>
            <div class="status-step-circle ${step >= 4 ? (step === 4 ? 'active' : 'completed') : 'pending'}">4</div>
            <div class="status-step-line ${step >= 5 ? 'completed' : ''}"></div>
            <div class="status-step-circle ${step >= 5 ? 'completed' : 'pending'}">✓</div>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs bg-white p-3 rounded-xl border border-slate-100">
          <div>
            <span class="text-slate-400 block text-[10px] uppercase font-bold">Matched Receiver:</span>
            <span class="font-bold text-sky-800">${item.matchedOrgName || 'Searching closest NGO...'}</span>
          </div>
          <div>
            <span class="text-slate-400 block text-[10px] uppercase font-bold">Remaining Safe Window:</span>
            <span class="font-mono font-bold text-emerald-700">${item.safeMinutesRemaining} mins remaining</span>
          </div>
          <div>
            <span class="text-slate-400 block text-[10px] uppercase font-bold">Pickup OTP for Volunteer:</span>
            <span class="font-mono font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded">${item.pickupOtp}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  lucide.createIcons();
}

// Listing Registration Form
function initListingForm() {
  const form = document.getElementById('donor-surplus-listing-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const eventName = document.getElementById('form-event-name').value;
    const eventType = document.getElementById('form-event-type').value;
    const donorName = document.getElementById('form-donor-name').value;
    const phone = document.getElementById('form-phone').value;
    const address = document.getElementById('form-address').value;
    const foodItems = document.getElementById('form-food-items').value;
    const category = document.getElementById('form-category').value;
    const diet = document.getElementById('form-diet').value;
    const servings = parseInt(document.getElementById('form-servings').value) || 50;
    const prepTime = document.getElementById('form-prep-time').value || '1:00 PM';
    const deadline = document.getElementById('form-deadline').value || '10:00 PM';
    const instructions = document.getElementById('form-instructions').value;

    const newId = `FS-${Math.floor(100 + Math.random() * 900)}`;

    const newListing = {
      id: newId,
      eventName: eventName,
      eventType: eventType,
      donorName: donorName,
      phone: phone,
      address: address,
      lat: 18.5204 + (Math.random() - 0.5) * 0.04,
      lng: 73.8567 + (Math.random() - 0.5) * 0.04,
      foodAvailable: foodItems,
      foodCategory: category,
      dietType: diet,
      quantityServings: servings,
      weightKg: Math.round(servings * 0.35),
      prepTime: prepTime,
      deadlineTime: deadline,
      safeMinutesRemaining: 180,
      urgency: 'Fresh',
      photoUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=80',
      specialInstructions: instructions || 'Clean and untouched food ready for pickup.',
      status: 'AVAILABLE',
      matchedOrgId: 'ORG-1',
      matchedOrgName: 'Shree Ram Orphanage & Child Home',
      distanceKm: (1.5 + Math.random() * 3).toFixed(1),
      pickupOtp: String(Math.floor(1000 + Math.random() * 9000)),
      deliveryOtp: String(Math.floor(1000 + Math.random() * 9000)),
      assignedVolunteer: null
    };

    replate.listings.unshift(newListing);
    replate.stats.eventsSupported++;
    replate.stats.mealsSaved += servings;

    addNotification(
      'New Food Listing Created',
      `${donorName} registered ${servings} meals from ${eventName}. Smart Matching activated!`,
      'donor'
    );

    form.reset();
    renderLandingFoodShowcase();
    renderDonorDashboard();
    renderReceiverDashboard();
    renderVolunteerDashboard();
    renderAdminDashboard();
    refreshMapPins();

    showToast('Listing Created Successfully!', `Batch #${newId} is now live and matching nearby receivers.`, 'success');
    switchTab('donor');
  });
}

// 3. NGO & FOOD RECEIVER DASHBOARD
function renderReceiverDashboard() {
  const container = document.getElementById('receiver-listings-feed');
  const matchBanner = document.getElementById('smart-match-banner-container');
  if (!container) return;

  // Smart Proximity Match Banner (Highlighting the best match)
  const bestMatch = replate.listings.find(item => item.status === 'AVAILABLE' && item.distanceKm <= 3.0);
  if (matchBanner && bestMatch) {
    matchBanner.innerHTML = `
      <div class="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-6 rounded-2xl shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div class="space-y-1">
          <div class="inline-flex items-center gap-1.5 bg-white/20 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <span>⚡ Smart Matching Algorithm</span>
          </div>
          <h3 class="text-xl font-black">Best Match Found — ${bestMatch.distanceKm} km away</h3>
          <p class="text-xs text-emerald-100 max-w-xl">
            <b>${bestMatch.eventName}</b> (${bestMatch.donorName}) has <b>${bestMatch.quantityServings} meals</b> available until ${bestMatch.deadlineTime}. Status: <span class="underline">${bestMatch.urgency}</span>.
          </p>
        </div>
        <button onclick="requestFoodDirect('${bestMatch.id}')" class="px-5 py-2.5 bg-white text-emerald-800 hover:bg-emerald-50 font-bold rounded-xl text-xs shadow-sm transition whitespace-nowrap">
          Claim for Shree Ram Orphanage
        </button>
      </div>
    `;
  }

  container.innerHTML = replate.listings.filter(i => i.status !== 'EXPIRED').map(item => {
    const urgencyClass = 
      item.urgency === 'Urgent' ? 'badge-urgent' :
      item.urgency === 'Collect Soon' ? 'badge-collect-soon' : 'badge-fresh';

    return `
      <div class="card-clean p-5 rounded-2xl space-y-3">
        <div class="flex items-start justify-between">
          <div>
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold px-2 py-0.5 rounded ${urgencyClass}">
                ${item.urgency}
              </span>
              <span class="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                ${item.distanceKm} km away
              </span>
            </div>
            <h4 class="text-base font-bold text-slate-900 mt-1.5">${item.foodAvailable}</h4>
            <p class="text-xs text-slate-500">From: ${item.donorName} (${item.address})</p>
          </div>
          <div class="text-right">
            <span class="text-lg font-black text-emerald-700 font-mono">${item.quantityServings}</span>
            <span class="text-xs text-slate-500 block">portions</span>
          </div>
        </div>

        <div class="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs flex items-center justify-between">
          <div>
            <span class="text-slate-400 block text-[10px]">Preparation Time</span>
            <span class="font-medium text-slate-700">${item.prepTime}</span>
          </div>
          <div>
            <span class="text-slate-400 block text-[10px]">Consumption Deadline</span>
            <span class="font-bold text-slate-900">${item.deadlineTime}</span>
          </div>
          <div>
            <span class="text-slate-400 block text-[10px]">Dietary Rule</span>
            <span class="font-bold text-slate-700">${item.dietType}</span>
          </div>
        </div>

        <div class="flex items-center justify-between pt-1">
          <button onclick="reportListingModal('${item.id}')" class="text-[11px] text-slate-400 hover:text-rose-600 flex items-center gap-1">
            <i data-lucide="flag" class="w-3.5 h-3.5"></i> Report Listing
          </button>
          ${item.status === 'AVAILABLE' ? `
            <button onclick="requestFoodDirect('${item.id}')" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs transition flex items-center gap-1.5 shadow-sm">
              <i data-lucide="hand-heart" class="w-4 h-4"></i> Request Food
            </button>
          ` : `
            <span class="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
              ✓ Food Requested (${item.status})
            </span>
          `}
        </div>
      </div>
    `;
  }).join('');

  lucide.createIcons();
}

function requestFoodDirect(listingId) {
  const item = replate.listings.find(i => i.id === listingId);
  if (!item) return;

  item.status = 'REQUESTED';
  item.matchedOrgId = 'ORG-1';
  item.matchedOrgName = 'Shree Ram Orphanage & Child Home';

  addNotification(
    'Food Requested by Receiver',
    `Shree Ram Orphanage requested ${item.quantityServings} meals from ${item.donorName}. Volunteer dispatch initiated!`,
    'match'
  );

  renderLandingFoodShowcase();
  renderDonorDashboard();
  renderReceiverDashboard();
  renderVolunteerDashboard();
  renderAdminDashboard();

  showToast('Food Requested!', `Request sent to ${item.donorName}. Volunteer will be assigned for pickup.`, 'success');
  switchTab('receiver');
}

// 4. VOLUNTEER DASHBOARD
function renderVolunteerDashboard() {
  const container = document.getElementById('volunteer-tasks-container');
  if (!container) return;

  container.innerHTML = replate.listings.map(item => {
    return `
      <div class="card-clean p-5 rounded-2xl space-y-4">
        <div class="flex items-start justify-between">
          <div>
            <span class="text-xs font-mono font-bold text-sky-800 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
              Task #${item.id}
            </span>
            <h4 class="text-base font-bold text-slate-900 mt-1.5">${item.foodAvailable}</h4>
            <p class="text-xs text-slate-500">${item.quantityServings} Meals &bull; ${item.dietType}</p>
          </div>
          <div class="text-right">
            <span class="text-xs font-bold text-emerald-700 block">${item.distanceKm} km trip</span>
            <span class="text-[11px] text-slate-400">⏱ ${item.safeMinutesRemaining}m safe</span>
          </div>
        </div>

        <div class="bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-xs space-y-2">
          <div class="flex items-center gap-2 text-slate-700">
            <i data-lucide="map-pin" class="w-4 h-4 text-emerald-600 flex-shrink-0"></i>
            <span><b>Pickup Venue:</b> ${item.donorName} (${item.address})</span>
          </div>
          <div class="flex items-center gap-2 text-slate-700">
            <i data-lucide="navigation" class="w-4 h-4 text-sky-600 flex-shrink-0"></i>
            <span><b>Deliver to:</b> ${item.matchedOrgName || 'Shree Ram Orphanage'}</span>
          </div>
        </div>

        <div class="flex items-center justify-between pt-1">
          <span class="text-xs text-slate-500">Status: <b class="text-slate-800">${item.status}</b></span>
          ${item.status === 'AVAILABLE' || item.status === 'REQUESTED' ? `
            <button onclick="volunteerAcceptPickup('${item.id}')" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs transition shadow-sm flex items-center gap-1.5">
              <i data-lucide="check" class="w-4 h-4"></i> Accept Pickup Task
            </button>
          ` : item.status === 'ASSIGNED' ? `
            <button onclick="volunteerVerifyPickup('${item.id}')" class="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl text-xs transition shadow-sm flex items-center gap-1.5">
              <i data-lucide="key" class="w-4 h-4"></i> Enter Donor Pickup OTP
            </button>
          ` : item.status === 'IN_TRANSIT' ? `
            <button onclick="volunteerCompleteDelivery('${item.id}')" class="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-xl text-xs transition shadow-sm flex items-center gap-1.5">
              <i data-lucide="check-check" class="w-4 h-4"></i> Enter Receiver Handover OTP
            </button>
          ` : `
            <span class="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
              ✓ Successfully Delivered to NGO
            </span>
          `}
        </div>
      </div>
    `;
  }).join('');

  lucide.createIcons();
}

function volunteerAcceptPickup(id) {
  const item = replate.listings.find(i => i.id === id);
  if (!item) return;

  item.status = 'ASSIGNED';
  item.assignedVolunteer = 'Rahul Sharma (Motorcycle)';

  addNotification(
    'Volunteer Assigned for Pickup',
    `Volunteer Rahul S. accepted task #${item.id} heading to ${item.donorName}.`,
    'volunteer'
  );

  renderDonorDashboard();
  renderReceiverDashboard();
  renderVolunteerDashboard();
  renderAdminDashboard();
  showToast('Pickup Task Accepted!', `Navigate to ${item.donorName} for collection.`, 'info');
}

function volunteerVerifyPickup(id) {
  const item = replate.listings.find(i => i.id === id);
  if (!item) return;

  const entered = prompt(`Enter Donor Collection OTP (Demo OTP: ${item.pickupOtp}):`, item.pickupOtp);
  if (entered === item.pickupOtp) {
    item.status = 'IN_TRANSIT';

    addNotification(
      'Food Collected & In Transit',
      `Volunteer collected ${item.quantityServings} meals from ${item.donorName}. In transit to ${item.matchedOrgName}.`,
      'volunteer'
    );

    renderDonorDashboard();
    renderReceiverDashboard();
    renderVolunteerDashboard();
    renderAdminDashboard();
    showToast('Pickup Verified!', `Food is safely in transit to ${item.matchedOrgName}.`, 'success');
  } else {
    alert('Invalid Pickup OTP. Please check with donor at venue.');
  }
}

function volunteerCompleteDelivery(id) {
  const item = replate.listings.find(i => i.id === id);
  if (!item) return;

  const entered = prompt(`Enter NGO Receiver Handover OTP (Demo OTP: ${item.deliveryOtp}):`, item.deliveryOtp);
  if (entered === item.deliveryOtp) {
    item.status = 'COMPLETED';
    item.safeMinutesRemaining = 0;
    replate.stats.mealsSaved += item.quantityServings;
    replate.stats.foodDonatedTons = (replate.stats.foodDonatedTons + item.weightKg / 1000).toFixed(1);

    addNotification(
      'Food Successfully Delivered! 🎉',
      `${item.quantityServings} meals successfully served to inmates at ${item.matchedOrgName}. Impact updated!`,
      'match'
    );

    renderLandingFoodShowcase();
    renderDonorDashboard();
    renderReceiverDashboard();
    renderVolunteerDashboard();
    renderAdminDashboard();
    showToast('Donation Completed! 🎉', `${item.quantityServings} meals successfully delivered!`, 'success');
  } else {
    alert('Invalid Receiver OTP. Please verify with shelter supervisor.');
  }
}

// 5. ADMINISTRATOR DASHBOARD
function renderAdminDashboard() {
  const table = document.getElementById('admin-master-table-body');
  const orgsList = document.getElementById('admin-orgs-verification-list');
  if (!table) return;

  table.innerHTML = replate.listings.map(item => {
    return `
      <tr class="border-b border-slate-100 hover:bg-slate-50/50 text-xs text-slate-700">
        <td class="py-3.5 px-4 font-mono font-bold text-slate-900">#${item.id}</td>
        <td class="py-3.5 px-4">
          <div class="font-bold text-slate-900">${item.donorName}</div>
          <div class="text-[11px] text-slate-500">${item.eventName}</div>
        </td>
        <td class="py-3.5 px-4 font-bold text-emerald-700">${item.quantityServings} Meals</td>
        <td class="py-3.5 px-4 text-sky-800 font-semibold">${item.matchedOrgName || 'Searching'}</td>
        <td class="py-3.5 px-4">
          <span class="font-bold text-[11px] px-2 py-0.5 rounded ${item.urgency === 'Urgent' ? 'badge-urgent' : (item.urgency === 'Collect Soon' ? 'badge-collect-soon' : 'badge-fresh')}">
            ${item.urgency}
          </span>
        </td>
        <td class="py-3.5 px-4">
          <span class="font-semibold text-slate-800 bg-slate-100 px-2 py-0.5 rounded text-[11px]">
            ${item.status}
          </span>
        </td>
        <td class="py-3.5 px-4 text-right">
          <button onclick="requestFoodDirect('${item.id}')" class="text-xs text-emerald-700 font-bold hover:underline">
            Manage
          </button>
        </td>
      </tr>
    `;
  }).join('');

  if (orgsList) {
    orgsList.innerHTML = replate.organizations.map(org => {
      return `
        <div class="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
          <div>
            <div class="font-bold text-slate-900 flex items-center gap-1.5">
              ${org.name}
              ${org.verified ? '<span class="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">Verified ✓</span>' : '<span class="text-[10px] text-amber-700 font-bold bg-amber-50 px-1.5 py-0.5 rounded">Pending</span>'}
            </div>
            <p class="text-[11px] text-slate-500 mt-0.5">${org.type} &bull; ${org.inmatesCount} Inmates</p>
          </div>
          <button onclick="toggleOrgVerification('${org.id}')" class="px-2.5 py-1 text-[11px] font-bold rounded-lg border transition ${org.verified ? 'bg-white text-rose-600 border-rose-200 hover:bg-rose-50' : 'bg-emerald-600 text-white hover:bg-emerald-700'}">
            ${org.verified ? 'Revoke Badge' : 'Verify Organization'}
          </button>
        </div>
      `;
    }).join('');
  }
}

function toggleOrgVerification(orgId) {
  const org = replate.organizations.find(o => o.id === orgId);
  if (!org) return;
  org.verified = !org.verified;
  renderAdminDashboard();
  refreshMapPins();
  showToast('Verification Status Updated', `${org.name} verification status changed.`, 'info');
}

// 6. URGENCY & DYNAMIC COUNTDOWN ENGINE
function startUrgencyCountdownEngine() {
  setInterval(() => {
    replate.listings.forEach(item => {
      if (item.status !== 'COMPLETED' && item.safeMinutesRemaining > 0) {
        item.safeMinutesRemaining -= 1;

        // Dynamic Urgency Recalculation
        if (item.safeMinutesRemaining <= 0) {
          item.urgency = 'Expired';
          item.status = 'EXPIRED';
        } else if (item.safeMinutesRemaining < 60) {
          item.urgency = 'Urgent';
        } else if (item.safeMinutesRemaining <= 180) {
          item.urgency = 'Collect Soon';
        } else {
          item.urgency = 'Fresh';
        }
      }
    });

    renderLandingFoodShowcase();
    renderDonorDashboard();
    renderReceiverDashboard();
    renderVolunteerDashboard();
    renderAdminDashboard();
  }, 10000);
}

// 7. NOTIFICATIONS SYSTEM
function addNotification(title, message, type = 'info') {
  playSound(type === 'urgent' ? 'urgent' : 'ping');

  replate.notifications.unshift({
    id: `NF-${Date.now()}`,
    title,
    message,
    time: 'Just now',
    type,
    read: false
  });

  renderNotifications();

  // HTML5 Desktop Push Notification
  if ('Notification' in window && Notification.permission === 'granted') {
    try {
      new Notification(title, {
        body: message,
        icon: 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png'
      });
    } catch (e) {
      console.warn('Native notification error:', e);
    }
  }
}

function renderNotifications() {
  const container = document.getElementById('notification-drawer-items');
  const badge = document.getElementById('top-notification-badge');
  const unreadCount = replate.notifications.filter(n => !n.read).length;

  if (badge) {
    if (unreadCount > 0) {
      badge.innerText = unreadCount;
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  }

  if (container) {
    container.innerHTML = replate.notifications.map(n => {
      return `
        <div class="p-3.5 rounded-xl ${n.read ? 'bg-slate-50' : 'bg-emerald-50/50 border border-emerald-100'} space-y-1">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-slate-900">${n.title}</span>
            <span class="text-[10px] text-slate-400 font-mono">${n.time}</span>
          </div>
          <p class="text-xs text-slate-600 leading-relaxed">${n.message}</p>
        </div>
      `;
    }).join('');
    lucide.createIcons();
  }
}

function toggleNotificationDrawer() {
  const drawer = document.getElementById('notifications-slide-drawer');
  if (!drawer) return;
  drawer.classList.toggle('hidden');
  replate.notifications.forEach(n => n.read = true);
  renderNotifications();
}

function enableBrowserPushNotifications() {
  if ('Notification' in window) {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        showToast('Push Notifications Active!', 'You will receive real-time Windows desktop alerts for urgent food rescues.', 'success');
        try {
          new Notification('Replate Alerts Active 🍃', {
            body: 'You will be alerted the moment surplus food is posted in your area.',
            icon: 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png'
          });
        } catch (e) {}
      } else {
        alert('Permission was dismissed or blocked in browser settings.');
      }
    });
  }
}

// 8. TOAST NOTIFICATIONS & MODALS
function showToast(title, message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  const borderClass = type === 'success' ? 'border-emerald-500' : (type === 'warning' ? 'border-amber-500' : 'border-sky-500');

  toast.className = `card-clean p-4 rounded-xl border-l-4 ${borderClass} shadow-lg max-w-sm flex items-start gap-3 transition-all duration-300 transform translate-y-2 opacity-0 pointer-events-auto bg-white`;
  toast.innerHTML = `
    <div class="mt-0.5 text-emerald-600 font-bold">
      <i data-lucide="${type === 'success' ? 'check-circle' : 'info'}" class="w-5 h-5"></i>
    </div>
    <div>
      <h5 class="text-xs font-bold text-slate-900">${title}</h5>
      <p class="text-xs text-slate-600 mt-0.5">${message}</p>
    </div>
  `;

  container.appendChild(toast);
  lucide.createIcons();

  setTimeout(() => toast.classList.remove('translate-y-2', 'opacity-0'), 50);
  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

function reportListingModal(id) {
  prompt(`Report Listing #${id}: Please enter the reason for reporting (e.g., inaccurate food details, already claimed, expired):`);
  showToast('Report Submitted', `Thank you. Listing #${id} has been flagged for administrator review.`, 'info');
}
