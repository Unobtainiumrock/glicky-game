
import React, { Component } from 'react';
import './MemoryCard.css';

class MemoryCard extends Component {
  state = {
    clicked: false
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.gameOver) {
      this.setState({ clicked: false })
      this.props.switchGameOver();
    }
  }

  roundIncrement = (clicked) => {
    const {  data, updatePositions, shuffleFriends, incrementScore } = this.props;
    this.setState({ clicked: true });
    incrementScore();
    updatePositions(shuffleFriends(data));
  }

  handleClick = () => {
    const { endGame } = this.props;
    !this.state.clicked ? this.roundIncrement(true) : endGame(this.state.clicked);
  }

  render() {
    return (
      <div className="card">
        <div className="img-container">
          <img alt="a cat" src={this.props.img} />
        </div>
        <button
          className="remove btn btn-danger"
          onClick={() => this.handleClick()}>
          Select Cat
      </button>
      </div>
    )
  }

}

export default MemoryCard;
