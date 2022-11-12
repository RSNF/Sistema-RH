import React, { useState } from 'react';
import "./style.css";
import { FiEyeOff, FiEye } from "react-icons/fi";


export const Input = (props) => {

  const [enableShow, setValue] = useState(false);
  function showPassword() {
    const input = document.getElementById(props.name);
  
    if (enableShow) {
      input.type = "password";
      return setValue(false);
    } else {
      input.type = "text";
      input.style.borderRadius = "5px 0 0 5px";
      input.style.borderRight = "none";
      return setValue(true);
    }
  }

  const EyePassword = () => {
    return enableShow ? (
      <i className="eye-password">
        <FiEye onClick={() => showPassword()} />
      </i>
    ) : (
      <i className="eye-password">
        <FiEyeOff onClick={() => showPassword()} />
      </i>
    );
  }

  return (
    <>
    <div id="input-div">
      <input
        {...props.register}
        type={props.type}
        name={props.name}
        id={props.name}
        placeholder={props.placeholder}
        autoFocus={props.autofocus}
        onChange={props.onChange}
        value={props.value}
        defaultValue={props.defaultValue ?? ''}
        maxLength={props.maxLength}
      />
      {props.type === "password" && EyePassword()}
      
    </div>
    {<span id="input-error">{props.inputError}</span> ?? null}
    </>
  );
}

