import React from "react";
import * as SC from './Button.styled'

const Button = ({ text, type }) => {
  return <SC.Button type={type}>{text}</SC.Button>;
};

export default Button;
