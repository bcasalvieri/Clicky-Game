import React from 'react';
import styled from 'styled-components';

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

const Header = props => {
  return (
    <Wrapper>
      <h1>Clicky Game</h1>
      <h2>{props.msg}</h2>
      <h2>Score: {props.score} | Top Score: {props.topScore}</h2>
    </Wrapper>
  )
}

export default Header;
