import React, { useState } from 'react';
import GitHubbtn from "./githubbtn";
import Linkedinbtn from "./linkedinbtn";
import HeroImage from "../../assets/Portfolio-img.png"

function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="absolute shadow-xl bg-brandyellow rounded-r-full w-[95%]   h-[600px] z-10 ">
    <div className="w-[80%] m-auto  mt-14 flex  flex-wrap justify-between">
      <div className="w-[700px]">
        <p className=" skilltxt text-white font-bold text-[17px]">
          WEB DEVELOPER
        </p>
        <h1 className="heroheader font-bold text-[46px] leading-snug">
          Hello, my name is Olorunda Victory
        </h1>

        <p className=" short-description text-grey text-2xl mt-5">I am a Full-stack web developer, based in Lagos, Nigeria.</p>

      <div className="flex gap-3 mt-6">
        <GitHubbtn />
        <Linkedinbtn />
      </div>  
      </div>
      

      <div className="w-full md:w-1/2 flex justify-center relative">
            <img 
                src={HeroImage} 
                alt="Madelyn Torff" 
                style={{ 
                    filter: isHovered ? 'brightness(100%)' : 'brightness(95%)' 
                }} 
                className="transition-transform duration-200 hover:scale-110 max-w-xs md:max-w-md rounded-full ml-auto mt-4" 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onError={(e) => { 
                    e.target.onerror = null; 
                    e.target.src="/path/to/fallback-image.png"; 
                }} 
            />
        </div>
    </div>
    </div>
  );
}

export default Hero;
