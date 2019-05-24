import React from 'react';

const style = {
  width: '50vw',
  margin: '0 auto',
  paddingTop: '50px',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap'
}

const CardContainer = props => {
  return <div style={style}>{props.children}</div>
}

export default CardContainer;
