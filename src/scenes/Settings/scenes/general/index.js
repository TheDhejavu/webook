import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route ,Switch,  BrowserRouter as Router } from "react-router-dom";
import Header from "../../../../components/Header";

export default class General extends  Component {
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
                    <Header goBack={this.goback.bind(this)} title="General"/>
                    <div className="main-view__container">
                        <div className="main-view__container__panel">

                        </div>
                    </div>
               </main>
        )
    }
}