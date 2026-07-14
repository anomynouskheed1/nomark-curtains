"use client";

import { useState, useMemo } from "react";

// --- Enhanced Data Type Model ---
type ProductCollection = {
    id: string;
    title: string;
    description: string;
    category: string; // Map to the exact filter requirements
    badge: string;
    roomType: string;
    colorsCount: number;
    features: string[];
    size: string;
    images: string[];
    fabricInfo?: string;
};

// --- Full 22 Luxury Curated Collections Data Asset Array ---
const COLLECTIONS_DATA: ProductCollection[] = [
    // --- Living Room ---
    {
        id: "lv-01",
        title: "Royal Velvet Blackout Collection",
        description: "Ultra-heavyweight, acoustically insulating velvet tailored for modern statement architecture and deep home cinema light isolation.",
        category: "Living Room",
        badge: "Best Seller",
        roomType: "Living Room & Home Theater",
        colorsCount: 16,
        features: ["100% Light Shield", "Acoustic Dampening", "Thermal Core Layer"],
        size: "Bespoke / Custom Sizes Only",
        fabricInfo: "Triple-weave dense Italian polyester-velvet composite",
        images: [
            "https://m.media-amazon.com/images/I/61m7uAcw0zL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/51Hflxb4msL._AC_US100_.jpg",
            "https://m.media-amazon.com/images/I/419uTTIChAL._AC_US100_.jpg",
            "https://m.media-amazon.com/images/I/71aEDQWDxsL._AC_SX679_.jpg"
        ]
    },
    {
        id: "lv-02",
        title: "Ethereal Belgian Linen Sheers",
        description: "Finely spun organic flax designed to capture daylight gently while filtering out harsh UV glare from premium window layouts.",
        category: "Living Room",
        badge: "Luxury",
        roomType: "Living Room & Lounge Panels",
        colorsCount: 8,
        features: ["Natural Flax Fibers", "Soft Light Diffusion", "Breathable Mesh"],
        size: "Bespoke / Custom Sizes Only",
        fabricInfo: "100% Reticulated Belgian Flax Linen Premium Grade",
        images: [
            "https://i.etsystatic.com/45329974/r/il/0b16ff/6345599429/il_1588xN.6345599429_5wvc.jpg",
            "https://i.etsystatic.com/45329974/r/il/43cd43/6345599607/il_1588xN.6345599607_5hj5.jpg",
            "https://i.etsystatic.com/45329974/r/il/ea9368/6345599705/il_1588xN.6345599705_piz1.jpg",
            "https://i.etsystatic.com/45329974/r/il/7a4ea3/6345599925/il_1588xN.6345599925_a6na.jpg"
        ]
    },
    {
        id: "lv-03",
        title: "Architectural S-Wave Continuous Drapery",
        description: "Precision-spaced ceiling track profiles that flow into continuous symmetric ripples, creating an elegant minimalist rhythm.",
        category: "Living Room",
        badge: "Editor's Pick",
        roomType: "Living Room & Floor-to-Ceiling Windows",
        colorsCount: 12,
        features: ["Continuous Ripple Folding", "Symmetric Profile", "Hidden Track Compatibility"],
        size: "Bespoke / Custom Sizes Only",
        fabricInfo: "Structured heavy-drape silk-viscose geometric blend",
        images: [
            "https://blindconcepts.co.za/wp-content/uploads/2024/11/Double-wave-sand-IMG_0113-HDR-768x768.jpg",
            "https://blindconcepts.co.za/wp-content/uploads/2024/11/Double-wave-sand-IMG_0122-HDR-150x150.jpg",
            "https://blindconcepts.co.za/wp-content/uploads/2024/11/Double-wave-sand-IMG_0125-HDR-150x150.jpg",
            "https://blindconcepts.co.za/wp-content/uploads/2024/11/Double-wave-sand-IMG_5801-HDR-150x150.jpg"
        ]
    },
    // --- Bedroom ---
    {
        id: "bd-01",
        title: "Sanctuary Double-Layer Blackout Duo",
        description: "An integrated dual-axis track pairing a dense total-darkness shield behind an outer layer of semi-translucent styling yarn.",
        category: "Bedroom",
        badge: "Exclusive",
        roomType: "Master Bedroom Suites",
        colorsCount: 22,
        features: ["Independent Dual Gliding", "Complete Circadian Isolation", "Layered Aesthetics"],
        size: "Bespoke / Custom Sizes Only",
        fabricInfo: "Dual-faced blackout core fused with soft combed yarn",
        images: [
            "https://m.media-amazon.com/images/I/81JBN7qSztL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/81816gwPsdL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/81EgdOCPYwL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/41Yrhn5M7IL._SS100_.jpg"
        ]
    },
    {
        id: "bd-02",
        title: "Satin Eyelet Modern Drapery",
        description: "Polished heavy metallic eyelets inset by hand into crisp, deep-pleat premium cotton panels for smooth, reliable daily use.",
        category: "Bedroom",
        badge: "Trending",
        roomType: "Guest Rooms & Apartments",
        colorsCount: 14,
        features: ["Reinforced Eyelet Rings", "Crisp Regular Folds", "Smooth Rod Gliding"],
        size: "Bespoke / Custom Sizes Only",
        fabricInfo: "Mercerized heavy Egyptian cotton weave",
        images: [
            "https://m.media-amazon.com/images/I/71cFboLiFDL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/611ifPBk+tL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/61v18Y6I44L._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/61DJfn9npsL._AC_SX679_.jpg"
        ]
    },
    // --- Office ---
    {
        id: "of-01",
        title: "Executive Thermal Roller Blinds",
        description: "Engineered solar-reflective window treatments cut down digital screen glare while maintaining thermal control in workspaces.",
        category: "Office",
        badge: "Office Collection",
        roomType: "Boardrooms & Executive Suites",
        colorsCount: 6,
        features: ["Anti-Glare Fabrication", "Fire-Retardant Certified", "Wipe-Clean Face"],
        size: "Custom Sized Lengths",
        fabricInfo: "Fiberglass core faced with reflective polymer shielding",
        images: [
            "https://sunguard.nz/wp-content/uploads/2020/03/20191018_115710-1536x1152.jpg",
            "https://sunguard.nz/wp-content/uploads/2023/06/Thermal-page-Vale-1536x1033.jpg",
            "https://jasradiantblinds.co.ke/wp-content/uploads/2026/04/RIL_17_X_Black_Sheer_roller_Blinds_2c5874c4e8-2-600x433.webp"
        ]
    },
    {
        id: "of-02",
        title: "Linear Architectural Vertical Blinds",
        description: "Precision-weighted vertical layout slats that adjust light tracking accurately across wide commercial panoramas.",
        category: "Office",
        badge: "Custom Made",
        roomType: "Corporate Workspaces & Open Areas",
        colorsCount: 9,
        features: ["180° Directional Sweep", "Slim Stacking Footprint", "Weighted Foot Paths"],
        size: "Bespoke Width Layouts",
        fabricInfo: "Stain-resistant dust-repellent structural synthetic slats",
        images: [
            "https://img.edilportale.com/product-thumbs/b_Panel-curtain-Saxun-637142-rele69bec33.jpg",
            "https://img.edilportale.com/product-thumbs/b_Panel-curtain-Saxun-637142-relef566099.jpgp"
        ]
    },
    {
        id: "of-03",
        title: "Precision Dual-Shade Zebra Blinds",
        description: "Alternating sheer and solid fabric bands loop over dual drums to provide customizable privacy control with a simple adjustment.",
        category: "Office",
        badge: "Trending",
        roomType: "Private Home Offices & Studios",
        colorsCount: 11,
        features: ["Tandem Alignment Control", "High-Definition Striping", "Compact Header Cassette"],
        size: "Custom Fit Architecture",
        fabricInfo: "Electrostatic woven technical polyester",
        images: [
            "https://s.alicdn.com/@sc04/kf/H7a81fc397bfb4f02b65e9aa0927188e58.jpg?avif=close&webp=close",
            "https://s.alicdn.com/@sc04/kf/He6ef7301d28240d49292511957300943M.jpg?avif=close&webp=close",
            "https://s.alicdn.com/@sc04/kf/Hbf62eda420234e3a816e4d19baed895eV.png?avif=close&webp=close"
        ]
    },
    // --- Hotel ---
    {
        id: "ht-01",
        title: "The Ritz curtains",
        description: "Heavyweight luxury drapery meeting international safety codes, optimized for high ceilings and luxury guest suites.",
        category: "Hotel",
        badge: "Hotel Collection",
        roomType: "Grand Ballrooms & Penthouse Suites",
        colorsCount: 18,
        features: ["M1 Flame Retardant Base", "Maximum Noise Suppression", "Deep Spill-Pleat Hems"],
        size: "Bespoke Commercial Heights",
        fabricInfo: "Inherently Flame Retardant (IFR) Elite Velour Velvet",
        images: [
            "https://s.alicdn.com/@sc04/kf/H10e0690b3647438d8939f85ce52a68fei.png_300x300.jpg",
            "https://s.alicdn.com/@sc04/kf/Hffc54b929b8f4dcdb3adffd7afe6b1f0z.png_300x300.jpg",
            "https://s.alicdn.com/@sc04/kf/H01b6dab255914776a9f730d3da1ad929l.png_300x300.jpg"
        ]
    },
    {
        id: "ht-02",
        title: "Boutique Slubbed Silk Draperies",
        description: "Richly textured raw silk yarn panels that catch lateral highlighting to create deep visual tone variance.",
        category: "Hotel",
        badge: "New Arrival",
        roomType: "Boutique Lobbies & Dining Rooms",
        colorsCount: 10,
        features: ["Organic Slub Texturing", "Gold Filigree Tailoring", "Interlined Full Pockets"],
        size: "Bespoke Custom Build",
        fabricInfo: "Interlined organic natural silk backing matrix",
        images: [
            "https://www.thepurpletree.in/cdn/shop/files/CURTAIN00021_4x7_Velvet.jpg?v=1712317309&width=713",
            "https://www.thepurpletree.in/cdn/shop/files/CURTAIN00021_4x7_Velvet_3.jpg?v=1712317309&width=713",
            "https://www.thepurpletree.in/cdn/shop/files/CURTAIN00021_4x7_Velvet_4.jpg?v=1712317309&width=713"
        ]
    },
    // --- Smart Curtains ---
    {
        id: "sm-01",
        title: " Smart Motorized Track System",
        description: "Ultra-quiet internal automated motors integrated into Apple HomeKit, automated scheduling, and remote phone control configurations.",
        category: "Smart Curtains",
        badge: "Limited Edition",
        roomType: "Smart Homes & Multi-Tier Atriums",
        colorsCount: 8,
        features: ["Whisper-Drive Motor Matrix", "Voice & App Smart Sync", "Manual Pull Override"],
        size: "Tracks Extensible up to 12m",
        fabricInfo: "Compatible with all Nomark Premium Drapery Weights",
        images: [
            "https://s.alicdn.com/@sc04/kf/H06290eb84de742019ee9c95932cbc2d5X.jpg_300x300.jpg",
            "https://s.alicdn.com/@sc04/kf/Hed92c1fda61446dfa45f60737144d58dI.jpg_300x300.jpg",
            "https://homesmart.sg/wp-content/uploads/2021/12/Aqara-Smart-Curtain-Controller.jpg"
        ]
    },
    {
        id: "sm-02",
        title: "Arbitrary shape strong curtain Tie tiebacks a pair",
        description: "Standalone light-intensity sensor tracking units that reposition curtain paths intelligently based on real-time solar glare levels.",
        category: "Smart Curtains",
        badge: "Exclusive",
        roomType: "Penthouses & High-Exposure Glass Facades",
        colorsCount: 4,
        features: ["Solar Cell Power Matrix", "Automated Lux Sensing", "Schedules Overhaul Config"],
        size: "Custom Sized Assemblies",
        fabricInfo: "Heavy anodized structural tracks with built-in channels",
        images: [
            "https://www.homeluxkenya.com/cdn/shop/files/1bc70995-1315-494d-ad0f-1e0f4df4c114.jpg?v=1719224804&width=800",
            "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/11/0269223/1.jpg?5637",
            "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/11/0269223/4.jpg?5637"
        ]
    },
    // --- Accessories ---
    {
        id: "ac-01",
        title: "modern- iron rods and headers",
        description: "Solid rods mounting tracks turned by master carpenters and treated with matte oils for organic interior configurations.",
        category: "Accessories",
        badge: "Custom Made",
        roomType: "Rustic Estates & Modern Farmhouses",
        colorsCount: 5,
        features: ["Solid Oak & Walnut Blocks", "Hand-Polished Textures", "Heavy Weight Tolerance"],
        size: "Diameters 35mm - 50mm Custom Lengths",
        fabricInfo: "Agrade sustainably sourced architectural timber",
        images: [
            "https://s.alicdn.com/@sc04/kf/H33e50df1e9e84088b224553de30325fes.jpg_300x300.jpg",
            "https://s.alicdn.com/@sc04/kf/H452974090cea444881a3b93d3d254fc6O.jpg_300x300.jpg",
            "https://s.alicdn.com/@sc04/kf/Hf13ce52a619b4ccaa85e70a81e06cc37m.jpg_300x300.jpg"
        ]
    },
    {
        id: "ac-02",
        title: "Brushed Brands rods",
        description: "Solid brass curtain hardware sealed against tarnishing, paired with minimalist geometric end caps for high-end styling.",
        category: "Accessories",
        badge: "Luxury",
        roomType: "High-End Modern Dining & Bedrooms",
        colorsCount: 6,
        features: ["Anti-Tarnish Protective Shield", "Interchangeable End Caps", "Heavy Wall-Fix Anchors"],
        size: "Custom Wall Length Extensions",
        fabricInfo: "Machine-forged marine-grade solid brass components",
        images: [
            "https://s.alicdn.com/@sc04/kf/H40b53d757f7d4039ae640e9c4130145cM.png_300x300.jpg",
            "https://s.alicdn.com/@sc04/kf/H1b10b8d2e428422784925ac3cda7cac4Q.jpg_300x300.jpg",
            "https://s.alicdn.com/@sc04/kf/H1106ba24890448d98c93ce6968d8a297y.jpg_300x300.jpg",
            "https://m.media-amazon.com/images/I/81zWfoSvwRL._AC_SY300_SX300_QL70_FMwebp_.jpg",
            "https://m.media-amazon.com/images/I/716qcypJ4zL._AC_SX679_.jpg"
        ]
    },
    {
        id: "ac-03",
        title: "Braided Silk Curtain Tiebacks",
        description: "Heavyweight structural trim accessories finished with dense tassels, designed to hold back formal drapery arrangements cleanly.",
        category: "Accessories",
        badge: "Limited Edition",
        roomType: "Formal Salons & Historic Residences",
        colorsCount: 12,
        features: ["Hand-Braided Cordage", "Heavy Weighted Core Tassels", "Scratches-Free Soft Loops"],
        size: "Standard 85cm Loop Spans",
        fabricInfo: "Pure filament mulberry silk core overlays",
        images: [
            "https://luvlyhouseholdcollections.co.ke/wp-content/uploads/2025/09/3.1-1.png",
            "https://luvlyhouseholdcollections.co.ke/wp-content/uploads/2025/09/3.2-1.png",
            "https://luvlyhouseholdcollections.co.ke/wp-content/uploads/2025/09/3.3-1.png",
            "https://i.ebayimg.com/images/g/DNsAAeSwRldqGK4T/s-l1600.webp",
            "https://i.ebayimg.com/images/g/okgAAeSwlRRqGK4R/s-l1600.webp",
            "https://i.ebayimg.com/images/g/oogAAeSwvfRqGK4R/s-l1600.webp"
        ]
    },

    // --- Living Spaces ---
    {
        id: "cm-01",
        title: "Minimalist Architectural Voile",
        description: "Ultra-clear sheer panels engineered to diffuse bright daylight softly across modern, open-concept living spaces.",
        category: "Living Room",
        badge: "Exclusive",
        roomType: "Sunrooms & Double-Height Living Areas",
        colorsCount: 6,
        features: ["Natural Daylight Diffusion", "Anti-Crease Weighted Hem", "Invisible Top-Track Seams"],
        size: "Custom Floor-to-Ceiling Drop",
        fabricInfo: "Premium fine-spun synthetic linen weave",
        images: [
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop", // Bright minimal living room with floor curtains
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop"  // Minimalist open plan interior
        ]
    },
    {
        id: "cm-02",
        title: "Tailored Belgian Linen Drapery",
        description: "Heavy, organic textured linen drapes designed to bring structural warmth and relaxed luxury to main lounge areas.",
        category: "Living Room",
        badge: "Best Seller",
        roomType: "Formal Lounges & Sitting Rooms",
        colorsCount: 14,
        features: ["Heavy Tailored Puddle Slump", "Breathable Organic Weave", "Reinforced Pinch Pleat Headings"],
        size: "Bespoke Residential Spans",
        fabricInfo: "100% Authentic washed Belgian flax linen",
        images: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop", // Elegant architectural interior lounge
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop"  // Warm neutral living room setup
        ]
    },

    // --- Bedroom Sanctuary ---
    {
        id: "od-03",
        title: "Bespoke Midnight Blackout Matrix",
        description: "Three-layer insulated thermal drapery built to completely eliminate exterior light leakages for optimal sleep hygiene.",
        category: "Bedroom",
        badge: "Luxury",
        roomType: "Master Suites & Primary Bedrooms",
        colorsCount: 9,
        features: ["100% True Light Blockout", "Acoustic Noise Dampening", "Thermal Insulation Core"],
        size: "Custom Window & Wall Fits",
        fabricInfo: "Triple-weave dense blackout performance yarn",
        images: [
            "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop", // Luxury cozy bedroom with long drapery
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop"  // Modern dark aesthetic bedroom interior
        ]
    },

    // --- Dining & Entertainment ---
    {
        id: "od-01",
        title: "Epicurean Velvet Dining Drape",
        description: "Opulent matte velvet wall treatments that absorb structural echoes, perfect for setting an intimate dining ambiance.",
        category: "Dining Room",
        badge: "Premium",
        roomType: "Formal Dining Rooms & Wine Lounges",
        colorsCount: 11,
        features: ["Echo & Acoustic Absorption", "Rich Matte Lustre Finish", "Deep Structural Pleat Retention"],
        size: "Custom Ceiling Mount Tracks",
        fabricInfo: "High-density heavy architectural cotton velvet",
        images: [
            "https://images.unsplash.com/photo-1617806118233-18e1db207f62?q=80&w=800&auto=format&fit=crop", // Elegant dining table setup near large windows
            "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop"  // Premium interior dining lounge
        ]
    },
    {
        id: "od-01",
        title: "Cinematic Home Theatre Portiere",
        description: "Ultra-heavy drapery constructed specifically to damp echo, enrich bass acoustics, and isolate total darkness in home cinemas.",
        category: "Entertainment",
        badge: "Pro Collection",
        roomType: "Media Rooms & Private Home Theatres",
        colorsCount: 5,
        features: ["NRC 0.85 Certified Sound Control", "Zero-Reflection Matte Finish", "Heavyweight Drape Fold Core"],
        size: "Bespoke Media Enclosures",
        fabricInfo: "Multi-layered acoustic micro-weave structural fibers",
        images: [
            "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop", // Cozy mood-lit entertainment lounge
            "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?q=80&w=800&auto=format&fit=crop"  // Luxurious dark lounge interior
        ]
    }
];

const CATEGORIES = ["All", "Living Room", "Bedroom", "Office", "Hotel", "Smart Curtains", "Accessories"];

export default function ShopCurtains() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [visibleCount, setVisibleCount] = useState(6);
    const [selectedProduct, setSelectedProduct] = useState<ProductCollection | null>(null);

    // Client-side quick filter calculation
    const filteredProducts = useMemo(() => {
        if (selectedCategory === "All") return COLLECTIONS_DATA;
        return COLLECTIONS_DATA.filter((item) => item.category === selectedCategory);
    }, [selectedCategory]);

    // Pagination crop
    const displayedProducts = useMemo(() => {
        return filteredProducts.slice(0, visibleCount);
    }, [filteredProducts, visibleCount]);

    // Dynamically break items into three columns to form an authentic asymmetry masonry grid
    const masonryColumns = useMemo(() => {
        const col1: ProductCollection[] = [];
        const col2: ProductCollection[] = [];
        const col3: ProductCollection[] = [];

        displayedProducts.forEach((item, index) => {
            if (index % 3 === 0) col1.push(item);
            else if (index % 3 === 1) col2.push(item);
            else col3.push(item);
        });

        return { col1, col2, col3 };
    }, [displayedProducts]);

    return (
        <section id="products" className="py-32 bg-[#FDFDFD] text-[#0A1A35] antialiased selection:bg-[#D4AF37]/20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* --- Premium Section Header --- */}
                <div className="text-center mb-20 max-w-3xl mx-auto flex flex-col items-center">
                    <span className="text-[#D4AF37] text-xs sm:text-sm font-medium uppercase tracking-[0.3em] block animate-fade-in">
                        Nomark Showroom
                    </span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#0A1A35] mt-4 tracking-tight leading-tight">
                        Premium Curtain Collections
                    </h2>
                    <div className="w-20 h-[1px] bg-[#D4AF37] my-8" />
                    <p className="text-gray-500 font-light text-base sm:text-lg leading-relaxed max-w-2xl">
                        Discover elegant curtain designs for homes, apartments, offices, hotels, restaurants, and commercial spaces. Custom tailored to your exact architectural layout.
                    </p>
                </div>

                {/* --- Smooth Animated Category Pill Filter Bar --- */}
                <div className="flex justify-center mb-24">
                    <div className="flex items-center gap-2 overflow-x-auto pb-4 pt-1 px-4 max-w-full scrollbar-none no-scrollbar snap-x">
                        {CATEGORIES.map((cat) => {
                            const isTarget = selectedCategory === cat;
                            return (
                                <button
                                    key={cat}
                                    onClick={() => {
                                        setSelectedCategory(cat);
                                        setVisibleCount(6); // Reset display threshold upon changing filters
                                    }}
                                    className={`snap-center px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 border whitespace-nowrap ${isTarget
                                        ? "bg-[#0A1A35] border-[#0A1A35] text-white shadow-xl shadow-[#0A1A35]/10"
                                        : "bg-white border-gray-200 text-gray-500 hover:text-[#0A1A35] hover:border-[#D4AF37]"
                                        }`}
                                >
                                    {cat}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* --- Showroom Grid Layout (Asymmetric Column Flow) --- */}
                {displayedProducts.length === 0 ? (
                    <div className="text-center py-24 text-gray-400 font-light tracking-wide border border-dashed border-gray-100 rounded-xl">
                        No premium collections found in this category.
                    </div>
                ) : (
                    <div>
                        {/* Desktop True Masonry Columns (Eliminates broken cards across rows) */}
                        <div className="hidden lg:grid grid-cols-3 gap-10 items-start">
                            <div className="flex flex-col gap-10">
                                {masonryColumns.col1.map((item) => (
                                    <ProductCard key={item.id} product={item} onView={() => setSelectedProduct(item)} />
                                ))}
                            </div>
                            {/* Vertical stagger column offset */}
                            <div className="flex flex-col gap-10 pt-14">
                                {masonryColumns.col2.map((item) => (
                                    <ProductCard key={item.id} product={item} onView={() => setSelectedProduct(item)} />
                                ))}
                            </div>
                            <div className="flex flex-col gap-10">
                                {masonryColumns.col3.map((item) => (
                                    <ProductCard key={item.id} product={item} onView={() => setSelectedProduct(item)} />
                                ))}
                            </div>
                        </div>

                        {/* Responsive Fallback Layouts (Tablet & Mobile viewports) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-8">
                            {displayedProducts.map((item) => (
                                <ProductCard key={`mob-${item.id}`} product={item} onView={() => setSelectedProduct(item)} />
                            ))}
                        </div>
                    </div>
                )}

                {/* --- "View More Collections" Smooth Append Anchor Button --- */}
                {filteredProducts.length > visibleCount && (
                    <div className="flex justify-center mt-24">
                        <button
                            onClick={() => setVisibleCount((prev) => prev + 6)}
                            className="group relative px-12 py-4 border border-[#0A1A35] text-xs sm:text-sm tracking-[0.25em] uppercase font-semibold text-[#0A1A35] overflow-hidden transition-all duration-500 hover:text-white"
                        >
                            <span className="absolute inset-0 w-0 bg-[#0A1A35] transition-all duration-500 ease-out group-hover:w-full -z-10" />
                            View More Collections
                        </button>
                    </div>
                )}
            </div>

            {/* --- Immersive Details Lightbox Modal --- */}
            {selectedProduct && (
                <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
            )}
        </section>
    );
}

// --- Redesigned Luxury Product Card Component ---
function ProductCard({ product, onView }: { product: ProductCollection; onView: () => void }) {
    const [coverImg, setCoverImg] = useState(product.images[0]);

    // Alternates baseline layout height definitions across individual component properties dynamically
    const dynamicCanvasHeight = useMemo(() => {
        const stringSum = product.title.length + product.id.charCodeAt(3);
        return stringSum % 2 === 0 ? "h-[440px]" : "h-[350px]";
    }, [product.title, product.id]);

    return (
        <div className="group relative bg-white border border-gray-100 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-[#D4AF37] hover:shadow-2xl hover:shadow-[#0A1A35]/5 animate-fade-in">

            {/* Immersive Photo Canvas Top Block */}
            <div className="relative overflow-hidden w-full bg-gray-50">
                <div className={`w-full ${dynamicCanvasHeight} overflow-hidden relative`}>
                    <img
                        src={coverImg}
                        alt={product.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                    />
                    {/* Subtle Premium Dark Vignette Reveal */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A35]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Floating Custom Badge */}
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs text-[#0A1A35] border border-gray-100 px-3 py-1 uppercase text-[10px] tracking-widest font-semibold">
                    {product.badge}
                </span>

                {/* Dynamic Micro-Interactive Thumbnail Swapping Bar */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black/20 backdrop-blur-md p-1.5 rounded-sm opacity-90 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 z-20">
                    {product.images.slice(0, 3).map((img, index) => (
                        <button
                            key={index}
                            onClick={(e) => {
                                e.stopPropagation();
                                setCoverImg(img);
                            }}
                            className={`w-10 h-10 border rounded-xs overflow-hidden transition-all duration-300 ${coverImg === img ? "border-[#D4AF37] scale-105" : "border-white/30 hover:border-white"
                                }`}
                        >
                            <img src={img} alt="" className="w-full h-full object-cover" />
                        </button>
                    ))}
                </div>
            </div>

            {/* Structured Text Metadata Info Content Block */}
            <div className="p-6 flex-1 flex flex-col justify-between bg-white z-10 relative">
                <div>
                    <div className="flex items-center justify-between text-[11px] text-[#D4AF37] tracking-wider uppercase font-medium mb-2.5">
                        <span>{product.roomType}</span>
                        <span className="text-gray-400 font-light lowercase">
                            {product.colorsCount} tones available
                        </span>
                    </div>

                    <h3 className="text-xl font-serif font-light text-[#0A1A35] tracking-tight group-hover:translate-y-[-2px] transition-transform duration-300">
                        {product.title}
                    </h3>

                    <p className="text-gray-400 font-light text-sm mt-2 line-clamp-2 leading-relaxed">
                        {product.description}
                    </p>

                    {/* Premium Feature Checklist Grid */}
                    <div className="grid grid-cols-1 gap-1.5 mt-5 border-t border-gray-50 pt-4 text-[11px] sm:text-xs text-gray-500 font-light">
                        <div className="flex items-center gap-2">
                            <span className="text-[#D4AF37]">✓</span> Custom Sizes Available
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-[#D4AF37]">✓</span> Premium Curated Fabric
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-[#D4AF37]">✓</span> Professional Installation
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-[#D4AF37]">✓</span> Free Site Measurement
                        </div>
                    </div>
                </div>

                {/* Refined Secondary Exploration Button Action Trigger */}
                <button
                    onClick={onView}
                    className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between text-xs tracking-[0.2em] uppercase font-semibold text-[#0A1A35] group/btn transition-colors duration-300 hover:text-[#D4AF37]"
                >
                    <span>Explore Collection</span>
                    <span className="transform translate-x-0 group-hover/btn:translate-x-2 transition-transform duration-300 text-sm">
                        →
                    </span>
                </button>
            </div>
        </div>
    );
}

// --- Luxury Showroom Detail Modal Window Overlay ---
function ProductModal({ product, onClose }: { product: ProductCollection; onClose: () => void }) {
    const [displayImg, setDisplayImg] = useState(product.images[0]);
    const currentIdx = product.images.indexOf(displayImg);

    return (
        <div className="fixed inset-0 bg-[#0A1A35]/60 backdrop-blur-md z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-10 transition-opacity duration-500 animate-fade-in">

            {/* Overlay Backshield dismiss anchor */}
            <div className="absolute inset-0" onClick={onClose} />

            <div className="bg-white max-w-6xl w-full max-h-[92vh] lg:max-h-[85vh] overflow-y-auto relative shadow-2xl z-10 animate-scale-up grid lg:grid-cols-12 rounded-none">

                {/* Absolute Exit Control Anchor cross toggle */}
                <button
                    onClick={onClose}
                    className="absolute right-6 top-6 text-gray-400 hover:text-[#0A1A35] transition-colors duration-300 z-50 p-2 text-xl font-light"
                    aria-label="Dismiss Modal"
                >
                    ✕
                </button>

                {/* --- LEFT CANVAS SIDE: High-Definition Asset Gallery System --- */}
                <div className="lg:col-span-7 bg-gray-50 p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-gray-100 min-h-[360px] sm:min-h-[480px] lg:h-full">
                    <div className="relative flex-1 flex items-center justify-center overflow-hidden">
                        <img
                            src={displayImg}
                            alt={product.title}
                            className="w-full h-[300px] sm:h-[400px] lg:h-[480px] object-cover transition-all duration-500 ease-in-out"
                        />

                        {/* Absolute Counter Index Tag */}
                        <span className="absolute bottom-4 right-4 bg-[#0A1A35] text-white font-mono text-[10px] tracking-widest px-3 py-1">
                            {currentIdx + 1} / {product.images.length}
                        </span>
                    </div>

                    {/* Asset Thumb Control Grid Strip */}
                    <div className="grid grid-cols-4 gap-3 mt-4">
                        {product.images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setDisplayImg(img)}
                                className={`transition-all duration-300 border p-0.5 ${displayImg === img ? "border-[#D4AF37] scale-[1.01]" : "border-gray-200 hover:border-gray-400"
                                    }`}
                            >
                                <img src={img} alt="" className="w-full h-16 sm:h-20 object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* --- RIGHT INFO SIDE: Editorial Layout Configuration Panels --- */}
                <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between h-full">
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="bg-[#D4AF37]/10 text-[#D4AF37] px-3 py-1 uppercase text-[9px] tracking-[0.2em] font-bold">
                                {product.badge}
                            </span>
                            <span className="text-gray-400 text-xs font-light tracking-wide">
                                {product.category} Showroom Catalog
                            </span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-serif font-light text-[#0A1A35] mt-4 tracking-tight leading-tight">
                            {product.title}
                        </h2>

                        <p className="text-gray-500 text-sm font-light leading-relaxed mt-4">
                            {product.description}
                        </p>

                        {/* Technical Attribute Lists */}
                        <div className="mt-8 border-t border-b border-gray-100 py-6 space-y-4">
                            <div className="grid grid-cols-2 gap-4 text-xs tracking-wide">
                                <div>
                                    <span className="block text-gray-400 uppercase text-[9px] font-medium tracking-wider">Dimensioning</span>
                                    <span className="text-[#0A1A35] font-medium mt-0.5 block">{product.size}</span>
                                </div>
                                <div>
                                    <span className="block text-gray-400 uppercase text-[9px] font-medium tracking-wider">Colorways Spectrum</span>
                                    <span className="text-[#0A1A35] font-medium mt-0.5 block">{product.colorsCount} Luxury Palette Shades</span>
                                </div>
                            </div>

                            {product.fabricInfo && (
                                <div className="pt-2">
                                    <span className="block text-gray-400 uppercase text-[9px] font-medium tracking-wider">Fabric Profile</span>
                                    <span className="text-gray-700 text-xs font-light mt-0.5 block">{product.fabricInfo}</span>
                                </div>
                            )}

                            <div className="space-y-2 pt-2">
                                <span className="block text-gray-400 uppercase text-[9px] font-medium tracking-wider">Premium Attributes</span>
                                <div className="flex flex-wrap gap-1.5">
                                    {product.features.map((feat, index) => (
                                        <span key={index} className="bg-gray-50 text-gray-600 border border-gray-100 px-2.5 py-1 text-[11px] font-light">
                                            ✦ {feat}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-1.5 text-xs text-gray-500 font-light pt-2">
                                <div className="flex items-center gap-2">
                                    <span className="text-[#D4AF37] font-bold">✓</span> Free designer site measurement & consultation
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[#D4AF37] font-bold">✓</span> Professional white-glove track installation included
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[#D4AF37] font-bold">✓</span> Tailored recommendations for: <span className="font-medium text-[#0A1A35]">{product.roomType}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Interactive Trigger Systems Area (Preserves target links intact) */}
                    <div className="mt-8 space-y-3">
                        <a
                            href={`https://wa.me/254724174801?text=${encodeURIComponent(
                                `Hello Nomark Curtains, I am exploring your digital showroom collection and would love to get a premium quote for the "${product.title}" (${product.badge}). Please share availability for a custom site measurement.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-full bg-[#D4AF37] text-black font-semibold uppercase tracking-[0.15em] text-xs py-4 transition-all duration-300 hover:bg-[#c49f27] text-center shadow-lg shadow-[#D4AF37]/10"
                        >
                            Request Quote on WhatsApp
                        </a>

                        <div className="grid grid-cols-2 gap-3">
                            <a
                                href="tel:+254724174801"
                                className="flex items-center justify-center border border-[#0A1A35] text-[#0A1A35] font-semibold uppercase tracking-wider text-[11px] py-3.5 hover:bg-[#0A1A35] hover:text-white transition-all duration-300 text-center"
                            >
                                Call Design Desk
                            </a>
                            <button
                                onClick={onClose}
                                className="border border-gray-200 text-gray-400 font-medium uppercase tracking-wider text-[11px] py-3.5 hover:border-gray-400 hover:text-gray-600 transition-all duration-300 text-center"
                            >
                                Back to Showroom
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}