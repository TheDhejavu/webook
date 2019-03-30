import React , { Component } from "react";
import ReactDOM from "react-dom";
import { Route ,Switch,  BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import Feedback from "./Feedback";
import notification from "./Notification";
import Share from "./Share";
import Settings from "./Settings";
import Faq from "./Faq";

export default class Layout extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <Router>
                <Switch>
                    <Route  exact path={"/"} component={Home}></Route>
                    <Route  path={"/notification"} component={notification}></Route>
                    <Route  path={"/sendfeedback"} component={Feedback}></Route>
                    <Route  path={"/faq"} component={Faq}></Route>
                    <Route  path={"/share"} component={Share}></Route>
                    <Route  path={"/settings"} component={Settings}></Route>
                    <Route  path={"/:page"} component={Home}></Route>
                </Switch>
            </Router>
        )
    }
}
