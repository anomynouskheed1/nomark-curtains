
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function Products() {
    const waLink = "https://wa.me/25421163223";

    const products = [
        {
            image: "/images/service1.jpg",
            title: "Luxury Blackout Curtains",
            desc: "Perfect for bedrooms, privacy, and complete light control."
        },
        {
            image: "/images/service8.jpg",
            title: "Sheer Curtains",
            desc: "Elegant curtains that allow natural light while maintaining privacy."
        },
        {
            image: "/images/service3.jpg",
            title: "Motorized Curtains",
            desc: "Smart remote-controlled curtain systems for modern homes."
        },
        {
            image: "/images/service7.jpg",
            title: "Designer Curtains",
            desc: "Custom-made curtain designs to match your interior décor."
        },
        {
            image: "/images/service5.jpg",
            title: "Curtain Rods & Rails",
            desc: "Durable and stylish curtain support systems."
        },
        {
            image: "/images/service6.jpg",
            title: "Window Blinds",
            desc: "Modern blinds for homes, offices, and commercial spaces."
        },
        {
            image: "/images/curtain1.jpg",
            title: "Office Curtains",
            desc: "Professional window treatments for offices and workspaces."
        },
        {
            image: "/images/curtain2.jpg",
            title: "Hotel Curtains",
            desc: "Premium curtain solutions for hotels and apartments."
        },
        {
            image: "/images/curtain3.jpg",
            title: "Living Room Curtains",
            desc: "Elegant curtain styles that transform your living space."
        },
        {
            image: "/images/curtain4.jpg",
            title: "Apartment Curtain Packages",
            desc: "Affordable and premium curtain installation packages."
        },
        {
            image: "/images/service9.jpg",
            title: "Bedroom Curtains",
            desc: "Beautiful curtain solutions for modern bedrooms."
        },
        {
            image: "/images/service2.jpg",
            title: "Custom Window Treatments",
            desc: "Tailor-made curtains designed for your unique space."
        }
    ];

    return (
        <section id="products" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 text-center">

                <h2 className="text-4xl font-bold text-[#0A1A35]">
                    Our Curtain Collection
                </h2>

                <p className="text-gray-600 mt-3 mb-12">
                    Browse our premium curtain styles and order directly via WhatsApp.
                </p>

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    loop={true}
                    grabCursor={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {products.map((product, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">

                                <div className="overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="h-56 w-full object-cover transition duration-700 hover:scale-110"
                                    />
                                </div>

                                <div className="p-5 text-left">
                                    <h3 className="text-lg font-semibold text-[#0A1A35]">
                                        {product.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm mt-2">
                                        {product.desc}
                                    </p>

                                    <a
                                        href={waLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block mt-4 bg-[#D4AF37] hover:bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold transition"
                                    >
                                        Order on WhatsApp
                                    </a>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
}
