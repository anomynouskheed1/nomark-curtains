"use client";

export default function Gallery() {
    const images = [
        "/images/curtain1.jpg",
        "/images/curtain2.jpg",
        "/images/curtain3.jpg",
        "/images/curtain4.jpg",
        "/images/curtain5.jpg",
        "/images/curtain6.jpg",
        "/images/curtain7.jpg",
        "/images/curtain8.jpg"
    ];

    return (
        <section id="gallery" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 text-center">

                <h2 className="text-4xl font-bold text-[#0A1A35] mb-4">
                    Our Work Gallery
                </h2>

                <p className="text-gray-600 mb-14 max-w-2xl mx-auto">
                    A showcase of our premium curtain installations across Kenya.
                </p>

                {/* TOP 4 */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-6">

                    {images.slice(0, 4).map((img, index) => (
                        <div key={index} className="overflow-hidden rounded-xl shadow-md group">
                            <img
                                src={img}
                                alt="Curtain work"
                                className="h-56 w-full object-cover group-hover:scale-105 transition duration-700"
                            />
                        </div>
                    ))}

                </div>

                {/* BOTTOM 4 */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

                    {images.slice(4, 8).map((img, index) => (
                        <div key={index} className="overflow-hidden rounded-xl shadow-md group">
                            <img
                                src={img}
                                alt="Curtain work"
                                className="h-56 w-full object-cover group-hover:scale-105 transition duration-700"
                            />
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}