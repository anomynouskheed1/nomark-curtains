"use client";

import { useState } from "react";
import Image from "next/image";
import {
    FaBars,
    FaTimes,
    FaWhatsapp,
    FaInstagram,
    FaFacebookF,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const closeMenu = () => setOpen(false);

    return (
        <>
            {/* TOP BAR */}
            <div className="bg-black text-white text-xs">
                <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">

                    <p className="hidden md:block">
                        Free Measurements Across Nairobi | Professional Installation | WhatsApp Us Today
                    </p>

                    <p className="md:hidden">
                        Free Measurements & Installation
                    </p>

                    <div className="flex items-center gap-5 text-lg">
                        <FaInstagram className="hover:text-[#D4AF37] transition cursor-pointer" />
                        <FaFacebookF className="hover:text-[#D4AF37] transition cursor-pointer" />
                        <FaWhatsapp className="hover:text-[#D4AF37] transition cursor-pointer" />
                    </div>

                </div>
            </div>

            {/* CONTACT BAR (desktop only) */}
            <div className="hidden lg:block bg-white border-b">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                    <div className="flex items-center gap-4">
                        <Image
                            src="/images/logo.jpg"
                            alt="Nomark Curtains"
                            width={50}
                            height={50}
                            className="rounded"
                        />
                    </div>

                    <div className="flex items-center gap-10 text-sm">

                        <div className="flex items-center gap-3">
                            <FaPhoneAlt className="text-[#D4AF37]" />
                            <div>
                                <p className="font-semibold text-[#0A1A35]">Call Us</p>
                                <p className="text-gray-600">0724 174 801</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaEnvelope className="text-[#D4AF37]" />
                            <div>
                                <p className="font-semibold text-[#0A1A35]">Email</p>
                                <p className="text-gray-600">millionest1999@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaMapMarkerAlt className="text-[#D4AF37]" />
                            <div>
                                <p className="font-semibold text-[#0A1A35]">Service Area</p>
                                <p className="text-gray-600">Nairobi & Across Kenya</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* MAIN NAVBAR */}
            <nav className="sticky top-0 z-50 bg-[#0A1A35] shadow-lg">

                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

                    {/* LOGO (NOW FIXED FOR MOBILE TOO) */}
                    <div className="flex items-center gap-3">
                        <Image
                            src="/images/logo.jpg"
                            alt="Nomark Curtains"
                            width={40}
                            height={40}
                            className="rounded"
                        />

                        <div className="text-white">
                            <h2 className="font-bold text-sm md:text-base">
                                Nomark Curtains
                            </h2>
                            <p className="text-xs text-gray-300 hidden sm:block">
                                Premium Solutions
                            </p>
                        </div>
                    </div>

                    {/* DESKTOP MENU */}
                    <ul className="hidden lg:flex items-center gap-8 text-white text-sm font-medium">
                        <li><a href="#home" className="hover:text-[#D4AF37]">Home</a></li>
                        <li><a href="#products" className="hover:text-[#D4AF37]">Shop Curtains</a></li>
                        <li><a href="#collections" className="hover:text-[#D4AF37]">Collections</a></li>
                        <li><a href="#projects" className="hover:text-[#D4AF37]">Projects</a></li>
                        <li><a href="#about" className="hover:text-[#D4AF37]">About</a></li>
                        <li><a href="#testimonials" className="hover:text-[#D4AF37]">Testimonials</a></li>
                        <li><a href="#contact" className="hover:text-[#D4AF37]">Contact</a></li>
                    </ul>

                    {/* CTA (desktop) */}
                    <div className="hidden lg:block">
                        <a
                            href="https://wa.me/254724174801"
                            className="bg-[#D4AF37] text-black px-5 py-2.5 rounded-lg font-semibold"
                        >
                            Get Free Quote
                        </a>
                    </div>

                    {/* MOBILE BUTTON */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="lg:hidden text-white text-2xl"
                    >
                        {open ? <FaTimes /> : <FaBars />}
                    </button>

                </div>

                {/* MOBILE MENU FIXED */}
                {open && (
                    <div className="lg:hidden bg-[#213b6b] border-t border-gray-700">

                        <div className="px-6 py-6 flex flex-col gap-4 text-white">

                            <a onClick={closeMenu} href="#home" className="py-2">Home</a>
                            <a onClick={closeMenu} href="#products" className="py-2">Shop Curtains</a>
                            <a onClick={closeMenu} href="#collections" className="py-2">Collections</a>
                            <a onClick={closeMenu} href="#projects" className="py-2">Projects</a>
                            <a onClick={closeMenu} href="#about" className="py-2">About Us</a>
                            <a onClick={closeMenu} href="#testimonials" className="py-2">Testimonials</a>
                            <a onClick={closeMenu} href="#contact" className="py-2">Contact</a>

                            <a
                                href="https://wa.me/254724174801"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#D4AF37] text-black text-center py-3 rounded-lg font-semibold mt-3"
                                onClick={closeMenu}
                            >
                                Get Free Quote
                            </a>

                        </div>

                    </div>
                )}

            </nav>
        </>
    );
}