import React from 'react';
import './Card.css'

const style = {
  width: 135,
  height: 135,
  border: '4px solid #ccc',
  borderRadius: 5,
  boxShadow: '5px 5px 8px gray',
  margin: 20,
  padding: 15
}

const Card = props => {
  return (
    <img
      className="Card"
      src={props.image}
      alt={props.name}
      style={style}
      onClick={() => props.checkIfClicked(props.id)}
    />
  )
}

export default Card;
