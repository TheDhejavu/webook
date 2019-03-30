import React, { Component } from "react";
import Nav from "../Nav";
import { NavLink } from "react-router-dom";

export default class Messages extends  Component {
    constructor(){
        super();
        this.state = {
            items:[]
        }

    }
    render(){
        return  (
            <div className="messages__container">
                <Nav/>
                <div className="messaged-lists">
                   <NavLink to={"/messages/tolu"} className="contact-wrap">
                        <div className="contact flex">
                            <div className="contact-icon">
                            <span className="round-icon ion-ios-person"><i></i></span>
                            </div>
                            <div className="contact-info">
                                <p className="name">Akinola Ayodeji</p>
                                <span className="last-message"> Hello how are you??</span>
                            </div>
                            <div className="contact-right">
                                <span className="timeago">yesterday</span>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to={"/messages/dejavuu"} className="contact-wrap">
                        <div className="contact flex">
                            <div className="contact-icon">
                            <span className="round-icon ion-ios-person"><i></i></span>
                            </div>
                            <div className="contact-info">
                                <p className="name">Makind tolulope</p>
                                <span className="last-message"> Hi!!!!</span>
                            </div>
                            <div className="contact-right">
                                <span className="timeago">2days ago</span>
                            </div>
                        </div>
                    </NavLink>
                </div>
                </div>
        )
    }
}
