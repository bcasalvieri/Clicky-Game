import React from 'react';
import Header from './components/Header'
import Jumbotron from './components/Jumbotron';
import Card from './components/Card';
import characters from './characters.json';
import CardContainer from './components/CardContainer';
import Footer from './components/Footer';
import { shuffleArr } from './components/helpers';

const style = {
  wrapper: {
    position: 'relative',
    top: 75
  }
};

class App extends React.Component {
  state = {
    characterList: shuffleArr(characters),
    score: 0,
    topScore: 0,
    msg: "Click on an image!"
  };

  updateScore = () => {
    this.setState({
      score: this.state.score + 1,
      msg: 'You guessed correctly!',
      characterList: shuffleArr(characters)
    })
    // this.shuffleBoard();
  };

  gameOver = () => {
    this.setState({ msg: 'You guess incorrectly! '})
    // check for new top score
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score })
    }

    // reset score for new game
    this.setState({ score: 0, characterList: shuffleArr(characters) })
  }

  render() {
    const { characterList } = this.state
        
    return (
      <React.Fragment>
        <Header
          msg={this.state.msg}
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
                  shuffle={() => this.shuffleBoard()}
                />
              )
            }) 
          }
        )
          </CardContainer>
          <Footer />
        </div>
      </React.Fragment>
    );
  };
}

export default App;
