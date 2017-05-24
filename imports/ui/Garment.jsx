import React, { Component } from "react";
import { Meteor } from "meteor/meteor";

export default class Garment extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="project panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">
            Name
          </h3>
        </div>
        <div className="panel-body">
          <img className="project-thumb" src="./images/imagenFondo.png"/>
          <h4>Type</h4>
          <p className="description">asdaas</p>
        </div>
      </div>
    );
  }
}
