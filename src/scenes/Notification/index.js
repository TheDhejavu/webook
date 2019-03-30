import React, { Component } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

export default class Feedback extends  Component {
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
            <div>
                <Sidebar />
                <main className="main-view js-main-view" >
                    <Header goBack={this.goback.bind(this)} title="Notification" />
                    <div className="main-view__container">
                        <div className="main-view__container__panel">

                        </div>
                    </div>
               </main>
            </div>
        )
    }
}