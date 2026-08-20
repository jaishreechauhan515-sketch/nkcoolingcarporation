import {
  ServiceItem,
  ProjectItem,
  GalleryItem,
  Testimonial,
  FAQ,
  ServiceArea,
  TechnicianProfile,
  ImageManifestItem
} from '../types';

import {
  nkCoolingLogo,
  ac1_2,
  ac2_2,
  ac3_2,
  climaPerfecto,
  gasFilling,
  freezer1_1,
  freezer2_1,
  freezer3_1,
  ro1,
  ro2_1,
  washing1_1,
  washing2_1,
  washing3_1,
  tools1_1,
  tools2_1,
  tools3_1,
  gundappa,
  rama,
  sarda,
  CLIENT_IMAGE_MAPPING
} from '../assets/images/imageImports';

export { CLIENT_IMAGE_MAPPING };

export const COMPANY_DETAILS = {
  name: "NK COOLING CORPORATION",
  logo: nkCoolingLogo,
  tagline: "APPLIANCE REPAIR EXPERT YOU CAN TRUST!",
  headline: "Reliable Service. Skilled Technicians. Complete Appliance Solutions.",
  subheadline: "Professional repair, servicing, installation and maintenance for AC, RO, Cooler, Refrigerator, Washing Machine and supported electrical appliances.",
  phone: "9120366773",
  phoneFormatted: "9120366773",
  whatsappNumber: "9919116773",
  website: "nkcoolingcorporation.in",
  email: "support@nkcoolingcorporation.in",
  primaryAreas: ["Bhatpar Rani, Deoria", "Salempur", "Lar", "Bhatni"],
  secondaryAreas: ["Bihta & Nearby Areas"],
  workingHours: "8:00 AM – 9:00 PM (Monday to Sunday)",
  socials: {
    youtube: "https://www.youtube.com/@NKCOOLINGCORPORATION",
    instagram: "https://www.instagram.com/nikesh_ac_techanicion/",
    facebook: "https://www.facebook.com/profile.php?id=61579919950455"
  }
};

// High resolution realistic uploaded image URLs matching technician repair work & appliances
export const MOCK_IMAGES = {
  logo: nkCoolingLogo,
  heroTechnician: sarda,
  acTechnicianIndoor: ac1_2,
  acOutdoorUnit: ac2_2,
  washingMachineService: washing1_1,
  refrigeratorService: freezer1_1,
  coolerService: tools2_1,
  roPurifierService: ro1,
  technicianTools: tools1_1,
  aboutTeam: gundappa,
  workshop: rama
};

export const SERVICES: ServiceItem[] = [
  {
    id: "ac-services",
    category: "ac",
    title: "AIR CONDITIONER SERVICES",
    subtitle: "Complete Split, Window, Cassette & Ductable AC Care",
    description: "Expert installation, jet-pump chemical servicing, gas refilling, leak detection, PCB diagnosis, and AMC solutions for all major AC brands.",
    mainImage: ac1_2,
    supportingImage: ac2_2,
    badge: "Most Requested",
    subServices: [
      "AC Installation & Mounting",
      "AC Uninstallation & Dismantling",
      "Full Jet-Pump Deep Servicing",
      "Compressor & PCB Board Repair",
      "AC Maintenance & Cleaning",
      "Cooling Problem Diagnosis",
      "AC Gas Pressure Checking",
      "R32 / R410A / R22 Gas Charging",
      "Water Leakage & Drainage Fix",
      "Electrical Wiring & Capacitor Repair",
      "AC AMC Annual Maintenance Service"
    ],
    features: [
      "High-pressure foam & water jet deep cleaning",
      "100% Genuine copper pipes & original capacitors",
      "Digital gas leak testing before gas filling",
      "Inverter & Non-Inverter split/window expertise"
    ]
  },
  {
    id: "ro-services",
    category: "ro",
    title: "RO WATER PURIFIER SERVICES",
    subtitle: "Pure & Safe Drinking Water Solutions",
    description: "Multi-stage RO, UV, UF filter replacements, membrane cleaning, TDS calibration, pump repair, and persistent water leakage troubleshooting.",
    mainImage: ro1,
    supportingImage: ro2_1,
    badge: "Essential Water Care",
    subServices: [
      "RO System Installation",
      "RO Unit Servicing & Sanitization",
      "RO Booster Pump & Adapter Repair",
      "RO Preventive Maintenance",
      "Sediment, Carbon & RO Membrane Filter Replacement",
      "Low Water Flow & Pressure Troubleshooting",
      "Internal Pipe Leakage Repair",
      "TDS Adjustment & Taste Calibration",
      "UV Lamp & Controller Replacement"
    ],
    features: [
      "Food-grade certified replacement filters",
      "Digital TDS meter testing before and after service",
      "Instant resolution for low water discharge and noise",
      "Domestic & commercial RO repair solutions"
    ]
  },
  {
    id: "cooler-services",
    category: "cooler",
    title: "COOLER REPAIR & SERVICING",
    subtitle: "High Efficiency Desert & Tower Cooler Maintenance",
    description: "Heavy-duty cooler motor replacement, submersible water pump repair, honeycomb pad fitting, body leak sealing, and deep seasonal cleaning.",
    mainImage: tools2_1,
    supportingImage: tools3_1,
    badge: "Summer Special",
    subServices: [
      "Cooler Motor Winding & Replacement",
      "Water Submersible Pump Repair",
      "Water Leakage & Tank Sealing",
      "Honeycomb & Wood Wool Pad Replacement",
      "Cooler Deep Cleaning & Servicing",
      "Fan Blade Balance & Swing Motor Fix",
      "All Types of Cooler Repair & Maintenance"
    ],
    features: [
      "High RPM copper winding motors used",
      "Submersible pump flow testing",
      "Rust-proof body treatment and sealing",
      "Noise-reduction fan balancing"
    ]
  },
  {
    id: "freezer-services",
    category: "freezer",
    title: "REFRIGERATOR & FREEZER SERVICES",
    subtitle: "Single Door, Double Door, Side-by-Side & Commercial Deep Freezers",
    description: "Gas refilling, relay/thermostat replacement, compressor repair, door rubber seal changing, ice formation issues, and cooling coil leaks.",
    mainImage: freezer1_1,
    supportingImage: freezer2_1,
    badge: "Fast Doorstep Service",
    subServices: [
      "Fridge & Deep Freezer Repair",
      "Cooling Failure Diagnosis",
      "R134a / R600a Gas Refilling",
      "Compressor Repair & Replacement",
      "Thermostat & Overload Relay Change",
      "Freezer Cleaning & Defrosting Fix",
      "Door Rubber Gasket Replacement",
      "Drain Pipe Clog Clearance",
      "All Major Fridge Brands Servicing"
    ],
    features: [
      "Precision gas leak detection with vacuum testing",
      "Original relay & overload protectors",
      "Restoration of proper internal freezing temperature",
      "Energy efficiency optimization"
    ]
  },
  {
    id: "washing-machine-services",
    category: "washing_machine",
    title: "WASHING MACHINE SERVICES",
    subtitle: "Top Load, Front Load & Semi-Automatic Washing Machine Care",
    description: "Specialized drum motor repair, drain pump clog removal, spin cycle vibration fix, motherboard PCB repair, inlet valve replacement, and drum descaling.",
    mainImage: washing1_1,
    supportingImage: washing2_1,
    badge: "Prominent Expertise",
    subServices: [
      "Washing Machine Repair & Diagnostics",
      "Full Drum Servicing & Descaling",
      "Installation & Pipe Setup",
      "Uninstallation & Relocation",
      "Drainage Problem & Pump Fix",
      "Water Leakage Troubleshooting",
      "Spin / Wash Motor & Belt Replacement",
      "Control Board PCB Circuit Repair",
      "Lid Switch & Door Lock Replacement",
      "Overall Washing Machine Performance Tune-up"
    ],
    features: [
      "Vibration dampening and leveling alignment",
      "Heavy-duty drain pump clears all debris",
      "Micro-controller PCB chip level diagnostic tools",
      "Restores original spin speed and water extraction"
    ]
  },
  {
    id: "other-appliance-services",
    category: "other",
    title: "OTHER ELECTRICAL APPLIANCES",
    subtitle: "Custom Appliance Repair Solutions",
    description: "Service support for additional home electrical appliances. Contact NK Cooling Corporation to verify availability for your specific appliance model.",
    mainImage: tools1_1,
    supportingImage: tools3_1,
    badge: "Flexible Repair",
    subServices: [
      "Microwave Oven Circuit & Heating Repair",
      "Inverter & Battery Wiring Support",
      "Geyser / Water Heater Element Replacement",
      "Induction Cooktop Power Board Fix",
      "General Electrical Troubleshooting",
      "Custom Appliance Repair Consultation"
    ],
    features: [
      "On-demand technician visit",
      "Quick diagnostic inspection",
      "Transparent repair estimate before starting work",
      "Guaranteed doorstep customer satisfaction"
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "proj-01",
    title: "2.0 Ton Inverter Split AC Gas Refilling & Jet Wash",
    category: "ac",
    location: "Bhatpar Rani, Deoria",
    image: gasFilling,
    description: "Complete pressure wash of cooling coils, copper pipe nitrogen leak test, and precision R32 refrigerant gas charging.",
    completionDate: "Recent Project",
    applianceType: "Split AC 2.0 Ton",
    badge: "AC Gas Charging"
  },
  {
    id: "proj-02",
    title: "LG Dual Inverter Outdoor Unit Relocation & Mounting",
    category: "ac",
    location: "Salempur",
    image: ac3_2,
    description: "Heavy-duty outdoor bracket installation, vacuuming copper lines, and thermal insulation wrapping.",
    completionDate: "Recent Project",
    applianceType: "LG Dual Inverter AC",
    badge: "Technical Service"
  },
  {
    id: "proj-03",
    title: "Front-Load Washing Machine Drum Motor & PCB Repair",
    category: "washing_machine",
    location: "Lar",
    image: washing1_1,
    description: "Replaced faulty spin belt, repaired burned PCB capacitor, and cleared clogged drain motor filter.",
    completionDate: "Recent Project",
    applianceType: "Front Load Washer",
    badge: "Washing Service"
  },
  {
    id: "proj-04",
    title: "Commercial 7-Stage RO Water Purifier Servicing",
    category: "ro",
    location: "Bhatni",
    image: ro1,
    description: "Replaced carbon & sediment filters, installed new 100 GPD high-flow membrane, and set TDS to safe drinking levels.",
    completionDate: "Recent Project",
    applianceType: "7-Stage Commercial RO",
    badge: "RO Overhaul"
  },
  {
    id: "proj-05",
    title: "Double Door Refrigerator Compressor & Relay Change",
    category: "freezer",
    location: "Bhatpar Rani",
    image: freezer1_1,
    description: "Diagnosed cooling failure in lower chamber, replaced thermal overload relay, and charged R600a eco gas.",
    completionDate: "Recent Project",
    applianceType: "340L Double Door Refrigerator",
    badge: "Freezer Service"
  },
  {
    id: "proj-06",
    title: "Heavy-Duty Desert Air Cooler Motor & Pump Overhaul",
    category: "cooler",
    location: "Salempur",
    image: tools2_1,
    description: "Fitted 110W copper winding high-speed motor, replaced water distributor pump, and installed 100mm honeycomb pads.",
    completionDate: "Recent Project",
    applianceType: "Desert Cooler 80L",
    badge: "Motor Replacement"
  },
  {
    id: "proj-07",
    title: "Ductable Cassette AC AMC Inspection & Maintenance",
    category: "ac",
    location: "Deoria Main Road",
    image: ac2_2,
    description: "Commercial building cassette AC servicing, drain line flushing, and blower fan balance testing.",
    completionDate: "Recent Project",
    applianceType: "3.0 Ton Cassette AC",
    badge: "AC Servicing"
  },
  {
    id: "proj-08",
    title: "Fully Automatic Top Load Washing Machine Drain Fix",
    category: "washing_machine",
    location: "Lar Market",
    image: washing2_1,
    description: "Cleared coins and fabric lint lodged inside drain valve, replaced worn drain hose, and balanced machine feet.",
    completionDate: "Recent Project",
    applianceType: "Top Load 7.5kg Washer",
    badge: "Washer Service"
  },
  {
    id: "proj-09",
    title: "Deep Freezer Cooling Coil Leak Repair & Brazing",
    category: "freezer",
    location: "Bhatni Station Road",
    image: freezer3_1,
    description: "Detected copper coil micro-pinhole leak, performed silver brazing repair, flushed system with nitrogen, and recharged gas.",
    completionDate: "Recent Project",
    applianceType: "300L Commercial Deep Freezer",
    badge: "Freezer Technical"
  },
  {
    id: "proj-10",
    title: "Wall Mounted Alkaline RO Purifier Installation",
    category: "ro",
    location: "Bhatpar Rani Colony",
    image: ro2_1,
    description: "New wall installation, inlet valve plumbing connection, post-installation pressure test, and customer TDS briefing.",
    completionDate: "Recent Project",
    applianceType: "Alkaline RO Purifier",
    badge: "RO Installation"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-01",
    title: "AC Servicing & Pressure Foam Jet Wash",
    category: "ac",
    image: ac2_2,
    caption: "Deep jet foam cleaning of outdoor condenser unit coils.",
    aspectRatio: "16:9",
    tag: "AC Cleaning"
  },
  {
    id: "gal-02",
    title: "AC Gas Filling & Pressure Gauge Calibration",
    category: "ac",
    image: gasFilling,
    caption: "Precision R32 gas refilling with dual manifold pressure gauges.",
    aspectRatio: "4:3",
    tag: "Gas Refill"
  },
  {
    id: "gal-03",
    title: "Front Load Washing Machine Drum Servicing",
    category: "washing_machine",
    image: washing3_1,
    caption: "Servicing wash tub and drum door assembly for smooth spin cycles.",
    aspectRatio: "1:1",
    tag: "Washing Machine"
  },
  {
    id: "gal-04",
    title: "Under-Sink Multi-Stage RO Purifier Installation",
    category: "ro",
    image: ro2_1,
    caption: "High capacity under-sink RO water filter with storage tank.",
    aspectRatio: "3:4",
    tag: "RO Service"
  },
  {
    id: "gal-05",
    title: "Refrigerator & Freezer Technical Repair",
    category: "freezer",
    image: freezer2_1,
    caption: "Diagnosing compressor, relay, and cooling circuits on site.",
    aspectRatio: "16:9",
    tag: "Freezer Repair"
  },
  {
    id: "gal-06",
    title: "Electrical Diagnostics & Clamp Meter Testing",
    category: "cooler",
    image: tools3_1,
    caption: "Testing current load and circuit breaker connections.",
    aspectRatio: "4:3",
    tag: "Electrical Service"
  },
  {
    id: "gal-07",
    title: "Professional Technician Tool Set & Gear",
    category: "other",
    image: tools1_1,
    caption: "All specialized testing equipment and genuine spare parts.",
    aspectRatio: "1:1",
    tag: "Professional Gear"
  },
  {
    id: "gal-08",
    title: "Modern Split AC Cooling Unit",
    category: "ac",
    image: climaPerfecto,
    caption: "Precision temperature control and cooling system installation.",
    aspectRatio: "16:9",
    tag: "AC Cooling"
  },
  {
    id: "gal-09",
    title: "Inverter Split AC Technical System",
    category: "ac",
    image: ac3_2,
    caption: "Component-level technical diagnosis of inverter AC circuit & compressor.",
    aspectRatio: "4:3",
    tag: "Technical AC"
  },
  {
    id: "gal-10",
    title: "On-Site Master Technician Field Visit",
    category: "other",
    image: sarda,
    caption: "Prompt doorstep arrival with complete equipment for fast on-site repair.",
    aspectRatio: "16:9",
    tag: "Doorstep Service"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-01",
    name: "Rameshwar Prasad Sharma",
    location: "Bhatpar Rani, Deoria",
    rating: 5,
    review: "NK Cooling Corporation serviced my 1.5 ton Split AC that wasn't cooling properly. The technician Nikesh came within 2 hours, washed the unit thoroughly with jet pump, and refilled gas. Cooling is like brand new now!",
    date: "August 2026",
    verified: true,
    serviceUsed: "Split AC Servicing & Gas Refill"
  },
  {
    id: "test-02",
    name: "Sunil Kumar Verma",
    location: "Salempur Market",
    rating: 5,
    review: "My front-load washing machine was making loud spinning noise and stopping midway. NK Cooling technician fixed the drum bearings and motor belt at a very affordable price. Honest and prompt service!",
    date: "July 2026",
    verified: true,
    serviceUsed: "Washing Machine Motor Repair"
  },
  {
    id: "test-03",
    name: "Pooja Devi",
    location: "Lar Town",
    rating: 5,
    review: "Our Kent RO purifier water flow had slowed to drops. They arrived with genuine filter cartridges, replaced the membrane and adjusted TDS level right in front of us. Highly recommended for RO service!",
    date: "July 2026",
    verified: true,
    serviceUsed: "RO Filter Replacement & TDS Fix"
  },
  {
    id: "test-04",
    name: "Anand Gupta",
    location: "Bhatni Junction Area",
    rating: 5,
    review: "Double door refrigerator stopped cooling suddenly during summer. Nikesh examined the compressor relay, fixed the electrical issue on the spot without charging extra unnecessary costs. Very trustworthy!",
    date: "June 2026",
    verified: true,
    serviceUsed: "Refrigerator Cooling Diagnosis"
  },
  {
    id: "test-05",
    name: "Vijay Shankar Singh",
    location: "Bhatpar Rani",
    rating: 5,
    review: "Got my desert cooler motor replaced and honeycomb pads changed before peak summer. Very neat workmanship, polite behavior, and reasonable service charges. Will definitely call them again.",
    date: "May 2026",
    verified: true,
    serviceUsed: "Cooler Motor Replacement"
  }
];

export const FAQS: FAQ[] = [
  {
    id: "faq-01",
    question: "01. What appliances does NK Cooling Corporation service?",
    answer: "NK Cooling Corporation provides expert repair, installation, servicing, and maintenance for Air Conditioners (Split, Window, Cassette, Ductable), RO Water Purifiers, Air Coolers, Refrigerators/Deep Freezers, Washing Machines (Top Load, Front Load, Semi-Automatic), and other major household electrical appliances."
  },
  {
    id: "faq-02",
    question: "02. Which areas do you currently serve?",
    answer: "Our core service coverage includes Bhatpar Rani (Deoria), Salempur, Lar, and Bhatni. We also extend doorstep technician services to nearby surrounding areas like Bihta upon booking request."
  },
  {
    id: "faq-03",
    question: "03. How can I book a technician?",
    answer: "You can easily book a technician by filling out our quick 'Book a Technician' form on the website or by directly clicking the WhatsApp / Call button. Our team confirms your time slot instantly via WhatsApp."
  },
  {
    id: "faq-04",
    question: "04. Can I request a preferred service date or time?",
    answer: "Yes! We offer flexible scheduling to suit your convenience. When filling out the booking form or messaging us on WhatsApp, simply specify your preferred date and time slot, and our technician will coordinate accordingly."
  },
  {
    id: "faq-05",
    question: "05. How can I contact NK Cooling Corporation on WhatsApp?",
    answer: "You can click the floating WhatsApp icon on the bottom right corner of any page or send a message directly to 9919116773. The website generates a pre-filled booking summary for instant messaging."
  },
  {
    id: "faq-06",
    question: "06. Can skilled technicians apply to work with NK Cooling Corporation?",
    answer: "Yes! We are always open to skilled technicians with hands-on experience in AC, RO, Fridge, Washing Machine, or Cooler repair. Visit our 'Work With Us' page to submit your details and apply directly via WhatsApp."
  }
];

export const SERVICE_AREAS: ServiceArea[] = [
  {
    name: "Bhatpar Rani",
    district: "Deoria District",
    tagline: "Primary Headquarter & Rapid Doorstep Service",
    image: ac1_2,
    popularServices: ["Split AC Jet Washing", "RO Filter Replacement", "Fridge Gas Charging", "Washing Machine Drain Repair"],
    isPrimary: true
  },
  {
    name: "Salempur",
    district: "Deoria District",
    tagline: "Complete Appliance Maintenance & Emergency Repair",
    image: ac2_2,
    popularServices: ["Cassette AC AMC", "Cooler Motor Change", "Semi-Auto Washer Service", "Double Door Refrigerator"],
    isPrimary: true
  },
  {
    name: "Lar",
    district: "Deoria District",
    tagline: "Expert Technicians at Your Doorstep",
    image: washing1_1,
    popularServices: ["Front Load Washer PCB Repair", "Window AC Mounting", "Alkaline RO Installation", "Deep Freezer Repair"],
    isPrimary: true
  },
  {
    name: "Bhatni",
    district: "Deoria District",
    tagline: "Prompt Appliance Solutions & Spare Parts",
    image: freezer1_1,
    popularServices: ["AC Gas Leak Detection", "RO Membrane Change", "Cooler Honeycomb Fitting", "Compressor Servicing"],
    isPrimary: true
  }
];

export const TECHNICIANS: TechnicianProfile[] = [
  {
    id: "tech-01",
    name: "Nikesh Kumar",
    role: "Lead AC & Appliance Master Specialist",
    experience: "8+ Years Hands-on Field Experience",
    speciality: "Inverter AC Gas Leak Diagnostics, PCB Circuit Repair, Washing Machine Motors",
    image: sarda,
    bio: "Chief technician and founder of NK Cooling Corporation. Specialized in complex inverter split AC systems, compressor overhauls, and washing machine circuit diagnostics."
  },
  {
    id: "tech-02",
    name: "Rakesh Verma",
    role: "Senior Refrigeration & RO Technician",
    experience: "6+ Years Field Experience",
    speciality: "Deep Freezer Brazing, R600a Gas Refilling, Multi-stage Commercial RO",
    image: gundappa,
    bio: "Expert in commercial refrigeration, cooling gas vacuum refilling, and water purification TDS balancing."
  }
];

export const INITIAL_IMAGE_MANIFEST: ImageManifestItem[] = [
  {
    id: "img-hero",
    category: "hero",
    name: "Hero Technician Banner",
    currentUrl: MOCK_IMAGES.heroTechnician,
    placeholderPath: "/images/profile/sarda.jpg",
    description: "Main lead image showing master technician in safety vest and hardhat."
  },
  {
    id: "img-ac-service",
    category: "services",
    name: "AC Service Visual",
    currentUrl: MOCK_IMAGES.acTechnicianIndoor,
    placeholderPath: "/images/services/ac/ac-01.jpg",
    description: "Split AC indoor & outdoor unit visual."
  },
  {
    id: "img-ro-service",
    category: "services",
    name: "RO Purifier Visual",
    currentUrl: MOCK_IMAGES.roPurifierService,
    placeholderPath: "/images/services/ro/ro-01.jpg",
    description: "Water purifier filter and membrane replacement."
  },
  {
    id: "img-cooler-service",
    category: "services",
    name: "Air Cooler Visual",
    currentUrl: MOCK_IMAGES.coolerService,
    placeholderPath: "/images/services/cooler/cooler-01.jpg",
    description: "Cooler motor and pump servicing."
  },
  {
    id: "img-freezer-service",
    category: "services",
    name: "Refrigerator Visual",
    currentUrl: MOCK_IMAGES.refrigeratorService,
    placeholderPath: "/images/services/freezer/freezer-01.jpg",
    description: "Refrigerator compressor and gas filling."
  },
  {
    id: "img-washing-service",
    category: "services",
    name: "Washing Machine Visual",
    currentUrl: MOCK_IMAGES.washingMachineService,
    placeholderPath: "/images/services/washing-machine/washing-machine-01.jpg",
    description: "Front load washing machine drum and PCB repair."
  }
];
