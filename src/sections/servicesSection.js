import webAnimationData from "../assets/lotties/webAnimation.json";
import mobileAnimationData from "../assets/lotties/mobileAnimation.json";
import Carousel from "../components/carousel/carousel";
import SectionDivider from "../components/sectionDivider/sectionDivider";

const lotties = [webAnimationData, mobileAnimationData];

function ServicesSection() {
  return (
    <div>
      <SectionDivider></SectionDivider>
      <Carousel lotties={lotties} />
    </div>
  );
}

export default ServicesSection;
