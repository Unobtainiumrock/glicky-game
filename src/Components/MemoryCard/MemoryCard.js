
import React, { Component } from 'react';
import './MemoryCard.css';

class MemoryCard extends Component {
  state = {
    clicked: false
  }

  componentDidMount () { 
    console.log('Child ' + this.props.id + ' has been mounted')
  }
  componentWillUnmount() {
    console.log('Child ' + this.props.id + ' has been unmounted')
  }

  render() {
    return (
      <div className="card">
        <div className="img-container">
          <img alt="a cat" src={this.props.img} />
        </div>
        <button onClick={() => !this.state.clicked? this.setState({ clicked: true }) : console.log('c') } className="remove btn btn-danger">
          Select Cat
      </button>
      </div>
    )
  }

}

export default MemoryCard;
