import "./style.css";
import Project from "../../Project";
import React, { useState } from "react";

const Projects = () => {
  const [projects] = useState([
    {
      id: "smallbox1",
      projectTitle: "Code Quiz",
      projectLink: "https://mgdelneri.github.io/Code-Quiz/",
      githubLink: "https://github.com/mgdelneri/Code-Quiz.git",
    },
    {},
  ]);

  return (
    <div className="projectsPage">
        <h1>Projects</h1>
        <div>
        {projects.map((project) => {
            return <Project project={project} />;
        })}
        </div>
    </div>
  );
};

export default Projects;
