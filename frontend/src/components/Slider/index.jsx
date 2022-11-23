import "./style.css";

export const Slider = (props) => {
  
  return (
    <div className="slider-div">
      <span>{props.label1}</span>
      <input
        {...props.register}
        name={props.name}
        type="range"
        id="range"
        min="0"
        max="4"
        step="0.1"
        defaultValue={props.defaultValue}
        onChange={props.onChange}
        disabled={props.disabled}
      />
      <span>{props.label2}</span>

      {props.vagaSlider ? (
        <div className="vaga-slider">
          <input
            type="range"
            id="vaga-range"
            min="0"
            max="4"
            disabled={true}
            step="0.1"
            defaultValue={props.defaultValueVaga}
          />
        </div>
      ) : null}

      <div className="slider-line-steps">
        <div id="steps"></div>
        <div id="steps"></div>
        <div id="steps"></div>
      </div>
    </div>
  );
};
