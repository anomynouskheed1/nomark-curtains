"use client";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-[#0A1A35] text-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* HEADER */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold">
                        Get Your Free Quote
                    </h2>

                    <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
                        Contact us for curtain measurements, installation, and pricing. We respond quickly on WhatsApp.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">

                    {/* LEFT SIDE - INFO */}
                    <div className="space-y-6">

                        <h3 className="text-xl font-semibold text-[#D4AF37]">
                            Contact Details
                        </h3>

                        <div className="space-y-3 text-gray-300 text-sm">

                            <p> Nairobi, Kenya</p>

                            <p> 0724 174 801</p>

                            <p className="flex items-center gap-2">

                                <a
                                    href="mailto:millionest1999@gmail.com"
                                    className="hover:text-[#D4AF37] transition underline underline-offset-2"
                                >
                                    millionest1999@gmail.com
                                </a>
                            </p>


                        </div>

                        <a
                            href="https://wa.me/254724174801"
                            target="_blank"
                            className="inline-block mt-4 bg-[#D4AF37] text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
                        >
                            Chat on WhatsApp
                        </a>

                    </div>

                    {/* RIGHT SIDE - FORM */}
                    <div className="bg-white text-black p-6 md:p-8 rounded-2xl shadow-lg">

                        <h3 className="text-lg font-semibold text-[#0A1A35] mb-6">
                            Request a Quote
                        </h3>

                        <div className="space-y-4">

                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-[#D4AF37]"
                            />

                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-[#D4AF37]"
                            />

                            <input
                                type="text"
                                placeholder="Location"
                                className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-[#D4AF37]"
                            />

                            <textarea
                                placeholder="Tell us what you need..."
                                className="w-full p-3 border rounded-lg h-32 outline-none focus:ring-2 focus:ring-[#D4AF37]"
                            ></textarea>

                            <button
                                type="button"
                                onClick={() =>
                                    window.open("https://wa.me/254724174801", "_blank")
                                }
                                className="w-full bg-[#D4AF37] text-black py-3 rounded-lg font-semibold hover:scale-[1.02] transition"
                            >
                                Send via WhatsApp
                            </button>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}