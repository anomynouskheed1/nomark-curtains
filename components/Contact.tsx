"use client";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-gradient-to-b from-[#071428] to-[#0A1A35] text-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* HEADER */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                        Let’s Design Your Perfect Curtains
                    </h2>

                    <p className="text-gray-300 mt-5 max-w-2xl mx-auto leading-relaxed">
                        Share your space details and we’ll help you choose the perfect curtains,
                        take measurements, and give you a fast quotation via WhatsApp.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-14 items-start">

                    {/* LEFT SIDE */}
                    <div className="space-y-8">

                        <div>
                            <h3 className="text-sm uppercase tracking-widest text-[#D4AF37] mb-4">
                                Contact Information
                            </h3>

                            <div className="space-y-4 text-gray-300">

                                <div className="flex items-start gap-3">
                                    <span className="w-2 h-2 mt-2 bg-[#D4AF37] rounded-full"></span>
                                    <p>Nairobi, Kenya</p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <span className="w-2 h-2 mt-2 bg-[#D4AF37] rounded-full"></span>
                                    <p>0724 174 801</p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <span className="w-2 h-2 mt-2 bg-[#D4AF37] rounded-full"></span>
                                    <a
                                        href="mailto:millionest1999@gmail.com"
                                        className="hover:text-[#D4AF37] transition"
                                    >
                                        millionest1999@gmail.com
                                    </a>
                                </div>

                            </div>
                        </div>

                        <a
                            href="https://wa.me/254724174801"
                            target="_blank"
                            className="inline-flex items-center justify-center bg-[#D4AF37] text-black px-6 py-3 rounded-full font-medium hover:opacity-90 transition shadow-md"
                        >
                            Chat on WhatsApp
                        </a>

                    </div>

                    {/* RIGHT SIDE - FORM */}
                    <div className="bg-white text-black p-8 rounded-3xl shadow-xl">

                        <h3 className="text-lg font-semibold text-[#0A1A35] mb-6">
                            Request a Quote
                        </h3>

                        <div className="space-y-5">

                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#D4AF37] transition"
                            />

                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#D4AF37] transition"
                            />

                            <input
                                type="text"
                                placeholder="Location (e.g. Nairobi, Westlands)"
                                className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#D4AF37] transition"
                            />

                            <textarea
                                placeholder="Describe your curtain style or room..."
                                className="w-full p-3 border border-gray-200 rounded-xl h-32 outline-none focus:ring-2 focus:ring-[#D4AF37] transition"
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    window.open("https://wa.me/254724174801", "_blank")
                                }
                                className="w-full bg-[#D4AF37] text-black py-3 rounded-xl font-semibold hover:scale-[1.02] transition shadow-md"
                            >
                                Send Request via WhatsApp
                            </button>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}