import React from "react";
import { Project } from "../../../types/Project.types";
import ProgressBar from "../../../components/ProgressBar";
import { PiYarn } from "react-icons/pi";
import { GrFormNext } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/project/${project.id}`);
      }}
    >
      <PiYarn />
      <div>
        {project.title}
        <GrFormNext />
      </div>
      <ProgressBar progress={60} parents="home-page" />
    </div>
  );
};

export default ProjectCard;
