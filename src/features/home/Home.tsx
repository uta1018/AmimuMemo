import React from "react";
import { FaPlus } from "react-icons/fa";
import ProjectCard from "./components/ProjectCard";
import { dummyProjects } from "../../data/project";

const Home: React.FC = () => {
  return (
    <div>
      <img src="/logo.svg" alt="あみむめも" />
      <div>
        <h3>作品一覧</h3>
        <a href="/create-project">
          <FaPlus />
        </a>
      </div>
      {dummyProjects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </div>
  );
};

export default Home;
