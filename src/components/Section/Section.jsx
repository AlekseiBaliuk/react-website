import React from "react";
import * as SC from './Section.styled'

const Section = ({ children }) => {
  return <SC.Section>{children}</SC.Section>;
};

export default Section;
