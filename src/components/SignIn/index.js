import React, { Component } from "react";

import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { SignUpLink } from "../SignUp";
import { withFirebase } from "../Firebase";
import { PasswordForgetLink } from "../PasswordForget";

// SASS
import "./signin.scss";

// Material UI
import { Button, TextField } from "@material-ui/core";

import * as ROUTES from "../../constants/routes";

const SignInPage = () => (
  <div>
    <div className="wrapper">
      <h1>Sign In</h1>
      <SignInForm />
      <PasswordForgetLink />
      <SignUpLink />
    </div>
  </div>
);

const INITAL_STATE = {
  email: "",
  password: "",
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITAL_STATE };
  }
  onSubmit = (event) => {
    const { email, password } = this.state;
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then((res) => {
        this.setState({ ...INITAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  };
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === "" || email === "";

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <TextField
            id="standard-basic"
            name="email"
            value={email}
            onChange={this.onChange}
            class="email-input"
            type="text"
            placeholder="Email"
          />
          <TextField
            id="standard-basic"
            name="password"
            value={password}
            onChange={this.onChange}
            class="password-input"
            type="password"
            placeholder="Password"
          />
          <Button color="primary" disabled={isInvalid} type="submit">
            Sign In
          </Button>

          {error && <p id="errorMessage">{error.message}</p>}
        </form>
      </div>
    );
  }
}

const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);

export default SignInPage;
export { SignInForm };
