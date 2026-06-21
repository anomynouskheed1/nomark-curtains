"use client";

import { useState } from "react";

export default function ShopCurtains() {
    const [selectedProduct, setSelectedProduct] = useState<any>(null);

    const products = [
        {
            title: "Luxury Blackout Curtains",
            description:
                "Premium blackout curtains designed for privacy, comfort, and complete light control.",
            size: "Custom Sizes Available",
            images: [
                "/images/products/set1-1.jpg",
                "/images/products/set1-2.jpg",
                "/images/products/set1-3.jpg",
                "/images/products/set1-4.jpg",
            ],
        },
        {
            title: "Premium Sheer Curtains",
            description:
                "Elegant sheer curtains that allow natural light while maintaining privacy.",
            size: "Custom Sizes Available",
            images: [
                "/images/products/set2-1.jpg",
                "/images/products/set2-2.jpg",
                "/images/products/set2-3.jpg",
                "/images/products/set2-4.jpg",
            ],
        },
        {
            title: "Double Layer Curtains",
            description:
                "A perfect combination of blackout and sheer curtains for maximum flexibility.",
            size: "Custom Sizes Available",
            images: [
                "/images/products/set3-1.jpg",
                "/images/products/set3-2.jpg",
                "/images/products/set3-3.jpg",
                "/images/products/set3-4.jpg",
            ],
        },
        {
            title: "Wave Curtains",
            description:
                "Modern wave-style curtains that create a luxurious and elegant finish.",
            size: "Custom Sizes Available",
            images: [
                "/images/products/set4-1.jpg",
                "/images/products/set4-2.jpg",
                "/images/products/set4-3.jpg",
                "/images/products/set4-4.jpg",
            ],
        },
        {
            title: "Motorized Curtains",
            description:
                "Smart remote-controlled curtains suitable for modern homes and offices.",
            size: "Custom Sizes Available",
            images: [
                "/images/products/set5-1.jpg",
                "/images/products/set5-2.jpg",
                "/images/products/set5-3.jpg",
                "/images/products/set5-4.jpg",
            ],
        },
    ];

    return (
        <section id="shop" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* HEADER */}
                <div className="text-center mb-16">
                    <span className="text-[#D4AF37] font-semibold uppercase tracking-widest">
                        Shop Curtains
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold text-[#0A1A35] mt-3">
                        Premium Curtain Collection
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                        Explore our premium curtain styles and request a quote directly through WhatsApp.
                    </p>
                </div>

                {/* GRID (FIXED ALIGNMENT) */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            product={product}
                            onView={() => setSelectedProduct(product)}
                        />
                    ))}

                </div>

            </div>

            {/* MODAL */}
            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </section>
    );
}

/* ---------------- PRODUCT CARD ---------------- */

function ProductCard({ product, onView }) {
    return (
        <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300">

            <div className="overflow-hidden">
                <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-full h-72 object-cover hover:scale-105 transition duration-500"
                />
            </div>

            <div className="p-6">

                <span className="inline-block bg-[#D4AF37]/10 text-[#D4AF37] px-3 py-1 rounded-full text-sm font-semibold mb-3">
                    Premium Collection
                </span>

                <h3 className="text-xl font-bold text-[#0A1A35]">
                    {product.title}
                </h3>

                <p className="text-gray-600 mt-2 text-sm line-clamp-2">
                    {product.description}
                </p>

                <button
                    onClick={onView}
                    className="mt-5 w-full bg-[#0A1A35] text-white py-3 rounded-lg hover:bg-[#D4AF37] hover:text-black transition"
                >
                    View Collection
                </button>

            </div>

        </div>
    );
}

/* ---------------- MODAL ---------------- */

function ProductModal({ product, onClose }) {
    const [selectedImage, setSelectedImage] = useState(product.images[0]);

    return (
        <div className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center p-4">

            <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto relative">

                {/* CLOSE */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-3xl font-bold text-gray-600 hover:text-black"
                >
                    ×
                </button>

                <div className="grid lg:grid-cols-2 gap-8 p-6">

                    {/* IMAGES */}
                    <div>

                        <img
                            src={selectedImage}
                            alt={product.title}
                            className="w-full h-[450px] object-cover rounded-2xl"
                        />

                        <div className="grid grid-cols-4 gap-3 mt-4">

                            {product.images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedImage(img)}
                                    className={`border-2 rounded-lg overflow-hidden ${selectedImage === img
                                            ? "border-[#D4AF37]"
                                            : "border-gray-200"
                                        }`}
                                >
                                    <img
                                        src={img}
                                        className="w-full h-20 object-cover"
                                    />
                                </button>
                            ))}

                        </div>

                    </div>

                    {/* CONTENT */}
                    <div>

                        <span className="inline-block bg-[#D4AF37]/10 text-[#D4AF37] px-3 py-1 rounded-full text-sm font-semibold">
                            Premium Collection
                        </span>

                        <h2 className="text-3xl font-bold text-[#0A1A35] mt-4">
                            {product.title}
                        </h2>

                        <p className="text-gray-600 mt-5">
                            {product.description}
                        </p>

                        <div className="mt-6 space-y-3 text-sm text-gray-700">

                            <p>✓ Custom Sizes Available</p>
                            <p>✓ Multiple Color Options</p>
                            <p>✓ Professional Installation</p>
                            <p>✓ Premium Fabric Quality</p>
                            <p>✓ Free Site Measurement</p>

                        </div>

                        <a
                            href={`https://wa.me/254724174801?text=${encodeURIComponent(
                                `Hello Nomark Curtains, I am interested in ${product.title}.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-8 bg-[#D4AF37] text-black px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition"
                        >
                            Order on WhatsApp
                        </a>

                    </div>

                </div>

            </div>

        </div>
    );
}