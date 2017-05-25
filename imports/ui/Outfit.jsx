import React, { Component } from "react";
import { Meteor } from "meteor/meteor";

export default class Outfit extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="product-grid">
         <div className="product-grid-head">
            <h3>{this.props.outfit.name}</h3>
            <div className="block">
               <div className="starbox small ghosting"><div className="positioner"><div className="stars"><div className="ghost"></div><div className="colorbar"></div><div className="star_holder"><div className="star star-0"></div><div className="star star-1"></div><div className="star star-2"></div><div className="star star-3"></div><div className="star star-4"></div></div></div></div></div> <span> (46)</span>
            </div>
         </div>
         <div className="product-pic">
          <img src={this.props.outfit.image} alt="image"/>
          <p>
            {this.props.outfit.description}
          </p>
        </div>
      </div>
    );
  }
}
