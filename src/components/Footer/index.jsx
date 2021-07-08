import "./style.css";

const Footer = () => {
    return (
        <div>
            <nav className="contactInfo">
            <a
          href="mailto: mgdelneri@gmail.com"
          title="Link to email Marina Delneri"
        >
          mgdelneri@gmail.com
        </a>
        <a href="tel:1-651-210-7437" title="Link to call Marina Delneri">
          (651) 210-7437
        </a>
        <a
          href="https://www.linkedin.com/in/marina-delneri/"
          target="_blank"
          rel="noreferrer"
          title="Link to Marina Delneri's LinkedIn profile"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/mgdelneri"
          target="_blank"
          rel="noreferrer"
          title="Link to Marina Delneri's GitHub profile"
        >
          GitHub
        </a>
      </nav>
        </div>
    )
}

export default Footer
