import ImageCard from "../components/cards/imageCard/imageCard";
import ProjectCards from "../components/cards/projectCard/projectCard";

function ProjectSection() {
  return (
    <div>
      {
        <ProjectCards
          projectLink="https://github.com/HustleAura/Bookify"
          title="Bookify"
          description="Bookify is a functional prototype of an e-book reading app implementing a content based recommendation system for recommending books based on user preferences."
        ></ProjectCards>
        // <ImageCard></ImageCard>
      }
    </div>
  );
}

export default ProjectSection;
