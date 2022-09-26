import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import {
  IoLogoGithub,
  IoLogoLaravel,
  IoLogoReact,
  IoLogoHtml5,
  IoLogoJavascript,
} from "react-icons/io5";
import { SiRedux, SiCss3, SiTailwindcss, SiBootstrap } from "react-icons/si";

function Skill() {
  return (
    <div
      className="flex w-full flex-col px-2 mt-7 gap-3 md:gap-0 md:mt-7 "
      id="skills"
    >
      <h1 className="font-bold text-xl text-center md:text-3xl">Skills</h1>
      {/* <div className="flex justify-center items-center flex-col md:flex-row gap-8 bg-[#EEEEEE] md:mt-5"> */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:flex lg:justify-center lg:gap-14 bg-[#EEEEEE] md:mt-5 md:py-4">
        <div className="flex flex-col justify-center items-center">
          <IoLogoHtml5 style={{ fontSize: "90px" }} />
          <span>HTML</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <SiCss3 style={{ fontSize: "80px" }} />
          <span>CSS</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <IoLogoJavascript style={{ fontSize: "80px" }} />
          <span>Javascript</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <IoLogoReact style={{ fontSize: "90px" }} />
          <span>React JS</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <SiRedux style={{ fontSize: "90px" }} />
          <span>Redux</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <IoLogoLaravel style={{ fontSize: "90px" }} />
          <span>Laravel</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <SiTailwindcss style={{ fontSize: "80px" }} />
          <span>Tailwind</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <SiBootstrap style={{ fontSize: "80px" }} />
          <span>Bootstrap</span>
        </div>
      </div>
    </div>
  );
}

export default Skill;
