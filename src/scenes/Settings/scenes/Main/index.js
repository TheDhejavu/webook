import React, { Component } from "react";
import ReactDOM from "react-dom";
import {NavLink } from "react-router-dom";
import Sidebar from "../../../../components/Sidebar";
import Header from "../../../../components/Header";

export default class Main extends  Component {
    constructor(){
        super();
        this.state = {
            items:[]
        }
    }
    goback(){
        this.props.history.goBack()
    }
    render(){
        return  (
                <main className="main-view js-main-view " >
                    <Header goBack={this.goback.bind(this)} title="Settings"/>
                    <div className="main-view__container">
                        <div className="main-view__container__panel">
                            <div className="settings-main-list">
                                <ul>
                                    <li>
                                        <NavLink to={"/general"}>
                                            <i className="ion-android-settings"></i> General
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"/general"}>
                                            <i className="ion-android-alarm-clock"></i> Sounds
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"/general"}>
                                            <i className="ion-ios-world"></i> App Language
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"/general"}>
                                            <i className="ion-android-phone-portrait"></i> Caller ID
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"/general"}>
                                            <i className="ion-chatbubble-working"></i> Messaging
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"/general"}>
                                            <i className="ion-alert-circled"></i> Block
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"/general"}>
                                            <i className="ion-android-color-palette"></i> Appearance
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"/general"}>
                                            <i className="ion-android-alert"></i> About
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
               </main>

        )
    }
}