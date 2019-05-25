import React from 'react';

const style = {
  top: {
    width: '100%',
    height: 20,
    backgroundColor: '#3498DB'
  },
  bottom: {
    width: '100%',
    height: 50,
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'auto',
    backgroundColor: '#1B4F72'
  },
  i: {
    color: 'teal',
    fontSize: '1.5rem',
    marginLeft: 5
  }
}

const Footer = () => {
  return (
    <React.Fragment>
      <div style={style.top}></div>
      <div style={style.bottom}>
        Built with React.JS <i className="fab fa-react" style={style.i}></i>
      </div>
    </React.Fragment>
  )
}

export default Footer;
