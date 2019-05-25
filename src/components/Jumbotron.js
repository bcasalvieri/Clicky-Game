import React from 'react';
import Background from './images/memphis-colorful.png';

const style = {
  container: {
    height: '40vh',
    backgroundImage: `url(${Background})`,
    color: '#606060',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: '1px solid lightgray'
  },
  h1: {
    fontSize: '5em',
    margin: 0
  }
}

const Jumbotron = () => {
  return (
    <div style={style.container}>
      <h1 style={style.h1}>Clicky Game</h1>
      <h3>Click on an image to earn points, but don't click the same image twice!</h3>
    </div>
  )
}

export default Jumbotron;
