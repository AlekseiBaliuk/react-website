import React from "react";
import * as SC from "./NavBar.styled";

const NavBar = () => {
  return (
    <SC.Nav>
      <SC.List>
        <SC.ListItem>
          <SC.Link to="/">Home</SC.Link>
        </SC.ListItem>
        <SC.ListItem>
          <SC.Link to="/features">Features</SC.Link>
        </SC.ListItem>
        <SC.ListItem>
          <SC.Link to="/pricing">Pricing</SC.Link>
        </SC.ListItem>
      </SC.List>
    </SC.Nav>
  );
};

export default NavBar;
