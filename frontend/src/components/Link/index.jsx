import React from "react";
import "./style.css";

export const Link = (props) => {
  return (
    <a href={props.href ?? "#"} target={props.target}>
      {props.text}
    </a>
  );
};
