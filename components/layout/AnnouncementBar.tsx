"use client";

import { FaWhatsapp, FaPhoneAlt, FaTruck, FaTools, FaMapMarkerAlt } from "react-icons/fa";

const announcements = [
    { icon: <FaTruck className="text-[#D4AF37]" />, text: "Free Site Measurement" },
    { icon: <FaTools className="text-[#D4AF37]" />, text: "Professional Installation" },
    { icon: <FaMapMarkerAlt className="text-[#D4AF37]" />, text: "Nairobi & Kenya Wide" },
];

export default function AnnouncementBar() {
    return (
        <div className="bg-[#060f20] text-white text-xs border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between gap-4">

                {/* Left — feature pills (desktop) */}
                <div className="hidden md:flex items-center gap-6">
                    {announcements.map((item, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-gray-400">
                            {item.icon}
                            <span className="tracking-wide">{item.text}</span>
                            {i < announcements.length - 1 && (
                                <span className="ml-6 text-white/10 select-none">|</span>
                            )}
                        </div>
                    ))}
                </div>

                {/* Left — short text (mobile) */}
                <p className="md:hidden text-gray-400 tracking-wide">
                    Free Measurement &amp; Installation
                </p>

                {/* Right — CTA group */}
                <div className="flex items-center gap-3 ml-auto shrink-0">

                    <a
                        href="tel:+254724174801"
                        className="hidden sm:flex items-center gap-1.5 text-[#D4AF37] font-semibold hover:text-white transition-colors duration-300"
                    >
                        <FaPhoneAlt className="text-[10px]" />
                        +254 724 174 801
                    </a>

                    <span className="hidden sm:block text-white/10">|</span>



                </div>

            </div>
        </div>
    );
}