import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as HooksProvider } from "react-apollo-hooks";
import { BrowserRouter } from "react-router-dom";
// Redux
import rootReducer from "./store/reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
// Material-Ui
import { MuiThemeProvider } from '@material-ui/core/styles';
// locals
import apolloClient from "./config/apolloClient";
import muiTheme from './config/materialConfig'
// import apolloClient from "./apolloClientLeigh";
import Routes from "./Routes";


const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ApolloProvider client={apolloClient}>
            <HooksProvider client={apolloClient}>
              <MuiThemeProvider theme={muiTheme}>
                <Routes />
              </MuiThemeProvider>
            </HooksProvider>
          </ApolloProvider>
        </BrowserRouter>
      </Provider>
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
