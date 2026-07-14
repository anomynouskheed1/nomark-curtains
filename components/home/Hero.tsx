"use client";

import { useEffect, useState } from "react";

const slides = [
    {
        image: "/images/curtain-hero1.jpg",
        heading: "Welcome to Nomark Curtains",
        subtext: "Elegant window décor crafted to transform every space into something beautiful.",
    },
    {
        image: "/images/curtain-hero2.jpg",
        heading: "Experience Comfort, Style & Elegance",
        subtext: "Custom curtain solutions for homes, offices, apartments and hotels.",
    },
    {
        image: "/images/curtain-hero3.jpg",
        heading: "We're Always Here for You",
        subtext: "Reach out anytime—we're ready to help you create the perfect space.",
    },
];

export default function Hero() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        // Elegant automatic rotation loop changing every 6 seconds
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="home"
            className="relative w-full h-screen min-h-screen flex items-center justify-center bg-[#0A1A35] overflow-hidden select-none"
        >
            {/* ── PREMIUM BACKGROUND MATRIX WITH SLOW CINEMATIC ZOOM ── */}
            {slides.map((slide, i) => {
                const isActive = i === current;
                return (
                    <div
                        key={i}
                        className={`absolute inset-0 bg-cover bg-center transition-all duration-[2500ms] ease-out ${isActive ? "opacity-100 scale-105 pointer-events-auto" : "opacity-0 scale-100 pointer-events-none"
                            }`}
                        style={{
                            backgroundImage: `url('${slide.image}')`,
                        }}
                    />
                );
            })}

            {/* ── LUXURY BRAND NAVY OVERLAY (#0A1A35) ── */}
            <div className="absolute inset-0 bg-[#0A1A35]/55 mix-blend-multiply transition-opacity duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A1A35]/40 via-transparent to-[#0A1A35]/30" />

            {/* ── SYMMETRICAL STRUCTURED CONTENT VIEWPORT ── */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex items-center justify-center h-full w-full">
                {slides.map((slide, i) => {
                    const isActive = i === current;
                    return (
                        <div
                            key={`text-${i}`}
                            className={`absolute flex flex-col items-center justify-center transition-all duration-[1200ms] ease-out ${isActive
                                    ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                                    : "opacity-0 translate-y-4 scale-95 pointer-events-none"
                                }`}
                        >
                            {/* Main Elegant Heading on Top */}
                            <h1 className="font-serif font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-wide max-w-4xl leading-[1.25]">
                                {slide.heading}
                            </h1>

                            {/* Elegant Supporting Paragraph Below with Slanted/Italic Style */}
                            <p className="mt-6 sm:mt-8 font-serif italic font-light text-base sm:text-lg md:text-xl text-white/85 tracking-wide max-w-2xl leading-relaxed px-4">
                                {slide.subtext}
                            </p>
                        </div>
                    );
                })}
            </div>

            {/* ── MINIMAL TIMELINE INDICATORS ── */}
            <div className="absolute bottom-12 left-0 right-0 z-20 flex items-center justify-center gap-3">
                {slides.map((_, i) => (
                    <div
                        key={`dot-${i}`}
                        className={`h-[1.5px] transition-all duration-700 ease-in-out ${i === current ? "w-8 bg-[#D4AF37]" : "w-3 bg-white/20"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}