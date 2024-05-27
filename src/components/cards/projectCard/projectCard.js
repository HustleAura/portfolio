import "./projectCard.css";
import githubIconPath from "../../../assets/logos/githubIcon.png";
import ProfileIcons from "../../icons/profileIcon";

function ProjectCards({ title, description, projectLink }) {
  return (
    <a href={projectLink} className="card-link">
      <div className="card">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <ProfileIcons imagePath={githubIconPath}></ProfileIcons>
      </div>
    </a>
  );
}

export default ProjectCards;
