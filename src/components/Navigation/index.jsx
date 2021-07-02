import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <Link className="aboutLink" to="about">
                About
            </Link>
            <Link className="workLink" to="work">
                Work
            </Link>
            <Link className="contactLink" to="contact">
                Contact Me
            </Link>
            <Link className="resumeLink" to="resume">
                Résumé
            </Link>
        </div>
    )
};

export default Navigation;
