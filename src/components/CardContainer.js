import React from 'react';

const style = {
  width: '60vw',
  margin: '0 auto',
  paddingTop: '50px',
  display: 'flex',
  justifyContent: 'space-around',
  flexFlow: 'row wrap'
}

const CardContainer = props => {
  return <div style={style}>{props.children}</div>
}

export default CardContainer;
