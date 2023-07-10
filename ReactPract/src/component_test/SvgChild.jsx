const SvgChild = ({ fillColor, strokeWidth, xmlns }) => {
  return (
    <svg width="200" height="200" xmlns={xmlns}>
      <circle cx="100" cy="100" r="80" fill={fillColor} stroke="black" strokeWidth={strokeWidth} />
    </svg>
  );
};

export default SvgChild;