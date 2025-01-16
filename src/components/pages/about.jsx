// import React from "react";
import Resumebtn from "../pages/resumebtn";
import AboutImage from "../../assets/Aboutimage.png";
// import Form from "../Form/form";

function About() {
  return (
    <div className="">
      <div className="w-[80%]  m-auto mt-14 flex flex-wrap justify-between">
        <div className="w-[700px]">
          <h1 className="heroheader font-bold text-6xl leading-snug">
            About me
          </h1>
          <p className="short-description tracking-tighter text-grey text-xl mt-5 text-justify">
            From a young age, I have always been captivated by the world of
            technology. As a curious boy, I often found myself dismantling
            computers and gadgets around my childhood home, driven by a
            relentless desire to understand how things worked. This passion for
            computing ignited a lifelong journey of exploration and learning in
            the tech field. In 2019, I took my first steps into web development
            by learning HTML and CSS. I quickly grasped the basics of styling
            and structure but had to pause my learning due to challenges with my
            device and the need to focus on my academic journey. That same year,
            I gained admission to study Computer Engineering, a field that
            allowed me to deepen my understanding of hardware and software
            systems. After earning my B.Eng degree in 2024, I decided to pursue
            my passion for software development by enrolling in a specialized
            tech school. Over six months of intensive training, I honed my
            skills in both Front-End and Back-End web development, emerging as a
            proficient Full-Stack Developer. During this time, I mastered
            building full-stack applications from scratch, gained expertise in
            database management, API integration, and deployment, and developed
            an appreciation for creating scalable and efficient solutions.
            Today, as a Full-Stack Developer, I am committed to leveraging my
            technical knowledge and problem-solving skills to design and build
            robust web applications that meet modern needs. My journey reflects
            not just a career choice but a passion for technology and innovation
            that continues to drive me every day.
          </p>
          <div className="flex gap-3 mt-6">
            <Resumebtn />
          </div>
        </div>

        <div className="h-fit w-full md:w-1/2 flex justify-center relative">
          <img
            src={AboutImage}
            alt="Madelyn Torff"
            className="w-[80%] max-w-xs md:max-w-md rounded-full ml-auto mt-4"
          />
        </div>
      </div>

      {/* Include the Form component here */}
      <div className=" mx-auto justify-center mt-24 mb-96">
        {/* <Form /> */}
      </div>
    </div>
  );
}

export default About;
