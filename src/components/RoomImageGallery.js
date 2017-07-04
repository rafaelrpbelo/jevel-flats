import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import React, { Component } from 'react';

class RoomImageGallery extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    }
  }

  modalClass() {
    return this.state.isOpen ? 'is-active' : ''
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.openModal) {
      this.setState({isOpen: true});
    }
  }

  render() {
    const images = [
      {
        original: 'http://lorempixel.com/1000/600/nature/1/',
          thumbnail: 'http://lorempixel.com/250/150/nature/1/',
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
    ]

    return (
      <div className={`modal ${this.modalClass()}`}>
        <div className="modal-background"></div>
        <div className="modal-content">
          <ImageGallery
            items={images}
            slideInterval={2000}
            showFullscreenButton={false}
            showThumbnails={false}
            showPlayButton={false}
            disableThumbnailScroll={false}
            showIndex={true}/>
        </div>
        <button
          className="modal-close"
          onClick={() => this.setState({isOpen: false})}></button>
      </div>
    );
  }
}

export default RoomImageGallery;
