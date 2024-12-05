import React from "react";
import Viewprojbtn from "./viewprojbtn";
import WeatherApp from "../../assets/WeatherAPP.png";
import Bngoon from "../../assets/Bngoon.png"
function Projects() {
  return (
    <div id="projects" className="mt-[205px]">
      <h2 className="proj-header font-bold text-5xl text-center ">Projects</h2>
      <div className="mt-5 h-[4px]  w-[100px] m-auto bg-brandyellow rounded-full" />

      <div className="m-auto w-[90%] md:w-[70%] flex flex-wrap mt-20  rounded-lg ">
        <div className="w-full md:w-[666px] h-auto bg-OffWhite shadow-lg  rounded-l-3xl pt-10 pl-9 pr-9 ">
          <h2 className="weather-app text-[32px] md:text-[40px] font-bold leading-[1.5]">
            Weather App
          </h2>
          <p className="weather-app-desc text-grey text-[18px] leading-[px]">
            I created this personal project using Html, Css and Javascript, in order to show how api controlled
            websites work. This is a web based weather application. It has the
            basic functionalities of a weather app. The Api i used allows to
            search for any location in the world, showing the weather
            conditions for that location.
          </p>
          <div className="mt-8 mb-5">
            <a href="https://weatherapp-1s0v.onrender.com/" target='_blank'><Viewprojbtn /></a>
          </div>
        </div>
        <div className="w-full md:w-[666px] h-auto">
          <img className="rounded-r-3xl    shadow-lg " src={WeatherApp} alt="" />
        </div>
      </div>

      
      <div className="m-auto w-[90%] md:w-[70%] flex flex-wrap mt-20   ">
 <div className="w-full md:w-[666px] h-auto">
          <img className="rounded-l-3xl    shadow-lg " src={Bngoon} alt="" />
        </div>

        <div className="w-full md:w-[666px] h-auto bg-OffWhite shadow-lg  rounded-r-3xl pt-10 pl-9 pr-9 ">
          <h2 className="weather-app text-[32px] md:text-[40px] font-bold leading-[1.5]">
          Bngoon E-commerse
          </h2>
          <p className="weather-app-desc text-grey text-[18px] leading-[px]">
            This was one of the first demo websites i created using just Html and Css. It is Ui responsive and adjusts to  all screen sizes.
          </p>
          <div className="mt-8 mb-5">
           <a href="https://vikiwest.github.io/bngoon/" target="_blank"> <Viewprojbtn /></a>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default Projects;
