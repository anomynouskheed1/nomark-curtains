export default function Services() {
    return (
        <section id="services" className="py-20 bg-gray-50">

            <div className="max-w-6xl mx-auto px-6 text-center">

                <h2 className="text-4xl font-bold text-[#0A1A35]">
                    Our Services
                </h2>

                <p className="text-gray-600 mt-3 mb-12">
                    Complete curtain solutions for homes, offices, hotels, and apartments.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* SERVICE 1 */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">

                        <img
                            src="/images/service1.jpg"
                            className="h-56 w-full object-cover"
                            alt="Curtain Design"
                        />

                        <div className="p-5 text-left">
                            <h3 className="text-lg font-semibold text-[#0A1A35]">
                                Custom Curtain Design
                            </h3>
                            <p className="text-gray-600 text-sm mt-2">
                                We design curtains that match your interior style and preference.
                            </p>
                        </div>

                    </div>

                    {/* SERVICE 2 */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">

                        <img
                            src="/images/service2.jpg"
                            className="h-56 w-full object-cover"
                            alt="Installation"
                        />

                        <div className="p-5 text-left">
                            <h3 className="text-lg font-semibold text-[#0A1A35]">
                                Professional Installation
                            </h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Expert curtain installation for homes, offices, and hotels.
                            </p>
                        </div>

                    </div>

                    {/* SERVICE 3 */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">

                        <img
                            src="/images/service3.jpg"
                            className="h-56 w-full object-cover"
                            alt="Motorized Curtains"
                        />

                        <div className="p-5 text-left">
                            <h3 className="text-lg font-semibold text-[#0A1A35]">
                                Motorized Curtains
                            </h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Smart remote-controlled curtain systems for modern homes.
                            </p>
                        </div>

                    </div>

                    {/* SERVICE 4 */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">

                        <img
                            src="/images/service4.jpg"
                            className="h-56 w-full object-cover"
                            alt="Consultation"
                        />

                        <div className="p-5 text-left">
                            <h3 className="text-lg font-semibold text-[#0A1A35]">
                                Interior Consultation
                            </h3>
                            <p className="text-gray-600 text-sm mt-2">
                                We guide you on fabric, design, and best window treatment choices.
                            </p>
                        </div>

                    </div>

                    {/* SERVICE 5 */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">

                        <img
                            src="/images/service5.jpg"
                            className="h-56 w-full object-cover"
                            alt="Curtain Rods"
                        />

                        <div className="p-5 text-left">
                            <h3 className="text-lg font-semibold text-[#0A1A35]">
                                Curtain Rods & Rails
                            </h3>
                            <p className="text-gray-600 text-sm mt-2">
                                High-quality curtain rods and rails for durable installations.
                            </p>
                        </div>

                    </div>

                    {/* SERVICE 6 */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">

                        <img
                            src="/images/service6.jpg"
                            className="h-56 w-full object-cover"
                            alt="Measurement"
                        />

                        <div className="p-5 text-left">
                            <h3 className="text-lg font-semibold text-[#0A1A35]">
                                Site Measurement
                            </h3>
                            <p className="text-gray-600 text-sm mt-2">
                                We visit your location for accurate curtain measurements.
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}