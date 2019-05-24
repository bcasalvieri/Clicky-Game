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

class Card extends React.Component {
  state = {
    clicked: false
  };

  render() {
    return (
      <img
        className="Card"
        src={this.props.image}
        alt={this.props.name}
        style={style}
        onClick={
          !this.state.clicked
            ? (this.props.updateScore)
            : this.props.gameOver
        }
      />
    )
  }
}

export default Card;
