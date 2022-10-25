import React, { useState } from 'react';
import "./style.css";
import { FiEyeOff, FiEye } from "react-icons/fi";


export const Input = ({
  type,
  name,
  placeholder,
  autofocus,
  onChange,
  value,
  register,
  defaultValue,
  inputError
}) => {

  const [enableShow, setValue] = useState(false);
  function showPassword() {
    const input = document.getElementById(name);
  
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
        {...register}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        autofocus={autofocus}
        onChange={onChange}
        value={value}
        defaultValue={defaultValue ?? ''}
      />
      {type === "password" && EyePassword()}
      
    </div>
    {<span id="input-error">{inputError}</span> ?? null}
    </>
  );
}

