import gql from 'graphql-tag';
import USER_FRAGMENT from '../f/USER_FRAGMENT';

export default gql`
  query {
    meUser {
      ...UserInfo
    }
  }
  ${USER_FRAGMENT}
`;
