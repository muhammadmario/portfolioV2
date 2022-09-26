import React from "react";
import atensi from "../assets/img/Atensi.png";
import ProjectCard from "./ProjectCard";
import movieku from "../assets/img/movieku.jpg";
import netflix from "../assets/img/netflix.jpg";
import newsAggregator from "../assets/img/newsaggregator.jpg";
import monitorPanda from "../assets/img/monitorpanda.png";

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
          title={"Atensi Napza"}
          path={"https://github.com/muhammadmario/E-leraning"}
        />
        <ProjectCard
          img={monitorPanda}
          title={"Monitor data penduduk"}
          path={"https://monitor.panda.id/"}
        />
        <ProjectCard
          img={movieku}
          title={"Movieku"}
          path={"https://movieku.netlify.app/"}
        />
        <ProjectCard
          img={netflix}
          title={"Netflix"}
          path={"https://netflix-clone-ddac7.firebaseapp.com/"}
        />
      </div>
    </div>
  );
}

export default Project;
