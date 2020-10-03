import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../Session";

import {
  Button,
  ButtonGroup,
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography class="header-title" variant="title" color="inherit">
          Beer Tasting 2020
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

const Navigation = () => (
  <div>
    <NavBar />
    <AuthUserContext.Consumer>
      {(authUser) => (authUser ? <NavigationOnAuth /> : <NavigationOnNoAuth />)}
    </AuthUserContext.Consumer>
  </div>
);

const NavigationOnAuth = () => (
  <div>
    <ul>
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      <li>
        <SignOutButton />
      </li>
    </ul>
  </div>
);
const NavigationOnNoAuth = () => (
  <div>
    <ul>
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
      </li>
      <li>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </li>
    </ul>
  </div>
);

export default Navigation;
