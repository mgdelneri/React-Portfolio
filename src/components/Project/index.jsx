import "./style.css";

const Project = (props) => {
  return (
    <div>
      <div class="boxes">
          <div
            class="webpages"
            id={props.project.id}
            onclick={`location.href='${props.project.projectLink}'`}
          ></div>
          <h3 class="project-name">
            <a
              href={props.project.projectLink}
              target="_blank"
              rel="noreferrer"
            >
            {props.project.projectTitle}
            </a>
          </h3>
          <h3 class="github-link">
            <a
              href={props.project.githubLink}
              target="_blank"
              rel="noreferrer"
            >
              GitHub Link
            </a>
          </h3>
      </div>
    </div>
  );
};

export default Project;
