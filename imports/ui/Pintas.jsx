import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import styles from "./css/outfits.css"
import '../assets/plugins/jquery-1.11.3.min.js'

export default class Pintas extends Component {

    constructor(props) {
        super(props);
    }

    changeSlot(slot) {
        var slot = document.getElementsByClassName('slot-' + slot + '-edit')[0];
        console.log(slot);
        slot.className += " filled";
        slot.style.backgroundRepeat = "no-repeat";
        slot.style.backgroundPosition = "center";
        slot.style.backgroundImage = 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaruUrCKsMYKDr5ZNa5DcWlyNkJNsMhh5ic3iILvO-UoPVR1H9)';
        slot.style.backgroundSize = "contain";
    }


    render() {
        return (
            <div className="container">
                <div className="row center-outfit">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 outfit-outline-edit">
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6">
                                <div className="slot-cabeza-edit" onClick={() => this.changeSlot("cabeza")}></div>
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="slot-torso-edit" onClick={() => this.changeSlot("torso")}></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <div className="slot-piernas-edit" onClick={() => this.changeSlot("piernas")}></div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <div className="slot-pies-edit" onClick={() => this.changeSlot("pies")}></div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </div>
                    <div className="col-md-2 accesories-edit">
                        <div className="row">
                            <div className="col-md-10">
                                <div className="slot-accesorio1-edit" onClick={() => this.changeSlot("accesorio1")}></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-10">
                                <div className="slot-accesorio2-edit" onClick={() => this.changeSlot("accesorio2")}></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        );
    }
}
