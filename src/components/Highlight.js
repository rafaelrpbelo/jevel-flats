import React, { Component } from 'react';

class Highlight extends Component {
  render() {
    return (
      <div className="card no-shadow is-light">
        <div className="card-icon has-text-centered">
          <span className="icon is-medium has-bg">
            <i className={`fa fa-${this.props.icon}`}></i>
          </span>
        </div>

        <div className="card-content">
          <div className="content">
            <h4 className="title is-5 is-spaced has-text-centered">{this.props.title}</h4>
            <p className="subtitle is-6 has-text-justified">{this.props.content}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Highlight;
