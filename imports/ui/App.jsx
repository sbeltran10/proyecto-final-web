import React, {Component} from "react";
import {PropTypes} from "prop-types";
import { Meteor } from "meteor/meteor";
import { createContainer } from "meteor/react-meteor-data";
import styles from '../assets/css/magnific-popup.css';
import styles2 from '../assets/css/style.css';
import styles3 from '../assets/css/personal.css';
import script1 from '../assets/js/script.js';
import Modal from './Modal.jsx';
import OutfitsComponent from './Outfits.jsx';
import OutfitComponent from './Outfit.jsx';
import GarmentsComponent from './Garments.jsx';
import {Garments} from '../api/garment.js';
import {Outfit} from '../api/outfit.js';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      lista:[],
      logueado: false,
      prendas: false,
      conjuntos: false,
    }
    this.projection=null;
  }

  login() {
    this.setState({
      logueado: true,
      prendas: true,
    });
  }

  logout() {
    this.setState({
      logueado: false,
      prendas: false,
      conjuntos: false,
    });
  }

  irPrendas () {
    this.setState({
      prendas: true,
      conjuntos: false,
    });
  }

  irOutfits () {
    this.setState({
      prendas:false,
      conjuntos: true,
    });
  }

  irInicio () {
    this.setState({
      prendas: false,
      conjuntos: false,
    });
  }

  renderOutfits() {
    return this.props.outfits.map((outfit,index) => {
      return (<OutfitComponent key={index} outfit={outfit} app={this.state.logueado}/>);
    });
  }

  render() {
    return (
      <div>
        <div className="header">
          {!this.state.logueado?<div className="top-header">
  					<div className="wrap">
  						<div className="top-header-right topBarN">
  							<ul>
                  <div>
                    <li id="login"><a data-rel="loginModal" href="#">Login</a><span> </span></li>
    								<li id="signUp"><a data-rel="registerModal" href="#">SignUp</a></li>
                   </div>
  							</ul>
  						</div>
  						<div className="clear"> </div>
  					</div>
  				</div>:
          <div className="header-bottom megamenu" style={{background: 'black'}}>
  					<div className="wrap">
  						<ul className="skyblue"><li className="showhide" style={{display: 'none'}}><span className="title">Menu</span><span className="icon1"></span><span className="icon2"></span></li>
                <li className="grid letra20" style={{display: 'inline-block'}} onClick={this.irInicio.bind(this)}><a className="color2" href="#">Home</a>
                </li>
                <li className="grid letra20" style={{display: 'inline-block'}} onClick={this.irPrendas.bind(this)}><a className="color2" href="#">Garments</a>
  							</li>
  					  	<li className="grid letra20" style={{display: 'inline-block'}} onClick={this.irOutfits.bind(this)}><a className="color4" href="#">Outfits</a>
  							</li>
                <li id="logout" className="letra20" style={{float: 'right',display: 'inline-block', float: 'right'}} onClick={this.logout.bind(this)} ><a href="#">Logout</a></li>
  						</ul>
  					</div>
  				</div>
          }
        </div>
      {this.state.prendas?<GarmentsComponent garments={this.props.garmentsOwn}/>:
      this.state.conjuntos?
			<OutfitsComponent outfits={this.props.outfits}/>:
      <div>
        <div className="mid-header">
          <div className="container">
            <div className="mid-grid-left">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                      <h1>Outfit-Chooser</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="mid-grid-right">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                      <img src="./images/image-sprit.png"/>
                  </div>
                  <div className="col-md-6">
                    <h2>What is this page about?</h2>
                    <br/>
                    <h4>Have you ask questions like: How should I dress today? or Which is the best outfit that I have?</h4>
                    <h4>No more, we provide you with a way of keeping track of your clothes and outfits.</h4>
                    <h4>Share your best outfit combinations and showoff your fashion skills!.</h4>
                    <br/>
                    <h2>How to use the page?</h2>
                    <br/>
                    <h4>Look for other persons outfits at the bottom of the page and login to make your own. First uploding pictures of your clothes and then create and outfit.</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="clear"> </div>
          </div>
        </div>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2>Latest Outfits</h2>
              </div>
            </div>
          </div>
          <div className="wrap">
				     <div className="product-grids">
               {this.renderOutfits()}
				     </div>
			           <div className="clear"> </div>
    		  </div>
      	</div>
      </div>}
      <Modal login={this.login.bind(this)}/>
      </div>
    );
  }
}

App.propTypes = {
  garments : PropTypes.array.isRequired,
  outfits : PropTypes.array.isRequired
};

export default AppContainer = createContainer(() => {
	Meteor.subscribe('garments');
	Meteor.subscribe('outfits');
  return {
		garmentsOwn: Garments.find({user: Meteor.userId()}).fetch(),
    garments: Garments.find({}).fetch(),
    outfits: Outfit.find({}).fetch()
  };
}, App);
