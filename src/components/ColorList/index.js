import React, { Component, PropTypes } from 'react'
import ColorItem from '../ColorItem/index'
const ColorList = ({colors}) => {
  const style = {
  }
  return (
    <ul style={style} className="ColorList-list" >
      {(colors || []).map(color =>
        <ColorItem key={color.name} color={color} />
      )}
    </ul>
  );
};

export default ColorList;