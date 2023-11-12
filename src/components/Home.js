import React from "react";
import heroImg from "../assets/img/heroImg2.png";

function Home() {
  return (
    <div
      className="flex w-full flex-col mt-14 md:flex-row md:px-14 lg:px-28 overflow-x-hidden"
      id="home"
    >
      <div className="w-full flex flex-col justify-center gap-5 md:w-1/2 ">
        <h1 className="font-bold text-2xl text-center md:text-4xl">
          Muhammad Mario Wijatmika
        </h1>
        <p className="font-light text-justify px-4">
          I'm passionate about frontend developer. Maybe fullstack developer
          soon! 🐱‍🏍✨ I'm an ingenious web developer oriented to the frontend,
          i really on the most outstanding open source libraries React JS being
          these my tools to be able to solve any challenge posed in my work
          life. This page is an example of my skills as frontend developer.🔥
        </p>
      </div>
      <div className="w-full flex justify-center md:w-1/2 ">
        <img
          src={heroImg}
          alt="heroImg"
          className="bg-contain z-30 px-2 md:px-0 w-3/4 md:w-fit"
        />
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden md:block md:absolute w-1/2 h-full top-0"
        >
          <path
            fill="#3d3c49"
            d="M35.2,-57.9C44.6,-48.8,50.4,-37.2,60.3,-24.8C70.3,-12.4,84.3,0.9,85.9,14.6C87.4,28.4,76.5,42.6,63.8,53C51.2,63.4,36.8,70,23.5,68.8C10.1,67.6,-2.3,58.7,-17.3,55.7C-32.3,52.8,-50.1,55.8,-61.4,49.4C-72.8,43.1,-77.7,27.5,-76.6,13.1C-75.5,-1.4,-68.2,-14.6,-59.9,-25.1C-51.6,-35.6,-42.2,-43.3,-32,-52.1C-21.9,-60.9,-10.9,-70.7,1,-72.2C12.9,-73.8,25.8,-67,35.2,-57.9Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </div>
  );
}

export default Home;
