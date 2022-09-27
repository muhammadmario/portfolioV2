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
      <div className="w-full flex justify-center md:border-[#2C3333] md:border-l-2  md:w-1/2 ">
        <img
          src={heroImg}
          alt="heroImg"
          className="bg-contain z-30 px-2 md:px-0 w-3/4 md:w-fit"
        />

        {/* <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden md:block md:absolute w-1/2 h-full top-0"
        >
          <path
            fill="#363642"
            d="M44.9,-67.6C58.3,-61.2,69.5,-49,77.1,-34.6C84.7,-20.1,88.7,-3.4,86.5,12.5C84.3,28.4,76,43.5,64.8,55.9C53.7,68.3,39.7,78,24.9,80.2C10.1,82.5,-5.5,77.3,-21.9,73.2C-38.3,69,-55.5,66,-62.4,55.5C-69.4,45,-66.2,27,-67.8,10.3C-69.4,-6.5,-75.8,-22,-73.4,-36C-70.9,-50,-59.5,-62.4,-45.8,-68.6C-32.1,-74.9,-16,-75,-0.2,-74.7C15.7,-74.5,31.4,-73.9,44.9,-67.6Z"
            transform="translate(100 100)"
          />
        </svg> */}
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

        {/* <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden md:block md:absolute w-1/2 h-full top-0"
        >
          <path
            fill="#000000"
            d="M41.5,-65.4C55.5,-55.7,69.5,-46.9,77.9,-34C86.3,-21.1,89,-3.9,86,11.9C83,27.8,74.4,42.4,63.8,56.1C53.2,69.9,40.6,82.7,25.1,88.6C9.6,94.6,-8.8,93.7,-23.3,86.3C-37.8,78.9,-48.4,65,-58,51.5C-67.6,38.1,-76.3,25.2,-79.6,10.7C-82.8,-3.8,-80.7,-19.8,-73.7,-33C-66.6,-46.1,-54.7,-56.3,-41.6,-66.4C-28.5,-76.5,-14.2,-86.6,-0.2,-86.2C13.8,-85.9,27.6,-75.1,41.5,-65.4Z"
            transform="translate(100 100)"
          />
        </svg> */}
      </div>
    </div>
  );
}

export default Home;
