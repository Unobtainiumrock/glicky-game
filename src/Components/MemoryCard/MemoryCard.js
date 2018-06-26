
import React, { Component } from 'react';
import './MemoryCard.css';

class MemoryCard extends Component {
  state = {
    something: 5
  }


  render() {
    return (
      <div className="row" id={this.props.data.id}>
        <div className="col">
          <img src={this.props.data.img} alt="A cute cat" />
          <div>
            <h2>{this.props.data.header}</h2>
            <p>{this.props.data.description}</p>
            <button data-id={this.props.data.id} className="btn btn-danger add-note">Select</button>
          </div>
        </div>
        <br />
      </div>
    )
  }

}

export default MemoryCard;
