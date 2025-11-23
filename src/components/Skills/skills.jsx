import React from "react";

// Import icons
import Html from "../../icons/html.svg";
import Css from "../../icons/css.svg";
import Js from "../../icons/Js.svg";
import Ts from "../../icons/typescript_5968381.png";
import ReactIcon from "../../icons/reactjs.svg";
import Next from "../../icons/nextjs-icon-svgrepo-com.svg";
import Tailwind from "../../icons/tailwind-css.svg";
import Bootstrap from "../../icons/bootstrap_5968672.png";
import Nodejs from "../../icons/nodejs.svg";
import Express from "../../icons/express-original.svg";
import Mongodb from "../../icons/mongodb-original.svg";
import Wordpress from "../../icons/wordpress-logo_63737.png";
import Angular from "../../icons/angular.svg";
import RxJS from "../../icons/rxjs.svg";
import Ionic from "../../icons/Ionic.svg";
import Postman from "../../icons/Postman.svg";
import Git from "../../icons/git.svg";
import GitHub from "../../icons/github_733609.png";
import Python from "../../icons/python_5968350.png";
import Django from "../../icons/django-svgrepo-com.svg";
import Docker from "../../icons/Docker.png";
import Putty from "../../icons/PuTTY_Icon.svg";
import WinSCP from "../../icons/Winscp.Net_idbkj8OMXb_0.png";

// Skill data organized by categories
const skillCategories = [
  {
    title: "Frontend Fundamentals",
    skills: [
      { name: "HTML", icon: Html, level: "Advanced" },
      { name: "CSS", icon: Css, level: "Advanced" },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: Js, level: "Advanced" },
      { name: "TypeScript", icon: Ts, level: "Intermediate" },
      { name: "Python", icon: Python, level: "Beginner" },
    ],
  },
  {
    title: "Frontend Frameworks",
    skills: [
      { name: "React", icon: ReactIcon, level: "Advanced" },
      { name: "Next.js", icon: Next, level: "Advanced" },
      { name: "Angular", icon: Angular, level: "Intermediate" },
    ],
  },
  {
    title: "Backend Frameworks",
    skills: [
      { name: "Node.js", icon: Nodejs, level: "Intermediate" },
      { name: "Express", icon: Express, level: "Intermediate" },
      { name: "Django", icon: Django, level: "Beginner" },
    ],
  },
  {
    title: "CSS Frameworks & Styling",
    skills: [
      { name: "Tailwind CSS", icon: Tailwind, level: "Advanced" },
      { name: "Bootstrap", icon: Bootstrap, level: "Intermediate" },
    ],
  },
  {
    title: "Database & Storage",
    skills: [{ name: "MongoDB", icon: Mongodb, level: "Intermediate" }],
  },
  {
    title: "Mobile & Reactive Programming",
    skills: [
      { name: "Ionic", icon: Ionic, level: "Intermediate" },
      { name: "RxJS", icon: RxJS, level: "Intermediate" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: Docker, level: "Intermediate" },
      { name: "Putty", icon: Putty, level: "Intermediate" },
      { name: "WinSCP", icon: WinSCP, level: "Intermediate" },
      { name: "Git", icon: Git, level: "Advanced" },
      { name: "GitHub", icon: GitHub, level: "Advanced" },
      { name: "Postman", icon: Postman, level: "Advanced" },
    ],
  },
  {
    title: "Platforms & CMS",
    skills: [{ name: "WordPress", icon: Wordpress, level: "Intermediate" }],
  },
];

function Skills() {
  const getLevelPercentage = (level) => {
    const levels = { Advanced: 90, Intermediate: 65, Beginner: 40 };
    return levels[level] || 50;
  };

  const getLevelColor = (level) => {
    const colors = {
      Advanced: "from-green-400 to-green-600",
      Intermediate: "from-yellow-400 to-yellow-600",
      Beginner: "from-blue-400 to-blue-600",
    };
    return colors[level] || "from-gray-400 to-gray-600";
  };

  return (
    <section
      id="skills"
      className="py-20 lg:py-32  w-[80%] m-auto text-white bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
            Technical Skills
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-brandyellow to-orange-400 rounded-full mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Mastering modern web technologies to build scalable, performant
            applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="space-y-20">
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

              {/* Skills Cards - Responsive sizing */}
              <div className="flex flex-wrap justify-center gap-6 max-w-7xl">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group relative bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 hover:border-brandyellow/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-brandyellow/10 flex flex-col items-center
                      w-48 p-4  /* Small mobile */
                      sm:w-56 sm:p-5  /* Larger mobile */
                      md:w-64 md:p-6  /* Tablet */
                      lg:w-72 lg:p-8  /* Desktop */"
                    data-aos="zoom-in"
                    data-aos-delay={skillIndex * 100}
                  >
                    {/* Skill Icon */}
                    <div className="flex justify-center mb-4">
                      <div className="relative">
                        <div
                          className="bg-white rounded-xl transition-all duration-500 group-hover:rounded-2xl group-hover:shadow-lg group-hover:shadow-brandyellow/20
                          p-2  /* Small mobile */
                          sm:p-3  /* Larger mobile */
                          md:p-3  /* Tablet */
                          lg:p-4  /* Desktop */"
                        >
                          <img
                            className="transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3
                              h-12 w-12  /* Small mobile */
                              sm:h-14 sm:w-14  /* Larger mobile */
                              md:h-16 md:w-16  /* Tablet */
                              lg:h-20 lg:w-20  /* Desktop */"
                            src={skill.icon}
                            alt={`${skill.name} icon`}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Skill Info */}
                    <div className="text-center mb-4 flex-grow w-full">
                      <h3
                        className="font-semibold text-white mb-2 group-hover:text-brandyellow transition-colors duration-300
                        text-base  /* Small mobile */
                        sm:text-lg  /* Larger mobile */
                        md:text-xl  /* Tablet */
                        lg:text-2xl  /* Desktop */"
                      >
                        {skill.name}
                      </h3>
                      <div className="flex items-center justify-center space-x-2">
                        <span
                          className={`font-medium px-2 py-1 rounded-full ${
                            skill.level === "Advanced"
                              ? "bg-green-500/20 text-green-300"
                              : skill.level === "Intermediate"
                              ? "bg-yellow-500/20 text-yellow-300"
                              : "bg-blue-500/20 text-blue-300"
                          }
                          text-xs  /* Small mobile */
                          sm:text-sm  /* Larger mobile */
                          md:text-sm  /* Tablet */
                          lg:text-base  /* Desktop */`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-4 w-full">
                      <div
                        className="flex justify-between text-gray-400 mb-1
                        text-xs  /* Small mobile */
                        sm:text-xs  /* Larger mobile */
                        md:text-sm  /* Tablet */
                        lg:text-sm  /* Desktop */"
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

                    {/* Hover Effect Glow */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brandyellow/10 to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-20 bg-gradient-to-r from-white/5 to-white/10 rounded-3xl p-8 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-brandyellow">20+</div>
              <div className="text-gray-400">Technologies</div>
              <div className="text-sm text-gray-500">
                Mastered across full stack
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-brandyellow">10+</div>
              <div className="text-gray-400">Projects Completed</div>
              <div className="text-sm text-gray-500">
                Production ready solutions
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
