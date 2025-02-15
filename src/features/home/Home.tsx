import React from "react";
import { FaPlus } from "react-icons/fa";
import ProjectCard from "./components/ProjectCard";
import { dummyProjects } from "../../data/project";
import styles from "./Home.module.scss"

const Home: React.FC = () => {
  return (
    <div className={styles.projectList}>
      <img src="/logo.svg" alt="あみむめも" className={styles.logo} />
      <div className={styles.header}>
        <h3 className={styles.title}>作品一覧</h3>
        <a href="/create-project">
          <FaPlus className={styles.createButton}/>
        </a>
      </div>
      <div className={styles.projectContainer}>
        {dummyProjects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
};

export default Home;
