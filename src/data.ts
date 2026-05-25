/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Property, Project, Testimonial, ProcessStep, ServiceItem } from './types';

export const FOUNDER_INFO = {
  name: "Nitin Kesarkar",
  title: "Founder & Managing Director",
  role: "Chief Property Advisory Specialist",
  experienceYears: 15,
  foundedYear: 2011,
  tagline: "Uncompromising integrity, profound local intelligence.",
  bio: "With over 15 years of transaction and advisory leadership, Nitin Kesarkar has established himself as Kolhapur’s principal private property consultant. Through Nitin Kesarkar & Associates, founded in 2011, he directs elite real estate portfolios across Residential, Commercial, and Industrial sectors with a signature transparent, hassle-free execution model.",
  associations: [
    { name: "NAR India (National Association of Realtors)", role: "Governing Member, West Zone" },
    { name: "Kolhapur Realtors Welfare Association", role: "Active Executive Committee" }
  ],
  portrait: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&h=800&q=80",
  signature: "Nitin Kesarkar"
};

export const INSTANT_STATS = [
  { value: "14+", label: "Years of Advisory Legacy" },
  { value: "500+", label: "Million Transactional Volume" },
  { value: "450+", label: "Elite Families Served" },
  { value: "98%", label: "Client Equity Retention Rate" }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "residential",
    iconName: "Home",
    title: "Residential Asset Advisory",
    description: "End-to-end consulting for high-end villas, sky duplexes, and premium residential land acquisitions across Kolhapur's prime quarters.",
    features: ["Bespoke Villa Acquisitions", "Penthouse Portfolio Advisory", "Elite Gated Communities", "Legal Clear Title Assurance"]
  },
  {
    id: "commercial",
    iconName: "Briefcase",
    title: "Commercial & Corporate Real Estate",
    description: "Structuring transactions for premium Grade-A corporate offices, retail showrooms, luxury coworking hubs, and land with commercial zoning.",
    features: ["Grade-A Workspace Leasing", "High-Yield Retail Properties", "Commercial Land Sourcing", "ROI Matrix Planning"]
  },
  {
    id: "industrial",
    iconName: "Flame",
    title: "Industrial & Logistical Frameworks",
    description: "Specialized advisory for setting up state-of-the-art manufacturing modules, heavy industrial units, and logistics parks in MIDC zones.",
    features: ["MIDC Plot Allocation Support", "Turnkey Warehouse Sourcing", "Industrial Clearance Legalities", "Compliance and Tax Advisory"]
  },
  {
    id: "buying",
    iconName: "Search",
    title: "Exclusive Buying Assistance",
    description: "Sovereign advocacy and advisory representation representing the buyer's interests to source exclusive off-market estate assets.",
    features: ["Off-Market Deal Sourcing", "Strict Confidential Protocols", "Rigorous Asset Due Diligence", "Aggressive Price Sifting"]
  },
  {
    id: "selling",
    iconName: "TrendingUp",
    title: "Elite Selling & Marketing Representation",
    description: "Premium global exposure, cinematic marketing presentation, and targeted outreach to high-net-worth buyers.",
    features: ["Cinematic Visual Asset Production", "Targeted Private Outreach", "Accurate Valuation Matrix", "Absolute Transaction Comfort"]
  },
  {
    id: "investment",
    iconName: "Award",
    title: "Strategic Wealth & Property Intelligence",
    description: "Deep analytics-driven property investment advisory focusing on capital appreciation, inflation hedge, and recurring yields.",
    features: ["Inflation-Adjusted Yield Modeling", "Macro Market Trend Forecasting", "Exit Strategy Structuring", "Land Assembly Planning"]
  }
];

export const PROPERTIES_DATA: Property[] = [
  {
    id: "prop-1",
    title: "The Sovereign Duplexes",
    category: "residential",
    price: "₹3.8 Cr - ₹5.5 Cr",
    location: "Tarabai Park, Kolhapur",
    beds: 4,
    baths: 4.5,
    sqft: "4,600 Sq. Ft.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    features: ["Floor-to-ceiling glass layout", "Private sky terrace pool", "Specialized Italian marble finishes", "Dedicated triple car garage"],
    tag: "Exclusive Mandate",
    description: "An architectural wonder in Kolhapur's most prestigious residential enclave. Featuring grand high-ceiling lounges and double-height custom ventilation."
  },
  {
    id: "prop-2",
    title: "Krystal Heights Penthouse",
    category: "residential",
    price: "₹4.5 Cr onwards",
    location: "Nagalapark, Kolhapur",
    beds: 5,
    baths: 6,
    sqft: "5,800 Sq. Ft.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    features: ["360° panoramic city vistas", "Direct private elevator access", "Ultra high-end automation", "Private chef kitchen wing"],
    tag: "Newly Listed",
    description: "An absolute crowning jewel of Nagalapark. Occupying the entire top floor, the penthouse offers unparalleled privacy and expansive vistas of the Panchganga valley."
  },
  {
    id: "prop-3",
    title: "The Oakridge Sanctuary Villas",
    category: "residential",
    price: "₹6.2 Cr onwards",
    location: "Kasaba Bawada Road, Kolhapur",
    beds: 5,
    baths: 5,
    sqft: "6,500 Sq. Ft. Plot",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    features: ["Private landscaped lawns", "Smart climate control architecture", "Elite secure gated perimeter", "Clubhouse lifestyle access"],
    tag: "Limited Reserve",
    description: "A private cluster of super luxury bespoke villas surrounded by mature trees. Designed with minimal, brutalist luxury architecture framing warm Indian woods."
  },
  {
    id: "prop-4",
    title: "Krystal Plaza Grade-A Corporate Suites",
    category: "commercial",
    price: "₹1.8 Cr onwards",
    location: "Nagalapark, Kolhapur",
    sqft: "2,400 to 8,500 Sq. Ft.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    features: ["Sleek double-height lobby", "High capacity high-speed elevators", "Compliance with international fire protocols", "Substantial multi-level parking lot"],
    tag: "Pre-Leased Options Available",
    description: "Nagalapark's landmark commercial workspace. Ideal for multinational regional offices, legal headquarters, and elite consultancies seeking a prestigious business address."
  },
  {
    id: "prop-5",
    title: "Royal Sovereign Retail Avenue",
    category: "commercial",
    price: "₹3.5 Cr - ₹8.2 Cr",
    location: "Rajarampuri Main Road, Kolhapur",
    sqft: "3,200 Sq. Ft. Ground Floor",
    image: "https://bengalshristi.com/wp-content/uploads/2025/07/790X560-A.webp",
    features: ["Massive central double-height glass frontage", "Unmatched high-footfall corner location", "Direct loading bays at rear", "Highly visible exterior branding space"],
    tag: "Hot Investment",
    description: "An unbelievable commercial retail asset situated directly in the heart of Rajarampuri's supreme shopping high-deck. High rental yields guaranteed."
  },
  {
    id: "prop-6",
    title: "Shiroli Aerospace & Logistics Park",
    category: "industrial",
    price: "₹11.5 Cr onwards",
    location: "Shiroli MIDC, Kolhapur",
    sqft: "35,000 Sq. Ft. Built-up",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    features: ["Reinforced FM2 heavy grade flat floors", "12m clear heights for high racking", "Robust heavy-duty power (500 KVA ready)", "Dedicated multi-axle carrier terminal docks"],
    tag: "Licensed Industrial Zone",
    description: "A modern compliant heavy-industry manufacturing and logistics terminal in the prestigious Shiroli MIDC cluster, featuring quick highway access."
  },
  {
    id: "prop-7",
    title: "Gokul High-Capacity Polymer Unit",
    category: "industrial",
    price: "Price on Request",
    location: "Gokul Shirgaon MIDC, Kolhapur",
    sqft: "1.5 Acres Land Area",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    features: ["Pre-engineered structural steel shade", "Pollution-certified operations area", "Dedicated high pressure water lines", "Compliant overhead crane gantries"],
    tag: "Special Advisory Option",
    description: "An ideal turnkey, fully documented and legally clear industrial facility in the Gokul Shirgaon zone. Meticulously audited for quick setup."
  },
  {
    id: "prop-8",
    title: "The Emerald Crest Country Lot",
    category: "residential",
    price: "₹1.4 Cr onwards",
    location: "Shahuwadi, Kolhapur",
    sqft: "44,000 Sq. Ft. Greenfield",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    features: ["100% legal agricultural clearance", "Direct perimeter fencing built", "Dedicated water stream passage", "Perfect for private organic estates"],
    tag: "Acreage Lot",
    description: "A gorgeous, green rolling countryside estate ideal for family organic farmhouses or high-yielding plantation holds. Complete independent road access ensured."
  },
  {
    id: "prop-9",
    title: "The Royal Majestic Glass Pavilion",
    category: "commercial",
    price: "₹5.2 Cr onwards",
    location: "Tarabai Park, Kolhapur",
    sqft: "4,500 Sq. Ft.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    features: ["Ultra-premium glass facade corner", "Direct structural steel framing", "High visibility commercial zoning", "Dedicated parking slots for 8 cars"],
    tag: "Strategic Spot",
    description: "A breathtaking high-visibility corner showroom asset in Tarabai Park. Perfectly engineered for high-end luxury showrooms, designer jewelry franchises, or flagship private banking hubs."
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "proj-1",
    title: "The Krystal Square Complex",
    category: "commercial",
    location: "Nagalapark, Kolhapur",
    status: "Completed",
    year: 2022,
    description: "Successfully assembled land, cleared disputed family titles, designed state-of-the-art office spaces, and facilitated leasing for Nitin Kesarkar’s head consultancy alongside flagship brands.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Facilitated 100% legal clearance", "Premium interior and exterior glazing", "Houses high-profile boutique law firms", "4th Floor Corporate Headquarters"]
  },
  {
    id: "proj-2",
    title: "The Imperial Sanctuary Gardens",
    category: "residential",
    location: "Nagalapark, Kolhapur",
    status: "Completed",
    year: 2024,
    description: "Architectural advisory and portfolio management for 24 ultra-exclusive luxury sky duplexes, setting a brand-new benchmark for residential square-foot pricing in Southern Maharashtra.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Sourced high-ticket NRI buyers", "Structured developer-customer legalities", "No post-handover snags reported", "100% complete digital compliance"]
  },
  {
    id: "proj-3",
    title: "Heritage Estates Residences",
    category: "residential",
    location: "Tarabai Park, Kolhapur",
    status: "Completed",
    year: 2021,
    description: "Acted as elite transactional representative for a premium, multi-generational heritage parcel. Structured a joint venture with a premium architecture firm to deliver high-end residences.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Clean Title Deeds since 1950", "Delivered luxury modular spaces", "Private landscaping designs", "Facilitated easy municipal handovers"]
  },
  {
    id: "proj-4",
    title: "Shiroli Tech Manufacturing Hub",
    category: "industrial",
    location: "Shiroli MIDC, Kolhapur",
    status: "Active Advisory",
    year: 2025,
    description: "Currently advising and structuring the physical property assembly, high-tension power setup, and legal clearances for a German-Indian joint venture precision tooling plant.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Assembling adjacent plots", "Arranging specialized chemical zoning", "Tax-efficient industrial holding setup", "Targeted handover: Dec 2026"]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Strict Editorial Consultation",
    description: "We initiate with a confidential, distraction-free meeting to understand your physical requirements, cash flows, and capital preservation thresholds.",
    details: ["A complete NDA-enforced confidentiality protocol", "Personalized risk and growth profile mapping", "Definition of primary spatial and geological constraints"]
  },
  {
    number: "02",
    title: "Profound Requirement Analysis",
    description: "Our intelligence team isolates matching properties, utilizing deep on-field local records, municipal archives, and hidden pocket listings.",
    details: ["No standard platform generic searching", "Rigorous check of micro-market pricing benchmarks", "Verification of absolute physical viability"]
  },
  {
    number: "03",
    title: "Private Curated Property Board",
    description: "You receive a beautifully sorted, print-ready portfolio of clear-titled options with full cash-flow analytics and legal sheets.",
    details: ["Accurate actual photos (no creative lens tricks)", "Absolute full disclosure of any property caveat", "Comprehensive comparative value matrix analysis"]
  },
  {
    number: "04",
    title: "Elite Site Visit Assistance",
    description: "Experience the properties at your extreme comfort in private executive vehicles, with our senior property experts handling all site operations.",
    details: ["Arranged around your private schedule", "Transparent interactions with previous landowners", "Deep engineering and layout review during walks"]
  },
  {
    number: "05",
    title: "Documentation & Legal Guardianship",
    description: "We lead the critical legal check, title tracing back 30 years, municipal sanction verify, stamp duty planning, and aggressive pricing negotiation.",
    details: ["Vetted by legal consultants representing your interests", "Maximum emphasis on transparent tax frameworks", "Facilitated zero-black-money direct transactions"]
  },
  {
    number: "06",
    title: "Successful Closure & Post-Care",
    description: "A professional handover with completely streamlined keys, municipal tax record shifts, power board updates, and continuing advisory support.",
    details: ["Smooth digital transfer of registration certificates", "Assistance in hiring luxury structural architects", "Lifetime real estate wealth portfolio advice"]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t-1",
    name: "Mr. Rajendra J. Patil",
    role: "Chairman & Managing Director",
    location: "Patil Heavy Engineering Group",
    text: "Nitin Kesarkar is a rarity in the Indian real estate landscape. His uncompromising stance on 100% legal clarity and clean title verification saved our firm from multiple contested inheritance disputes. He facilitated our corporate headquarters transaction in Nagalapark with absolute precision.",
    rating: 5
  },
  {
    id: "t-2",
    name: "Dr. Sneha Rajadnye",
    role: "Chief Interventional Cardiologist",
    location: "Sterling Heart Institute",
    text: "As a busy healthcare professional, I needed an advisor, not a typical nagging agent. Nitin meticulously handled every detail of my Tarabai Park penthouse acquisition. His documentation process was so streamlined, transparent, and flawless, I signed the registries without a single worry.",
    rating: 5
  },
  {
    id: "t-3",
    name: "Mr. Rajesh G. Shah",
    role: "Co-Founder & VP Operations",
    location: "Shah Polymers and Gaskets",
    text: "Our industrial expansion required complex MIDC clearances, heavy environmental certification, and massive HT electricity permissions. Nitin's deep-rooted on-ground knowledge of Shiroli & Gokul Shirgaon MIDC regulations made our 1.8-acre plot acquisition and licensing completely painless.",
    rating: 5
  },
  {
    id: "t-4",
    name: "Adv. Milind S. Deshpande",
    role: "Senior Counsel",
    location: "Maharashtra High Court Bench",
    text: "Having audited real estate titles for three decades, I was deeply impressed by Nitin Kesarkar’s standard of due diligence. He refuses to list properties that carry even minor legal uncertainties. Recommended for anyone who prioritizes peaceful ownership over shortcut bargains.",
    rating: 5
  }
];

export const WHY_CHOOSE_US_DATA = [
  {
    title: "100% Verified Legal Records",
    description: "Every listed asset undergoes an independent 30-year physical title trace and municipal approval audit before receiving our advisory match."
  },
  {
    title: "Profound Local Intelligence",
    description: "Unparalleled on-ground intelligence in Kolhapur city's prime zones since 2011, providing off-market asset networks inaccessible to outside agencies."
  },
  {
    title: "Absolute Price Accountability",
    description: "Zero inflated pricing traps or hidden brokerage markups. Absolute transparent spreadsheet-level transaction cost breakups are provided."
  },
  {
    title: "Exclusive Client Representation",
    description: "We run a boutique, limited-client advisory. You receive dedicated attention from of Nitin Kesarkar himself, rather than standard junior agents."
  },
  {
    title: "Regulatory Legal Vetting",
    description: "Active NAR India networks and local real estate committees guarantee professional mediation abiding strictly by code specifications."
  },
  {
    title: "Sovereign Confidential Wealth Protection",
    description: "Maximum transaction privacy for high-net-worth customers, industrialists, and families. No public fanfare or social leakage."
  }
];
