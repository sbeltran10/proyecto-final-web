import React, {Component} from "react";
import {PropTypes} from "prop-types";
import { Meteor } from "meteor/meteor";
import { createContainer } from "meteor/react-meteor-data";
import styles from './css/magnific-popup.css';
import styles2 from './css/bootstrap.min.css';
import styles3 from './css/magnific-popup.css';
import styles4 from './css/font-awesome.min.css';
import jquery from './js/jquery.js';
import script1 from './js/script.js';
import bootstrap from './js/bootstrap.min.js';
import Modal from './Modal.jsx'


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
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <a data-rel="loginModal" href="#"> Login </a>
            <Modal/>
          </div>
        </div>
      </div>
    );
  }
}

export default AppContainer = createContainer(() => {

  return {
  };
}, App);
