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
import styles8 from './css/jquery-ui.css';
import styles9 from './css/commerce.css';
import styles10 from './css/elegant-icon.css';
import styles11 from './css/jquery.selectBox.css';
import styles12 from './css/prettyPhoto.css';
import styles13 from './css/settings.css';
import styles14 from './css/style-selector.css';
import styles16 from './css/jstarbox.css';
import styles7 from './css/personal.css';
import jquery from './js/jquery.js';
import script1 from './js/script.js';
import bootstrap from './js/bootstrap.min.js';
import jsStarbox from './js/jstarbox.js';
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
      conjuntos: true,
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
      prendas: true
    });
  }

  irInicio () {
    console.log("llego");
    this.setState({
      prendas: false,
      conjuntos: false,
    });
  }

  renderOutfits() {
    return this.props.outfits.map((outfit,index) => {
      return (<OutfitComponent key={index} outfit={outfit}/>);
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
  					  	<li className="grid letra20" style={{display: 'inline-block'}}><a className="color4" href="#">Outfits</a>
  							</li>
                <li id="logout" className="letra20" style={{float: 'right',display: 'inline-block', float: 'right'}} onClick={this.logout.bind(this)} ><a href="#">Logout</a></li>
  						</ul>
  					</div>
  				</div>
          }
        </div>
      {this.state.prendas?<GarmentsComponent garments={this.props.garments}/>:
        <div>
            <div className="mid-header">
              <div className="wrap">
                <div className="mid-grid-left">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                          <h1>Outfit-Chooser</h1>
                      </div>
                      <div className="col-md-3">
                          <form>
                            <input type="text" placeholder="What Are You Looking for?"/>
                          </form>
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
                        <h2>Our mision is</h2>
                        <br/>
                        <p>Select yout outfit and make it famous. Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).</p>
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
              <div className="content-left">
						    <div className="content-left-top-grid">
      							<div className="content-left-price-selection">
      								<h4>Select a tag to filter:</h4>

						        </div>
						    </div>
				    </div>
				    <div className="content-right">
					     <div className="product-grids">
                 {this.renderOutfits()}
					     </div>
				      </div>
				    <div className="clear"> </div>
      		</div>
      	</div>
      </div>}
			{this.state.conjuntos?
			<OutfitsComponent/>:
			<div></div>}
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
    garments: Garments.find({}).fetch(),
    outfits: Outfit.find({}).fetch()
  };
}, App);
