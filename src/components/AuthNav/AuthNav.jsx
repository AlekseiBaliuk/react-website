import React from 'react'
import * as SC from "./AuthNav.styled";

const AuthNav = () => {
  return (
    <SC.Nav>
      <SC.List>
        <SC.ListItem>
          <SC.Link to="/login">Login</SC.Link>
        </SC.ListItem>
        <SC.ListItem>
          <SC.Link to="/signup">Sign up</SC.Link>
        </SC.ListItem>
      </SC.List>
    </SC.Nav>
  );
}

export default AuthNav
