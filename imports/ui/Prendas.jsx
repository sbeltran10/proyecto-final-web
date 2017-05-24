import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import d3 from "d3"

export default class Prendas extends Component {

  constructor(props) {
    super(props);
  }

  previewFile() {
       var preview = document.querySelector('img'); //selects the query named img
       var file    = document.querySelector('input[type=file]').files[0]; //sames as here
       var reader  = new FileReader();

       reader.onloadend = function () {
           preview.src = reader.result;
       }

       if (file) {
           reader.readAsDataURL(file); //reads the data as a URL
       } else {
           preview.src = "";
       }
  }

  saveGarment() {
    var a = this;
    jQuery(document).ready(function ($) {
      var signUpInfo = {};
      $.each($('#newGarmentForm').serializeArray(), function (i, field) {
        signUpInfo[field.name] = field.value;
      });


    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>Agrega una nueva prenda</h2>
            <br/>
            <p>Choose a picture, give it a name and a type of cloth</p>
            <img src="./images/imagenFondo.png" width="250" height="250" style={{margin: 30}}/>
            <br/>
            <label className="btn btn-default btn-file" style={{marginLeft: 100}}>
                Browse Image <input type="file" style={{display: 'none'}} onChange={this.previewFile.bind(this)}/>
            </label>
          </div>
          <div className="col-md-4">
            <form id="newGarmentForm" style={{marginTop: 150}} onSubmit={this.saveGarment.bind(this)}>
              <div className="form-group">
                <label htmlFor="user_name_enterprise">Name</label>
                <input type="text" id="name" required name="name" className="form-control" placeholder="name" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Type</label>
                <select required className="form-control">
                  <option value="pants">Pants</option>
                  <option value="shirt">Shirt</option>
                  <option value="shoes">Shoes</option>
                  <option value="hat">Hat</option>
                  <option value="accesory">Accesory</option>
                </select>              </div>
              <button type="submit" className="btn btn-default btn-outline">save</button>
            </form>
          </div>
        </div>
        <br/>
        <br/>
        <div className="row">
          <div className="col-md-3">
            <h3>Your Cloths</h3>
            <div className="project panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">
                  Name
                </h3>
              </div>
              <div className="panel-body">
                <a href="" target="_blank">
                  <img className="project-thumb" src=""/>
                </a>
                <h4>Type</h4>
                <p className="description">asdaas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
