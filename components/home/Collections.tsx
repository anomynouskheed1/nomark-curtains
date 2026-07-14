"use client";

import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const collections = [
    {
        title: "Living Room Collection",
        description: "Elegant curtain designs crafted to enhance comfort, style, and sophistication in your living spaces.",
        image: "/images/collections/collection1.jpg",
    },
    {
        title: "Bedroom Collection",
        description: "Premium blackout and sheer curtains designed for privacy, comfort, and restful sleep.",
        image: "/images/collections/collection2.jpg",
    },
    {
        title: "Office Collection",
        description: "Professional window solutions that create productive and modern work environments.",
        image: "/images/collections/collection3.jpg",
    },
    {
        title: "Hotel Collection",
        description: "Luxury hospitality curtain solutions tailored for hotels, apartments, and serviced residences.",
        image: "/images/collections/collection4.jpg",
    },
];

export default function Collections() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === collections.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrent(current === collections.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? collections.length - 1 : current - 1);
    };

    return (
        <section id="collections" className="py-16 bg-white text-[#0A1A35]">
            <div className="max-w-5xl mx-auto px-6">

                {/* ── MINIMALIST HEADER ── */}
                <div className="text-center mb-10">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block mb-2">
                        Collections
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif font-light tracking-wide text-[#0A1A35]">
                        Inspired Spaces
                    </h2>
                    <p className="text-[#0A1A35]/60 mt-2.5 max-w-md mx-auto font-sans font-light text-sm tracking-wide leading-relaxed">
                        Explore our curtain collections designed for homes, apartments, offices and hotels.
                    </p>
                </div>

                {/* ── SHOWROOM SLIDER CONTAINER ── */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-black/5 bg-[#0A1A35]">

                    {/* VIEWPORT DEPTH HEIGHTS */}
                    <div className="relative h-[340px] sm:h-[380px] md:h-[480px] w-full">

                        {/* SLIDES MAP WITH SMOOTH FADE & DELICATE ZOOM */}
                        {collections.map((slide, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                                    }`}
                            >
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className={`w-full h-full object-cover transition-transform duration-[5000ms] ease-out ${index === current ? "scale-105" : "scale-100"
                                        }`}
                                />

                                {/* SUBTLE NAVY BRAND OVERLAY LAYER */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A35]/80 via-[#0A1A35]/30 to-[#0A1A35]/15" />

                                {/* CENTRE-LEFT EDITORIAL TYPOGRAPHY CARD */}
                                <div className="absolute inset-0 flex items-end">
                                    <div className="w-full max-w-xl p-6 sm:p-10 md:p-12 text-white space-y-2">
                                        <h3 className="text-xl md:text-2xl font-serif font-light tracking-wide">
                                            {slide.title}
                                        </h3>
                                        <p className="text-white/70 font-sans font-light text-xs md:text-sm tracking-wide leading-relaxed max-w-md line-clamp-2">
                                            {slide.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* INTEGRATED SLIDER ARROWS (SLIGHTLY INTERNAL) */}
                        <button
                            onClick={prevSlide}
                            aria-label="Previous Slide"
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-[#0A1A35]/40 backdrop-blur-sm border border-white/10 text-white hover:bg-[#D4AF37] hover:text-[#0A1A35] hover:border-[#D4AF37] transition-all duration-300 outline-none"
                        >
                            <FiChevronLeft className="text-lg" />
                        </button>

                        <button
                            onClick={nextSlide}
                            aria-label="Next Slide"
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-[#0A1A35]/40 backdrop-blur-sm border border-white/10 text-white hover:bg-[#D4AF37] hover:text-[#0A1A35] hover:border-[#D4AF37] transition-all duration-300 outline-none"
                        >
                            <FiChevronRight className="text-lg" />
                        </button>

                    </div>
                </div>

                {/* ── DOTS TRANSITION TRACKER ── */}
                <div className="flex justify-center gap-2 mt-6">
                    {collections.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            aria-label={`Go to slide ${index + 1}`}
                            className={`h-1.5 rounded-full transition-all duration-500 ease-out outline-none ${current === index
                                    ? "w-8 bg-[#D4AF37]"
                                    : "w-1.5 bg-[#0A1A35]/15 hover:bg-[#0A1A35]/30"
                                }`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}