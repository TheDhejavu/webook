import React, { Component } from "react";

export default class Header extends  Component {
    constructor(){
        super();
        this.state = {
            items:[]
        }
    }
    render(){
        return  (
            <header className="header">
                <div className="header__panel flex">
                    <button className="hamburger-button">
                        <i className="ion-navicon-round"></i>
                    </button>
                    <div className="search-field__container">
                        <form method="GET" >
                            <input className="search-field" placeholder="Search weBbook"/>
                        </form>
                    </div>
                </div>
            </header>
        )
    }
}