import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route ,Switch,  BrowserRouter as Router } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Header from "./components/Header";
import Navigation from "./components/navigation";
import Keypad from "./components/Keypad";
import Calls from "./scenes/Calls";
import Messages from "./scenes/Messages";
import Contacts from "./scenes/Contacts";
import Chat from "./scenes/chat";
import Profile from "./scenes/Profile";

export default class Home extends  Component {
    constructor(){
        super();
        this.state = {
            items:[]
        }
    }

    render(){
        return  (
            <div className="big-wrapper">
              <Sidebar />
               <Router>
                    <Switch>
                        <Route  exact path={"/"} component={Calls}></Route>
                        <Route  path={"/messages/:user"} component={Chat}></Route>
                        <Route  path={"/messages"} component={Messages}></Route>
                        <Route  path={"/contacts"} component={Contacts}></Route>
                        <Route  path={"/:user"} component={Profile}></Route>
                    </Switch>
               </Router>
            </div>
        )
    }
}
