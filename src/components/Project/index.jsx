import "./style.css";

const Project = (props) => {
  return (
    <main>
      <div className="boxes">
          <div
            className="webpages"
            id={props.project.id}
            onClick={`location.href='${props.project.projectLink}'`}
          ></div>
          <h3 className="projectName">
            <a
              href={props.project.projectLink}
              target="_blank"
              rel="noreferrer"
            >
            {props.project.projectTitle}
            </a>
          </h3>
          <h3 className="githubLink">
            <a
              href={props.project.githubLink}
              target="_blank"
              rel="noreferrer"
            >
              GitHub Link
            </a>
          </h3>
      </div>
    </main>
  );
};

export default Project;
