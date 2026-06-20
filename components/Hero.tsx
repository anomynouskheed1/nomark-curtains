"use client";

import { useEffect, useState } from "react";

export default function Hero() {
    const images = [
        "/images/curtain-hero1.jpg",
        "/images/curtain-hero2.jpg",
        "/images/curtain-hero3.jpg",
    ];

    const [current, setCurrent] = useState(0);

    // Auto slide
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 4000); // change every 4 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden"
        >
            {/* SLIDING BACKGROUND */}
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000`}
                    style={{
                        backgroundImage: `url('${img}')`,
                        opacity: index === current ? 1 : 0,
                    }}
                />
            ))}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

                <div className="max-w-2xl pt-20 lg:pt-0">

                    {/* Badge */}
                    <div className="inline-block mb-5">
                        <span className="bg-[#D4AF37] text-black px-4 py-2 rounded-full text-sm font-semibold">
                            Premium Curtain Solutions Across Kenya
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                        Luxury Curtains
                        <span className="block text-[#D4AF37]">
                            For Every Space
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="mt-6 text-lg text-gray-200 leading-relaxed max-w-xl">
                        Transform your home, office, hotel, or apartment with
                        premium curtain solutions tailored to your style,
                        comfort, and interior design needs.
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-wrap gap-4">

                        <a
                            href="#products"
                            className="bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition"
                        >
                            Explore Collections
                        </a>

                    </div>

                </div>

            </div>
        </section>
    );
}