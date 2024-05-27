import "./imageCard.css";
import profileImage from "../../../assets/photos/personalPhoto.jpg";

function ImageCard() {
  return (
    <div className="image-card">
      <img src={profileImage} className="image"></img>
    </div>
  );
}

export default ImageCard;
