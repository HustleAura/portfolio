import "./projectCard.css";
import githubIconPath from "../../../assets/logos/githubIcon.png";
import ProfileIcons from "../../icons/profileIcon";

function ProjectCards({ title, description, projectLink }) {
  return (
    <a href={projectLink} className="project-card-link">
      <div className="project-card">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
        <ProfileIcons imagePath={githubIconPath}></ProfileIcons>
      </div>
    </a>
  );
}

export default ProjectCards;
