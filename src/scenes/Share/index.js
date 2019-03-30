import React, { Component } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

export default class Share extends  Component {
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
                <main className="main-view js-main-view background-grey" >
                    <Header goBack={this.goback.bind(this)} title="Share"/>
                    <div className="main-view__container">
                        <div className="main-view__container__panel">
                            <div className="share-app-container flex flex--wrap">
                                <div className="col-ms-50">
                                    <div className="share-grid flex">
                                        <div className="share-grid-icon__container">
                                            <i className="ion-social-whatsapp green"></i>
                                        </div>
                                        <div className="share-grid-info">
                                            <h3 className="title">Whatsapp</h3>
                                            <p className="link">chat.Whatsapp.com/share?....</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-ms-50">
                                    <div className="share-grid flex">
                                        <div className="share-grid-icon__container">
                                            <i className="ion-social-facebook deep-blue"></i>
                                        </div>
                                        <div className="share-grid-info">
                                            <h3 className="title">Facebook</h3>
                                            <p className="link">facebook.com/share?....</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-ms-50">
                                    <div className="share-grid flex">
                                        <div className="share-grid-icon__container">
                                            <i className="ion-social-twitter light-blue"></i>
                                        </div>
                                        <div className="share-grid-info">
                                            <h3 className="title">Twitter</h3>
                                            <p className="link">twitter.com/share?....</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-ms-50">
                                    <div className="share-grid flex">
                                        <div className="share-grid-icon__container">
                                            <i className="ion-social-reddit-outline brown"></i>
                                        </div>
                                        <div className="share-grid-info">
                                            <h3 className="title">Reddit</h3>
                                            <p className="link">reddit.com/share?....</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
               </main>
            </div>
        )
    }
}