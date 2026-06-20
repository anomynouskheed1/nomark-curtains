"use client";

import { useState, useEffect } from "react";

const collections = [
    {
        title: "Living Room Collection",
        description:
            "Elegant curtain designs crafted to enhance comfort, style, and sophistication in your living spaces.",
        image: "/images/collections/collection1.jpg",
    },
    {
        title: "Bedroom Collection",
        description:
            "Premium blackout and sheer curtains designed for privacy, comfort, and restful sleep.",
        image: "/images/collections/collection2.jpg",
    },
    {
        title: "Office Collection",
        description:
            "Professional window solutions that create productive and modern work environments.",
        image: "/images/collections/collection3.jpg",
    },
    {
        title: "Hotel Collection",
        description:
            "Luxury hospitality curtain solutions tailored for hotels, apartments, and serviced residences.",
        image: "/images/collections/collection4.jpg",
    },
];

export default function Collections() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) =>
                prev === collections.length - 1 ? 0 : prev + 1
            );
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrent(
            current === collections.length - 1 ? 0 : current + 1
        );
    };

    const prevSlide = () => {
        setCurrent(
            current === 0 ? collections.length - 1 : current - 1
        );
    };

    return (
        <section id="collections" className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-12">

                    <span className="text-[#D4AF37] font-semibold uppercase tracking-widest">
                        Collections
                    </span>

                    <h2 className="text-4xl font-bold text-[#0A1A35] mt-3">
                        Inspired Interior Collections
                    </h2>

                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Explore curtain styles designed for homes, offices,
                        hotels, and modern living spaces.
                    </p>

                </div>

                <div className="relative overflow-hidden rounded-3xl shadow-2xl">

                    {/* IMAGE */}
                    <div className="relative h-[500px] md:h-[650px]">

                        <img
                            src={collections[current].image}
                            alt={collections[current].title}
                            className="w-full h-full object-cover"
                        />

                        {/* OVERLAY */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />

                        {/* CONTENT */}
                        <div className="absolute inset-0 flex items-center">

                            <div className="max-w-xl px-8 md:px-16 text-white">

                                <h3 className="text-3xl md:text-5xl font-bold mb-5">
                                    {collections[current].title}
                                </h3>

                                <p className="text-gray-200 leading-relaxed text-base md:text-lg mb-8">
                                    {collections[current].description}
                                </p>

                                <a
                                    href="#contact"
                                    className="inline-block bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition"
                                >
                                    Explore Collection
                                </a>

                            </div>

                        </div>

                        {/* LEFT */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/90 w-12 h-12 rounded-full text-[#0A1A35] font-bold shadow-lg hover:scale-110 transition"
                        >
                            ←
                        </button>

                        {/* RIGHT */}
                        <button
                            onClick={nextSlide}
                            className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/90 w-12 h-12 rounded-full text-[#0A1A35] font-bold shadow-lg hover:scale-110 transition"
                        >
                            →
                        </button>

                    </div>

                </div>

                {/* DOTS */}
                <div className="flex justify-center gap-3 mt-8">

                    {collections.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`h-3 rounded-full transition-all ${current === index
                                ? "w-10 bg-[#D4AF37]"
                                : "w-3 bg-gray-300"
                                }`}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
}