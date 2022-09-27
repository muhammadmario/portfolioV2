import React from "react";
import atensi from "../assets/img/Atensi.png";
import ProjectCard from "./ProjectCard";
import movieku from "../assets/img/movieku.jpg";
import netflix from "../assets/img/netflix.jpg";
import newsAggregator from "../assets/img/newsaggregator.jpg";
import monitorPanda from "../assets/img/monitorpanda.png";
import fakeStore from "../assets/img/fakestore.png";

function Project() {
  return (
    <div
      className="flex w-full flex-col px-2 mt-7 gap-3 md:gap-0 md:mt-0 md:px-14 lg:px-28"
      id="project"
    >
      <h1 className="font-bold text-xl text-center md:text-3xl">
        Latest Project
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-2 md:flex-row md:flex-wrap box-border md:mt-5">
        <ProjectCard
          img={atensi}
          title="Atensi Napza"
          path="https://github.com/muhammadmario/E-leraning"
          desc="Website Elearning untuk rehabilitasi NAPZA"
          stack="Laravel, MySQL, Livewire"
        />
        <ProjectCard
          img={monitorPanda}
          title="Monitor data penduduk"
          path="https://monitor.panda.id/"
          desc="Website Statistik data penduduk"
          stack="React JS, Laravel"
        />
        <ProjectCard
          img={fakeStore}
          title="Fake Store"
          path="https://github.com/muhammadmario/fake-store"
          desc="Website E-commerce"
          stack="React JS"
        />
        <ProjectCard
          img={movieku}
          title="Movieku"
          path="https://movieku.netlify.app/"
          desc="Website movie"
          stack="React JS"
        />
        <ProjectCard
          img={netflix}
          title="Netflix"
          path="https://netflix-clone-ddac7.firebaseapp.com/"
          desc="Cloning website netflix"
          stack="React JS"
        />
      </div>
    </div>
  );
}

export default Project;
