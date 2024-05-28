import "./experienceCard.css";

function ExperienceCard({ heading, subHeading, description }) {
  return (
    <div className="experience-card">
      <h3 className="experience-card-heading">{heading}</h3>
      <h6 className="experience-card-subheading">{subHeading}</h6>
      <p className="experience-card-description">{description}</p>
    </div>
  );
}

export default ExperienceCard;
