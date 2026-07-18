"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Shop Curtains", href: "#products" },
    { label: "Collections", href: "#collections" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState("#home");

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock scrolling when mobile navigation is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [open]);

    return (
        <>
            {/* ── MAIN NAVBAR HEADER ── */}
            <header
                className={`fixed top-0 left-0 w-full z-[9999] bg-white text-[#0A1A35] transition-all duration-500 ease-in-out ${scrolled
                    ? "h-20 bg-white/95 backdrop-blur-md shadow-lg shadow-[#0A1A35]/5 border-b border-gray-100"
                    : "h-[90px] border-b border-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto h-full px-6 lg:px-8 relative flex items-center justify-between">

                    {/* Logo Identity */}
                    <div className="flex items-center gap-4 pr-4 z-50">
                        <div className="relative w-11 h-11 transition-transform duration-300 hover:scale-105">
                            <Image
                                src="/images/logo.jpg"
                                alt="Arafat designer Curtains Corporate Badge"
                                fill
                                priority
                                className="object-cover rounded-none"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-serif font-light text-xl tracking-wide uppercase leading-none text-[#0A1A35]">
                                Arafat designer
                            </span>
                            <span className="text-[9px] text-[#D4AF37] tracking-[0.35em] uppercase font-semibold mt-1 block pl-[1px]">
                                Curtains
                            </span>
                        </div>
                    </div>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:flex items-center">
                        <ul className="flex items-center gap-8">
                            {navLinks.map((link) => {
                                const isTarget = activeLink === link.href;
                                return (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            onClick={() => setActiveLink(link.href)}
                                            className={`relative py-2 text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 group ${isTarget ? "text-[#D4AF37]" : "text-[#0A1A35]/70 hover:text-[#D4AF37]"
                                                }`}
                                        >
                                            {link.label}
                                            <span
                                                className={`absolute bottom-0 left-0 h-[1.5px] bg-[#D4AF37] transition-all duration-300 ease-out ${isTarget ? "w-full" : "w-0 group-hover:w-full"
                                                    }`}
                                            />
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* Desktop Socials */}
                    <div className="hidden lg:flex items-center gap-6 pl-4 z-50">
                        <a
                            href="https://www.instagram.com/Arafat designer_curtains"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#0A1A35]/60 hover:text-[#D4AF37] text-sm transition-colors duration-300 p-1"
                            aria-label="Follow Arafat designer Curtains on Instagram"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://www.facebook.com/share/1AjwEq9BmB/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#0A1A35]/60 hover:text-[#D4AF37] text-sm transition-colors duration-300 p-1"
                            aria-label="Follow Arafat designer Curtains on Facebook"
                        >
                            <FaFacebookF />
                        </a>
                    </div>

                    {/* Mobile Toggle Button (Hamburger) */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="lg:hidden z-[10001] flex flex-col justify-center items-center w-8 h-8 gap-[6px] relative focus:outline-none"
                        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
                    >
                        <span
                            className={`w-6 h-[1.5px] bg-[#0A1A35] transition-all duration-300 transform origin-center ${open ? "rotate-45 translate-y-[7.5px]" : ""
                                }`}
                        />
                        <span
                            className={`w-6 h-[1.5px] bg-[#0A1A35] transition-all duration-200 ${open ? "opacity-0 scale-x-0" : "opacity-100"
                                }`}
                        />
                        <span
                            className={`w-6 h-[1.5px] bg-[#0A1A35] transition-all duration-300 transform origin-center ${open ? "-rotate-45 -translate-y-[7.5px]" : ""
                                }`}
                        />
                    </button>

                </div>
            </header>

            {/* ── INDEPENDENT MOBILE OVERLAY PANEL ── */}
            {/* Placed outside <header> to prevent the height-clipping bug */}
            <div
                className={`fixed top-0 right-0 bottom-0 h-screen w-full sm:w-[380px] bg-white border-l border-gray-100 shadow-2xl z-[10000] transition-transform duration-500 ease-in-out lg:hidden flex flex-col justify-between p-8 pt-32 ${open ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Links Container */}
                <nav className="w-full">
                    <ul className="flex flex-col gap-5">
                        {navLinks.map((link) => {
                            const isTarget = activeLink === link.href;
                            return (
                                <li key={`mob-${link.href}`}>
                                    <a
                                        href={link.href}
                                        onClick={() => {
                                            setActiveLink(link.href);
                                            setOpen(false);
                                        }}
                                        className={`block py-1.5 text-sm uppercase tracking-[0.22em] font-light transition-colors duration-300 ${isTarget ? "text-[#D4AF37] font-medium pl-1" : "text-[#0A1A35]/90 hover:text-[#D4AF37]"
                                            }`}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Footer Connections */}
                <div className="pt-6 border-t border-gray-100 flex flex-col gap-4">
                    <span className="text-[9px] text-gray-400 uppercase tracking-[0.25em] font-medium block">
                        Follow Our Innovations
                    </span>
                    <div className="flex items-center gap-6">
                        <a
                            href="https://www.instagram.com/Arafat designer_curtains"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-2.5 text-[11px] uppercase tracking-widest text-[#0A1A35]/70 hover:text-[#D4AF37] transition-colors duration-300"
                        >
                            <FaInstagram className="text-xs" /> Instagram
                        </a>
                        <a
                            href="https://www.facebook.com/share/1AjwEq9BmB/"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-2.5 text-[11px] uppercase tracking-widest text-[#0A1A35]/70 hover:text-[#D4AF37] transition-colors duration-300"
                        >
                            <FaFacebookF className="text-xs" /> Facebook
                        </a>
                    </div>
                </div>
            </div>

            {/* Darkened Screen Shading Background */}
            {open && (
                <div
                    className="fixed inset-0 bg-[#0A1A35]/30 backdrop-blur-xs z-[9998] lg:hidden transition-opacity duration-300"
                    onClick={() => setOpen(false)}
                />
            )}
        </>
    );
}