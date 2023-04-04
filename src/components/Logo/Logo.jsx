import React from "react";
import logo from "../../staticImages/white.png";

import * as SC from "./Logo.styled";

const Logo = () => {
  return (
    <SC.LogoLink to="/">
      <img src={logo} alt="logo" width="280" />
    </SC.LogoLink>
  );
};

export default Logo;
