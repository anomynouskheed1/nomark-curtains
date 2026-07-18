"use client";

import { FiMapPin, FiPhone, FiMail, FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
    return (
        <section
            id="contact"
            className="py-14 bg-[#0A1A35] text-white border-t border-white/5 transition-colors duration-300"
        >
            <div className="max-w-5xl mx-auto px-6">

                {/* ── MINIMAL LUXURY HEADER ── */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-light tracking-wide text-white">
                        Let's Discuss Your Space
                    </h2>
                    <p className="text-white/60 mt-3 max-w-xl mx-auto font-sans font-light text-sm tracking-wide leading-relaxed">
                        Tell us about your space and we'll help you choose the perfect curtain solution.
                    </p>
                    <div className="w-10 h-[1px] bg-[#D4AF37]/40 mx-auto mt-6" />
                </div>

                {/* ── BALANCED TWO-COLUMN VIEWPORT ── */}
                <div className="grid md:grid-cols-12 gap-10 lg:gap-14 items-center">

                    {/* LEFT COLUMN: ARCHITECTURAL CONTACT CARDS */}
                    <div className="md:col-span-5 space-y-6">
                        <div className="grid grid-cols-1 gap-3">

                            {/* Location Card */}
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 shadow-sm">
                                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 text-[#D4AF37]">
                                    <FiMapPin className="text-base" />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-white/40 font-medium">Location</p>
                                    <p className="text-sm font-light text-white/90 mt-0.5">Nairobi, Kenya</p>
                                </div>
                            </div>

                            {/* Phone Card */}
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 shadow-sm">
                                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 text-[#D4AF37]">
                                    <FiPhone className="text-base" />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-white/40 font-medium">Phone</p>
                                    <p className="text-sm font-light text-white/90 mt-0.5 tracking-wide">0724 174 801</p>
                                </div>
                            </div>

                            {/* Email Card */}
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 shadow-sm">
                                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 text-[#D4AF37]">
                                    <FiMail className="text-base" />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-white/40 font-medium">Email</p>
                                    <a
                                        href="mailto:calicawaale280@gmail.com"
                                        className="text-sm font-light text-white/90 mt-0.5 block hover:text-[#D4AF37] transition-colors duration-300"
                                    >
                                        calicawaale280@gmail.com
                                    </a>
                                </div>
                            </div>

                        </div>

                        {/* Refined WhatsApp Button */}
                        <div className="pt-2">
                            <a
                                href="https://wa.me/25421163223"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2.5 border border-white/10 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] px-6 py-3 rounded-xl font-sans text-xs uppercase tracking-wider font-medium transition-all duration-300 w-full md:w-auto"
                            >
                                <FaWhatsapp className="text-sm" />
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: INTEGRATED COMPACT MATTE QUOTE FORM */}
                    <div className="md:col-span-7 bg-white/[0.01] border border-white/10 p-6 md:p-8 rounded-xl shadow-xl backdrop-blur-sm">
                        <h3 className="font-serif font-light text-lg text-white tracking-wide mb-5">
                            Request a Bespoke Quote
                        </h3>

                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full bg-transparent py-2.5 border-b border-white/10 text-white text-sm placeholder-white/30 font-sans font-light tracking-wide outline-none focus:border-[#D4AF37] transition-all duration-300"
                            />

                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="w-full bg-transparent py-2.5 border-b border-white/10 text-white text-sm placeholder-white/30 font-sans font-light tracking-wide outline-none focus:border-[#D4AF37] transition-all duration-300"
                            />

                            <input
                                type="text"
                                placeholder="Location (e.g. Nairobi, Westlands)"
                                className="w-full bg-transparent py-2.5 border-b border-white/10 text-white text-sm placeholder-white/30 font-sans font-light tracking-wide outline-none focus:border-[#D4AF37] transition-all duration-300"
                            />

                            <textarea
                                placeholder="Describe your curtain style or room details..."
                                className="w-full bg-transparent py-2.5 border-b border-white/10 text-white text-sm placeholder-white/30 font-sans font-light tracking-wide h-16 resize-none outline-none focus:border-[#D4AF37] transition-all duration-300"
                            />

                            <div className="pt-3">
                                <button
                                    type="button"
                                    onClick={() => window.open("https://wa.me/25421163223", "_blank")}
                                    className="w-full group flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#c9a227] text-[#0A1A35] py-3 rounded-lg font-semibold tracking-wider text-xs uppercase transition-all duration-300 shadow-md"
                                >
                                    Send Request via WhatsApp
                                    <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300 text-sm" />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}