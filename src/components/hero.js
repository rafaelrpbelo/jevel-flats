import React, { Component } from 'react';
import Settings from '../settings';

const { site_name, slogan } = Settings;

class Hero extends Component {
  render() {
    return (
      <section className="hero is-medium is-bold hotel-background">
        <div className="hero-body"></div>
        <div className="hero-footer has-text-centered">
          <div className="caption">
            <h1 className="title is-white">{ site_name }</h1>
            <h2 className="subtitle is-white">{ slogan }</h2>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
