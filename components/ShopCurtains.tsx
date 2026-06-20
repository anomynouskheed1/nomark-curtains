"use client";

import { useState } from "react";

const products = [
    {
        title: "Arabic Gold Brown Curtains",
        category: "Luxury",
        description:
            "Elegant Arabic-inspired gold and brown curtains designed to bring a rich, royal, and luxurious atmosphere to your interior spaces.",
        images: [
            "/images/products/set1-1.jpg",
            "/images/products/set1-2.jpg",
            "/images/products/set1-3.jpg",
            "/images/products/set1-4.jpg",
        ],
    },
    {
        title: "Heavy Blue Curtains",
        category: "Heavy Drapes",
        description:
            "Thick bluish heavy curtains designed for maximum privacy, light blocking, and a premium cozy interior feel.",
        images: [
            "/images/products/set2-1.jpg",
            "/images/products/set2-2.jpg",
            "/images/products/set2-3.jpg",
            "/images/products/set2-4.jpg",
        ],
    },
    {
        title: "Elegant Grey Curtains",
        category: "Modern",
        description:
            "Soft grey curtains offering a minimal, modern, and stylish look that blends perfectly with contemporary interiors.",
        images: [
            "/images/products/set3-1.jpg",
            "/images/products/set3-2.jpg",
            "/images/products/set3-3.jpg",
            "/images/products/set3-4.jpg",
        ],
    },
    {
        title: "Golden Yellow Curtains",
        category: "Bright Decor",
        description:
            "Warm yellow-toned curtains that brighten your space while adding a stylish and welcoming interior atmosphere.",
        images: [
            "/images/products/set4-1.jpg",
            "/images/products/set4-2.jpg",
            "/images/products/set4-3.jpg",
            "/images/products/set4-4.jpg",
        ],
    },
    {
        title: "Deep Dark Blue Curtains",
        category: "Premium",
        description:
            "Rich dark blue curtains that bring depth, elegance, and a luxurious hotel-style finish to any room.",
        images: [
            "/images/products/set5-1.jpg",
            "/images/products/set5-2.jpg",
            "/images/products/set5-3.jpg",
            "/images/products/set5-4.jpg",
        ],
    },
    {
        title: "Grey & Gold Luxury Curtains",
        category: "Luxury",
        description:
            "Stylish grey curtains enhanced with golden accents on top, creating a premium and sophisticated interior design feel.",
        images: [
            "/images/products/set6-1.jpg",
            "/images/products/set6-2.jpg",
            "/images/products/set6-3.jpg",
            "/images/products/set6-4.jpg",
        ],
    },
    {
        title: "Curtain Rods & Rails",
        category: "Rods",
        description:
            "Strong and durable curtain rods and rail systems designed for smooth movement and a clean, modern interior installation finish.",
        images: [
            "/images/products/set7-1.jpg",
            "/images/products/set7-2.jpg",
            "/images/products/set7-3.jpg",
            "/images/products/set7-4.jpg",
        ],
    },
    {
        title: "Premium Sheer Curtains",
        category: "Sheer",
        description:
            "Light and elegant sheer curtains that softly filter sunlight while maintaining privacy and a bright airy atmosphere.",
        images: [
            "/images/products/set8-1.jpg",
            "/images/products/set8-2.jpg",
            "/images/products/set8-3.jpg",
            "/images/products/set8-4.jpg",
        ],
    },
];

export default function ShopCurtains() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filters = [
        "All",
        "Blackout",
        "Sheer",
        "Wave",
        "Motorized",
    ];

    const filteredProducts =
        activeFilter === "All"
            ? products
            : products.filter(
                (product) => product.category === activeFilter
            );

    return (
        <section id="products" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-12">

                    <span className="text-[#D4AF37] font-semibold uppercase tracking-widest">
                        Shop Curtains
                    </span>

                    <h2 className="text-4xl font-bold text-[#0A1A35] mt-3">
                        Premium Curtain Collection
                    </h2>

                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Explore our curtain styles and request a free quote directly on WhatsApp.
                    </p>

                </div>

                {/* FILTERS */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">

                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition ${activeFilter === filter
                                ? "bg-[#0A1A35] text-white"
                                : "bg-white border hover:border-[#D4AF37]"
                                }`}
                        >
                            {filter}
                        </button>
                    ))}

                </div>

                {/* PRODUCTS */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                    {filteredProducts.map((product, index) => (
                        <ProductCard
                            key={index}
                            product={product}
                        />
                    ))}

                </div>

            </div>
        </section>
    );
}

function ProductCard({ product }: any) {
    const [mainImage, setMainImage] = useState(product.images[0]);

    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

            <h3 className="px-4 pt-4 text-lg font-bold text-[#0A1A35] min-h-[56px]">
                {product.title}
            </h3>

            <div className="p-4">

                <img
                    src={mainImage}
                    alt={product.title}
                    className="w-full h-56 object-cover rounded-xl"
                />

                <div className="grid grid-cols-4 gap-2 mt-3">

                    {product.images.map((image: string, idx: number) => (
                        <button
                            key={idx}
                            onClick={() => setMainImage(image)}
                            className={`rounded overflow-hidden border-2 ${mainImage === image
                                ? "border-[#D4AF37]"
                                : "border-transparent"
                                }`}
                        >
                            <img
                                src={image}
                                alt=""
                                className="w-full h-14 object-cover"
                            />
                        </button>
                    ))}

                </div>

                <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                    {product.description}
                </p>

                <ul className="text-sm text-gray-600 mt-4 space-y-1">
                    <li>✓ Custom Sizes Available</li>
                    <li>✓ Multiple Color Options</li>
                    <li>✓ Professional Installation</li>
                </ul>

                <a
                    href={`https://wa.me/254724174801?text=${encodeURIComponent(
                        `Hello Nomark Curtains, I am interested in ${product.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center mt-5 bg-[#D4AF37] text-black py-3 rounded-lg font-semibold hover:opacity-90 transition"
                >
                    Get Quote
                </a>

            </div>

        </div>
    );
}