import React, { Component } from "react";
import { Meteor } from "meteor/meteor";

export default class Garment extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-3">
        <div className="project panel panel-default">
          <div className="panel-heading">
            <h3 style={{textAlign: 'center'}}>
              {this.props.garment.name}
            </h3>
          </div>
          <div className="panel-body">
            <center>
              <img className="project-thumb" src={this.props.garment.image} width="250" height="250" />
              <h4>
                <strong>Type: </strong>{this.props.garment.type}
              </h4>
              <h4>
                <strong>Tag: </strong>{this.props.garment.tag}
              </h4>
            </center>
          </div>
        </div>
      </div>
    );
  }
}
