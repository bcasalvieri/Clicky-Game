import React from 'react';
import Background from './images/memphis-colorful.png';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 40vh;
  background-image: url(${Background});
  color: #606060;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid lightgray;
`;

const Title = styled.h1`
  font-size: 5em;
  margin: 0;
`;

const Jumbotron = () => {
  return (
    <Wrapper>
      <Title>Clicky Game</Title>
      <h3>Click on an image to earn points, but don't click the same image twice!</h3>
    </Wrapper>
  )
}

export default Jumbotron;
