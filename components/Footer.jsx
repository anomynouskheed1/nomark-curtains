export default function Footer() {
    return (
        <footer className="bg-[#0A1A35] text-white py-14">
            <div className="max-w-4xl mx-auto px-6 text-center">

                {/* BRAND */}
                <h2 className="text-2xl font-bold text-[#D4AF37]">
                    Nomark Curtains
                </h2>

                <p className="text-gray-300 mt-4 text-sm leading-relaxed max-w-xl mx-auto">
                    Premium curtain design, supply, measurement, and installation services across Kenya.
                </p>

                {/* FOLLOW TITLE */}
                <h3 className="mt-10 text-sm uppercase tracking-widest text-gray-400">
                    Follow Us
                </h3>

                {/* LINKS */}
                <div className="mt-4 flex justify-center gap-10 text-base font-semibold">

                    <a
                        href="https://www.instagram.com/nomark_curtains"
                        target="_blank"
                        className="text-gray-200 hover:text-[#D4AF37] transition hover:scale-105"
                    >
                        Instagram
                    </a>

                    <a
                        href="https://www.facebook.com/share/1AjwEq9BmB/"
                        target="_blank"
                        className="text-gray-200 hover:text-[#D4AF37] transition hover:scale-105"
                    >
                        Facebook
                    </a>

                </div>

            </div>

            {/* BOTTOM BAR */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
                © {new Date().getFullYear()} Nomark Curtains. All rights reserved.
            </div>
        </footer>
    );
}