import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route ,Switch,  BrowserRouter as Router } from "react-router-dom";

export default class Contacts extends  Component {
    constructor(){
        super();
        this.state = {
            items:[]
        }

    }
    goback(){
        this.props.history.goBack()
    }
    componentWillMount(){
        console.log(this.props);
    }
    render(){
        return  (
            <main className="main-view js-main-view background-grey">
                     <header className="header">
                        <div className="header__panel flex">
                            <button onClick={this.goback.bind(this)} className="goback-button">
                                <i className="ion-chevron-left"></i>
                            </button>
                            <div className="flex header-info">
                                    <span className="image-icon">
                                        <span className="ion-ios-person"></span>
                                    </span>
                                <h2 className="header-page-name">Tolu</h2>
                            </div>
                            <div className="to-right flex header-right">
                                <span> <i className="ion-android-call"></i></span>
                                <span> <i className="ion-android-more-vertical"></i></span>
                            </div>
                        </div>
                    </header>
                    <div className="chat-view-container">
                        <div className="chat-view">
                            <div className="chat-view-panel">
                               <div className="chat-view-time__group">
                                    <p className="heading">Today</p>
                                    <div className="chat-container">
                                            <div className="chat right">
                                                <p>Hello world</p>
                                                <span className="time">6:50 AM <i className="ion-clock"></i></span>
                                            </div>
                                        </div>
                                    <div className="chat-container">
                                        <div className="chat right">
                                            <p>Morning</p>
                                            <span className="time">7:50 AM <i className="ion-clock"></i></span>
                                        </div>
                                    </div>
                               </div>
                            </div>
                        </div>
                        <div className="chat-view-bottom flex">
                            <div className="chat-view-bottom_input_wrap">
                                <input type="text" placeholder="Message"></input>
                            </div>
                            <button className="chat-upload-btn"> <i className="ion-android-camera"></i></button>
                        </div>
                    </div>
            </main>
        )
    }
}
