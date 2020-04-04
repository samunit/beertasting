import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import * as ROUTES from "../../constants/routes";

class SignOutBase extends Component {
  constructor(props) {
    super(props);
  }
  onSignout = () => {
    this.props.firebase
      .doSignOut()
      .then(() => {
        this.props.history.push(ROUTES.SIGN_IN);
      })
      .catch((err) => {
        console.log("Could not logout");
      });
    this.props.history.push(ROUTES.SIGN_IN);
  };

  render() {
    return (
      <button type="button" onClick={this.onSignout}>
        Sign Out
      </button>
    );
  }
}

const SignOutButton = compose(withRouter, withFirebase)(SignOutBase);

export default SignOutButton;
