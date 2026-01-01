import React from "react";

// Import icons - Keep only core technologies
import Html from "../../icons/html.svg";
import Css from "../../icons/css.svg";
import Js from "../../icons/Js.svg";
import Ts from "../../icons/typescript_5968381.png";
import ReactIcon from "../../icons/reactjs.svg";
import Next from "../../icons/nextjs-icon-svgrepo-com.svg";
import Tailwind from "../../icons/tailwind-css.svg";
import Nodejs from "../../icons/nodejs.svg";
import Express from "../../icons/express-original.svg";
import Mongodb from "../../icons/mongodb-original.svg";
import Git from "../../icons/git.svg";
import GitHub from "../../icons/github_733609.png";
import Docker from "../../icons/Docker.png";
import Postman from "../../icons/Postman.svg";

// Skill data organized by categories - SIMPLIFIED
const skillCategories = [
  {
    title: "Core Technologies",
    skills: [
      { name: "React", icon: ReactIcon, level: "Advanced" },
      { name: "Next.js", icon: Next, level: "Advanced" },
      { name: "TypeScript", icon: Ts, level: "Advanced" },
      { name: "JavaScript", icon: Js, level: "Advanced" },
    ],
  },
  {
    title: "Styling & UI",
    skills: [
      { name: "Tailwind CSS", icon: Tailwind, level: "Advanced" },
      { name: "HTML", icon: Html, level: "Advanced" },
      { name: "CSS", icon: Css, level: "Advanced" },
    ],
  },
  {
    title: "Backend & Tools",
    skills: [
      { name: "Node.js", icon: Nodejs, level: "Intermediate" },
      { name: "Express", icon: Express, level: "Intermediate" },
      { name: "MongoDB", icon: Mongodb, level: "Intermediate" },
    ],
  },
  {
    title: "Development & DevOps",
    skills: [
      { name: "Git", icon: Git, level: "Advanced" },
      { name: "GitHub", icon: GitHub, level: "Advanced" },
      { name: "Docker", icon: Docker, level: "Intermediate" },
      { name: "Postman", icon: Postman, level: "Advanced" },
    ],
  },
];

function Skills() {
  const getLevelPercentage = (level) => {
    const levels = { Advanced: 90, Intermediate: 65 };
    return levels[level] || 50;
  };

  const getLevelColor = (level) => {
    const colors = {
      Advanced: "from-green-400 to-green-600",
      Intermediate: "from-yellow-400 to-yellow-600",
    };
    return colors[level] || "from-gray-400 to-gray-600";
  };

  return (
    <section
      id="skills"
      className="py-20 lg:py-32 w-[80%] m-auto text-white bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
            Technical Expertise
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-brandyellow to-orange-400 rounded-full mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Specialized in modern frontend technologies with full-stack capabilities
          </p>
        </div>

        {/* Skills Grid */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="skill-category group flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay={categoryIndex * 100}
            >
              {/* Category Header */}
              <div className="text-center mb-12">
                <h2 className="text-2xl lg:text-3xl font-semibold text-brandyellow mb-4 inline-block relative">
                  {category.title}
                  <div className="absolute -bottom-2 left-0 w-0 group-hover:w-full h-0.5 bg-brandyellow transition-all duration-500"></div>
                </h2>
              </div>

              {/* Skills Cards */}
              <div className="flex flex-wrap justify-center gap-6 max-w-7xl">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group relative bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 hover:border-brandyellow/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-brandyellow/10 flex flex-col items-center
                      w-48 p-4 sm:w-56 sm:p-5 md:w-64 md:p-6 lg:w-72 lg:p-8"
                    data-aos="zoom-in"
                    data-aos-delay={skillIndex * 100}
                  >
                    {/* Skill Icon */}
                    <div className="flex justify-center mb-4">
                      <div className="relative">
                        <div
                          className="bg-white rounded-xl transition-all duration-500 group-hover:rounded-2xl group-hover:shadow-lg group-hover:shadow-brandyellow/20 p-3 sm:p-4"
                        >
                          <img
                            className="transition-transform duration-500 group-hover:scale-110 h-14 w-14 sm:h-16 sm:w-16 md:h-18 md:w-18"
                            src={skill.icon}
                            alt={`${skill.name} icon`}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Skill Info */}
                    <div className="text-center mb-4 flex-grow w-full">
                      <h3
                        className="font-semibold text-white mb-2 group-hover:text-brandyellow transition-colors duration-300 text-lg sm:text-xl md:text-2xl"
                      >
                        {skill.name}
                      </h3>
                      <div className="flex items-center justify-center space-x-2">
                        <span
                          className={`font-medium px-2 py-1 rounded-full ${
                            skill.level === "Advanced"
                              ? "bg-green-500/20 text-green-300"
                              : "bg-yellow-500/20 text-yellow-300"
                          } text-sm sm:text-base`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-4 w-full">
                      <div
                        className="flex justify-between text-gray-400 mb-1 text-sm"
                      >
                        <span>Proficiency</span>
                        <span>{getLevelPercentage(skill.level)}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-2 rounded-full bg-gradient-to-r ${getLevelColor(
                            skill.level
                          )} transition-all duration-1000 ease-out`}
                          style={{
                            width: `${getLevelPercentage(skill.level)}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Expertise Section */}
        <div className="mt-20 bg-gradient-to-r from-white/5 to-white/10 rounded-3xl p-8 border border-white/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-brandyellow mb-4">
              Additional Experience
            </h3>
            <p className="text-gray-300 mb-6">
              Proficient in these technologies with practical project experience
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {["Angular.js", "RxJS", "Ionic", "Bootstrap", "REST APIs", "JWT", "WCAG Accessibility", "Responsive Design", "Performance Optimization"].map((skill) => (
              <span
                key={skill}
                className="bg-white/10 text-white px-4 py-2 rounded-full text-sm border border-white/20 hover:bg-brandyellow/20 hover:border-brandyellow/50 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Skills Summary - UPDATED */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="space-y-2 p-6 bg-white/5 rounded-2xl border border-white/10">
            <div className="text-3xl font-bold text-brandyellow">3+</div>
            <div className="text-white font-medium">Production Applications</div>
            <div className="text-gray-400 text-sm">
              Built and deployed for real users
            </div>
          </div>
          <div className="space-y-2 p-6 bg-white/5 rounded-2xl border border-white/10">
            <div className="text-3xl font-bold text-brandyellow">30%+</div>
            <div className="text-white font-medium">Performance Improvements</div>
            <div className="text-gray-400 text-sm">
              Average optimization impact
            </div>
          </div>
          <div className="space-y-2 p-6 bg-white/5 rounded-2xl border border-white/10">
            <div className="text-3xl font-bold text-brandyellow">100%</div>
            <div className="text-white font-medium">WCAG Compliance</div>
            <div className="text-gray-400 text-sm">
              Accessible design standards
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;