import React, { Component, PropTypes } from 'react'

const ColorList = ({color}) => {

  const style = {
    display: 'inline-block',
    backgroundColor: `#${color.name}`,
    listStyle: 'none',
    width: '150px',
    height: '150px'
  }

  return (
    <li style={style} className="ColorItem-container" >
      <h3 className="ColorItem-title">{color.label}</h3>
    </li>
  );
};

export default ColorList;