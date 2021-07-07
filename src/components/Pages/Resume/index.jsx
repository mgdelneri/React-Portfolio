import "./style.css";
import Navigation from "../../Navigation";
import pdf from "../../../assets/Coding_Resume.pdf";

const Resume = () => {
  return (
    <div>
      <h1>Résumé</h1>
      <Navigation />
      <a
        href={pdf}
        target="_blank"
        rel="noreferrer"
        title="Link to resume"
      >
        Marina Delneri's Résumé
      </a>
    </div>
  );
};

export default Resume;
