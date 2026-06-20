import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-16 pb-8">
            <div className="max-w-6xl mx-auto px-6">

                {/* Top Grid */}
                <div className="grid md:grid-cols-4 gap-10">

                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Nomarc Curtains</h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            We design and install premium curtains for homes, hotels, and offices.
                            Elegant, affordable, and built for comfort.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><Link href="#hero">Home</Link></li>
                            <li><Link href="#shop">Shop Curtains</Link></li>
                            <li><Link href="#collections">Collections</Link></li>
                            <li><Link href="#projects">Projects</Link></li>
                            <li><Link href="#contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Services</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>Curtain Installation</li>
                            <li>Custom Designs</li>
                            <li>Home Styling</li>
                            <li>Hotel & Office Curtains</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <p className="text-gray-400 text-sm">
                            Nairobi, Kenya
                        </p>
                        <p className="text-gray-400 text-sm mt-2">
                            +254 700 000 000
                        </p>
                        <p className="text-gray-400 text-sm mt-2">
                            nomarccurtains@gmail.com
                        </p>

                        {/* WhatsApp CTA */}
                        <a
                            href="https://wa.me/254700000000"
                            target="_blank"
                            className="inline-block mt-4 px-4 py-2 bg-green-500 text-white rounded-lg text-sm hover:bg-green-600 transition"
                        >
                            Chat on WhatsApp
                        </a>
                    </div>

                </div>

                {/* Bottom Line */}
                <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} Nomarc Curtains. All rights reserved.
                </div>

            </div>
        </footer>
    );
}