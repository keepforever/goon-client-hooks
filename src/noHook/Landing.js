import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
// graphql
import { graphql, compose } from "react-apollo";
import ME_QUERY from "../graphql/q/ME_QUERY";
// locals
import AuthCard from "../comps/auth/AuthCard";

class Landing extends Component {

  render() {
    const { meQuery: { meUser } } = this.props;

    if (meUser) {
      return (
        <Redirect
          to={{
            pathname: "/about",
            state: { next: this.props.location.pathname }
          }}
        />
      );
    }

    return (
      <div style={styles.container}>
        <h2>Hello Landing</h2>
        <AuthCard {...this.props} />
      </div>
    );
  }
}

export default compose(
  graphql(ME_QUERY, {
    options: {
      fetchPolicy: "cache-and-network"
    },
    name: "meQuery"
  })
)(Landing);

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
};
