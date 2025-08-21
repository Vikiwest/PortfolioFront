// import React from "react";
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

function Projects() {
  return (
    <div id="projects" className="mt-[205px]">
      <h2 className="proj-header font-bold text-5xl text-center ">Projects</h2>
      <div className="mt-5 h-[4px]  w-[100px] m-auto bg-brandyellow rounded-full" />

      <div className="m-auto w-[90%] md:w-[70%] flex flex-wrap mt-20   ">
        <div className="w-full md:w-[666px] h-auto">
          <img className="rounded-l-3xl    shadow-lg " src={AuthApp} alt="" />
        </div>

        <div className="w-full md:w-[666px] h-auto bg-OffWhite shadow-lg  rounded-r-3xl pt-10 pl-9 pr-9 pb-4 space-y-3">
          <h2 className="weather-app text-[32px] md:text-[40px] font-bold leading-[1.5]">
            Auth App
          </h2>
          <p className="weather-app-desc text-grey text-[18px] leading-[px]">
            Just a simple dashboard that has activity logs, and file uploads
          </p>
          <div className="mt-8 mb-5">
            <a
              href="https://auth-file-upload-dashboard.vercel.app/"
              target="_blank"
            >
              {" "}
              <Viewprojbtn />
            </a>
          </div>
        </div>
      </div>

      <div className="m-auto w-[90%] md:w-[70%] flex flex-wrap mt-20  rounded-lg ">
        <div className="w-full md:w-[666px] h-auto bg-OffWhite shadow-lg  rounded-l-3xl pt-10 pl-9 pr-9 pb-4 space-y-3">
          <h2 className="weather-app text-[32px] md:text-[40px] font-bold leading-[1.5]">
            Myxellia Dashboard
          </h2>
          <p className="weather-app-desc text-grey text-[18px] leading-[px]">
            This is a dashboard for monitoring business activities, platform
            users and other business activities. I built this using Next.Js,
            Tailwindcss, Typescript.
          </p>
          <div className="mt-8 mb-5">
            <a href="https://myxellia-delta-livid.vercel.app/" target="_blank">
              <Viewprojbtn />
            </a>
          </div>
        </div>
        <div className="w-full md:w-[666px] h-auto">
          <img className="rounded-r-3xl    shadow-lg " src={Myxellia} alt="" />
        </div>
      </div>

      <div className="m-auto w-[90%] md:w-[70%] flex flex-wrap mt-20   ">
        <div className="w-full md:w-[666px] h-auto">
          <img
            className="rounded-l-3xl    shadow-lg "
            src={EduManager}
            alt=""
          />
        </div>

        <div className="w-full md:w-[666px] h-auto bg-OffWhite shadow-lg  rounded-r-3xl pt-10 pl-9 pr-9 pb-4 space-y-3">
          <h2 className="weather-app text-[32px] md:text-[40px] font-bold leading-[1.5]">
            Edu Manager{" "}
          </h2>
          <p className="weather-app-desc text-grey text-[18px] leading-[px]">
            This is an App for managing students activities, and also has a
            student dashboard for students to checkout activities and other
            necessary curicular activities.
          </p>
          <div className="mt-8 mb-5">
            <a href="https://edu-manager-lyart.vercel.app/" target="_blank">
              {" "}
              <Viewprojbtn />
            </a>
          </div>
        </div>
      </div>

      <div className="m-auto w-[90%] md:w-[70%] flex flex-wrap mt-20  rounded-lg ">
        <div className="w-full md:w-[666px] h-auto bg-OffWhite shadow-lg  rounded-l-3xl pt-10 pl-9 pr-9 pb-4 space-y-3">
          <h2 className="weather-app text-[32px] md:text-[40px] font-bold leading-[1.5]">
            Weather App
          </h2>
          <p className="weather-app-desc text-grey text-[18px] leading-[px]">
            I created this personal project using Html, Css and Javascript, in
            order to show how api controlled websites work. This is a web based
            weather application. It has the basic functionalities of a weather
            app. The Api i used allows to search for any location in the world,
            showing the weather conditions for that location.
          </p>
          <div className="mt-8 mb-5">
            <a href="https://weatherapp-1s0v.onrender.com/" target="_blank">
              <Viewprojbtn />
            </a>
          </div>
        </div>
        <div className="w-full md:w-[666px] h-auto">
          <img
            className="rounded-r-3xl    shadow-lg "
            src={WeatherApp}
            alt=""
          />
        </div>
      </div>

      <div className="m-auto w-[90%] md:w-[70%] flex flex-wrap mt-20   ">
        <div className="w-full md:w-[666px] h-auto">
          <img className="rounded-l-3xl    shadow-lg " src={Bngoon} alt="" />
        </div>

        <div className="w-full md:w-[666px] h-auto bg-OffWhite shadow-lg  rounded-r-3xl pt-10 pl-9 pr-9 pb-4 space-y-3">
          <h2 className="weather-app text-[32px] md:text-[40px] font-bold leading-[1.5]">
            Bngoon E-commerse
          </h2>
          <p className="weather-app-desc text-grey text-[18px] leading-[px]">
            This was one of the first demo websites i created using just Html
            and Css. It is Ui responsive and adjusts to all screen sizes.
          </p>
          <div className="mt-8 mb-5">
            <a href="https://vikiwest.github.io/bngoon/" target="_blank">
              {" "}
              <Viewprojbtn />
            </a>
          </div>
        </div>
      </div>

      <div className="m-auto w-[90%] md:w-[70%] flex flex-wrap mt-20  rounded-lg ">
        <div className="w-full md:w-[666px] h-auto bg-OffWhite shadow-lg  rounded-l-3xl pt-10 pl-9 pr-9 pb-4 space-y-3">
          <h2 className="weather-app text-[32px] md:text-[40px] font-bold leading-[1.5]">
            Active Catering Craft
          </h2>
          <p className="weather-app-desc text-grey text-[18px] leading-[px]">
            I created this simple website for a client using html, css and
            Javascript. This website helps my clients customers to have direct
            access to her because she had previously complained about people
            pretending to be her and selling her books online. So i just created
            something simple and user friendly so her customers can easily
            navigate through the website and find her and get in touch with her
            easily.
          </p>
          <div className="mt-8 mb-5">
            <a
              href="https://vikiwest.github.io/active-catering-craft-practice/products.html"
              target="_blank"
            >
              <Viewprojbtn />
            </a>
          </div>
        </div>
        <div className="w-full md:w-[666px] h-auto">
          <img
            className="rounded-r-3xl    shadow-lg "
            src={ActiveCatering}
            alt=""
          />
        </div>
      </div>

      <div className="m-auto w-[90%] md:w-[70%] flex flex-wrap mt-20   ">
        <div className="w-full md:w-[666px] h-auto">
          <img className="rounded-l-3xl    shadow-lg " src={Tariq} alt="" />
        </div>

        <div className="w-full md:w-[666px] h-auto bg-OffWhite shadow-lg  rounded-r-3xl pt-10 pl-9 pr-9 pb-4 space-y-3">
          <h2 className="weather-app text-[32px] md:text-[40px] font-bold leading-[1.5]">
            99Tariq Fashion
          </h2>
          <p className="weather-app-desc text-grey text-[18px] leading-[px]">
            This is a simple fashion website for users to view displayed,
            available products for purchase. I built this web app using just
            Html and Css. It is mobile responsive and adjusts to all screen
            sizes.
          </p>
          <div className="mt-8 mb-5">
            <a
              href="https://vikiwest.github.io/99Tariq-Fashion/"
              target="_blank"
            >
              {" "}
              <Viewprojbtn />
            </a>
          </div>
        </div>
      </div>

      <div className="m-auto w-[90%] md:w-[70%] flex flex-wrap mt-20  rounded-lg ">
        <div className="w-full md:w-[666px] h-auto bg-OffWhite shadow-lg  rounded-l-3xl pt-10 pl-9 pr-9 pb-4 space-y-3">
          <h2 className="weather-app text-[32px] md:text-[40px] font-bold leading-[1.5]">
            My Portfolio
          </h2>
          <p className="weather-app-desc text-grey text-[18px] leading-[px]">
            I created this website using React and tailwindcss.I added a little
            bit of backend functionality to it so that users can send me emails
            directly from the website, using nodemailer. It is user friendly and
            adjusts to all screen sizes.
          </p>
          <div className="mt-8 mb-5">
            <a
              href="https://portfoliofront-nppt.onrender.com/contact"
              target="_blank"
            >
              <Viewprojbtn />
            </a>
          </div>
        </div>
        <div className="w-full md:w-[666px] h-auto">
          <img
            className="rounded-r-3xl    shadow-lg "
            src={myPortfolio}
            alt=""
          />
        </div>
      </div>

      <div className="m-auto w-[90%] md:w-[70%] flex flex-wrap mt-20  rounded-lg ">
        <div className="w-full md:w-[666px] h-auto bg-white ">
          <img
            className="rounded-l-3xl    shadow-lg "
            src={sabitok}
            alt="h-[500px]"
          />
        </div>
        <div className="w-full md:w-[666px] h-auto bg-OffWhite shadow-lg  rounded-r-3xl pt-10 pl-9 pr-9 pb-4 space-y-3">
          <h2 className="weather-app text-[32px] md:text-[40px] font-bold leading-[1.5]">
            Sabitok
          </h2>
          <p className="weather-app-desc text-grey text-[18px] leading-[px]">
            Sabitok is a web application that enhances user expression and
            emotional clarity through smart AI tools. The platform takes in
            user-submitted responses and generates context-aware suggested
            replies based on custom settings selected by the user (e.g. tone,
            intent, or style). It also features a text rephraser, allowing users
            to refine or adjust messages before sending them to someone. I
            worked closely with the design and product team including a backend
            developer to build thi responsive user interface. <br /> <br />{" "}
            ©️Monsieur Cruise LTD
          </p>
          <div className="mt-8 mb-5">
            <a href="https://www.sabitok.com" target="_blank">
              <Viewprojbtn />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
