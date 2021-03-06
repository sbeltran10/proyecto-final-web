import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { Garments } from '../api/garment.js';
import { Outfit } from '../api/outfit.js';
import styles from "../assets/css/outfits.css";
import '../assets/plugins/jquery-1.11.3.min.js';
import OutfitComponent from './Outfit.jsx';
import sweetAlert from 'sweetAlert';

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
            name: ""
        }
    }

    resetOutfitBuilder() {
        for (var i = 0; i < 10; i++) {
            var currentInvSlot = document.getElementById('garment' + i);
            console.log(currentInvSlot);
            currentInvSlot.className = "wardrobe-slot-empty";
            currentInvSlot.style.backgroundImage = "";
            currentInvSlot.pointerEvents = 'none';

            $("#popover" + i).popover('disable');
        }

        if (this.state.hat) {
            this.resetSlot("hat");
        }
        if (this.state.shirt) {
            this.resetSlot("shirt");
        }
        if (this.state.pants) {
            this.resetSlot("pants");
        }
        if (this.state.shoes) {
            this.resetSlot("shoes");
        }
        if (this.state.accessory1) {
            this.resetSlot("accessory1");
        }
        if (this.state.accessory2) {
            this.resetSlot("accessory2");
        }

        this.setState({
            hat: null,
            shirt: null,
            pants: null,
            shoes: null,
            accessory1: null,
            accessory2: null,
            selected: null,
            name: ""
        });
    }

    changeSlot(newSlot) {
        if (newSlot.startsWith("accessory")) {
            console.log("??")
            this.filterWardrobeByType('accessory', newSlot);
            console.log(newSlot);
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
                var popupText = "<strong>Tag: </strong>" + result[i].tag;
                if (result[i].retailer && result[i].retailer !== "none") {
                    popupText += "</br><strong>Retailer: </strong>" + result[i].retailer;
                }

                $("#popover" + i).attr("data-original-title", "<strong>" + result[i].name + "</strong>");
                $("#popover" + i).attr("data-content", popupText);
                $("#popover" + i).attr("data-html", "true");
                $("#popover" + i).popover();
                $("#popover" + i).popover({ trigger: "hover" });
                $("#popover" + i).popover('enable');
                var newGarment = JSON.parse(JSON.stringify(result[i]));
                if (result[i].retailer && result[i].retailer !== "none") {
                    warDroveItem.className = "wardrobe-slot-item retailer";
                }
                else {
                    warDroveItem.className = "wardrobe-slot-item";
                }
                warDroveItem.style.backgroundImage = 'url(' + newGarment.image + ')';
                var ctx1 = this;
                warDroveItem.pointerEvents = 'auto';
                warDroveItem.onclick = (function () {
                    var ctx2 = ctx1
                    var cNewGarment = newGarment;
                    return function () {
                        ctx2.updateSlot(slot, cNewGarment, ctx1);
                    }
                })();
            }
            else {
                warDroveItem.className = "wardrobe-slot-empty";
                warDroveItem.style.backgroundImage = '';
            }
        }
    }

    updateSlot(slot, garment, ctx) {
        ctx.setState({ [slot]: garment });
        var slotToUpdate = document.getElementsByClassName('slot-' + slot + '-edit')[0];
        slotToUpdate.className += " filled";
        slotToUpdate.setAttribute("data-toggle", "popover");
        slotToUpdate.style.backgroundRepeat = "no-repeat";
        slotToUpdate.style.backgroundPosition = "center";
        slotToUpdate.style.backgroundImage = 'url(' + garment.image + ')';
        slotToUpdate.style.backgroundSize = "contain";
    }

    resetSlot(slot) {
        var slotToUpdate = document.getElementsByClassName('slot-' + slot + '-edit')[0];
        slotToUpdate.className = "slot-" + slot + "-edit";
        slotToUpdate.setAttribute("data-toggle", "popover");
        slotToUpdate.style.backgroundImage = "";
    }

    saveOutfit(event) {
        event.preventDefault();
        var newOutfit = {
            createdAt: this.getCurrentDate(),
            name: this.state.name
        };

        var newGarments = [];
        var contador = 0;

        if (this.state.hat) {
            newGarments.push(this.state.hat);
            contador = contador + 1;
        }
        if (this.state.shirt) {
            newGarments.push(this.state.shirt);
            contador = contador + 1;
        }
        if (this.state.pants) {
            newGarments.push(this.state.pants);
            contador = contador + 1;
        }
        if (this.state.shoes) {
            newGarments.push(this.state.shoes);
            contador = contador + 1;
        }
        if (this.state.accessory1) {
            newGarments.push(this.state.accessory1);
            contador = contador + 1;
        }
        if (this.state.accessory2) {
            newGarments.push(this.state.accessory2);
            contador = contador + 1;
        }
        if (contador > 1) {
            newOutfit.garments = newGarments;
            this.resetOutfitBuilder();
            Meteor.call('outfits.insert', newOutfit, function (err, result) {
                if (err) {
                    console.log(err);
                }
                else {
                    jQuery(document).ready(function ($) {
                        $('html,body').animate({
                            scrollTop: $("#yourOutfits").offset().top
                        },
                            'slow');
                    });
                    swal("Great!", "Your outfit have been created", "success");
                }
            });
        } else {
            swal("Oops!", "You have to choose at least a shirt, pants and shoes to create an outfit", "error");
        }
    }


    renderOutfits() {
        return this.props.outfits.map((outfit, index) => {
            if (outfit.user === Meteor.userId()) {
                return (<OutfitComponent key={index} outfit={outfit} user="true" />);
            } else {
                return '';
            }
        });
    }

    getCurrentDate() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        var hh = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();

        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }

        return mm + '/' + dd + '/' + yyyy + "@" + hh + ":" + m + ":" + s;
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        var wardrobeSlots = [];
        for (var i = 0; i < 10; i++) {
            wardrobeSlots.push(
                <div className="col-md-6" key={i}>
                    <a id={"popover" + i} className="popoveritem" rel="popover" data-placement="bottom" data-trigger="hover">
                        <div className="wardrobe-slot-empty" id={"garment" + i}></div>
                    </a>
                </div>
            );
        }

        return (
            <div className="container">
                <div className="row">
                    <h2>Create your own outfits</h2>
                    <br />
                    <h4>Click a slot in the Outfit Section and then choose a garment of your Wardrobe that you would like to try on that slot.</h4>
                    <h4>You can also see your created outfits at the bottom of the page.</h4>
                </div>
                <br />
                <form id="newOutfitForm" onSubmit={this.saveOutfit.bind(this)}>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="user_name_enterprise">Name</label>
                                <input type="text" id="name" required name="name" value={this.state.name} onChange={this.handleInputChange.bind(this)} className="form-control" placeholder="Outfit name" />
                            </div>
                            <button type="submit" className="btn btn-default btn-outline">Save outfit</button>
                        </div>
                    </div>
                </form>
                <div className="row headers-edit">
                    <div className="col-md-5 title-wardrobe"><h3>Wardrobe</h3></div>
                    <div className="col-md-1"></div>
                    <div className="col-md-6 title-outfit"><h3>Outfit</h3></div>
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
                <div className="row" id="yourOutfits">
                    <h3>Your Outfits</h3>
                    {this.renderOutfits()}
                </div>
            </div>
        );
    }
}

Meteor.subscribe('garments');
Meteor.subscribe('outfits');
