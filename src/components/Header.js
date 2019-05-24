import React from 'react';

const style = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 5%',
    backgroundColor: 'lightcoral',
    boxShadow: '0 8px 12px -6px black',
    position: 'fixed',
    height: 75,
    width: '90%',
    zIndex: 5
  }
}

const Header = props => {
  return (
    <div style={style.header}>
      <h1>Clicky Game</h1>
      <h2>{props.msg}</h2>
      <div style={{display: 'flex'}}>
        <h2 style={{margin: '10px'}}>Score: {props.score}</h2>
        <h2 style={{margin: '10px'}}>Top Score: {props.topScore}</h2>
      </div>
    </div>
  )
}

export default Header;
