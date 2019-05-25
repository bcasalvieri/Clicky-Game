import React from 'react';
import styled from 'styled-components';

const Image = styled.img` 
  width: 135px;
  height: 135px;
  border: 5px solid #dcdcdc;
  borde-radius: 5;
  box-shadow: 5px 5px 8px gray;
  margin: 20px;
  padding: 15px;

  &:hover{
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const Card = props => {
  return (
    <Image
      src={props.image}
      alt={props.name}
      onClick={() => props.checkIfClicked(props.id)}
    />
  )
}

export default Card;
