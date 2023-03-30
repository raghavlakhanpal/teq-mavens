import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

import { Provider } from "react-redux";
import reducers from "./reducers";
import { legacy_createStore } from "redux";

const store = legacy_createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
