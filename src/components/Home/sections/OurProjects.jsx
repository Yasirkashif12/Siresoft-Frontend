import React, { useState } from "react";
const OurProjects = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "E-Commerce Platform",
      image:
        "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop",
      category: "Web Development",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
      category: "Mobile App",
    },
    {
      id: 3,
      title: "Healthcare Dashboard",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      category: "UI/UX Design",
    },
    {
      id: 4,
      title: "Real Estate Portal",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      category: "Web Development",
    },
    {
      id: 5,
      title: "Food Delivery App",
      image:
        "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&h=600&fit=crop",
      category: "Mobile App",
    },
    {
      id: 6,
      title: "Analytics Platform",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      category: "Data Visualization",
    },
  ]);

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="flex flex-col justify-start">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              SireSoft Projects
            </h2>
            <div className="space-y-4 text-gray-600">
              <p className="text-base sm:text-lg leading-relaxed">
                At SireSoft, we pride ourselves on delivering exceptional
                digital solutions that transform businesses and elevate user
                experiences. Our diverse portfolio showcases our expertise
                across web development, mobile applications, and innovative
                software solutions.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                Each project represents our commitment to quality, innovation,
                and client satisfaction. From startups to enterprise-level
                solutions, we bring ideas to life with cutting-edge technology
                and creative excellence.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                Explore our work and see how we've helped businesses achieve
                their digital transformation goals through strategic planning,
                robust development, and user-centric design.
              </p>
            </div>

            <a
              href="#view-all-projects"
              className="inline-flex items-center mt-6 sm:mt-8 text-green-600 font-bold text-base sm:text-lg hover:text-green-700 transition focus:outline-none focus:ring-2 focus:ring-green-600 rounded px-2 py-1"
            >
              View All Projects →
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-xl bg-gray-200 aspect-square hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-xs font-semibold text-green-400 mb-1 block">
                      {project.category}
                    </span>
                    <h3 className="text-white font-bold text-sm sm:text-base">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
