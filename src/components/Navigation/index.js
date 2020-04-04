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
        <Typography variant="title" color="inherit">
          Beer Tasting 2020
        </Typography>
        <Button color="inherit">Login</Button>
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
    <ButtonGroup
      color="primary"
      variant="contained"
      aria-label="contained primary button group"
    >
      <Button component={Link} to={ROUTES.LANDING}>
        Landing
      </Button>
      <Button component={Link} to={ROUTES.HOME}>
        Home
      </Button>
      <Button component={Link} to={ROUTES.ACCOUNT}>
        Account
      </Button>
      <Button component={SignOutButton}>Sign Out</Button>
    </ButtonGroup>
  </div>
);
const NavigationOnNoAuth = () => (
  <div>
    <ButtonGroup color="primary" aria-label="outlined primary button group">
      <Button component={Link} to={ROUTES.LANDING}>
        Landing
      </Button>
      <Button component={Link} to={ROUTES.SIGN_UP}>
        Sign Up
      </Button>
      <Button component={Link} to={ROUTES.SIGN_IN}>
        Sign In
      </Button>
    </ButtonGroup>
  </div>
);

export default Navigation;
