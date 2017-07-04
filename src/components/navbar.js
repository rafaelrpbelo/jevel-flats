import React, { Component } from 'react';
import Settings from '../settings';

const {
  site_name,
  contact_number,
  facebook_url
} = Settings;

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      toggled: false
    };
  }

  toggleMenuClass() {
    return this.state.toggled ? 'is-active' : '';
  }

  toggleMenu() {
    console.log(this.state.toggled);
  }

  render() {
    return (
      <nav className="nav has-shadow is-light">
        <div className="container">
          <div className="nav-left">
            <a className="nav-item">
              <h1 className="title">{ site_name }</h1>
            </a>
          </div>

          <span
            className="nav-toggle"
            onClick={() => this.setState({ toggled: !this.state.toggled })}>
            <span></span>
            <span></span>
            <span></span>
          </span>

          <div className="nav-center">
            <a href="#rooms" className="nav-item is-tab is-hidden-mobile">Quartos</a>
            <a href="#address" className="nav-item is-tab is-hidden-mobile">Localização</a>
            <a href="#booking" className="nav-item is-tab is-hidden-mobile">Faça sua reserva</a>
          </div>

          <div className={`nav-right nav-menu ${this.toggleMenuClass()}`}>
            <a href="#rooms" className="nav-item is-tab is-hidden-tablet">Quartos</a>
            <a href="#address" className="nav-item is-tab is-hidden-tablet">Localização</a>
            <a href="#booking" className="nav-item is-tab is-hidden-tablet">Faça sua reserva</a>

            <a href={ facebook_url } className="nav-item is-hidden-mobile">
              <span className="icon">
                <i className="fa fa-facebook"></i>
              </span>
              <span>/facebook</span>
            </a>
            <a className="nav-item is-hidden-mobile">
              <span className="icon">
                <i className="fa fa-whatsapp"></i>
              </span>
              <span>&nbsp;{ contact_number }</span>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
