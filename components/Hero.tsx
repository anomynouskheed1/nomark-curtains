export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center text-white pt-20 md:pt-0"
            style={{
                backgroundImage: "url('/images/curtain-hero.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A35]/85 to-[#0A1A35]/60"></div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    Premium Curtains Designed
                    <span className="block text-[#D4AF37]">
                        For Modern Living
                    </span>
                </h1>

                <p className="mt-5 text-base md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
                    We provide premium curtain design, supply, measurement, and professional installation
                    services for homes, offices, hotels, apartments, and commercial spaces across Kenya.
                </p>

                <div className="mt-10">
                    <a
                        href="#contact"
                        className="inline-block bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition"
                    >
                        Get Free Quote
                    </a>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">

                    <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-[#D4AF37]">
                            100+
                        </h3>
                        <p className="text-gray-300 text-sm md:text-base mt-2">
                            Projects Completed
                        </p>
                    </div>

                    <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-[#D4AF37]">
                            5★
                        </h3>
                        <p className="text-gray-300 text-sm md:text-base mt-2">
                            Quality Service
                        </p>
                    </div>

                    <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-[#D4AF37]">
                            24/7
                        </h3>
                        <p className="text-gray-300 text-sm md:text-base mt-2">
                            Customer Support
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}