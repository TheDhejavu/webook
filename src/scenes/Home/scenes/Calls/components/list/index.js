import React, { Component } from "react";

export default class Calls extends  Component {
    constructor(){
        super();
        this.state = {
            items:[]
        }
    }
    render(){
        return (
        <div>
            <div className="contact flex">
                <div className="contact-icon">
                <span className="round-icon ion-ios-person"><i></i></span>
                </div>
                <div className="contact-info">
                    <p className="name">*8556#</p>
                    <span className="timeago"><i className="ion-social-chrome"></i> web</span>
                </div>
                <div className="contact-right">
                    <span className="timeago">23minutes ago</span>
                    <p className="message-icon"> <i className="ion-chatbubble-working"></i></p>
                </div>
            </div>
            <div className="contact flex">
                <div className="contact-icon">
                <span className="round-icon ion-ios-person"><i></i></span>
                </div>
                <div className="contact-info">
                    <p className="name">Akinola Akinwande</p>
                    <span className="timeago"><i className="ion-iphone"></i> Nokia 350</span>
                </div>
                <div className="contact-right">
                        <span className="timeago">2seconds ago</span>
                        <p className="message-icon"> <i className="ion-chatbubble-working"></i></p>
                    </div>
            </div>
            <div className="contact flex">
                    <div className="contact-icon">
                    <span className="round-icon ion-ios-person"><i></i></span>
                    </div>
                    <div className="contact-info">
                        <p className="name">Bolude olabode</p>
                        <span className="timeago"><i className="ion-iphone"></i> iphone</span>
                    </div>
                    <div className="contact-right">
                            <span className="timeago">2minutes ago</span>
                            <p className="message-icon"> <i className="ion-chatbubble-working"></i></p>
                        </div>
                </div>
            </div>)
    }
}
