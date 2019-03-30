import React, { Component } from "react";
import { Route ,Switch,  BrowserRouter as Router } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import General from "./scenes/general";
import Main from './scenes/Main';

export default class Settings extends  Component {
    constructor(){
        super();
        this.state = {
            items:[]
        }
    }
    render(){
        return  (
            <div className="big-wrapper ">
                <Sidebar />
                <Router>
                    <Switch>
                        <Route  exact path={"/settings"} component={Main}></Route>
                        <Route  path={"/general"} component={General}></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}