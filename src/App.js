import React from 'react';
import Header from './components/Header'
import Jumbotron from './components/Jumbotron';

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
      <React.Fragment>
        <Header
          msg="Click on a card to play"
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Jumbotron />
      </React.Fragment>
    );
  }
}

export default App;
