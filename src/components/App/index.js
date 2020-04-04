import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "../Navigation";
import LandingPage from "../Landing";
import SignInPage from "../SignIn";
import SignOutPage from "../SignOut";
import SignUpPage from "../SignUp";
import HomePage from "../Home";
import AccountPage from "../Account";
import AdminPage from "../Admin";
import FormPage from "../Form";
import ListPage from "../list";

import * as ROUTES from "../../constants/routes";
import { withFirebase } from "../Firebase";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged((authUser) => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <Router>
        <div>
          <Navigation authUser={this.state.authUser} />

          <hr />
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.SIGN_OUT} component={SignOutPage} />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
          <Route path={ROUTES.LIST} component={ListPage} />
          <Route path={ROUTES.FORM} component={FormPage} />
        </div>
      </Router>
    );
  }
}

export default withFirebase(App);
