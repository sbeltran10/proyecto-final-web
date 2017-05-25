import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import styles from "./css/outfits.css"
import '../assets/plugins/jquery-1.11.3.min.js'

export default class Outfits extends Component {

    constructor(props) {
        super(props);
        this.state = {
            head: null,
            tosro: null,
            legs: null,
            feet: null,
            accessory1: null,
            accessory2: null,
            selected: null,
            wardrobeGarments: []
        }

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

    filterWardrobeByType(type){

    }

    render() {
        var wardrobeSlots = [];
        for (var i = 0; i < 10; i++) {
            wardrobeSlots.push(
                <div className="col-md-6">
                    <div className="wardrobe-slot-empty" key={i}></div>
                </div>
            );
        }

        return (
            <div className="container">
                <div className="row headers-edit">
                    <div className="col-md-5 title-wardrobe">Wardrobe</div>
                    <div className="col-md-1"></div>
                    <div className="col-md-6 title-outfit">Outfit</div>
                </div>
                <div className="row center-outfit">
                    <div className="col-md-5 outfit-wardrobe">
                        <div className="row">
                            {wardrobeSlots}
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-4 outfit-outline-edit">
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6">
                                <div className="slot-head-edit" onClick={() => this.changeSlot("head")}></div>
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
                                <div className="slot-legs-edit" onClick={() => this.changeSlot("legs")}></div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <div className="slot-feet-edit" onClick={() => this.changeSlot("feet")}></div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </div>
                    <div className="col-md-2 accesories-edit">
                        <div className="row">
                            <div className="col-md-10 accessory-back1">
                                <div className="slot-accessory1-edit" onClick={() => this.changeSlot("accessory1")}></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-10 accessory-back2">
                                <div className="slot-accessory2-edit" onClick={() => this.changeSlot("accessory2")}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
