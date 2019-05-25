import React from 'react';

const style = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 5%',
    backgroundColor: '#2874A6',
    color: '#f8f8f8',
    boxShadow: '0 8px 12px -6px black',
    position: 'fixed',
    height: 70,
    width: '90%',
    zIndex: 5
  }
}

const Header = props => {
  return (
    <div style={style.header}>
      <h1>Clicky Game</h1>
      <h2>{props.msg}</h2>
      <h2>Score: {props.score} | Top Score: {props.topScore}</h2>
    </div>
  )
}

export default Header;
