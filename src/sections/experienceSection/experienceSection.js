import "./experienceSection.css";
import ExperienceCard from "../../components/cards/ExperienceCard/experienceCard";
import TimelineDivider from "../../components/timeline/timelineDivider";
import {
  SoftwareEngineeringInternHeading,
  SoftwareEngineeringInternSubHeading,
  SoftwareEngineeringInternDescription,
  EngageMenteeHeading,
  EngageMenteeSubHeading,
  EngageMenteeDescription,
} from "../../utils/strings";

function ExperienceSection() {
  return (
    <div className="section-container">
      <ExperienceCard
        className="first-experience"
        heading={SoftwareEngineeringInternHeading}
        subHeading={SoftwareEngineeringInternSubHeading}
        description={SoftwareEngineeringInternDescription}
      ></ExperienceCard>
      <TimelineDivider className="divider"></TimelineDivider>
      <ExperienceCard
        className="second-experience"
        heading={EngageMenteeHeading}
        subHeading={EngageMenteeSubHeading}
        description={EngageMenteeDescription}
      ></ExperienceCard>
    </div>
  );
}

export default ExperienceSection;
