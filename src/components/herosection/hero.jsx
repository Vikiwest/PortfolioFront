import React, { useState } from "react";
import GitHubbtn from "./githubbtn";
import Linkedinbtn from "./linkedinbtn";
import HeroImage from "../../assets/Portfolio-img.jpeg";

function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black mt-[100px] md:mt-[0px] ">
      {/* Background Gradient Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brandyellow/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-brandyellow rounded-full animate-pulse"></div>
              <span className="text-white font-medium text-sm tracking-wide">
                FULL STACK DEVELOPER
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-white">Hello, I'm</span>
              <br />
              <span className="bg-gradient-to-r from-brandyellow to-orange-400 bg-clip-text text-[#212121] ">
                Olorunda <span className="text-brandyellow">Victory</span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl sm:text-2xl text-white max-w-2xl leading-relaxed">
              Frontend developer specializing in React & Next.js. I build
              high-performance applications that improve user engagement and
              drive business results—like securing payment gateway approvals
              that enable revenue growth.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
              <div className="flex gap-4">
                <GitHubbtn />
                <Linkedinbtn />
              </div>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-brandyellow hover:bg-orange-500 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-brandyellow/25"
              >
                View My Work
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
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </a>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-white/20">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white">3+</div>
                <div className="t text-sm text-white">
                  Production Applications
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white">30%</div>
                <div className=" text-sm text-white">
                  Performance Improvements
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white">100%+</div>
                <div className="text-sm text-white">WCAG Compliant</div>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="flex-1 flex justify-center lg:justify-end relative">
            <div className="relative">
              {/* Background Glow */}
              <div
                className={`absolute inset-0 bg-brandyellow/20 rounded-full blur-3xl transition-all duration-500 ${
                  isHovered ? "scale-125 opacity-100" : "scale-100 opacity-50"
                }`}
              ></div>

              {/* Image Container */}
              <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-4 transform perspective-1000">
                <img
                  src={HeroImage}
                  alt="Olorunda Victory - Full Stack Developer"
                  className={`relative z-10 w-80 h-80 sm:w-96 sm:h-96 object-cover rounded-2xl shadow-2xl transition-all duration-700 ${
                    isHovered
                      ? "scale-110 rotate-3 shadow-brandyellow/25"
                      : "scale-100 shadow-black/50"
                  }`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/path/to/fallback-image.png";
                  }}
                />

                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-brandyellow rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-500 rounded-full animate-bounce delay-1000"></div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
                <span className="text-white font-semibold text-sm">
                  🚀
                  {/* 3+ Years Experience */}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brandyellow rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
