import "./style.css";
import Project from "../../Project";
import Navigation from "../../Navigation";
import React, { useState } from "react";

const Projects = () => {
  const [projects] = useState([
    {
      id: "box1",
      projectTitle: "National Parks Finder",
      projectLink: "https://mgdelneri.github.io/National-Parks-and-Forecast-Finder/",
      githubLink: "https://github.com/mgdelneri/National-Parks-and-Forecast-Finder.git",
    },
    {
      id: "box2",
      projectTitle: "Musical Musings",
      projectLink: "https://intense-dusk-91957.herokuapp.com/",
      githubLink: "https://github.com/mgdelneri/Musical-Musings.git",
    },
    {
      id: "box3",
      projectTitle: "Note Taker",
      projectLink: "https://arcane-journey-06582.herokuapp.com/",
      githubLink: "https://github.com/mgdelneri/Note-Taker.git",
    },
    {
      id: "box4",
      projectTitle: "Tech Blog",
      projectLink: "https://cryptic-beyond-95236.herokuapp.com/",
      githubLink: "https://github.com/mgdelneri/Tech-Blog.git",
    },
    {
      id: "box5",
      projectTitle: "Weather Dashboard",
      projectLink: "https://mgdelneri.github.io/Weather-Dashboard/",
      githubLink: "https://github.com/mgdelneri/Weather-Dashboard.git",
    },
    {
      id: "box6",
      projectTitle: "Code Quiz",
      projectLink: "https://mgdelneri.github.io/Code-Quiz/",
      githubLink: "https://github.com/mgdelneri/Code-Quiz.git"
    },
    {
      id: "box7",
      projectTitle: "Work Day Scheduler",
      projectLink: "https://mgdelneri.github.io/Work-Day-Scheduler/",
      githubLink: "https://github.com/mgdelneri/Work-Day-Scheduler.git",
    },
    {
      id: "box8",
      projectTitle: "Budget Tracker",
      projectLink: "https://enigmatic-chamber-82572.herokuapp.com/",
      githubLink: "https://github.com/mgdelneri/Budget-Tracker.git",
    },
  ]);

  return (
    <div className="projectsPage">
        <h1>Portfolio</h1>
        <Navigation />
        <div className="projects">
        {projects.map((project) => {
            return <Project project={project} />;
        })}
        </div>
    </div>
  );
};

export default Projects;
