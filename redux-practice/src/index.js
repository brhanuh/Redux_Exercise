import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./reducers";
import { devToolsEnhancer } from "redux-devtools-extension";
const store = createStore(allReducers, devToolsEnhancer());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
