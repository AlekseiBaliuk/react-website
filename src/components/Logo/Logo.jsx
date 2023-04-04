import React from "react";
import { Link } from "react-router-dom";
// import logo from "../../staticImages/white.png";
import logo from "../../staticImages/purple.png";

const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="logo" width="200" />
    </Link>
  );
};

export default Logo;
