import React, { useState, useEffect, useCallback } from "react";
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
  const [state, setState] = useState({
    characters,
    clicked: [],
    highScore: 0,
    msg: "",
    msgClass: ""
  });

  const reset = useCallback(() => {
    setState(state => ({
      ...state,
      clicked: [],
      characters: shuffleArr(state.characters),
    }));
  }, []);

  useEffect(() => {
    setState(state => ({
      ...state,
      characters: shuffleArr(state.characters),
      msg: "Click on an image"
    }));
  }, []);

  useEffect(() => {
    if (state.clicked.length > state.highScore) {
      setState(state => ({ ...state, highScore: state.clicked.length }));
    }
  }, [state.clicked.length, state.highScore]);

  useEffect(() => {
    if (state.clicked.length === state.characters.length) {
      alert("Congrats, you won!");
      reset();
    }
  }, [reset, state.clicked.length, state.characters.length]);

  const checkIfClicked = id => {
    // if id already in clicked array, you lose
    if (state.clicked.includes(id)) {
      setState(state => ({
        ...state,
        msg: "You chose incorrectly!",
        msgClass: "incorrect"
      }));
      reset();
    }
    // add id to clicked array
    else {
      setState(state => ({
        ...state,
        clicked: [...state.clicked, id],
        characters: shuffleArr(state.characters),
        msg: "You choose correctly!",
        msgClass: "correct"
      }));
      setTimeout(() => {
        setState(state => ({ ...state, msgClass: "" }));
      }, 1000);
    }
  };

  return (
    <React.Fragment>
      <Header
        msgClass={state.msgClass}
        msg={state.msg}
        score={state.clicked.length}
        topScore={state.highScore}
      />
      <Wrapper>
        <Jumbotron />
        <CardContainer>
          {characters.map(({ id, name, image }) => {
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
