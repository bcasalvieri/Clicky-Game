import React from 'react';
import Header from './components/Header'

class App extends React.Component {
  state = {
    score: 0,
    topScore: 0
  };

  handleUpdateScore = () => {

  }

  handleUpdateTopScore = () => {

  }

  render() {
    return (
      <Header msg="Click on a card to play" score={this.state.score} topScore={this.state.topScore} />
    );
  }
}

export default App;
