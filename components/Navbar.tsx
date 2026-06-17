"use client";

import { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">

            <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">

                {/* BRAND */}
                <div className="flex items-center gap-3">

                    <Image
                        src="/images/logo.jpg"
                        alt="Nomark Curtains"
                        width={100}
                        height={100}
                        className="object-contain"
                    />

                    <div className="hidden sm:block leading-tight">
                        <h1 className="text-lg font-bold text-[#0A1A35]">
                            Nomark Curtains
                        </h1>
                        <p className="text-xs text-gray-500">
                            Luxury Curtain Solutions
                        </p>
                    </div>

                </div>

                {/* DESKTOP MENU */}
                <ul className="hidden md:flex gap-8 text-gray-700 font-medium text-sm">

                    <li><a href="#home" className="hover:text-[#D4AF37]">Home</a></li>
                    <li><a href="#services" className="hover:text-[#D4AF37]">Services</a></li>
                    <li><a href="#products" className="hover:text-[#D4AF37]">Products</a></li>
                    <li><a href="#gallery" className="hover:text-[#D4AF37]">Gallery</a></li>
                    <li><a href="#contact" className="hover:text-[#D4AF37]">Contact</a></li>

                </ul>

                {/* MOBILE BUTTON */}
                <button
                    className="md:hidden text-2xl text-[#0A1A35]"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <FaTimes /> : <FaBars />}
                </button>

            </div>

            {/* MOBILE MENU */}
            {open && (
                <div className="md:hidden bg-white px-6 py-4 space-y-4 shadow-md">

                    <a onClick={() => setOpen(false)} href="#home" className="block">Home</a>
                    <a onClick={() => setOpen(false)} href="#services" className="block">Services</a>
                    <a onClick={() => setOpen(false)} href="#products" className="block">Products</a>
                    <a onClick={() => setOpen(false)} href="#gallery" className="block">Gallery</a>
                    <a onClick={() => setOpen(false)} href="#contact" className="block">Contact</a>

                </div>
            )}

        </nav>
    );
}