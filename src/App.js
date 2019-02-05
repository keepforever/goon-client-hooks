import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as HooksProvider } from "react-apollo-hooks";
import { BrowserRouter } from "react-router-dom";
// locals
import apolloClient from "./apolloClient";
// import apolloClient from "./apolloClientLeigh";
import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ApolloProvider client={apolloClient}>
          <HooksProvider client={apolloClient}>
            <Routes />
          </HooksProvider>
        </ApolloProvider>
      </BrowserRouter>
    );
  }
}

export default App;

// Redux
// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import rootReducer from "./store/reducers";
//my custom components

// maybe: Remember to remove __REDUX_DEVTOOLS_EXTENSION__...
// before deploy
// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
