import "./style.css";
import Navigation from '../../Navigation';
import Footer from "../../Footer";

const About = () => {
  return (
    <div>
      <h1 className="aboutMe">About Me</h1>
      <Navigation />
      <article>
        <p>
          My name is Marina Delneri and I am currently a student of full-stack
          web development. I am based in Minneapolis, MN, United States, but I
          am originally from São Paulo, Brazil and have lived in many places
          around the world. My initial draw to coding came from my life-long
          love of math, logic, languages, and learning, as well as a desire to
          add to and expand on my current talents. Additionally, I have always
          been interested in skills that can translate to anywhere in the world.
        </p>
        <br />
        <p>
          Although I have yet to gain more experience in this field, I find
          myself challenged and invigorated by the material I have learned so
          far. I realize that the study of coding and web development is
          never-ending, and I look forward to always going after more material
          to expand my knowledge on the subject.
        </p>
        <br />
        <p>
          My coding skills are so far centered around the HTML, CSS, JavaScript,
          jQuery, Bootstrap, Moment.js, Node Js, Express.js, MySQL, MongoDB, and
          React technologies. I will continue to add to and diversify my skills,
          as well as add more material to my portfolio. I hope to be able to
          utilize these skills in a work environment in the near future, and
          eventually bring them to an industry that I am passionate about, which
          includes hospitality, the arts/music, travel, and the field of
          renewable resources.
        </p>
      </article>
      <Footer />
    </div>
  );
};

export default About;
