import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Lists extends  Component {
    constructor(){
        super();
        this.state = {
            items:[]
        }
        this.handleOnClickBound = this.handleOnClick.bind(this);
    }
    handleOnClick(){
        console.log("clicked...")
    }
    render(){
        return  (
            <ul>
                <li>
                    <Link to={"/notification"} onClick={this.handleOnClickBound}>
                      <i className="ion-android-notifications"></i> Notification
                    </Link>
                </li>
                <li>
                    <Link to={"/faq"}> <i className="ion-help-circled"></i> Faq</Link>
                </li>
                <li>
                    <Link to={"/sendFeedback"}> <i className="ion-android-textsms"></i> Send Feedback</Link>
                </li>
                <li>
                    <Link to={"/share"}> <i className="ion-android-share-alt"></i> Share</Link>
                </li>
                <li>
                    <Link to={"/settings"}> <i className="ion-android-settings"></i> Settings</Link>
                </li>
           </ul>
        )
    }
}


