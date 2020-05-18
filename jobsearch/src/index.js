import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import rootSaga from "./Saga";
import reducer from "./Reducer";
import { Provider } from "react-redux";
import { logger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, combineReducers } from "redux";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Homepage = lazy(() => import("./Views/Homepage"));

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  reducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route path="/" exact component={Homepage} />

          <Route path="*" component={Homepage} />
        </Switch>
      </Suspense>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
