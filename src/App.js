import React, { Component } from 'react';
import MemoryCard from "./components/MemoryCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import data from './data.json';
// import { Z_DEFAULT_STRATEGY } from 'zlib';

class App extends Component {
  state = {
    data,
    score: 0,
    highScore: 0,
    gameOver: false
  };

  updatePositions = (data) => {
   this.setState({ data });
  }

  // Shuffle (truly random)
  shuffleFriends = (data) => {
    // Don't mutate original
    let copy = data.slice();
    copy = copy
    .map(friend => [Math.random(), friend])
    .sort((a,b) => a[0] - b[0])
    .map(a => a[1]);

    return copy;
  }

  incrementScore = () => {
    this.setState({ score: this.state.score + 1 });
  }

  endGame = (gameOver) => {
    console.log('ending game!');
    let shuffledData = this.shuffleFriends(data);

    if (this.state.score > this.state.highScore) {
      this.setState({ highScore: this.state.score, score: 0, data: shuffledData, gameOver})
    } else {
      this.setState({ score: 0, data: shuffledData, gameOver });
    }
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
                data={this.state.data}
                gameOver={this.state.gameOver}
                // manageClicked={this.manageClicked}
                updatePositions={this.updatePositions}
                shuffleFriends={this.shuffleFriends}
                incrementScore={this.incrementScore}
                endGame={this.endGame}
                key={cat.id}
                id={cat.id}
                img={cat.img}
              />
            ))
          }
        {/* <button onClick={() => this.updatePositions(this.shuffleFriends(data))}>Shuffle</button>
        <button onClick={this.incrementScore}>Increment Score</button>
        <button onClick={this.endGame}>End Game</button> */}
      </Wrapper>
    )
  }

};

export default App;
