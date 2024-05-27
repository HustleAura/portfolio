import "./profileIcon.css";

function ProfileIcons({ imagePath }) {
  return (
    <div className="profileIcons">
      <img src={imagePath}></img>
    </div>
  );
}

export default ProfileIcons;
