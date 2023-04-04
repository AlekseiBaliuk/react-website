import React from "react";

import * as SC from "./NavBar.styled";

const NavBar = () => {
  return (
    <SC.Nav>
      <SC.List>
        <SC.ListItem
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <SC.Link to="/">Home</SC.Link>
        </SC.ListItem>
        <SC.ListItem
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <SC.Link to="/features">Features</SC.Link>
        </SC.ListItem>
        <SC.ListItem
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <SC.Link to="/pricing">Pricing</SC.Link>
        </SC.ListItem>
      </SC.List>
    </SC.Nav>
  );
};

export default NavBar;
