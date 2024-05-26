function Button({ text, hyperlink }) {
  return (
    <div className="buttonDecoration">
      <a href={hyperlink}>
        <button className="button">{text}</button>
      </a>
    </div>
  );
}

export default Button;
