import React, { Component } from 'react';
import Card from './Card';
import RoomImageGallery from './RoomImageGallery';

class RoomsSection extends Component {
  constructor() {
    super();
    this.state = {
      openModal1: false,
      openModal2: false
    }
  }

  render() {
    return (
      <section id="rooms" className="hero is-light is-fullheight">
        <div className="hero-body">
          <div className="container is-fluid">
            <div className="columns has-text-centered">
              <div className="column is-12">
                <p className="title is-3">Atualmente contamos com 2 opções de quartos</p>
              </div>
            </div>

            <div className="columns is-vcentered">
              <div className='column is-offset-2 is-4'>
                <Card
                  title='Quarto tipo stúdio'
                  imgSrc='https://texasstation.sclv.com/~/media/Images/Page-Background-Images/Texas/TS_Hotel_King_lowrez.jpg?h=630&la=en&w=1080'
                  content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.'
                  onClick={() => this.setState({openModal1: true})} />
              </div>

              <div className='column is-4'>
                <Card
                  title='Quarto com 2 ambientes'
                  imgSrc='https://palacestation.sclv.com/~/media/Images/Page-Background-Images/Palace/Hotel/PS_Hotel_KingRoom_new.jpg?h=630&la=en&w=1080'
                  content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.'
                  onClick={() => this.setState({openModal1: true})} />
              </div>
            </div>
          </div>
        </div>

        <RoomImageGallery openModal={this.state.openModal1}/>
        <RoomImageGallery openModal={this.state.openModal2}/>
      </section>
    );
  }
}

export default RoomsSection;
