import React from 'react';

const SvgChild = ({ fillColor, strokeWidth }) => {
  return (
    <svg width="200" height="200">
      <circle cx="100" cy="100" r="80" fill={fillColor} stroke="black" strokeWidth={strokeWidth} />
    </svg>
  );
};

export default SvgChild;