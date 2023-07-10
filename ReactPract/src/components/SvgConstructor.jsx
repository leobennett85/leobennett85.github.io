import { useState} from "react";

const SvgConstructor = ( {
  initialSvgId, 
  initialSvgHeight,
  initialSvgWidth,
  initialSvgViewBox,
  initialSvgPreserveAspectRatio,
  initialPathId,
  initialPathFill,
  initialPathStroke,
  initialPathStrokeWidth,
  initialPathD
} ) => {
  const [svgId, setSvgId] = useState(initialSvgId);
  const [svgHeight, setSvgHeight] = useState(initialSvgHeight);
  const [svgWidth, setSvgWidth] = useState(initialSvgWidth);
  const [svgViewBox, setSvgViewBox] = useState(initialSvgViewBox);
  const [svgPreserveAspectRatio, setSvgPreserveAspectRatio] = useState(initialSvgPreserveAspectRatio);
  const [pathId, setPathId] = useState(initialPathId);
  const [pathFill, setPathFill] = useState(initialPathFill);
  const [pathStroke, setPathStroke] = useState(initialPathStroke);
  const [pathStrokeWidth, setPathStrokeWidth] = useState(initialPathStrokeWidth);
  const [pathD, setPathD] = useState(initialPathD);

  // Add Hook Handles based on events

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      xmlns:svg="http://www.w3.org/2000/svg"
      id = {svgId}
      height = {svgHeight}
      width = {svgWidth}
      svgViewBox = {svgViewBox}
      preserveAspectRatio = {svgPreserveAspectRatio}
    >
      <path
        id = {pathId}
        fill = {pathFill}
        stroke = {pathStroke}
        strokeWidth = {pathStrokeWidth}
        d = {pathD} />
    </svg>
  );
{/* Data Needed
    id="mainWiggleHardCode"
    height="100%" 
    width="100%" 
    viewBox="0 0 100 100" 
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:svg="http://www.w3.org/2000/svg">
    id="mainWigglePathHardCode"
    fill="none"
    stroke="black"
    strokeWidth="0.07"
    d={pathOriginString}
*/}

{/* full svg
    id="mainWiggleHardCode"
                height="100%" 
                width="100%" 
                viewBox="0 0 100 100" 
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:svg="http://www.w3.org/2000/svg">
                <path 
                    id="mainWigglePathHardCode"
                    fill="none"
                    stroke="black"
                    strokeWidth="0.07"
                    d={pathOriginString} />
*/}
}

export default SvgConstructor;