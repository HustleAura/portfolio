import "./button.css";

function Button({ text, hyperlink }) {
  return (
    <div>
      <a href={hyperlink}>
        <button className="button">{text}</button>
      </a>
    </div>
  );
}

export default Button;
