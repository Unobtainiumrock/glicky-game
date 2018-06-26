
import React, { Component } from 'react';
import MemoryCard from './Components/MemoryCard';
import data from './data';

data.forEach(el => console.log(el));

class App extends Component {
  state = {
    friends
  };

  render() {
    return (
      <div className="container">
        {
          data.map((el) => {
            return <MemoryCard key={el.id.toString()} data={el} />
          })
        }
      </div>
    )
  }

};

export default App;
