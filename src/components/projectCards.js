import githubIconPath from "../assets/logos/githubIcon.png";
import ProfileIcons from "./profileIcons";

function ProjectCards({ title, description }) {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <ProfileIcons
        imagePath={githubIconPath}
        onClickLink="github.com"
        id="githubIcon"
      ></ProfileIcons>
    </div>
  );
}

export default ProjectCards;
