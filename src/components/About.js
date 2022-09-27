import React from "react";
import {
  IoAccessibilityOutline,
  IoPlanetOutline,
  IoCallOutline,
  IoMailOutline,
} from "react-icons/io5";
import dicodingLogo from "../assets/img/dicodingLogo.png";
import bnspLogo from "../assets/img/bnspLogo.png";

function About() {
  return (
    <div
      className="flex w-full flex-col mt-7 gap-7 md:gap-0 md:mt-0 md:flex-row md:px-28"
      id="about"
    >
      <div className="w-full flex flex-col justify-center px-4 md:px-0 md:w-1/2 md:border-[#2C3333] md:border-t-2">
        <h2 className="font-bold text-xl text-center md:text-start">About</h2>
        <ul className="flex flex-col gap-3 mt-3">
          <li className="flex gap-2 items-center">
            <IoAccessibilityOutline style={{ fontSize: "30px" }} />
            Name : Muhammad Mario Wijatmika
          </li>
          <li className="flex gap-2 items-center">
            <IoPlanetOutline style={{ fontSize: "30px" }} />
            Address : Baturraden, Banyumas
          </li>
          <li className="flex gap-2 items-center">
            <IoCallOutline style={{ fontSize: "30px" }} />
            No HP : 081215587619
          </li>
          <li className="flex gap-2 items-center">
            <IoMailOutline style={{ fontSize: "30px" }} />
            E-mail : mariobaron1210@gmail.com
          </li>
        </ul>
      </div>
      <div className="w-full flex flex-col justify-center gap-3 px-4 md:gap-6 md:px-0  md:w-1/2 ">
        <h2 className="font-bold text-xl text-center md:mt-16">Certificate</h2>
        <div className="flex items-center justify-between min-h-[96px]">
          <div className="flex gap-2 items-center">
            <img
              src={dicodingLogo}
              alt="dicodingLogo"
              className="aspect-square h-11 md:h-24"
            />
            <div>
              <h3 className="font-light">Dicoding</h3>
              <p className="text-sm md:font-bold">
                Menjadi Front-End Web Developer Expert
              </p>
            </div>
          </div>
          <a
            href="expert.pdf"
            download="expert.pdf"
            className="border-[#2C3333] border px-2 py-1 md:px-4 md:py-2 hover:bg-[#2C3333] transition  hover:text-[#eeeeee]"
          >
            Download
          </a>
        </div>
        <div className="flex items-center gap-2 justify-between min-h-[96px]">
          <div className="flex gap-2 items-center">
            <img
              src={dicodingLogo}
              alt="dicodingLogo"
              className="aspect-square h-11 md:h-24"
            />
            <div>
              <h3 className="font-light">Dicoding</h3>
              <p className="text-sm md:font-bold">
                Membangun Progressive Web Apps
              </p>
            </div>
          </div>
          <a
            href="PWA.pdf"
            download="PWA.pdf"
            className="border-[#2C3333] border px-2 py-1 md:px-4 md:py-2 hover:bg-[#2C3333] transition  hover:text-[#eeeeee]"
          >
            Download
          </a>
        </div>
        <div className="flex items-center gap-2 justify-between min-h-[96px]">
          <div className="flex gap-2">
            <img src={bnspLogo} alt="bnspLogo" className="h-4 md:h-9" />
            <div>
              <h3 className="font-light">
                Badan Nasional Sertifikasi Nasional
              </h3>
              <p className="text-sm md:font-bold">Junior Web Developer</p>
            </div>
          </div>
          <a
            href="BNSP.pdf"
            download="BNSP.pdf"
            className="border-[#2C3333] border px-2 py-1 md:px-4 md:py-2 hover:bg-[#2C3333] transition  hover:text-[#eeeeee]"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
