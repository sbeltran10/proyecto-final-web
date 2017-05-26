import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import Garment from "./Garment.jsx"
import GarmentsBack from "../api/garment.js"

var reader = new FileReader();

export default class Garments extends Component {

  constructor(props) {
    super(props);
  }

  previewFile() {
    var preview = document.querySelector('img'); //selects the query named img
    var file = document.querySelector('input[type=file]').files[0]; //sames as here


    reader.onloadend = function () {
      preview.src = reader.result;
    }

    if (file) {
      reader.readAsDataURL(file); //reads the data as a URL
    } else {
      preview.src = "";
    }
  }

  saveGarment(event) {
    event.preventDefault();
    var a = this;
    jQuery(document).ready(function ($) {
      var garmentInfo = {};
      $.each($('#newGarmentForm').serializeArray(), function (i, field) {
        garmentInfo[field.name] = field.value;
      });
      garmentInfo.image = reader.result;

      Meteor.call('garments.insert', garmentInfo, function (err,result) {
        if (err) {
          console.log(err);
        }
        else {
           $('#newGarmentForm')[0].reset();
           var $el = $('#file');
           $el.wrap('<form>').closest('form').get(0).reset();
           $el.unwrap();
           var preview = document.querySelector('img');
           preview.src="./images/imagenFondo.png";
           swal("Great!", "Your Garment have been created", "success");
           jQuery(document).ready(function ($) {$('html,body').animate({
             scrollTop: $("#yourGarments").offset().top
           },
             'slow');
           });
        }
      });

    });
  }

  renderGarments() {
    return this.props.garments.map((garment,index) => {
      return (<Garment key={index} garment={garment} />);
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <form id="newGarmentForm" onSubmit={this.saveGarment.bind(this)}>
            <div className="col-md-4">
              <h2>Add a new Garment</h2>
              <br />
              <p>Choose a picture, give it a name and a type of cloth</p>
              <img src="./images/imagenFondo.png" width="250" height="250" style={{ margin: 30 }} alt="New Garment" />
              <br />
              <div className="form-group">
                <label className="btn btn-default btn-file" style={{ marginLeft: 10 }}>
                  Browse Image <input id="file" type="file" name="image" onChange={this.previewFile.bind(this)} required />
                </label>
              </div>
            </div>
            <div className="col-md-4">

              <div className="form-group" style={{ marginTop: 150 }}>
                <label htmlFor="user_name_enterprise">Name</label>
                <input type="text" id="name" required name="name" className="form-control" placeholder="name" />
              </div>
              <div className="form-group">
                <label>Type</label>
                <select className="form-control" name="type" required>
                  <option value="pants">Pants</option>
                  <option value="shirt">Shirt</option>
                  <option value="shoes">Shoes</option>
                  <option value="hat">Hat</option>
                  <option value="accessory">Accessory</option>
                </select>
              </div>
              <div className="form-group">
                <label>Tag</label>
                <select className="form-control" name="tag" required>
                  <option value="formal">Formal</option>
                  <option value="comfortable">Comfortable</option>
                  <option value="sports">Sports</option>
                  <option value="wool">Wool</option>
                  <option value="leather">Leather</option>
                </select>
              </div>
              <button type="submit" className="btn btn-default btn-outline">Save</button>
            </div>
          </form>
        </div>
        <br />
        <br />
        <h3>Your Garments</h3>
        <div id="yourGarments" className="row">
            {this.renderGarments()}
        </div>
      </div>
    );
  }
}
Meteor.subscribe('garments');
	Meteor.subscribe('outfits');
