import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { Garments } from '../api/garment.js';
import styles from "./css/outfits.css"
import '../assets/plugins/jquery-1.11.3.min.js'

export default class Outfits extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hat: null,
            shirt: null,
            pants: null,
            shoes: null,
            accessory1: null,
            accessory2: null,
            selected: null,
        }

    }

    changeSlot(newSlot) {
        if (newSlot.startsWith("accessory")) {
            this.filterWardrobeByType('accessory', newSlot);
        }
        else {
            this.filterWardrobeByType(newSlot, newSlot);
        }

    }

    filterWardrobeByType(garType, slot) {
        var result = Garments.find({ type: garType }).fetch();
        this.setState({ wardrobeGarments: result })
        for (var i = 0; i < 10; i++) {
            var warDroveItem = document.getElementById("garment" + i);
            if (result[i]) {
                var newGarment = JSON.parse(JSON.stringify(result[i]));
                warDroveItem.className = "wardrobe-slot-item";
                warDroveItem.style.backgroundImage = 'url(' + newGarment.image + ')';
                var ctx1 = this;
                warDroveItem.onclick = (function () {
                    var ctx2 = ctx1
                    var cNewGarment = newGarment;
                    return function () {
                        ctx2.updateSlot(slot, cNewGarment);
                    }
                })();
            }
            else {
                warDroveItem.className = "wardrobe-slot-empty";
                warDroveItem.style.backgroundImage = '';
            }
        }
    }

    updateSlot(slot, garment) {
        console.log(garment);
        var slotToUpdate = document.getElementsByClassName('slot-' + slot + '-edit')[0];
        slotToUpdate.className += " filled";
        slotToUpdate.style.backgroundRepeat = "no-repeat";
        slotToUpdate.style.backgroundPosition = "center";
        slotToUpdate.style.backgroundImage = 'url(' + garment.image + ')';
        slotToUpdate.style.backgroundSize = "contain";
    }


    render() {
        var wardrobeSlots = [];
        for (var i = 0; i < 10; i++) {
            wardrobeSlots.push(
                <div className="col-md-6">
                    <div className="wardrobe-slot-empty" id={"garment" + i}></div>
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
                        <div className="row">{wardrobeSlots}</div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-4 outfit-outline-edit">
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6">
                                <div className="slot-hat-edit" onClick={() => this.changeSlot("hat")}></div>
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="slot-shirt-edit" onClick={() => this.changeSlot("shirt")}></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <div className="slot-pants-edit" onClick={() => this.changeSlot("pants")}></div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <div className="slot-shoes-edit" onClick={() => this.changeSlot("shoes")}></div>
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
