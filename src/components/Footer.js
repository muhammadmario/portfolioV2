import React from "react";
import { IoLogoGithub, IoLogoInstagram, IoHeartSharp } from "react-icons/io5";
import { SiLinkedin } from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-[#EEEEEE] md:px-4 py-3 mt-7 grid grid-cols-3 border-[#2C3333] border-t-2">
      <ul className="flex justify-center items-center flex-col ">
        <li className="flex justify-center items-center flex-col text-sm">
          Build with <IoHeartSharp /> 2022
        </li>
      </ul>

      <ul className="flex justify-center md:items-center flex-col ">
        <a href="https://github.com/muhammadmario">
          <li className="flex justify-center md:items-center text-sm">
            <IoLogoGithub /> Muhammad Mario
          </li>
        </a>

        <a href="https://www.instagram.com/mariobaron_/?hl=en">
          <li className="flex justify-center md:items-center text-sm">
            <IoLogoInstagram /> MarioBaron_
          </li>
        </a>
        <li className="flex justify-center md:items-center text-sm">
          <SiLinkedin />
          Muhammad Mario
        </li>
      </ul>

      <ul className="flex justify-center md:items-center flex-col ">
        <a href="#home">
          <li className="text-sm text-center">Home</li>
        </a>
        <a href="#about">
          <li className="text-sm text-center">About</li>
        </a>
        <a href="#project">
          <li className="text-sm text-center">Project</li>
        </a>
        <a href="#skills">
          <li className="text-sm text-center">Skills</li>
        </a>
        <a href="#contact">
          <li className="text-sm text-center">Contact</li>
        </a>
      </ul>
    </footer>
  );
}

export default Footer;
