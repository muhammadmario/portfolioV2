import React from "react";
import atensi from "../assets/img/Atensi.png";
import ProjectCard from "./ProjectCard";
import movieku from "../assets/img/movieku.jpg";
import netflix from "../assets/img/netflix.jpg";
import monitorPanda from "../assets/img/monitorpanda.png";
import fakeStore from "../assets/img/fakestore.png";
import uob from "../assets/img/uob.jpg";
import protalenta from "../assets/img/protalenta.png";
import prodain from "../assets/img/prodain.png";

function Project() {
  return (
    <div
      className="flex w-full flex-col px-2 pt-16 mt-7 gap-3 md:gap-0 md:mt-0 md:px-14 lg:px-28"
      id="project"
    >
      <h1 className="font-bold text-xl text-center md:text-3xl">
        Latest Project
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-2 md:flex-row md:flex-wrap box-border md:mt-5">
        <ProjectCard
          img={uob}
          title="Wealth Management System UOB"
          path="#"
          desc="Wealth Management System UOB"
          stack="React JS, Java, Material UI"
        />
        <ProjectCard
          img={atensi}
          title="Atensi Napza"
          path="https://github.com/muhammadmario/E-leraning"
          desc="Website Elearning untuk rehabilitasi NAPZA"
          stack="Laravel, MySQL, Livewire, Tailwind"
        />
        <ProjectCard
          img={protalenta}
          title="PROTALENTA"
          path="https://www.prodain.co.id/login"
          desc="Website Katalog Human Resources"
          stack="Laravel, MySQL, Bootstrap"
        />
        <ProjectCard
          img={prodain}
          title="PRODAIN"
          path="https://www.prodain.co.id/"
          desc="Landing Page Prodain"
          stack="Laravel, MySQL, Bootstrap"
        />
        <ProjectCard
          img={monitorPanda}
          title="Monitor data penduduk"
          path="https://monitor.panda.id/"
          desc="Website Statistik data penduduk"
          stack="React JS, Laravel, Postgresql, Bootstrap"
        />
        <ProjectCard
          img={netflix}
          title="Netflix clone"
          path="https://netflix-clone-ddac7.firebaseapp.com/"
          desc="Cloning website netflix"
          stack="React JS, Tailwind"
        />
      </div>
    </div>
  );
}

export default Project;
