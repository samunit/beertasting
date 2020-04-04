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
    this.props.firebase.doSignOut();
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
