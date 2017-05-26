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

  deleteGarment() {
    var a=this;
    swal({
      title: "Are you sure?",
      text: "You will not be able to recover this Outfit!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, delete it!",
      closeOnConfirm: false
    },
    function(){
      swal("Deleted!", "Your outfit has been deleted.", "success");
      Meteor.call('outfits.remove', a.props.outfit._id, function (err,result) {
        if (err) {
          console.log(err);
        }
        else {
        }
      });
    });
  }


  addButton() {
    return (<button className="btn btn-default" onClick={this.vote.bind(this)}>Votar</button>);
  }

  render() {
    return (
      <div className="col-md-4">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 style={{ textAlign: 'center' }}>
              {this.props.outfit.name}
            </h3>
          </div>
          <div className="panel-body" style={{background:'rgba(192,192,192,1)'}}>
            <div className="row">
            <div className="col-md-3"></div>
              <div className="col-md-6">
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
                <div className="col-md-2"></div>
                <div className="col-md-7">
                  <div className="slot-pants" id={"pants" + this.props.outfit._id._str}></div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2"></div>
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
            {this.props.user?
            <div className="row">
              <center>
                <button type="button" className="btn btn-danger" onClick={this.deleteGarment.bind(this)}>
                  <i className="fa fa-trash" aria-hidden="true"></i> Delete
                </button>
              </center>
            </div>:''
            }
            <br/>
          </div>
        </div>
      </div>
    );
  }
}
