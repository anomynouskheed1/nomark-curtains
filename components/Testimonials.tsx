export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6 text-center">

                <h2 className="text-4xl font-bold text-[#0A1A35] mb-4">
                    What Our Clients Say
                </h2>

                <p className="text-gray-600 mb-14 max-w-2xl mx-auto">
                    Feedback from some of our recent curtain installation clients.
                </p>

                {/* TOP ROW (3) */}
                <div className="grid md:grid-cols-3 gap-8 mb-10">

                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                        <p className="text-gray-600 italic">
                            “The curtains were fitted well and the team came on time. My living room looks much better now.”
                        </p>
                        <h4 className="mt-4 font-semibold text-[#0A1A35]">
                            —
                        </h4>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                        <p className="text-gray-600 italic">
                            “Good service and the material quality was exactly what I ordered. No issues at all.”
                        </p>
                        <h4 className="mt-4 font-semibold text-[#0A1A35]">
                            —
                        </h4>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                        <p className="text-gray-600 italic">
                            “They installed everything quickly and the finish looks very neat. I'm satisfied.”
                        </p>
                        <h4 className="mt-4 font-semibold text-[#0A1A35]">
                            —
                        </h4>
                    </div>

                </div>

                {/* BOTTOM ROW (CENTERED 2) */}
                <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">

                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm flex-1">
                        <p className="text-gray-600 italic">
                            “I liked how they guided me on fabric choice. The result matched my house perfectly.”
                        </p>
                        <h4 className="mt-4 font-semibold text-[#0A1A35]">
                            —
                        </h4>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm flex-1">
                        <p className="text-gray-600 italic">
                            “Affordable pricing and quick installation. I would definitely recommend them.”
                        </p>
                        <h4 className="mt-4 font-semibold text-[#0A1A35]">
                            —
                        </h4>
                    </div>

                </div>

            </div>
        </section>
    );
}