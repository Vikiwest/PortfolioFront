import React from "react";

// Import icons for testimonials
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaStar,
  FaProjectDiagram,
} from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Stephen A.",
      role: "Project Manager",
      company: "Monsieur Cruise LTD",
      content:
        "Victory demonstrated exceptional skill in building our Sabitok AI platform. His attention to performance optimization and accessibility standards resulted in a 25% improvement in page load speeds while maintaining 100% WCAG compliance. He's a reliable developer who understands both technical requirements and business objectives.",
      rating: 5,
      projects: 3, // Added project count
      projectNames: ["Sabitok AI Platform", "RelateOs 1.0", "RelateOs 2.0"], // Added specific projects
      image: "👨‍💼",
    },
    {
      id: 2,
      name: "Kehinde O.",
      role: "CEO",
      company: "Shoft Africa",
      content:
        "Victory's work was instrumental in securing our Paystack payment gateway approval. He built our corporate website from scratch, showcasing our business credentials professionally. His Angular/Ionic mobile app development for Oniduuru delivered smooth performance for our 1,000+ users. Highly recommended for complex frontend projects.",
      rating: 5,
      projects: 2, // Added project count
      projectNames: ["Oniduuru Mobile App", "Shoft Africa Website"], // Added specific projects
      image: "👨‍💼",
    },
    {
      id: 3,
      name: "Michael O.",
      role: "CEO",
      company: "Intexicon Limited",
      content:
        "Working with Victory was a pleasure. His component library implementation reduced our development time by 35% across multiple projects. He consistently delivered high-quality code with 95+ Lighthouse scores. His full-stack capabilities with Next.js and Django made him a valuable asset to our team.",
      rating: 5,
      projects: 2, // Added project count
      projectNames: ["Intexicon Company Platform", "Food-Prices"],
      image: "👩‍💼",
    },
    {
      id: 4,
      name: "Olabanji",
      role: "Project Manager",
      company: "ITSkillsCenter",
      content:
        "As an intern, Victory showed remarkable growth and technical aptitude. He built scalable React/Node.js applications that improved performance by 30%. His JWT implementation and API optimizations showed a deep understanding of security and performance. He would be an asset to any development team.",
      rating: 4,
      projects: 4, // Added project count
      projectNames: ["Training Platform", "MusicBox", "Bandage", "Bngoon"],
      image: "👨‍💻",
    },
    {
      id: 5,
      name: "Olorunjedalo O.",
      role: "Project Manager",
      company: "Page Asset Management Limited",
      content:
        "Victory did excellent work redesigning our investment products platform. I'm very happy with how he transformed the site's outlook - it's now more professional and engaging for our clients. Thank you for the great work!",
      rating: 5,
      projects: 1,
      projectNames: ["Page AML"],
      image: "👨‍💼",
    },
    {
      id: 6,
      name: "Theresa O.",
      role: "CEO",
      company: "OMTE Global Ventures",
      content:
        "Victory developed a comprehensive website for our educational publishing business that effectively showcases our textbooks and workbooks. The integrated WhatsApp messaging system he implemented has streamlined communication with schools and educational institutions, making it easier for them to inquire about our materials.",
      rating: 5,
      projects: 1,
      projectNames: ["Active Catering Craft Practice "],
      image: "👨‍💼",
    },
  ];

  // Calculate total projects across all testimonials
  const totalProjects = testimonials.reduce(
    (sum, testimonial) => sum + testimonial.projects,
    0
  );

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-32 text-white bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container mx-auto px-4">
        {/* Header with Total Projects Badge */}
        <div className="text-center mb-16 lg:mb-20 relative">
          <div className="absolute top-0 right-0 md:right-10 lg:right-20">
            <div className="bg-gradient-to-r from-brandyellow/20 to-orange-400/20 backdrop-blur-sm border border-brandyellow/30 rounded-full px-6 py-3 flex items-center gap-2">
              <FaProjectDiagram className="text-brandyellow" />
              <span className="text-white font-semibold">
                <span className="text-brandyellow">{totalProjects}+</span>{" "}
                Projects Delivered
              </span>
            </div>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
            Client Testimonials
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brandyellow to-orange-400 rounded-full mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Trusted by companies for {totalProjects}+ successful projects
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative bg-gradient-to-br from-white/5 to-white/10 rounded-3xl p-8 border border-white/10 hover:border-brandyellow/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-brandyellow/10"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 text-brandyellow/30 group-hover:text-brandyellow/50 transition-colors duration-300">
                <FaQuoteLeft size={24} />
              </div>

              {/* Project Count Badge */}
              <div className="absolute top-6 right-6 bg-brandyellow/20 text-brandyellow px-3 py-1 rounded-full text-sm font-semibold border border-brandyellow/30 flex items-center gap-1">
                <FaProjectDiagram size={12} />
                <span>
                  {testimonial.projects} Project
                  {testimonial.projects > 1 ? "s" : ""}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10 pt-8">
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`${
                        i < testimonial.rating
                          ? "text-yellow-400"
                          : "text-gray-600"
                      } mr-1`}
                      size={18}
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  "{testimonial.content}"
                </p>

                {/* Project List */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-brandyellow mb-2 flex items-center gap-1">
                    <FaProjectDiagram size={14} />
                    Projects Delivered:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {testimonial.projectNames.map((project, index) => (
                      <span
                        key={index}
                        className="bg-white/10 text-white px-3 py-1 rounded-full text-xs border border-white/20 hover:bg-brandyellow/20 hover:border-brandyellow/50 transition-all duration-300"
                      >
                        {project}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Client Info */}
                <div className="flex items-center">
                  {/* Avatar */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-brandyellow to-orange-400 flex items-center justify-center text-2xl mr-4">
                    {testimonial.image}
                  </div>

                  {/* Details */}
                  <div>
                    <h4 className="text-xl font-bold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-brandyellow">{testimonial.role}</p>
                    <p className="text-gray-400 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Quote Icon */}
              <div className="absolute bottom-6 right-6 text-brandyellow/30 group-hover:text-brandyellow/50 transition-colors duration-300">
                <FaQuoteRight size={24} />
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-brandyellow/5 to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Stats Section with Project Focus */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-brandyellow/30 transition-all duration-300 group">
            <div className="text-3xl font-bold text-brandyellow mb-2 group-hover:scale-110 transition-transform duration-300">
              {totalProjects}+
            </div>
            <div className="text-white font-medium">Projects Completed</div>
            <div className="text-gray-400 text-sm mt-2">Across all clients</div>
          </div>

          <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-brandyellow/30 transition-all duration-300 group">
            <div className="text-3xl font-bold text-brandyellow mb-2 group-hover:scale-110 transition-transform duration-300">
              100%
            </div>
            <div className="text-white font-medium">Client Satisfaction</div>
            <div className="text-gray-400 text-sm mt-2">
              Based on project feedback
            </div>
          </div>

          <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-brandyellow/30 transition-all duration-300 group">
            <div className="text-3xl font-bold text-brandyellow mb-2 group-hover:scale-110 transition-transform duration-300">
              5/5
            </div>
            <div className="text-white font-medium">Average Rating</div>
            <div className="text-gray-400 text-sm mt-2">
              Across all projects
            </div>
          </div>

          <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-brandyellow/30 transition-all duration-300 group">
            <div className="text-3xl font-bold text-brandyellow mb-2 group-hover:scale-110 transition-transform duration-300">
              4+
            </div>
            <div className="text-white font-medium">Repeat Clients</div>
            <div className="text-gray-400 text-sm mt-2">
              Returning for new projects
            </div>
          </div>
        </div>

        {/* Project Timeline Visualization */}
        {/* <div className="mt-16 bg-gradient-to-r from-white/5 to-white/10 rounded-3xl p-8 border border-white/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-brandyellow mb-2 flex items-center justify-center gap-2">
              <FaProjectDiagram />
              Project Delivery Timeline
            </h3>
            <p className="text-gray-300">
              Successfully delivered projects across multiple companies
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center flex-1">
                <div className="text-2xl font-bold text-brandyellow mb-2">
                  {testimonial.projects}
                </div>
                <div className="text-white font-medium">
                  {testimonial.company}
                </div>
                <div className="h-2 bg-gray-700 rounded-full mt-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-brandyellow to-orange-400 rounded-full"
                    style={{
                      width: `${(testimonial.projects / totalProjects) * 100}%`,
                    }}
                  ></div>
                </div>
                <div className="text-gray-400 text-sm mt-2">Projects</div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Enhanced CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-brandyellow/10 to-orange-400/10 rounded-2xl p-8 mb-8 border border-brandyellow/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Next Project?
            </h3>
            <p className="text-gray-300 mb-6">
              Join {testimonials.length} satisfied clients who have trusted me
              with {totalProjects}+ successful projects
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-brandyellow hover:bg-orange-500 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-brandyellow/25"
            >
              <FaProjectDiagram />
              Start a Project
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
