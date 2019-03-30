import React, { Component } from "react";
import { Route ,Switch,  BrowserRouter as Router } from "react-router-dom";

export default class Header extends  Component {
    constructor(){
        super();
        this.state = {
            items:[]
        }
    }
    goback(){
        this.props.goBack();
    }
    render(){
        return  (
            <header className="header">
                <div className="header__panel flex">
                    <button onClick={this.goback.bind(this)} className="goback-button">
                        <i className="ion-chevron-left"></i>
                    </button>
                    <h2 className="header-page-name">{this.props.title}</h2>
                </div>
            </header>
        )
    }
}


