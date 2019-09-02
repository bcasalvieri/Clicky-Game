import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import CardContainer from "./components/CardContainer";
import Card from "./components/Card";
import Footer from "./components/Footer";
import characters from "./characters.json";
import { shuffleArr } from "./components/helpers";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  top: 70px;
`;

function AppWithHooks() {
  const [cards, setCards] = useState(characters);
  const [currScore, setCurrScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [maxScore] = useState(15);
  const [message, setMessage] = useState("");
  const [msgClass, setMsgClass] = useState("");

  useEffect(() => {
    return setMessage("Click on an image");
  }, []);

  const checkIfClicked = id => {
    // create copy of clicked card using character id
    let clickedCard = cards.filter(card => card.id === id)[0];

    // create copy of cards and randomize order
    let cardsCopy = shuffleArr(cards.slice());

    // if a card hasn't been clicked, set clicked to true and add to cardsCopy
    if (!clickedCard.clicked) {
      // set clicked to true and add to cardsCopy arr
      clickedCard.clicked = true;
      cardsCopy[cardsCopy.findIndex(card => card.id === id)] = clickedCard;

      // set the state of cards to cardsCopy, add one to currScore, check if currScore is > topScore
      setCards(cardsCopy);
      setCurrScore(currScore + 1);
      setTopScore(currScore + 1 > topScore ? currScore + 1 : topScore);
      setMessage("You choose correctly!");
      setMsgClass("correct");

      setTimeout(() => {
        setMsgClass("");
      }, 1000);
    }
    // if a card has been clicked, set click to false and reset game
    else if (clickedCard.clicked) {
      let newCardCopy = cardsCopy.map(card => {
        return {
          id: card.id,
          name: card.name,
          image: card.image,
          clicked: false
        };
      });

      setCards(newCardCopy);
      setCurrScore(0);
      setMessage("You chose incorrectly!");
      setMsgClass("incorrect");

      setTimeout(() => {
        setMsgClass("");
      }, 1000);
    }
  };

  return (
    <React.Fragment>
      <Header
        msgClass={msgClass}
        msg={message}
        score={currScore}
        topScore={topScore}
      />
      <Wrapper>
        <Jumbotron />
        <CardContainer>
          {cards.map(({ id, name, image }) => {
            return (
              <Card
                key={id}
                id={id}
                name={name}
                image={image}
                checkIfClicked={checkIfClicked}
              />
            );
          })}
        </CardContainer>
        <Footer />
      </Wrapper>
    </React.Fragment>
  );
}

export default AppWithHooks;
