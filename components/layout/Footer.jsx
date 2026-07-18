"use client";

import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#0A1A35] text-white pt-16 pb-8 border-t border-white/5 font-sans">
            <div className="max-w-6xl mx-auto px-6">

                {/* ── THREE-COLUMN PREMIUM GRID ── */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start text-center md:text-left">

                    {/* COLUMN 1: BRAND ARCHETYPE */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-serif font-light tracking-wide text-white">
                            Nomark  Curtains
                        </h2>
                        <p className="text-white/60 text-xs md:text-sm font-light tracking-wide leading-relaxed max-w-sm mx-auto md:mx-0">
                            Elegant custom curtains crafted for homes, apartments, offices and hotels across Kenya.
                            Designed to bring comfort, privacy and timeless style.
                        </p>
                    </div>

                    {/* COLUMN 2: MINIMALIST NAVIGATION */}
                    <div className="space-y-4">
                        <h3 className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                            Navigation
                        </h3>
                        <ul className="grid grid-cols-2 md:grid-cols-1 gap-2.5 text-xs md:text-sm font-light tracking-wide text-white/70 max-w-xs mx-auto md:mx-0">
                            <li>
                                <Link href="#hero" className="hover:text-[#D4AF37] transition-colors duration-300">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="#shop" className="hover:text-[#D4AF37] transition-colors duration-300">
                                    Shop Curtains
                                </Link>
                            </li>
                            <li>
                                <Link href="#collections" className="hover:text-[#D4AF37] transition-colors duration-300">
                                    Collections
                                </Link>
                            </li>
                            <li>
                                <Link href="#projects" className="hover:text-[#D4AF37] transition-colors duration-300">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="#about" className="hover:text-[#D4AF37] transition-colors duration-300">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="hover:text-[#D4AF37] transition-colors duration-300">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* COLUMN 3: REFINED STUDIO CONTACT & SOCIALS */}
                    <div className="space-y-6">
                        <div className="space-y-3">
                            <h3 className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                                FIND US ON
                            </h3>
                            <div className="text-xs md:text-sm font-light tracking-wide text-white/70 space-y-1.5">
                                <p>Eastleigh-Nairobi, Kenya</p>
                                <p className="tracking-widest">0724 174 801</p>
                                <a
                                    href="mailto:Nomark curtains@gmail.com"
                                    className="block hover:text-[#D4AF37] transition-colors duration-300"
                                >
                                    calicawaale280@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Premium Sized Social Profiles with Names */}
                        <div className="space-y-2.5 pt-1">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center md:justify-start gap-3 text-white/60 hover:text-[#D4AF37] transition-colors duration-300 text-xs md:text-sm font-light tracking-wide group"
                            >
                                <FaInstagram className="text-base text-white/40 group-hover:text-[#D4AF37] transition-colors duration-300" />
                                <span>Instagram</span>
                            </a>

                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center md:justify-start gap-3 text-white/60 hover:text-[#D4AF37] transition-colors duration-300 text-xs md:text-sm font-light tracking-wide group"
                            >
                                <FaFacebook className="text-base text-white/40 group-hover:text-[#D4AF37] transition-colors duration-300" />
                                <span>Facebook</span>
                            </a>
                        </div>
                    </div>

                </div>

                {/* ── BOTTOM SECTION: EDITORIAL DIVIDER & COPYRIGHT ── */}
                <div className="border-t border-white/5 mt-16 pt-8">
                    <p className="text-center text-[11px] font-light tracking-widest text-white/40">
                        &copy; 2026 Nomark  Curtains. All Rights Reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
}