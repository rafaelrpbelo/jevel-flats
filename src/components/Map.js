import React, { Component } from 'react';

class Map extends Component {
  render() {
    return (
      <iframe
        title='Location Map'
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d993.5347043665087!2d-42.816833064112295!3d-5.081238082698531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1497733473783"
        width="100%"
        height="400px"
        frameborder="0"
        style={this.styles}
        allowfullscreen>
      </iframe>
    );
  }
}

export default Map;
