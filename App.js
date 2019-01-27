import React from "react";
import Router from "./Router";
import { Provider } from "react-redux";
import store from "./store";

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
