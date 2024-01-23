import React from "react";
import "./Button.scss";

const Button = ({ children }) => {
  return <button id="reusable_button">{children}</button>;
};

export default Button;
