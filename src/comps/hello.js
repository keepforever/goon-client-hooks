import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import ME_QUERY from '../graphql/q/ME_QUERY'

class Hello extends Component {

  render () {
    console.log('\n', 'this.props', '\n', '\n', this.props )

    return (
      <h1>Hello hello</h1>
    );
  }
}


export default compose(
  graphql(ME_QUERY, {
    options: { fetchPolicy: "cache-and-network" },
    name: "meQuery"
  }),
)(Hello);
