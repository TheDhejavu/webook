import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export const ContactList = (props)=>{
    const {fullname, country} = props.value;
    return (
        <NavLink to={"/dejavuu"} className="contact-wrap">
                <div className="contact flex">
                    <div className="contact-icon">
                    <span className="round-icon ion-ios-person"><i></i></span>
                </div>
                <div className="contact-info">
                    <p className="name">{fullname}</p>
                    <span className="timeago">{country}</span>
                </div>
                <div className="contact-right ">
                    <p className="message-icon"> <i className="ion-chatbubble-working"></i></p>
                </div>
            </div>
        </NavLink>
    )
}
export default class Contact extends  Component {
    constructor(){
        super();
    }

    render(){
        return (
        <div className="contact-lists">
            {this.props.children}
        </div>)
    }
}
