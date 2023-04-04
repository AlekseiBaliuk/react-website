import React from "react";
import { Link } from "react-router-dom";
import logo from "../../staticImages/white.png";

const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="logo" width="280" />
    </Link>
  );
};

export default Logo;
