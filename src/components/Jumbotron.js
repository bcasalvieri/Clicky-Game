import React from 'react';

const style = {
  container: {
    minHeight: '30vh',
    backgroundColor: 'darkslateblue',
    color: 'white',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    
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
