import React, { Component } from 'react';

class Footer extends Component {
  getCurrentYear() {
    return new Date().getFullYear();
  }

  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <p className="title is-6 is-spaced">
              &#9400; Copyright {this.getCurrentYear()} Jevel Flats.
              All Rights Reserved
            </p>
            <p className="subtitle is-6">
              Developed by <a href="mailto:rafaelrpbelo@gmail.com">Rafael Belo</a>
            </p>
            <p>
              <a className="icon" href="https://github.com/rafaelrpbelo" target="_blank"
                rel="noopener noreferrer">
                <i className="fa fa-github"></i>
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
