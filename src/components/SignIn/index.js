import React, { Component } from 'react';
const SignInPage = () => (
  <div>
    <h1>Sign In</h1>
  </div>
);

const INITAL_STATE = {
  username: '',
  password: '',
  error: null
}

class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITAL_STATE };
  }

}

export default SignInPage;