import React , { Component } from "react";
import ReactDOM from "react-dom";
import { Route ,Switch,  BrowserRouter as Router } from "react-router-dom";
import App from "./scenes";

ReactDOM.render(<App />, document.querySelector(".layout__view"));