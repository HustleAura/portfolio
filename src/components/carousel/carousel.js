import "./carousel.css";
import { useState } from "react";
import Lottie from "react-lottie";
import leftCarouselIcon from "../../assets/logos/leftCarouselIcon.png";
import rightCarouselIcon from "../../assets/logos/rightCarouselIcon.png";

const Carousel = ({ lotties }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === lotties.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? lotties.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lotties[currentIndex],
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="carousel">
      <div className="carousel-images">
        <div>
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
        <div className="slide_direction">
          <div className="left" onClick={handlePrevious}>
            <img src={leftCarouselIcon}></img>
          </div>
          <div className="right" onClick={handleNext}>
            <img src={rightCarouselIcon}></img>
          </div>
        </div>
      </div>
      <div className="carousel-indicator">
        {lotties.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};
export default Carousel;
