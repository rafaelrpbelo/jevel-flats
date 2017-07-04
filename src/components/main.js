import '../App.css';
import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.css';

import React, { Component } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import HighlightSection from './HighlightSection';
import RoomsSection from './RoomsSection';
import Address from './Address';
import BookingSection from './BookingSection';
import Footer from './Footer';

class Main extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <HighlightSection />
        <RoomsSection />
        <Address/>
        <BookingSection />
        <Footer />
      </div>
    );
  }
}

export default Main;
