import gql from 'graphql-tag';

export default gql`
  mutation fLogin($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
    }
  }
`;
