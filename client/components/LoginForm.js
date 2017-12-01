import React, { Component } from 'react';
import AuthForm from './AuthForm';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    return (
      <div>
        <AuthForm />
      </div>
    );
  }
}

export default LoginForm;
