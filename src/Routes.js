import React, { Component, Suspense } from "react";
import Layout from "./comps/layout/Layout";
import { Route, Switch } from "react-router-dom";
// lib
import { AuthRoute } from './comps/lib/AuthRoute';
// Routes
import Hello from './comps/hello';
import Login from './comps/login';
import Home from './pages/Home'

class App extends Component {
  render() {
    return (
        <Layout>
          <Switch>
            <Route exact={true} path="/" component={Hello} />
            <AuthRoute path="/home" component={Home} />
            <Suspense fallback={
              <span style={{fontSize: 75}}>Suspense loading...</span>}
            >
            <Route path="/login" component={Login} />
            </Suspense>
          </Switch>
        </Layout>
    );
  }
}

export default App;
