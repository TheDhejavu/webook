import React, { Component } from "react";

export default class Keypad extends  Component {
    constructor(){
        super();
        this.state = {
            items:[]
        }
    }
    handlePress(e){
        this.callBtn = document.querySelector(".js-call-pad-btn");
        this.dialpadBtn = document.querySelector(".js-dial-pad-btn");

        this.callBtn.classList.add("call-btn-visible");
        this.dialpadBtn.classList.add("hidden");

        console.log(e);
    }
    render(){
        return (
            <div className="dial-pad flex column center  js-dial-pad">
                <div className="phoneString">
                    <input type="text" disabled value=""/>
                    <button className="backspace-button">
                        <i className="ion-backspace"></i>
                    </button>
                </div>
               <div className="dial-pad__panel ">
                    <div className="col-ms-33 flex" >
                            <div className="key" rel="1" onClick={this.handlePress.bind(this)}>
                                    1<span className="ion-ios-infinite"></span>
                                 </div>
                                 <div className="key"  onClick={this.handlePress.bind(this)}>
                                     2<span>abc</span>
                                </div>
                                <div className="key"  onClick={this.handlePress.bind(this)}>
                                    3<span>def</span>
                                </div>
                    </div>
                    <div className="col-ms-33 flex">
                            <div className="key"  onClick={this.handlePress.bind(this)}>
                                    4<span>ghi</span>
                                </div>
                                <div className="key"  onClick={this.handlePress.bind(this)}>
                                    5<span>jkl</span>
                                </div>
                                <div className="key"  onClick={this.handlePress.bind(this)}>
                                    6<span>mno</span>
                                </div>
                    </div>
                    <div className="col-ms-33 flex" >
                            <div className="key"  onClick={this.handlePress.bind(this)}>
                                    7<span>pqrs</span>
                                </div>
                                <div className="key"  onClick={this.handlePress.bind(this)}>
                                    8<span>tuv</span>
                                </div>
                                <div className="key"  onClick={this.handlePress.bind(this)}>
                                    9<span>wxyz</span>
                                </div>
                    </div>
                    <div className="col-ms-33 flex text-center" >
                        <div className="key last-key"  onClick={this.handlePress.bind(this)}>
                            #<span></span>
                        </div>
                        <div className="key last-key"  onClick={this.handlePress.bind(this)}>
                            0<span>+</span>
                        </div>
                        <div className="key last-key"  onClick={this.handlePress.bind(this)}>
                            *<span></span>
                        </div>
                  </div>
               </div>
    </div>
        )
    }
}


