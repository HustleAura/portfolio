function ProfileIcons({ imagePath, onClickLink }) {
  return (
    <div className="profileIcons">
      <a href={onClickLink}>
        <img src={imagePath}></img>
      </a>
    </div>
  );
}

export default ProfileIcons;
