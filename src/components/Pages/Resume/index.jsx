import "./style.css";
import Navigation from "../../Navigation";
import pdf from "../../../assets/Coding_Resume.pdf";

const Resume = () => {
  return (
    <div className="resume">
      <h1 className="resumeHeader">Résumé</h1>
      <Navigation id="resumeNavbar"/>
      <a
        className="cvLink"
        href={pdf}
        target="_blank"
        rel="noreferrer"
        title="Link to resume"
      >
        Download Marina Delneri's Résumé
      </a>
    </div>
  );
};

export default Resume;
