import React, { Component } from 'react';
import Highlight from './Highlight';

class HighlightSection extends Component {
  render() {
    return (
      <section className="section">
        <h1 className="title">Nossos serviços</h1>
        <div className="columns is-centered">
          <div className="column is-3">
            <Highlight
              icon='trash-o'
              title="Limpeza"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
              />
          </div>

          <div className="column is-3">
            <Highlight
              icon="map-marker"
              title="Localização"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
              />
          </div>

          <div className="column is-3">
            <Highlight
              icon="bed"
              title="Conforto"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
              />
          </div>
        </div>
      </section>
    );
  }
}

export default HighlightSection;
