import React, { Component } from 'react';
import MemoryCard from "./components/MemoryCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import data from './data.json';

class App extends Component {
  state = {
    data,
    score: 0,
    highScore: 0
  };

  shuffleFriends = (data) => {
    // Shuffle (truly random)
    data = data
    .map(friend => [Math.random(), friend])
    .sort((a,b) => a[0] - b[0])
    .map(a => a[1]);

    return data;
  }

  updatePositions = (data) => {
    this.setState({ data });
  }

  incrementScore = () => {
    this.setState({ score: this.state.score + 1 });
  }

  // Used to make new batch of components to mount on a reset. (hacky)
  updateKeys = () => {
    data.forEach(friend => friend.id = parseInt(friend.id) + 1);
  }

  endGame = () => {
    this.updateKeys();
    this.state.score > this.state.highScore ?
    this.setState({ highScore: this.state.score, score: 0 })
    :
    this.setState({ score: 0, data })
  }

  render() {
    return (
      <Wrapper>
        <Title> Memory Game </Title>
        <Title>Score: {this.state.score}</Title>
        <Title>High Score: {this.state.highScore}</Title>
          {
            this.state.data.map(cat => (
              <MemoryCard
                key={cat.id}
                id={cat.id}
                img={cat.img}
              />
            ))
          }
        <button onClick={() => this.updatePositions(this.shuffleFriends(data))}>Shuffle</button>
        <button onClick={this.incrementScore}>Increment Score</button>
        <button onClick={this.endGame}>End Game</button>
      </Wrapper>
    )
  }

};

export default App;
