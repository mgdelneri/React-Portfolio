import "./style.css";
import Navigation from "../../Navigation";
import Footer from "../../Footer";
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
      <section className="tech">
        <div id="frontEnd">
          <h3>Front-End Proficiencies</h3>
          <br></br>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Bootstrap</li>
            <li>React</li>
          </ul>
        </div>
        <div id="backEnd">
          <h3>Back-End Proficiencies</h3>
          <br></br>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Resume;
