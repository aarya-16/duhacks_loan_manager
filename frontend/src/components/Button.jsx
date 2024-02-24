import React from "react";
import "./Button.css";

const Button = ({ text, styles }) => {
  return (
    <button
      type="button"
      className={`button py-4 px-6 font-poppins font-medium text-[18px] outline-none ${styles}`}
    >
      {text}
    </button>
  );
};

export default Button;
