import React from "react";
import Resumebtn from "../pages/resumebtn";
import AboutImage from "../../assets/Aboutimage.png";

function About() {
  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Text Content */}
          <div className="flex-1 space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-4">
                <div className="w-2 h-2 bg-brandyellow rounded-full animate-pulse"></div>
                <span className="text-white font-medium text-sm tracking-wide">
                  MY JOURNEY
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">About</span>
                <br />
                <span className="bg-gradient-to-r text-white/10 from-brandyellow to-orange-400 bg-clip-text text-transparent">
                  Me
                </span>
              </h1>

              <div className="w-24 h-1 bg-gradient-to-r from-brandyellow to-orange-400 rounded-full"></div>
            </div>

            {/* Story Content */}
            <div className="space-y-6">
              <p className="text-lg text-white leading-relaxed">
                From a young age, I've been captivated by technology. As a
                curious child, I often found myself dismantling computers and
                gadgets, driven by a relentless desire to understand how things
                worked. This passion ignited a lifelong journey of exploration
                in the tech field.
              </p>

              <p className="text-lg text-white leading-relaxed">
                In 2019, I took my first steps into web development with HTML
                and CSS, quickly grasping the basics of styling and structure.
                That same year, I began my formal education in Computer
                Engineering, deepening my understanding of hardware and software
                systems.
              </p>

              <p className="text-lg text-white leading-relaxed">
                After earning my B.Eng degree in 2024, I pursued my passion for
                software development through intensive training. Over six
                months, I honed my skills in both Front-End and Back-End
                development, emerging as a proficient Full-Stack Developer.
              </p>

              <p className="text-lg text-white leading-relaxed">
                Today, I'm committed to leveraging my technical knowledge and
                problem-solving skills to design robust web applications that
                meet modern needs. My journey reflects not just a career choice,
                but a passion for technology and innovation that continues to
                drive me forward.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-brandyellow rounded-full"></div>
                <span className="text-white font-medium">
                  Full-Stack Development
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-brandyellow rounded-full"></div>
                <span className="text-white font-medium">Problem Solving</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-brandyellow rounded-full"></div>
                <span className="text-white font-medium">
                  Modern Technologies
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-brandyellow rounded-full"></div>
                <span className="text-white font-medium">
                  Scalable Solutions
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <Resumebtn />
            </div>
          </div>

          {/* Image Content */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background Elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-brandyellow/10 to-orange-400/10 rounded-3xl blur-xl"></div>
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-brandyellow rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-blue-500 rounded-full animate-bounce"></div>

              {/* Image Container */}
              <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <img
                  src={AboutImage}
                  alt="Olorunda Victory - Full Stack Developer"
                  className="w-full max-w-md rounded-2xl shadow-2xl relative z-10"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/path/to/fallback-image.png";
                  }}
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
                <span className="text-white font-semibold text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-brandyellow rounded-full animate-pulse"></span>
                  Passionate Developer
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-brandyellow/30 transition-all duration-300">
            <div className="text-3xl font-bold text-brandyellow mb-2">3+</div>
            <div className="text-white font-medium">Years in Tech</div>
            <div className="text-white text-sm mt-2">
              From curiosity to career
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-brandyellow/30 transition-all duration-300">
            <div className="text-3xl font-bold text-brandyellow mb-2">10+</div>
            <div className="text-white font-medium">Projects Built</div>
            <div className="text-white text-sm mt-2">
              Production ready solutions
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-brandyellow/30 transition-all duration-300">
            <div className="text-3xl font-bold text-brandyellow mb-2">20+</div>
            <div className="text-white font-medium">Technologies</div>
            <div className="text-white text-sm mt-2">Across full stack</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
