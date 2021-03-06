import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';

import AuthForm from './AuthForm';
import mutation from '../mutations/Login';
import query from '../queries/CurrentUser';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { errors: [] };
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillUpdate(nextProps) {
    // console.log(this.props, nextProps);
    if (nextProps.data.user && !this.props.data.user) {
      hashHistory.push('/dashboard');
    }
  }

  onSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query }]
    }).catch(res => {
      const errors = res.graphQLErrors.map(error => error.message);
      this.setState({ errors });
    });
  }

  render() {
    // console.log(this.props.mutate);
    return (
      <div>
        <h4>Login</h4>
        <AuthForm
        onSubmit={this.onSubmit}
        errors={this.state.errors}
        />
      </div>
    );
  }
}

export default graphql(query)(
  graphql(mutation)(LoginForm)
); // query will rerender component, if it's res is updated on this.props.data
