import React, { Component } from "react";

export default class Profile extends  Component {
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
        return(
            <main className="main-view js-main-view">
                    <header className="profile-header">
                        <div className="header__panel flex">
                            <button onClick={this.goback.bind(this)} className="goback-button">
                                <i className="ion-chevron-left"></i>
                            </button>
                            <h2 className="header-page-name"> Dejavuu</h2>
                        </div>
                    </header>
                    <div className="profile-view-container">
                        <div className="profile-view-container__panel js-main-view__panel">
                	        <div className="profile-view flex column center">
                                 <div className="profile-view-info">
                                    <span className="image-icon">
                                        <span className="ion-ios-person"></span>
                                    </span>
                                    <h3 className="name">Akinola Ayodeji</h3>
                                    <button className="add-tag-btn btn"><i className="ion-android-add-circle"></i> Add tag</button>
                                 </div>
                                 <nav className="profile-view-nav ">
                                    <ul className="flex">
                                        <li>
                                            <a href="#">
                                                <i className="ion-android-call"></i>
                                                <span className="span-name">Call</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/messages">
                                                <i className="ion-chatbubble-working"></i>
                                                <span className="span-name">Message</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="ion-edit"></i>
                                                <span className="span-name">Edit</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="ion-alert-circled"></i>
                                                <span className="span-name">Block</span>
                                            </a>
                                        </li>
                                    </ul>
                                 </nav>
                                 <div className="profile-view-sections">
                                    <div className="profile-view-section">
                                        <div className="flex profile-view-section__list">
                                            <i className="icon ion-android-phone-portrait"></i>
                                            <div className="text">
                                                <p>08045678910</p>
                                                <span>Mobile- Etisalat</span>
                                            </div>
                                        </div>
                                        <div className="flex profile-view-section__list">
                                            <i className="ion-android-alarm-clock icon"></i>
                                            <div className="text">
                                                <p>View call history</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="profile-view-section">
                                        <div className="flex profile-view-section__list">
                                            <i className="ion-email icon"></i>

                                            <div className="text">
                                                <p>akinayodeji4all@gmail.com</p>
                                            </div>
                                        </div>
                                        <div className="flex profile-view-section__list">
                                           <i className="ion-ios-location icon"></i>
                                            <div className="text">
                                                <p>Nigeria</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="profile-view-section">
                                    </div>
                                 </div>
                            </div>
                        </div>
                    </div>
            </main>
        )
    }
}
