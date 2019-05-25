import React from 'react';
import Header from './components/Header'
import Jumbotron from './components/Jumbotron';
import CardContainer from './components/CardContainer';
import Card from './components/Card';
import Footer from './components/Footer';
import characters from './characters.json';
import { shuffleArr } from './components/helpers';

const style = {
  wrapper: {
    position: 'relative',
    top: 75
  }
};

class App extends React.Component {
  state = {
    cards: characters,
    currScore: 0,
    topScore: 0,
    msg: "Click on an image!"
  };

  checkIfClicked = id => {
    // create copy of clicked card using character id
    let clickedCard = this.state.cards.filter(card => card.id === id)[0];
    console.log(clickedCard)

    // create copy of cards and randomize order
    let cardsCopy = shuffleArr(this.state.cards.slice());

    // if a card hasn't been clicked, set clicked to true and add to cardsCopy
    if (!clickedCard.clicked) {
      // set clicked to true and add to cardsCopy arr
      clickedCard.clicked = true;
      cardsCopy[cardsCopy.findIndex(card => card.id === id)] = clickedCard;

      // set the state of cards to cardsCopy, add one to currScore, check if currScore is > topScore
      this.setState({
        cards: cardsCopy,
        currScore: this.state.currScore + 1,
        topScore: this.state.currScore + 1 > this.state.topScore ? this.state.currScore + 1 : this.state.topScore
      })
    } 
    // if a card has been clicked, set click to false and reset game
    else {
      let newCardCopy = cardsCopy.map(card => {
        return {
          id: card.id,
          name: card.name,
          image: card.image,
          clicked: false
        }
      })

      this.setState({
        cards: newCardCopy,
        currScore: 0
      })
    }
  }

  render() {
    const { cards } = this.state

    return (
      <React.Fragment>
        <Header
          msg={this.state.msg}
          score={this.state.currScore}
          topScore={this.state.topScore}
        />
        <div style={style.wrapper}>
          <Jumbotron />
          <CardContainer>
          {
            cards.map(({ id, name, image }) => {
              return (
                <Card
                  key={id}
                  id={id}
                  name={name}
                  image={image}
                  checkIfClicked={this.checkIfClicked}
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
