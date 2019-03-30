import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navigation extends  Component {
    constructor(){
        super();
        this.state = {
            items:[]
        }
        this.isDialpadOpen = false;
    }
    handleDialPad(){
        this.dialpad = document.querySelector(".js-dial-pad");
        this.dialpadBtn = document.querySelector(".js-dial-pad-btn");
        if(!this.isDialpadOpen ){
            this.isDialpadOpen  = true;
            this.dialpad.classList.add("dial-pad--visible");
            this.dialpadBtn.classList.add("small-dial-pad");
        }else{
            this.isDialpadOpen  = false;
            this.dialpad.classList.remove("dial-pad--visible");
            this.dialpadBtn.classList.remove("small-dial-pad");
        }

    }

    render(){
        let element = null;
        if(this.props.hideDialPadBtn){
            element = <NavLink to={"/"} className="js-calls-link calls-anchor">
                        <i className="ion-ios-telephone"></i>
                        <span>Calls</span>
                    </NavLink>
        }else{
            element = <NavLink to={"#"} className="dial-pad__button js-dial-pad-btn"  onClick={this.handleDialPad.bind(this)}>
                         <i className="ion-ios-keypad"></i>
                     </NavLink>
        }
        return  (
            <div className="main-view__bottom__panel flex center">
                <div className="control-pad ">
                        <NavLink to={"/messages"}>
                            <i className="ion-chatbubble-working"></i>
                            <span>Messages</span>
                        </NavLink>
                    </div>
                    <div className="control-pad">
                        {element}
                        <button className="call-pad__button js-call-pad-btn call-btn-invisible">
                             <i className="ion-ios-telephone"></i>
                        </button>
                    </div>
                    <div className="control-pad">
                        <NavLink to={"/contacts"} >
                            <i className="ion-ios-people"></i>
                            <span>Contacts</span>
                        </NavLink>
                    </div>
            </div>
        )
    }
}