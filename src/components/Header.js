import React from 'react';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  background-color: #2874A6;
  color: #f8f8f8;
  box-shadow: 0 8px 12px -6px black;
  position: fixed;
  height: 70px;
  width: 90%;
  z-index: 5;
`;

const correctColors = keyframes`
  from {color: mediumseagreen;}
  to {color: #f8f8f8}
`;

const incorrectColors = keyframes`
  from {color: red;}
  to {color: #f8f8f8}
`;

const Message = styled.h2`
  animation-name: ${props => props.className === 'correct' ? correctColors : incorrectColors};
  animation-duration: 2s;
  
`;

const Header = props => {
  return (
    <Wrapper>
      <h1>Clicky Game</h1>
      <Message className={props.msgClass}>{props.msg}</Message>
      <h2>Score: {props.score} | Top Score: {props.topScore}</h2>
    </Wrapper>
  )
}

export default Header;
