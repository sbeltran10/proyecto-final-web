import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import d3 from "d3"

export default class Prendas extends Component {

  constructor(props) {
    super(props);


  }


  pintar() {
    var svgContainer = d3.select("body").append("svg")
                                        .attr("width", 200)
                                        .attr("height", 200);

    var rectangle = svgContainer.append("rect")
                                .attr("x", 10)
                                .attr("y", 10)
                                .attr("width", 50)
                                .attr("height", 100);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>Agrega una nueva prenda</h2>
            <div id="chart"></div>
          </div>
        </div>
        {this.pintar()}
      </div>
    );
  }
}
