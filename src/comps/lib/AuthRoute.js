import React from "react";
import { graphql } from "react-apollo";
import { Route, Redirect } from "react-router-dom";
import ME_QUERY from "../../graphql/q/ME_QUERY";


class C extends React.PureComponent {
  renderRoute = (routeProps) => {
    const { data, component } = this.props;

    if (!data || data.loading) {
      console.log('\n', 'show loading screen')
      // loading screen
      return <h1>Loading...</h1>;
    }

    if (!data.meUser) {
      console.log('\n', 'user not logged in' )
      return (
        <Redirect
          to={{
            pathname: "/",
            state: { next: routeProps.location.pathname }
          }}
        />
      );
    }

    const Component = component;

    return <Component {...routeProps} />;
  };

  render() {
    console.log('\n', 'helloAuthRoute' )
    const { data: _, component: __, ...rest } = this.props;
    return <Route {...rest} render={this.renderRoute} />;
  }
}


export const AuthRoute = graphql(ME_QUERY)(C);
