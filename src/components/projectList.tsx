import { Project } from "@/app/_model/projects";
import { Code, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import React from "react";
import anime from "animejs";
type projectProp = {
  project: Project;
};
const animateHover = (e: any) => {
  anime({
    targets: e.target,
    scale: 1.05,
    duration: 300,
    easing: "easeOutQuad",
  });
};

const animateHoverExit = (e: any) => {
  anime({
    targets: e.target,
    scale: 1,
    duration: 300,
    easing: "easeOutQuad",
  });
};
const ProjectList = ({ project }: projectProp) => {
  return (
    <div>
      <div className="border-b border-gray-300 pb-6 project-item opacity-0">
        <h4 className="text-xl font-normal mb-2">{project.name}</h4>
        <p className="text-gray-600 mb-4 font-light">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge variant="secondary">{tech}</Badge>
          ))}
        </div>
        <div className="flex space-x-4">
          <Link
            href={project.isDisabled ? "" : project.link}
             target="_blank"
            className={`text-[#4a4a4a] hover:text-[#2c2c2c] transition-colors duration-300 font-normal flex items-center
              ${project.isDisabled && "cursor-not-allowed opacity-50"}`}
            onMouseEnter={ animateHover}
            onMouseLeave={animateHoverExit}
          >
            <Code className="w-4 h-4 mr-1" />
            View Project
          </Link>
          <Link
            href={project.source}
            target="_blank"
            className="text-[#4a4a4a] hover:text-[#2c2c2c] transition-colors duration-300 font-normal flex items-center"
            onMouseEnter={animateHover}
            onMouseLeave={animateHoverExit}
          >
            <div className="flex items-center">
            <Github className="w-4 h-4 mr-1" />
            Source
            </div>

          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
