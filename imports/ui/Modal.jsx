import React, {Component} from "react";
import { Meteor } from "meteor/meteor";

export default class Modal extends Component {

  render() {
    return (
      <div>
        <div className="modal fade user-login-modal" id="userloginModal" tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <form id="userloginModalForm" action="javascript:login()">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">
                    <span aria-hidden="true">&times;</span><span className="sr-only">Close</span>
                  </button>
                  <h4 className="modal-title">Login</h4>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="user_name_enterprise">Nombre Empresa</label>
                    <input type="text" id="user_nombre_empresa" required value="" name="nombreEmpresa" className="form-control" placeholder="Nombre Empresa" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" required value="" name="password" className="form-control" placeholder="Password"/>
                  </div>
                </div>
                <div className="modal-footer">
                  <span className="user-login-modal-register pull-left">
                    <a data-rel="registerModal" href="#">¿No eres un miembro todavía?</a>
                  </span>
                  <button type="submit" className="btn btn-default btn-outline">Ingresa</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="modal fade user-register-modal" id="userregisterModal" tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <form id="userregisterModalForm" action="javascript:singUp()">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">
                    <span aria-hidden="true">&times;</span><span className="sr-only">Close</span>
                  </button>
                  <h4 className="modal-title">Crea una cuenta</h4>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="userName">Nombre</label>
                    <input type="text" id="user_first_name" name="first_name" required className="form-control" value="" placeholder="Nombres"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="userLastName">Apellidos</label>
                    <input type="text" id="user_last_name" name="last_name" required className="form-control" value="" placeholder="Apellidos"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="user_email">Email</label>
                    <input type="email" id="user_email" name="email" required className="form-control" value="" placeholder="Email"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="user_password">Contraseña</label>
                    <input type="password" id="user_password" required value="" name="password" className="form-control" placeholder="Mínimo 5 caracteres"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="user_password">Confirmación Contraseña</label>
                    <input type="password" id="user_password2" required value="" name="password2" className="form-control" placeholder="Mínimo 5 caracteres"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="user_name_enterprise">Nombre Empresa</label>
                    <input type="text" id="user_nombre_empresa" required value="" name="nombreEmpresa" className="form-control" placeholder="Mínimo 5 caracteres" />
                  </div>
                </div>
                <div className="modal-footer">
                  <span className="user-login-modal-link pull-left">
                    <a data-rel="loginModal" href="#loginModal">¿Ya tienes una cuenta?</a>
                  </span>
                  <button type="submit" className="btn btn-default btn-outline">Registrate</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
