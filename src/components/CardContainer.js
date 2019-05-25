import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  width: 60vw;
  margin: 0 auto;
  padding: 75px 0;
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
`;

const CardContainer = props => {
  return <Wrapper>{props.children}</Wrapper>
}

export default CardContainer;
