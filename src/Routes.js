import React, { Component, Suspense } from "react";
import Layout from "./comps/layout/Layout";
import { Route, Switch } from "react-router-dom";
// lib
import { AuthRoute } from './comps/lib/AuthRoute';
// Routes
import Hello from './comps/hello';
import Login from './comps/login';
import Home from './pages/Home'
// test LoginHook
import LoginHook from './comps/hook/LoginHook'

class App extends Component {
  render() {
    return (
        <Layout>
          <Switch>
            <Route exact={true} path="/" component={Hello} />
            <Route path="/login" component={Login} />

            <Suspense fallback={<span style={{fontSize: 75}}>Suspense loading...</span>}>
              <Route path="/hook" component={LoginHook} />
            </Suspense>

            <AuthRoute path="/home" component={Home} />
          </Switch>
        </Layout>
    );
  }
}

export default App;
