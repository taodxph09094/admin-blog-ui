import React, { Component } from "react";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import viVN from "antd/es/locale/vi_VN";
import store from "./store";
import Router from "./router";

class App extends Component {
  render() {
    return (
      <ConfigProvider locale={viVN}>
        <Provider store={store}>
          <Router />
        </Provider>
      </ConfigProvider>
    );
  }
}

export default App;
