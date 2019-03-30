import React, { Component } from "react";

export default class Nav extends  Component {
    constructor(){
        super();
        this.state = {
            items:[]
        }
    }

render(){
    return (
          <nav className="message-nav">
            <ul className="flex center">
                <li>
                    <a href="#" className="active-msg__link">Inbox</a>
                </li>
                <li>
                    <a href="#">Spam</a>
                </li>
            </ul>
        </nav>
        )
    }
}
