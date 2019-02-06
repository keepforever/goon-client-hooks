import gql from "graphql-tag";
import USER_FRAGMENT from '../f/USER_FRAGMENT';

export default gql`
  mutation ($name: String!, $email: String!, $password: String!) {
    userSignup(name: $name, email: $email, password: $password) {
        token
        user {
          ...UserInfo
        }
    }
  }
  ${USER_FRAGMENT}
`;
