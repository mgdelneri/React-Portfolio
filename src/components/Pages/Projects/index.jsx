import "./style.css";
import Project from "../../Project";
import Navigation from "../../Navigation";
import Footer from "../../Footer";
import React, { useState } from "react";

const Projects = () => {
  const [projects] = useState([
    {
      id: "box1",
      projectTitle: "National Parks Finder",
      projectLink: "https://mgdelneri.github.io/National-Parks-and-Forecast-Finder/",
      githubLink: "https://github.com/mgdelneri/National-Parks-and-Forecast-Finder.git",
      description: "An application that allows user to search by US state abbreviations and get back a list of that state's national parks and the 5-day forecast at each location. Technologies used: HTML, CSS, JavaScript, National Park Service API, Open Weather API.",
    },
    {
      id: "box2",
      projectTitle: "Musical Musings",
      projectLink: "https://intense-dusk-91957.herokuapp.com/",
      githubLink: "https://github.com/mgdelneri/Musical-Musings.git",
      description: "An application that allows people to exchange ideas and opinions about the world of music. Technologies used: Node.js, Express.js, Handlebars.js, Sequelize, MySQL, and Cloudinary API.",
    },
    {
      id: "box3",
      projectTitle: "Note Taker",
      projectLink: "https://arcane-journey-06582.herokuapp.com/",
      githubLink: "https://github.com/mgdelneri/Note-Taker.git",
      description: "An application that allows users to write, save, and delete notes, in order to be better organized. Technologies used: HTML, CSS, JavaScript, Node.js, Express.js, RESTful routes.",
    },
    {
      id: "box4",
      projectTitle: "Tech Blog",
      projectLink: "https://cryptic-beyond-95236.herokuapp.com/",
      githubLink: "https://github.com/mgdelneri/Tech-Blog.git",
      description: "This blog allows developers to create new posts, comment on other people's posts, and edit/delete their previous posts. Technologies used: MVC paradigm, Handlebars.js, Sequelize, JavaScript, Node.js, Express.js.",
    },
    {
      id: "box5",
      projectTitle: "Weather Dashboard",
      projectLink: "https://mgdelneri.github.io/Weather-Dashboard/",
      githubLink: "https://github.com/mgdelneri/Weather-Dashboard.git",
      description: "An application that allows users to search by city and get current weather conditions and the 5-day forecast. The app also saves the last five cities searched. Technologies used: HTML, CSS, JavaScript, Open Weather API, local storage.",
    },
    {
      id: "box6",
      projectTitle: "Code Quiz",
      projectLink: "https://mgdelneri.github.io/Code-Quiz/",
      githubLink: "https://github.com/mgdelneri/Code-Quiz.git",
      description: "This application is a timed multiple-choice code-themed quiz that saves the quiz taker's score. Technologies used: HTML, CSS, JavaSCript.",
    },
    {
      id: "box7",
      projectTitle: "Work Day Scheduler",
      projectLink: "https://mgdelneri.github.io/Work-Day-Scheduler/",
      githubLink: "https://github.com/mgdelneri/Work-Day-Scheduler.git",
      description: "A color-coded calendar application for scheduling the user's work day. Technologies used: HTML, CSS, JavaScript.",
    },
    {
      id: "box8",
      projectTitle: "Budget Tracker",
      projectLink: "https://enigmatic-chamber-82572.herokuapp.com/",
      githubLink: "https://github.com/mgdelneri/Budget-Tracker.git",
      description: "An application that enables a user to add expenses or deposits to a budget tracker online and offline. Technologies used: HTML, CSS, JavaScript, Node.js, PWA.",
    },
  ]);

  return (
    <div className="projectsPage">
        <h1>Projects</h1>
        <Navigation />
        <div className="projects">
        {projects.map((project) => {
            return <Project project={project} />;
        })}
        </div>
        <Footer />
    </div>
  );
};

export default Projects;
