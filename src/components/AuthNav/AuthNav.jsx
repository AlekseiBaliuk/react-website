import React from "react";
import * as SC from "./AuthNav.styled";

const AuthNav = () => {
  return (
    <SC.Nav>
      <SC.List>
        <SC.ListItem
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <SC.Link to="/login">Login</SC.Link>
        </SC.ListItem>
        <SC.ListItem
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <SC.Link to="/signup">Sign up</SC.Link>
        </SC.ListItem>
      </SC.List>
    </SC.Nav>
  );
};

export default AuthNav;
