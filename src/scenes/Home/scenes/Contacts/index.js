import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route ,Switch,  BrowserRouter as Router } from "react-router-dom";
import Sidebar from "../../../../components/Sidebar";
import Header from "./../../components/Header";
import Navigation from "./../../components/navigation";
import Keypad from "./../../components/Keypad";
import  Contact, { ContactList } from "./components/contact";
import Dialog from "./components/Dialog";
import DialogInstance from "../../controllers/Dialog";
import IDBDatabaseInstance from "../../../../services/model/IDBDatabase";

export default class Contacts extends  Component {
    constructor(){
        super();
        this.state = {
            alphabet:[
                "A","B","C","D","E","F","G","H","I","J",
                "K","L","M","N","O","P","Q","R","S","T",
                "U","V","W","X","Y","Z"
            ],
            contacts:[]
        }

    }
    openNewContactComponent(){
        DialogInstance().then( Dialog=>{
            Dialog.openDialogComponent();
        })
    }
    closeNewContactComponent(){
        DialogInstance().then( Dialog=>{
            Dialog.closeDialogComponent();
        })
    }
    makeUID () {
        var uid = '';
        for (var i = 0; i < 16; i++) {
         uid += Number(
              Math.floor(Math.random() * 16)
          ).toString(16);
        }

        return uid;
    }

    componentDidMount(){
        IDBDatabaseInstance().then((db)=>{
            db.getAll("contactStore").then( (success)=>{
                this.setState({ contacts: success});
            })
        })
    }
    onAddContact( contact ){
        const newContacts = this.state.contacts;
        newContacts.push(contact);

        this.setState({
             contacts: newContacts
        });
    }
    setLists( key ){
        const cLists = this.state.contacts.map((data, index)=>{
            const firstLetter = data.value.fullname.slice(0,1).toUpperCase();
            if(firstLetter == key){
                return (
                        <ContactList
                            key={index}
                            {...data}
                        />
                )
            }
        });

        return cLists;
    }
    render(){
        const contacts = this.state.alphabet.map((value, index)=>{
            return (
                    <div className="contacts-container" key={index}>
                        <h3 className="contact__alpha">{value}</h3>
                        { this.setLists(value)}
                    </div>
                    )
        })
        return  (
            <main className="main-view js-main-view">
                    <Header />
                    <div className="main-view__container__root">
                        <div className="main-view__container__panel js-main-view__panel">
                             <Contact>
                                {contacts}
                             </Contact>
                             <button className="new-button" onClick={this.openNewContactComponent.bind(this)}>
                                <i className="ion-android-person-add"></i>
                            </button>
                        </div>
                    </div>
                    <div className="main-view__bottom ">
                        <Keypad />
                        <Navigation  hideDialPadBtn={true}/>
                    </div>
                    <Dialog
                        closeDialog={this.closeNewContactComponent.bind(this)}
                        makeUIDFromContact = {this.makeUID.bind(this)}
                        onAddContact = {this.onAddContact.bind(this)}
                        {...this.props}
                    />
               </main>
        )
    }
}
