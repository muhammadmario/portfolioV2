import React from "react";

function ProjectCard({ img, title, path, desc, stack }) {
  return (
    <a target="_blank" rel="noopener noreferrer" href={path} className="group">
      <div className="flex flex-col box-border border-[#2C3333] border-2 min-h-[200px] group-hover:-translate-y-3 transition duration-300">
        <img
          src={img}
          alt={title}
          className="md:border-[#2C3333] border-b-2 lg:h-80 bg-contain"
        />
        <div className="py-5">
          <h2 className="font-normal text-lg md:text-xl md:font-semibold text-center">
            {title}
          </h2>
          <p className="text-center text-sm">{desc}</p>
          <p className="text-center text-xs">
            Build with: <span className="font-bold">{stack}</span>
          </p>
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
