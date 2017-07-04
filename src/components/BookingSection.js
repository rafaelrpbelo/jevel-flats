import React, { Component } from 'react';
import ContactForm from './ContactForm';
import Map from './Map';

class BookingSection extends Component {
  render() {
    return (
      <section id='booking' className="hero">
        <div className="hero-body">
          <div className="container is-fluid">
            <div className="columns is-vcentered">
              <div className="column is-7">
                <Map />
              </div>
              <div className="column is-4">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default BookingSection;
