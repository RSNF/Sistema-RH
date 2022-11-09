import "./style.css";

export const Slider = (props) => {
  return (
    <div className="slider-div">
      <span>{props.label1}</span>
      <input
        type="range"
        id="range"
        min="0"
        max="4"
        step="0.1"
        defaultValue="2"
        onChange={props.onChange}
      />
      <span>{props.label2}</span>
      <div className="slider-line-steps">
        <div id="steps"></div>
        <div id="steps"></div>
        <div id="steps"></div>
      </div>
    </div>
  );
};
