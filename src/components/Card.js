import React, { Component } from 'react';

class Card extends Component {
  renderButtonToClick() {
    if (this.props.onClick) {
      return (
        <footer className="card-footer">
          <a onClick={this.props.onClick} className="card-footer-item">Ver imagens</a>
        </footer>
      );
    }
  }

  render() {
    return (
      <div className="card">
        <div className="card-image">
          <a onClick={this.props.onClick}>
            <figure className="image is-4by3">
              <img src={this.props.imgSrc} alt={this.props.title} />
            </figure>
          </a>
        </div>
        <div className="card-content">
          <p className='title is-4'><strong>{this.props.title}</strong></p>
          <div className="content">{this.props.content}</div>
        </div>
        {this.renderButtonToClick()}
      </div>
    );
  }
}

export default Card;
