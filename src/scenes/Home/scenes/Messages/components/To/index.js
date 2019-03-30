import React, { Component } from "react";
import IDBDatabaseInstance from "../../../../../../services/model/IDBDatabase";
import  Contact, { ContactList } from  "../../../Contacts/components/contact";

export default class MessageTo extends  Component {
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
    handleDialogClose(){
        this.props.closeDialog();
    }

    componentDidMount(){

        IDBDatabaseInstance().then((db)=>{
            db.getAll("contactStore").then( (success)=>{
                console.log(success)
                this.setState({ contacts: success});
            })
        })
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

        const Contacts = this.state.alphabet.map((value, index)=>{
            return (
                    <div className="contacts-container" key={index}>
                        <h3 className="contact__alpha">{value}</h3>
                        { (this.state.contacts.length >= 1)? this.setLists(value) : <p> Nothing to show </p>}
                    </div>
                    )
        })

        return  (

            <div className="dialog js-dialog message-to__dialog">
                <div className="dialog-new-wide__wrapper">
                    <div className="dialog-container dialog-new-wide__container js-dialog-container">
                         <div className="dialog-new-wide__main">
                            <div className="flex">
                                 <h4 className="heading">To:</h4>
                                 <input placeholder="Search...." type="text" ref="search"className="message-to__search__field"/>
                            </div>
                            <div className="message-to__container">
                              {Contacts}
                            </div>
                         </div>
                         <div className="text-center dialog-bottom">
                                <button className="dialog-btn js-okay">OK!</button>
                                <button className="dialog-btn js-cancel" onClick={this.handleDialogClose.bind(this)}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
