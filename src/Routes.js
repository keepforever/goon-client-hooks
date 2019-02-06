import React, { Component } from "react";
import Layout from "./comps/layout/Layout";
import { Route, Switch } from "react-router-dom";
// lib
import { AuthRoute } from "./comps/lib/AuthRoute";
// Routes
// import Hello from "./comps/hello";
import Landing from "./noHook/Landing";
import Home from "./noHook/Home";
import Signup from "./noHook/Signup";
import About from "./noHook/About";


class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <AuthRoute path="/home" component={Home} />
          <AuthRoute path="/about" component={About} />
          <Route path="/" component={Landing} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
