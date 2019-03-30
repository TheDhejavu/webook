import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route ,Switch,  BrowserRouter as Router } from "react-router-dom";
import Sidebar from "../../../../components/Sidebar";
import Header from "./../../components/Header";
import Navigation from "./../../components/navigation";
import Keypad from "./../../components/Keypad";
import Inbox from "./components/inbox";
import MessageTo from "./components/to";
import DialogInstance from "../../controllers/Dialog";

export default class Message extends  Component {
    constructor(){
        super();
        this.state = {
            items:[]
        }
    }
    openMessageToDialog(){
        console.log(this.props);
        DialogInstance().then( Dialog=>{
            Dialog.openDialogComponent();
        })
    }
    closeMessageToDialog(){
        DialogInstance().then( Dialog=>{
            Dialog.closeDialogComponent();
        })
    }
    componentWillMount(){
        console.log(this.props);
    }
    render(){
        return (
                <main className="main-view js-main-view">
                    <Header />
                    <div className="main-view__container__root">
                        <div className="main-view__container__panel js-main-view__panel">
                             <Inbox  />
                             <button className="new-button" onClick={this.openMessageToDialog.bind(this)}> <i className="ion-android-add-circle"></i></button>
                        </div>
                    </div>
                    <div className="main-view__bottom ">
                        <Keypad />
                        <Navigation  hideDialPadBtn={true}/>
                    </div>
                    <MessageTo closeDialog={this.closeMessageToDialog.bind(this)}/>
               </main>
            )
    }
}
