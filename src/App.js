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
}

class App extends React.Component {
  state = {
    characterList: characters,
    score: 0,
    topScore: 0
  };

  handleUpdateScore = () => {

  }

  handleUpdateTopScore = () => {

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
