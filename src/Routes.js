import React, { Component, Suspense } from "react";
import Layout from "./comps/layout/Layout";
import { Route, Switch } from "react-router-dom";
// lib
import { AuthRoute } from "./comps/lib/AuthRoute";
// Routes
// import Hello from "./comps/hello";
import Landing from "./noHook/Landing";
import Home from "./noHook/Home";
import Signup from "./noHook/Signup";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" component={Landing} />
          <Route path="/home" component={Home} />
          <Route path="/auth" component={Signup} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
