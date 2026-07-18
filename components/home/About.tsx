export default function About() {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <span className="text-[#D4AF37] font-semibold uppercase tracking-widest">
                        About Us
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold text-[#0A1A35] mt-3">
                        Crafting Elegant Spaces with Premium Curtains
                    </h2>

                    <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
                        We provide stylish, high-quality curtain solutions that
                        enhance comfort, privacy, and beauty for homes, offices,
                        hotels, apartments, and commercial spaces across Kenya.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-14 items-center">

                    {/* TEXT CONTENT */}
                    <div>

                        <h3 className="text-2xl font-semibold text-[#0A1A35] mb-4">
                            Who We Are
                        </h3>

                        <p className="text-gray-600 leading-relaxed mb-6">
                            Arafat designer Curtains is a trusted curtain company based in Kenya,
                            specializing in premium curtain design, supply,
                            measurement, and professional installation services.
                            We help transform ordinary spaces into elegant,
                            comfortable, and modern environments.
                        </p>

                        <h3 className="text-2xl font-semibold text-[#0A1A35] mb-4">
                            Our Mission
                        </h3>

                        <p className="text-gray-600 leading-relaxed mb-6">
                            To deliver stylish, durable, and affordable curtain
                            solutions while providing exceptional customer
                            service and professional workmanship.
                        </p>

                        <h3 className="text-2xl font-semibold text-[#0A1A35] mb-4">
                            Our Vision
                        </h3>

                        <p className="text-gray-600 leading-relaxed mb-8">
                            To become Kenya’s most trusted curtain and window
                            treatment brand, recognized for quality,
                            innovation, and customer satisfaction.
                        </p>

                        {/* STATS */}
                        <div className="grid grid-cols-3 gap-6 border-t pt-8">

                            <div>
                                <h4 className="text-3xl font-bold text-[#D4AF37]">
                                    100+
                                </h4>
                                <p className="text-gray-600 text-sm mt-1">
                                    Projects Completed
                                </p>
                            </div>

                            <div>
                                <h4 className="text-3xl font-bold text-[#D4AF37]">
                                    100%
                                </h4>
                                <p className="text-gray-600 text-sm mt-1">
                                    Customer Focus
                                </p>
                            </div>

                            <div>
                                <h4 className="text-3xl font-bold text-[#D4AF37]">
                                    24/7
                                </h4>
                                <p className="text-gray-600 text-sm mt-1">
                                    Support
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* IMAGE */}
                    <div className="relative">

                        <div className="overflow-hidden rounded-2xl shadow-2xl">
                            <img
                                src="/images/about.jpg"
                                alt="Arafat designer Curtains"
                                className="w-full h-[500px] object-cover hover:scale-105 transition duration-700"
                            />
                        </div>

                        <div className="absolute -bottom-6 -left-6 bg-white shadow-xl rounded-xl p-6 hidden md:block">
                            <h4 className="font-bold text-[#0A1A35] text-lg">
                                Premium Curtain Solutions
                            </h4>

                            <p className="text-gray-600 text-sm mt-2">
                                Design • Supply • Installation
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}