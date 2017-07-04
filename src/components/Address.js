import React, { Component } from 'react';
import Settings from '../settings';

const {
  address: [address_1, address_2],
  contact_number
} = Settings;

class Address extends Component {

  render() {
    return (
      <section id='address' className="hero is-light is-bold">
        <div className="hero-body has-text-centered is-vcentered">
          <div className="title is-2 is-spaced">Faça sua reserva!</div>
          <div className="subtitle is-5">{ address_1 }</div>
          <div className="subtitle is-5">{ address_2 }</div>
          <div className="subtitle is-5">
            <span className="icon"><i className="fa fa-whatsapp"></i></span>
            { contact_number }
          </div>
        </div>
      </section>
    );
  }
}

export default Address;
