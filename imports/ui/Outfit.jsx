import React, { Component } from "react";
import { Meteor } from "meteor/meteor";

export default class Outfit extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var garments = this.props.outfit.garments;
    var currentAccesory = 1;
    for (var i = 0; i < garments.length; i++) {
      var slotToUpdate;
      if (garments[i].type === "accessory") {
        slotToUpdate = document.getElementById(garments[i].type + currentAccesory + this.props.outfit._id._str);
        currentAccesory++;
      }
      else {
        slotToUpdate = document.getElementById(garments[i].type + this.props.outfit._id._str);
      }
      slotToUpdate.className += " filled";
      slotToUpdate.style.backgroundRepeat = "no-repeat";
      slotToUpdate.style.backgroundPosition = "center";
      slotToUpdate.style.backgroundImage = 'url(' + garments[i].image + ')';
      slotToUpdate.style.backgroundSize = "contain";
    }
  }

  vote() {

  }

  addButton() {
    return (<button className="btn btn-default" onClick={this.vote.bind(this)}>Votar</button>);
  }

  render() {
    return (
      <div className="product-grid-outfit">
        <div className="product-grid-head">
          <center><h3>{this.props.outfit.name}</h3>
          </center>
        </div>
        <div className="product-pic">
          <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-5 outfit-outline">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <div className="slot-hat" id={"hat" + this.props.outfit._id._str}></div>
              </div>
              <div className="col-md-3"></div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="slot-shirt" id={"shirt" + this.props.outfit._id._str}></div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-7">
                <div className="slot-pants" id={"pants" + this.props.outfit._id._str}></div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-7">
                <div className="slot-shoes" id={"shoes" + this.props.outfit._id._str}></div>
              </div>
            </div>
          </div>
          <div className="col-md-3 accesories">
            <div className="row">
              <div className="col-md-10 accessory-back1">
                <div className="slot-accessory1" id={"accessory1" + this.props.outfit._id._str}></div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-10 accessory-back2">
                <div className="slot-accessory2" id={"accessory2" + this.props.outfit._id._str}></div>
              </div>
            </div>
          </div>
          <p>
            {this.props.outfit.description}
          </p>
          </div>
          <br/>
          {this.props.ap?
          <div className="row">
            <center>
                {this.addButton()}
            </center>
          </div>:''
          }
          <br/>
        </div>
      </div>
    );
  }
}
