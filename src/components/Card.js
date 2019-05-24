import React from 'react';
import './Card.css'

const style = {
  width: '200px',
  height: '200px',
  borderRadius: 5,
  border: '5px solid lightgray',
  boxShadow: '3px 3px 8px black'
}

class Card extends React.Component {
  state = {
    clicked: false
  };

  handleClick = () => {
    return (
      !this.state.clicked
        ? this.setState({ clicked: true })
        : false
    )
  }

  render() {
    return (
      <img
        className="Card"
        src={this.props.image}
        alt={this.props.name}
        style={style}
        onClick={this.handleClick}
      />
    )
  }
}

export default Card;
