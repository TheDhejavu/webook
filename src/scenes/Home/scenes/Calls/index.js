import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route ,Switch,  BrowserRouter as Router } from "react-router-dom";
import Sidebar from "../../../../components/Sidebar";
import Header from "./../../components/Header";
import Navigation from "./../../components/navigation";
import Keypad from "./../../components/Keypad";
import CallsList from "./components/list";

export default class Calls extends  Component {
    constructor(){
        super();
        this.state = {
            items:[]
        }
    }
    render(){
        return  (
            <main className="main-view js-main-view">
                <Header />
                <div className="main-view__container__root">
                    <div className="main-view__container__panel js-main-view__panel">
                        <CallsList  />
                   </div>
                </div>
                <div className="main-view__bottom ">
                    <Keypad />
                    <Navigation  hideDialPadBtn={false}/>
                </div>

        </main> )
    }
}
