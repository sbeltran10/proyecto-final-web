import React, {Component} from "react";
import {PropTypes} from "prop-types";
import { Meteor } from "meteor/meteor";
import { createContainer } from "meteor/react-meteor-data";
import styles from './css/magnific-popup.css';
import styles2 from './css/bootstrap.min.css';
import styles3 from './css/magnific-popup.css';
import styles4 from './css/font-awesome.min.css';
import styles5 from './css/style.css';
import styles6 from './css/slippry.css';
import styles7 from './css/megamenu.css';
import styles8 from './css/jquery-ui.css';
import styles9 from './css/commerce.css';
import styles10 from './css/elegant-icon.css';
import styles11 from './css/jquery.selectBox.css';
import styles12 from './css/prettyPhoto.css';
import styles13 from './css/settings.css';
import styles14 from './css/style-selector.css';
import styles15 from './css/swatches-and-photos.css';
import styles16 from './css/jstarbox.css';
import jquery from './js/jquery.js';
import script1 from './js/script.js';
import bootstrap from './js/bootstrap.min.js';
import jsStarbox from './js/jstarbox.js';
import Modal from './Modal.jsx'

const BASE_URL = "a";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      lista:[]
    }
    this.projection=null;
  }

  render() {
    return (
      <div>
        <div className="header">
          <div className="top-header">
  					<div className="wrap">
  						<div className="top-header-right">
  							<ul>
  								<li><a data-rel="loginModal" href="#">Ingresar</a><span> </span></li>
  								<li><a data-rel="registerModal" href="#">Registrate</a></li>
  							</ul>
  						</div>
  						<div className="clear"> </div>
  					</div>
  				</div>
          <div className="mid-header">
            <div className="wrap">
              <div className="mid-grid-left">
                <form>
                  <input type="text" placeholder="What Are You Looking for?"/>
                </form>
              </div>
              <div className="mid-grid-right">
                <a className="logo" href="index.html"><span> </span></a>
              </div>
              <div className="clear"> </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="wrap">
            <div className="content-left">
						<div className="content-left-top-grid">
							<div className="content-left-price-selection">
								<h4>Select Price:</h4>
								<div className="price-selection-tree">
									<span className="col_checkbox">
										<input id="10" className="css-checkbox10" type="checkbox"/>
										<label className="normal"><i htmlFor="10" name="demo_lbl_10" className="css-label10"> </i> 400</label>
									</span>
									<span className="col_checkbox">
										<input id="11" className="css-checkbox11" type="checkbox"/>
										<label className="active1"><i htmlFor="11" name="demo_lbl_11" className="css-label11"> </i>350</label>
									</span>
									<span className="col_checkbox">
										<input id="12" className="css-checkbox12" type="checkbox"/>
										<label className="normal"><i htmlFor="12" name="demo_lbl_12" className="css-label12"> </i> 300</label>
									</span>
									<span className="col_checkbox">
										<input id="13" className="css-checkbox13" type="checkbox"/>
										<label className="normal"><i htmlFor="13" name="demo_lbl_13" className="css-label13"> </i>250</label>
									</span>
									<span className="col_checkbox">
										<input id="14" className="css-checkbox14" type="checkbox"/>
										<label className="normal"><i htmlFor="14" name="demo_lbl_14" className="css-label14"> </i> 200</label>
									</span>
									<span className="col_checkbox">
										<input id="15" className="css-checkbox15" type="checkbox"/>
										<label className="normal"><i htmlFor="15" name="demo_lbl_15" className="css-label15"> </i>150</label>
									</span>
								</div>

						</div>
						</div>
						<div className="content-left-bottom-grid">
							<h4>Boys Football:</h4>
							<div className="content-left-bottom-grids">
								<div className="content-left-bottom-grid1">
									<img src="images/foot-ball.jpg" title="football"/>
									<h5><a href="details.html">Nike Strike PL Hi-Vis</a></h5>
									<span> Football</span>
									<label>£ 375</label>
								</div>
								<div className="content-left-bottom-grid1">
									<img src="images/jarse.jpg" title="jarse"/>
									<h5><a href="details.html">Nike Strike PL Hi-Vis</a></h5>
									<span> Football</span>
									<label>£ 375</label>
								</div>
							</div>
						</div>
				</div>
				<div className="content-right">
					<div className="product-grids">
						<div className="product-grid">
							<div className="product-grid-head">
								<ul className="grid-social">
									<li><a className="facebook" href="#"><span> </span></a></li>
									<li><a className="twitter" href="#"><span> </span></a></li>
									<li><a className="googlep" href="#"><span> </span></a></li>
									<div className="clear"> </div>
								</ul>
								<div className="block">
									<div className="starbox small ghosting"><div className="positioner"><div className="stars"><div className="ghost"></div><div className="colorbar"></div><div className="star_holder"><div className="star star-0"></div><div className="star star-1"></div><div className="star star-2"></div><div className="star star-3"></div><div className="star star-4"></div></div></div></div></div> <span> (46)</span>
								</div>
							</div>
							<div className="product-pic">
								<a href="#"><img src="images/product2.jpg" title="product-name"/></a>
								<p>
								<a href="#"><small>Nike</small> HYPERVENOM <small>Phantom</small> FG</a>
								<span>Men's Firm-Ground Football Boot</span>
								</p>
							</div>
							<div className="product-info">
								<div className="product-info-cust">
									<a href="details.html">Details</a>
								</div>
								<div className="product-info-price">
									<a href="details.html">£ 380</a>
								</div>
								<div className="clear"> </div>
							</div>
							<div className="more-product-info">
								<span> </span>
							</div>
						</div>
						<div className="clear"> </div>
					</div>
				</div>
				<div className="clear"> </div>
			</div>
		</div>
        <div className="row">
          <div className="col-md-4">
          </div>
        </div>
        <Modal url={BASE_URL}/>
      </div>
    );
  }
}

export default AppContainer = createContainer(() => {

  return {
  };
}, App);
