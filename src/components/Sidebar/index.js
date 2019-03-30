import React, { Component } from "react";
import Lists from "./Lists";
import { Link } from "react-router-dom"

export default class Sidebar extends  Component {
    constructor(){
        super();
        this.state = {
            items:[]
        }
    }
    render(){
        return  (
            <div >
                <div className="sidebar sidebar__left">
                    <div className="sidebar__left__top">
                        <div className="sidebar__user--info flex">
                            <div className="img-container">
                                <span className="camera"> <i className="ion-ios-camera"></i></span>
                            </div>
                            <div className="">
                                    <p className="name">Akinola Ayodeji</p>
                                    <span className="number">09039121087</span>
                            </div>
                        </div>
                    </div>
                    <nav className="sidebar__left__nav">
                        <Lists />
                    </nav>
                    <div className="logo ">
                        <h1>
                            <Link to={"/"} >
                              <i className="ion-ios-telephone"></i>
                            </Link>
                        </h1>
                    </div>
                 </div>
                 <div className="sidebar sidebar__right">
                </div>
            </div>
        )
    }
}


