import "./style.css";

export const Link = ({ href, text, target }) => {
  return (
    <a href={href ?? "#"} target={target}>
      {text}
    </a>
  );
};
