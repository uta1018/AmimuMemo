import React from "react";
import { Project } from "../../../data/project";
import ProgressBar from "../../../components/ProgressBar";
import { PiYarn } from "react-icons/pi";
import { GrFormNext } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.projectCard}
      onClick={() => {
        navigate(`/project/${project.id}`);
      }}
    >
      <PiYarn className={styles.icon} />
      <div className={styles.content}>
        <div className={styles.title}>
          {project.title}
          <GrFormNext className={styles.nextIcon} />
        </div>
        <ProgressBar progress={60} parents="home-page" />
      </div>
    </div>
  );
};

export default ProjectCard;
