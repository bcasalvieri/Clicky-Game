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

  useEffect(() => {
    return setTopScore(currScore > topScore ? currScore : topScore);
  }, [currScore, topScore]);

  const [maxScore] = useState(15);

  useEffect(() => {
    if (currScore === maxScore) {
      return (
        setMessage("Congrats, you won!"),
        setMsgClass("correct"),
        setCurrScore(0),
        setCards(
          characters.map(char => {
            return {
              id: char.id,
              name: char.name,
              image: char.image,
              clicked: false
            };
          })
        ),
        setTimeout(() => {
          setMsgClass("");
        }, 1000)
      );
    }
  }, [currScore, maxScore]);

  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (gameOver) {
      return (
        setMessage("You chose incorrectly!"),
        setMsgClass("incorrect"),
        setCurrScore(0),
        setCards(
          characters.map(char => {
            return {
              id: char.id,
              name: char.name,
              image: char.image,
              clicked: false
            };
          })
        ),
        setTimeout(() => {
          setMsgClass("");
        }, 1000)
      );
    }
  }, [gameOver]);

  const [message, setMessage] = useState("");

  useEffect(() => {
    return setMessage("Click on an image");
  }, []);

  const [msgClass, setMsgClass] = useState("");

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
      setMessage("You choose correctly!");
      setMsgClass("correct");

      setTimeout(() => {
        setMsgClass("");
      }, 1000);
    }
    // if a card has been clicked, set gameOver to true
    else if (clickedCard.clicked) {
      setGameOver(true);
    }
  };

  const reset = () => {
    setCurrScore(0);
    setCards(
      characters.map(char => {
        return {
          id: char.id,
          name: char.name,
          image: char.image,
          clicked: false
        };
      })
    );

    if (gameOver) {
      setMessage("You chose incorrectly!");
      setMsgClass("incorrect");
    } else if (currScore === maxScore) {
      setMessage("Congrats, you won!");
      setMsgClass("correct");
    }

    setTimeout(() => {
      setMsgClass("");
    }, 1000);
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
