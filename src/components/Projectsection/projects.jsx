import React from "react";
import Viewprojbtn from "./viewprojbtn";
import WeatherApp from "../../assets/WeatherAPP.png";
import Bngoon from "../../assets/Bngoon.png";
import ActiveCatering from "../../assets/ActiveCatering.png";
import Tariq from "../../assets/99Fashion.png";
import myPortfolio from "../../assets/PortfolioProject.png";
import sabitok from "../../assets/sabitok.png";
import EduManager from "../../assets/Edu-manager.png";
import Myxellia from "../../assets/Myxellia.png";
import AuthApp from "../../assets/AuthApp.png";
import ShoftAfrica from "../../assets/ShoftAfrica.png"; // Add this image

const projectsData = [
  {
    id: 1,
    title: "Sabitok AI Platform",
    description:
      "Sabitok is a web application that enhances user expression and emotional clarity through smart AI tools. The platform takes in user-submitted responses and generates context-aware suggested replies based on custom settings selected by the user (e.g. tone, intent, or style). It also features a text rephraser, allowing users to refine or adjust messages before sending them.",
    caseStudy: {
      challenge:
        "Users struggled with clear emotional expression in digital communication, leading to misunderstandings and inefficient conversations.",
      solution:
        "Built AI-powered platform suggesting context-aware replies and text rephrasing with real-time feedback using Next.js and TypeScript.",
      result:
        "• 25% faster page loads through Next.js optimization\n• 100% WCAG accessibility compliance\n• Scalable component system reused across 3 projects",
    },
    image: sabitok,
    link: "https://www.sabitok.com",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "REST APIs",
    ],
    category: "Full Stack",
    featured: true,
    company: "Monsieur Cruise LTD",
  },
  {
    id: 2,
    title: "Shoft Africa Website",
    description:
      "Complete redesign and development of Shoft Africa's company website, transforming their digital presence and enabling secure payment integration for their mobile application services.",
    caseStudy: {
      challenge:
        "Outdated website with poor user experience was hindering business growth and preventing payment gateway integration for their mobile app.",
      solution:
        "Engineered a professional business website showcasing company registration, credentials, and operational details specifically designed to meet Paystack's due diligence requirements—successfully securing payment gateway approval for the Oniduuru mobile application and enabling monetization capabilities.",
      result:
        "• Secured Paystack payment gateway approval enabling secure transactions\n• 35% increase in conversion rates through optimized UX\n• 95+ Lighthouse scores for performance and accessibility",
    },
    image: ShoftAfrica, // Replace with actual image path
    link: "https://web.shoftafrica.com/home/home", // Add actual link
    technologies: ["Angular.js", "RxJS", "TypeScript", "Tailwind CSS", "SCSS"],
    category: "Frontend",
    featured: true,
    company: "Shoft Africa",
  },
  {
    id: 3,
    title: "Myxellia Dashboard",
    description:
      "A comprehensive business dashboard for monitoring platform activities, user management, and business analytics. Built with modern technologies for optimal performance and user experience.",
    image: Myxellia,
    link: "https://myxellia-delta-livid.vercel.app/",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "Frontend",
    featured: false,
  },
  {
    id: 4,
    title: "Edu Manager",
    description:
      "A comprehensive educational management application for tracking student activities with dedicated dashboards for both administrators and students to monitor curricular activities.",
    image: EduManager,
    link: "https://edu-manager-lyart.vercel.app/",
    technologies: ["React", "Node.js", "MongoDB"],
    category: "Full Stack",
    featured: false,
  },
  {
    id: 5,
    title: "Authentication Dashboard",
    description:
      "A secure dashboard featuring user authentication, activity logging, and file upload functionality with modern UI/UX principles.",
    image: AuthApp,
    link: "https://auth-file-upload-dashboard-jvmmrq3xx-olorunda-victorys-projects.vercel.app/",
    technologies: ["React", "Node.js", "JWT"],
    category: "Full Stack",
    featured: false,
  },
  {
    id: 6,
    title: "Portfolio Website",
    description:
      "A responsive portfolio website with integrated contact functionality allowing direct email communication through the platform.",
    image: myPortfolio,
    link: "https://portfoliofront-nppt.onrender.com/contact",
    technologies: ["React", "Tailwind CSS", "Node.js", "Nodemailer"],
    category: "Full Stack",
    featured: false,
  },
  {
    id: 7,
    title: "Weather Application",
    description:
      "A web-based weather application demonstrating API integration with global location search and comprehensive weather condition displays.",
    image: WeatherApp,
    link: "https://weatherapp-1s0v.onrender.com/",
    technologies: ["HTML", "CSS", "JavaScript", "REST API"],
    category: "Frontend",
    featured: false,
  },
  {
    id: 8,
    title: "Bngoon E-commerce",
    description:
      "A responsive e-commerce website demo showcasing modern UI design principles and cross-device compatibility.",
    image: Bngoon,
    link: "https://vikiwest.github.io/bngoon/",
    technologies: ["HTML", "CSS"],
    category: "Frontend",
    featured: false,
  },
  {
    id: 9,
    title: "Active Catering Craft",
    description:
      "A client website designed to establish authentic business presence and prevent impersonation with easy customer navigation and direct contact features.",
    image: ActiveCatering,
    link: "https://vikiwest.github.io/active-catering-craft-practice/products.html",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    featured: false,
  },
  {
    id: 10,
    title: "99Tariq Fashion",
    description:
      "A fashion e-commerce platform showcasing available products with responsive design and intuitive user interface.",
    image: Tariq,
    link: "https://vikiwest.github.io/99Tariq-Fashion/",
    technologies: ["HTML", "CSS"],
    category: "Frontend",
    featured: false,
  },
];

function Projects() {
  const featuredProjects = projectsData.filter((project) => project.featured);
  const otherProjects = projectsData.filter((project) => !project.featured);

  const ProjectCard = ({ project, index, isFeatured = false }) => {
    const isImageLeft = index % 2 === 0;

    return (
      <div
        className={`group relative mb-20 ${
          isFeatured ? "featured-project" : ""
        }`}
      >
        <div
          className={`m-auto w-[90%] lg:w-[85%] flex flex-col ${
            isImageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
          } items-stretch bg-gradient-to-br from-white/5 to-white/10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-brandyellow/10 transition-all duration-500 hover:scale-[1.02]`}
        >
          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative overflow-hidden">
            <div className="relative h-64 lg:h-full">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={project.image}
                alt={project.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-brandyellow/90 text-black px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
                  {project.category}
                </span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between">
            <div>
              {/* Featured Badge */}
              {isFeatured && (
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-brandyellow rounded-full animate-pulse" />
                  <span className="text-brandyellow text-sm font-semibold">
                    Featured Project
                  </span>
                </div>
              )}

              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-brandyellow transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Case Study Section for Featured Projects */}
              {isFeatured && project.caseStudy && (
                <div className="mb-6 space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h4 className="text-brandyellow font-semibold mb-2">
                      The Challenge
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {project.caseStudy.challenge}
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h4 className="text-brandyellow font-semibold mb-2">
                      My Solution
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {project.caseStudy.solution}
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h4 className="text-brandyellow font-semibold mb-2">
                      The Result
                    </h4>
                    <p className="text-gray-300 text-sm whitespace-pre-line">
                      {project.caseStudy.result}
                    </p>
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm border border-white/20 hover:bg-brandyellow/20 hover:border-brandyellow/50 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Company Attribution */}
              {project.company && (
                <div className="mb-4">
                  <span className="text-brandyellow text-sm font-medium">
                    © {project.company}
                  </span>
                </div>
              )}
            </div>

            {/* Action Button */}
            <div className="mt-4">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Viewprojbtn />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="projects"
      className="py-20 lg:py-32 text-white bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brandyellow to-orange-400 rounded-full mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Case studies showcasing business impact, technical solutions, and
            measurable results
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-16">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isFeatured={true}
            />
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="mt-32">
          <h3 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-white">
            Other Notable Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-gradient-to-br from-white/5 to-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-brandyellow/10 transition-all duration-500 hover:scale-105 border border-white/10 hover:border-brandyellow/30"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={project.image}
                    alt={project.title}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-black/70 text-white px-2 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-brandyellow transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-white/10 text-white px-2 py-1 rounded text-xs border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-white/10 text-white px-2 py-1 rounded text-xs border border-white/20">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center bg-white/10 hover:bg-brandyellow/20 text-white hover:text-brandyellow border border-white/20 hover:border-brandyellow/50 py-2 rounded-lg transition-all duration-300 text-sm font-semibold"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
