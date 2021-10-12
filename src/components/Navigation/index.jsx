import "./style.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navbar">
      <Link className="aboutLink link" to="about">
        About
      </Link>
      <Link className="projectsLink link" to="projects">
        Projects
      </Link>
      <Link className="contactLink link" to="contact">
        Contact Me
      </Link>
      <Link className="resumeLink link" to="resume">
        Résumé
      </Link>
      <Link className="homeLink link" to="/">
        Home
      </Link>
    </div>
  );
};

export default Navigation;
