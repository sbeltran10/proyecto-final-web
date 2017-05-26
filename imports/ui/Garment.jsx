import React, { Component } from "react";
import { Meteor } from "meteor/meteor";

export default class Garment extends Component {

  constructor(props) {
    super(props);
  }


  deleteGarment() {
    Meteor.call('garments.remove', this.props.garment._id, function (err,result) {
      if (err) {
        console.log(err);
      }
      else {
      }
    });
  }

  render() {
    return (
      <div className="col-md-3">
        <div className="panel panel-default">
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
            <button type="button" className="btn btn-danger" onClick={this.deleteGarment.bind(this)}>
              <i className="fa fa-trash" aria-hidden="true"></i> Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}
