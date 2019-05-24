import React from 'react';
import Header from './components/Header'
import Jumbotron from './components/Jumbotron';
import Card from './components/Card';
import characters from './characters.json';
import CardContainer from './components/CardContainer';
import Footer from './components/Footer';

const style = {
  wrapper: {
    position: 'relative',
    top: 75
  }
};

class App extends React.Component {
  state = {
    characterList: characters,
    score: 0,
    topScore: 0
  };

  updateScore = () => {
    this.setState({
      score: this.state.score + 1
    })
  };

  gameOver = () => {
    // check for new top score
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score })
    }

    // reset score for new game
    this.setState({ score: 0 })
  }

  render() {
    const { characterList } = this.state;
    return (
      <React.Fragment>
        <Header
          msg="Click on a card to play"
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <div style={style.wrapper}>
          <Jumbotron />
          <CardContainer>
            {
              characterList.map(({ id, name, image }) => {
                return (
                  <Card
                    key={id}
                    name={name}
                    image={image}
                    updateScore={() => this.updateScore()}
                    gameOver={() => this.gameOver()}
                  />
                )
              })
            }
          </CardContainer>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
