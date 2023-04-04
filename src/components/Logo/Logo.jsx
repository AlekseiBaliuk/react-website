import React from "react";
import { Link } from "react-router-dom";
import logo from "../../staticImages/purple1.png";
// import logo from "../../staticImages/purple.png";
import * as SC from './Logo.styled'

const Logo = () => {
  return (
    <Link to="/">
      <SC.Img src={logo} alt="logo" width="200" />
    </Link>
  );
};

export default Logo;
