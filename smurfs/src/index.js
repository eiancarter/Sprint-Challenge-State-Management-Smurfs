import React from "react";
import ReactDOM from "react-dom";
//yarn add react-redux redux - done
import { createStore, applyMiddleware } from 'redux';
//yarn add redux-thunk - done
//yarn add redux-logger - done
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import reducer from './reducers';
//
import "./index.css";
import App from "./components/App";

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
