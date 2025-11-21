import React from 'react'
import Footerimg from "../assets/footer.png";
import Instagram from "../icons/Instagram.svg";
import LinkedIn from "../icons/LinkedIn.svg";
import Mail from "../icons/Mail.svg";
import Twitter from "../icons/twitter (1).svg";

function Footer() {
  const currentYear = new Date().getFullYear();

  // Social links data
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/victory-olorunda-aa615030a/",
      icon: LinkedIn,
      alt: "LinkedIn Profile"
    },
    {
      name: "Instagram", 
      url: "https://www.instagram.com/viki__west/",
      icon: Instagram,
      alt: "Instagram Profile"
    },
    {
      name: "Twitter",
      url: "https://x.com/VOlorunda",
      icon: Twitter,
      alt: "Twitter Profile"
    },
    {
      name: "Email",
      url: "mailto:chidiolorunda@gmail.com",
      icon: Mail,
      alt: "Send Email"
    }
  ];

  const handleSocialClick = (platform, url) => {
    console.log(`Opening ${platform}: ${url}`);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="relative bg-gradient-to-t from-black to-gray-900 pt-20 pb-8 mt-32">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4">
        {/* Social Links */}
        <div className="flex flex-col items-center space-y-8 mb-12">
          <h3 className="text-2xl font-bold text-white text-center">
            Let's Connect & Build Something Amazing
          </h3>
          
          <div className="flex gap-6 items-center justify-center">
            {socialLinks.map((social) => (
              <button
                key={social.name}
                onClick={() => handleSocialClick(social.name, social.url)}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 transition-all duration-300 hover:bg-brandyellow/20 hover:border-brandyellow/50 hover:scale-110 hover:shadow-lg hover:shadow-brandyellow/20 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brandyellow/50"
                aria-label={`Visit my ${social.name}`}
              >
                <img 
                  src={social.icon} 
                  alt={social.alt}
                  className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" 
                  onError={(e) => {
                    console.error(`Failed to load ${social.name} icon`);
                    e.target.style.display = 'none';
                  }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        {/* <div className="text-center mb-12">
          <p className="text-gray-300 text-lg mb-4">
            Ready to bring your ideas to life?
          </p>
          <a 
            href="mailto:chidiolorunda@gmail.com" 
            className="text-brandyellow text-xl font-semibold hover:text-orange-400 transition-colors duration-300 underline hover:no-underline"
          >
            chidiolorunda@gmail.com
          </a>
        </div> */}

        {/* Quick Actions */}
        <div className="flex justify-center gap-4 mb-12">
          {/* <a
            href="#projects"
            className="bg-brandyellow hover:bg-orange-500 text-black font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-brandyellow/25"
          >
            View Projects
          </a> */}
          <a
            href="/contact"
            className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-full border border-white/20 transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center border-t text-white border-white/10 pt-8">
          <p className="text-gray-400">
            &copy; {currentYear} Olorunda Victory. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Crafted with passion and modern web technologies
          </p>
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <img 
          className="w-full h-auto opacity-20" 
          src={Footerimg} 
          alt="Footer Background" 
          onError={(e) => {
            console.error("Failed to load footer background image");
            e.target.style.display = 'none';
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
    </footer>
  );
}

export default Footer;