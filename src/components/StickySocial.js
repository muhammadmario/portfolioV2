import React from "react";
import { IoLogoGithub, IoLogoInstagram, IoHeartSharp } from "react-icons/io5";
import { SiLinkedin } from "react-icons/si";

function StickySocial() {
  return (
    <div className="hidden md:fixed md:flex md:flex-col md:gap-8 md:top-40 md:h-fit md:border-[#2C3333] md:border-2 md:p-2">
      <a href="https://github.com/muhammadmario">
        <IoLogoGithub style={{ fontSize: "50px" }} />
      </a>

      <a href="https://www.linkedin.com/in/muhammad-mario-wijatmika-5634a1170/">
        <SiLinkedin style={{ fontSize: "50px" }} />
      </a>

      <a href="https://www.instagram.com/mariobaron_/?hl=en">
        <IoLogoInstagram style={{ fontSize: "50px" }} />
      </a>
    </div>
  );
}

export default StickySocial;
