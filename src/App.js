import React, { Component } from "react";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./config/reactotron";
import GlobalStyle from "./styles/global";

import Routes from "./routes";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <GlobalStyle />
            <Routes />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
