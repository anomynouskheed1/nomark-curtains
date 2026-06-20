export default function Projects() {
    const projects = [
        {
            title: "Modern Living Room",
            location: "Nairobi",
            type: "Blackout Curtains Installation",
            image: "/images/projects/living-room-1.jpg",
        },
        {
            title: "Luxury Hotel Suite",
            location: "Westlands",
            type: "Sheer + Blackout Combo",
            image: "/images/projects/hotel-1.jpg",
        },
        {
            title: "Corporate Office",
            location: "CBD Nairobi",
            type: "Roller Blinds",
            image: "/images/projects/office-1.jpg",
        },
    ];

    return (
        <section id="projects" className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900">
                        Our Projects
                    </h2>
                    <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                        A glimpse of curtain installations we’ve completed for homes, offices, and hotels across Kenya.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
                        >
                            {/* Image */}
                            <div className="overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-56 object-cover transform hover:scale-105 transition duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="text-xl font-semibold text-gray-900">
                                    {project.title}
                                </h3>

                                <p className="text-sm text-gray-500 mt-1">
                                    {project.location} • {project.type}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                        View More Projects
                    </button>
                </div>

            </div>
        </section>
    );
}