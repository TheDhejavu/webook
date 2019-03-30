import React, { Component, PropTypes } from "react";
import IDBDatabaseInstance from "../../../../../../services/model/IDBDatabase";
import Toaster from "../../../../../../components/Toaster";
import ToasterInstance from "../../../../../../components/Toaster/controller";

export default class Dialog extends  Component {
    constructor(){
        super();
        this.data = {};
        this.isEmpty = true;
        this.state = {
            items:[]
        }
    }

    handleDialogClose(){
        this.props.closeDialog();
    }
    handleValidation(){
        this.field = document.querySelectorAll(".js-contact-field");

        for(var x =0; x < this.field.length; x++){
            var fieldValue = this.field[x].value;

            if(fieldValue === ""){
                this.isEmpty = true;
                break;
            }else{
                this.isEmpty = false;
                var keyName = this.field[x].getAttribute("name");
                this.data[keyName] = this.field[x].value;
            }
        };

        if(this.isEmpty){
            ToasterInstance().then(( toaster )=>{
                toaster.toast("All fields are required.")
            });
        }else{
            this.data["uniqueid"] = this.props.makeUIDFromContact();
            this.handleSave();
        }
    }
    handleSave(){
        IDBDatabaseInstance().then((db)=>{

            db.add("contactStore", this.data ).then( (key)=>{

                for(var x =0; x < this.field.length; x++){
                   this.field[x].value = "";
                };

                ToasterInstance().then(( toaster )=>{
                    toaster.toast("Successfully saved..")
                });

                console.log(this.data)

               this.props.onAddContact({
                   key: key,
                   value : this.data
               } );
            })
        })
    }

    render(){

        return  (
            <div className="dialog  dialog-new-wide js-dialog">
                <div className="dialog-new-wide__wrapper">
                    <div className="dialog-container dialog-new-wide__container js-dialog-container">
                         <div className="dialog-new-wide__main">
                            <h4 className="heading">New Contact</h4>
                            <form>
                                <div className="field-wrap">
                                    <label className="field-label">FULLNAME</label>
                                    <input type="text" name="fullname" className="js-contact-field"/>
                                </div>
                                <div className="field-wrap">
                                    <label className="field-label">PHONE NUMBER</label>
                                    <input type="text" name="phone" className="js-contact-field"/>
                                </div>
                                <div className="field-wrap">
                                    <label className="field-label">COUNTRY</label>
                                    <input type="text" name="country" className="js-contact-field"/>
                                </div>
                                <div className="field-wrap">
                                    <label className="field-label">WORK PLACE</label>
                                    <input type="text" name="workplace" className="js-contact-field"/>
                                </div>
                                <div className="field-wrap">
                                    <label className="field-label">TYPE</label>
                                    <select name="type" className="js-contact-field">
                                        <option value="family">Family</option>
                                        <option value="friend">Friend</option>
                                        <option value="Acquintance">Acquintance</option>
                                        <option value="Colleague">Colleague</option>
                                    </select>
                                </div>
                            </form>
                         </div>
                         <div className="text-center dialog-bottom">
                                <button className="dialog-btn js-okay" onClick={this.handleValidation.bind(this)}>Save</button>
                                <button className="dialog-btn js-cancel" onClick={this.handleDialogClose.bind(this)}>Cancel</button>
                        </div>
                    </div>
                </div>
                <Toaster />
            </div>
        )
    }
}
