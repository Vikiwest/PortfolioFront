import React from "react";

function Experience() {
  const experiences = [
    {
      id: 1,
      company: "Monsieur Cruise LTD",
      position: "Frontend Developer",
      period: "Mar 2024 - Present",
      type: "Contract",
      location: "Remote",
      achievements: [
        "Led UI development for Sabitok AI platform using Next.js and TypeScript, improving page load speed by 25%",
        "Designed reusable component library with Tailwind CSS, reducing development time by 30% across projects",
        "Ensured 100% WCAG accessibility compliance through automated testing and code reviews",
        "Implemented responsive layouts and optimized REST API integration for 1,000+ users",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "REST APIs",
        "FastUI",
      ],
      featured: true,
    },
    {
      id: 2,
      company: "Shoft Africa", // PROMOTE THIS TO FEATURED
      position: "Frontend Developer",
      period: "Sep 2024 - Present", // CHANGED FROM 2025
      type: "Contract", // CHANGED FROM Full-time
      location: "Remote",
      achievements: [
        "Designed and developed corporate website showcasing business credentials, successfully securing Paystack payment gateway approval for Oniduuru mobile app",
        "Built Angular.js/Ionic mobile application with RxJS state management serving 1,000+ active users",
        "Created reusable component library with TypeScript, reducing UI development time by 40%",
        "Improved mobile app performance by 25% through optimization strategies",
      ],
      technologies: [
        "Angular.js",
        "RxJS",
        "Ionic",
        "TypeScript",
        "Tailwind CSS",
      ],
      featured: true, // CHANGED TO TRUE
    },
    {
      id: 3,
      company: "Intexicon Limited",
      position: "Full-Stack Developer",
      period: "Aug 2024 - Present", // CHANGED FROM 2025
      type: "Contract",
      location: "Remote",
      achievements: [
        "Built scalable UI component library using Tailwind CSS and FastUI ensuring consistency across 3 projects",
        "Developed high-performance websites with Next.js and TypeScript achieving 95+ Lighthouse scores",
        "Engineered full-stack solutions with React.js, Django, and Docker for efficient data management",
        "Implemented automated deployment pipelines reducing deployment downtime by 50%",
      ],
      technologies: ["Next.js", "TypeScript", "React.js", "Django", "Docker"],
      featured: false, // CHANGED TO FALSE
    },
    {
      id: 4,
      company: "ITSkillsCenter",
      position: "Full Stack Developer",
      period: "Aug 2023 - Feb 2024",
      type: "Internship",
      location: "Ogba, Ikeja",
      achievements: [
        "Built scalable web applications using React.js and Node.js, improving performance by 30%",
        "Implemented JWT authentication securing user data and API endpoints",
        "Translated wireframes into responsive interfaces, reducing load time by 20%",
        "Structured REST APIs with Swagger documentation improving developer experience",
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      featured: false,
    },
    {
      id: 5,
      company: "Xpertech Solutions Group",
      position: "Frontend Developer",
      period: "Feb 2024 - Apr 2024", // CHANGED FROM 2025
      type: "Contract", // CHANGED FROM Full-time
      location: "Egbeda, Lagos",
      achievements: [
        "Delivered responsive UIs for client-facing applications aligned with business requirements",
        "Customized WordPress themes improving site responsiveness and brand consistency",
        "Developed dynamic UI components enhancing user engagement and site performance",
        "Collaborated with product designers and backend developers on web projects",
      ],
      technologies: ["React.js", "WordPress", "Bootstrap", "Vanilla CSS"],
      featured: false,
    },
  ];

  const featuredExperiences = experiences.filter((exp) => exp.featured);
  const otherExperiences = experiences.filter((exp) => !exp.featured);

  return (
    <section
      id="experience"
      className="py-20 lg:py-32 text-white bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brandyellow to-orange-400 rounded-full mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Building scalable solutions and delivering exceptional user
            experiences across diverse tech stacks
          </p>
        </div>

        {/* Featured Experiences */}
        <div className="space-y-12 mb-20">
          {featuredExperiences.map((experience, index) => (
            <div key={experience.id} className="group relative">
              <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-3xl p-8 lg:p-12 border border-white/10 hover:border-brandyellow/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-brandyellow/10">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-brandyellow transition-colors duration-300">
                        {experience.position}
                      </h3>
                      <span className="bg-brandyellow/20 text-brandyellow px-3 py-1 rounded-full text-sm font-semibold border border-brandyellow/30">
                        Featured
                      </span>
                    </div>
                    <p className="text-xl text-gray-300 font-semibold mb-2">
                      {experience.company}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-gray-400">
                      <span className="flex items-center gap-1">
                        <span>📅</span>
                        {experience.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <span>📍</span>
                        {experience.location}
                      </span>
                      <span className="bg-white/10 px-3 py-1 rounded-full text-sm border border-white/20">
                        {experience.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-brandyellow mb-4">
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {experience.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <span className="text-brandyellow mt-1">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-brandyellow mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-white/10 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm border border-white/20 hover:bg-brandyellow/20 hover:border-brandyellow/50 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Experiences Grid */}
        <div>
          <h3 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-white">
            Previous Roles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherExperiences.map((experience) => (
              <div
                key={experience.id}
                className="group bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 border border-white/10 hover:border-brandyellow/30 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-brandyellow/10"
              >
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-brandyellow transition-colors duration-300">
                    {experience.position}
                  </h4>
                  <p className="text-lg text-gray-300 font-semibold mb-2">
                    {experience.company}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mb-3">
                    <span>{experience.period}</span>
                    <span>•</span>
                    <span>{experience.location}</span>
                    <span className="bg-white/10 px-2 py-1 rounded-full text-xs border border-white/20">
                      {experience.type}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  {experience.achievements
                    .slice(0, 2)
                    .map((achievement, idx) => (
                      <p
                        key={idx}
                        className="text-gray-400 text-sm flex items-start gap-2"
                      >
                        <span className="text-brandyellow mt-1">•</span>
                        {achievement}
                      </p>
                    ))}
                </div>

                <div className="flex flex-wrap gap-1">
                  {experience.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-white/10 text-white px-2 py-1 rounded text-xs border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {experience.technologies.length > 4 && (
                    <span className="bg-white/10 text-white px-2 py-1 rounded text-xs border border-white/20">
                      +{experience.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Connector for Mobile */}
        <div className="lg:hidden mt-12 flex justify-center">
          <div className="w-1 h-20 bg-gradient-to-b from-brandyellow to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
