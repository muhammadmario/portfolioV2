import React from "react";
import heroImg from "../assets/img/heroImg2.png";

function Home() {
  return (
    <div
      className="flex w-full flex-col mt-14 md:flex-row md:px-14 lg:px-28"
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
      <div className="w-full flex justify-center md:border-[#2C3333] md:border-l-2 md:borderb2 md:w-1/2 ">
        <img src={heroImg} alt="heroImg" className="bg-contain z-30" />
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[600px] h-[600px] absolute "
        >
          <path
            fill="#00000"
            width="600"
            height="600"
            d="M41.2,-69.6C50.6,-66,53.4,-49.2,60.3,-35.4C67.2,-21.6,78.2,-10.8,79.6,0.8C80.9,12.4,72.6,24.7,64.9,37.2C57.2,49.7,50.2,62.3,39.5,63.8C28.8,65.4,14.4,55.9,0.8,54.5C-12.8,53.1,-25.5,59.7,-37.9,59.1C-50.2,58.5,-62.2,50.6,-67.3,39.6C-72.5,28.5,-70.9,14.3,-67.5,2C-64,-10.3,-58.6,-20.5,-51,-27.3C-43.4,-34.2,-33.5,-37.6,-24.7,-41.5C-15.8,-45.4,-7.9,-49.7,4,-56.7C15.9,-63.7,31.8,-73.2,41.2,-69.6Z"
            transform="translate(100 100)"
          />
        </svg>
        {/* <div className="relative">
          <img
            src={heroImg}
            alt="heroImg"
            className="absolute hidden inset-0 md:block "
          />
          <span>
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[400px] h-[400px] md:w-full md:h-full"
            >
              <path
                fill="#00000"
                width="600"
                height="600"
                d="M41.2,-69.6C50.6,-66,53.4,-49.2,60.3,-35.4C67.2,-21.6,78.2,-10.8,79.6,0.8C80.9,12.4,72.6,24.7,64.9,37.2C57.2,49.7,50.2,62.3,39.5,63.8C28.8,65.4,14.4,55.9,0.8,54.5C-12.8,53.1,-25.5,59.7,-37.9,59.1C-50.2,58.5,-62.2,50.6,-67.3,39.6C-72.5,28.5,-70.9,14.3,-67.5,2C-64,-10.3,-58.6,-20.5,-51,-27.3C-43.4,-34.2,-33.5,-37.6,-24.7,-41.5C-15.8,-45.4,-7.9,-49.7,4,-56.7C15.9,-63.7,31.8,-73.2,41.2,-69.6Z"
                transform="translate(100 100)"
              />
            </svg>
          </span>
        </div> */}
      </div>
    </div>
  );
}

export default Home;
