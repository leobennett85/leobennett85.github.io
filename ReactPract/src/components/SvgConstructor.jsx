import { useState} from "react";

const SvgConstructor = ({
  initialSvgId, 
  initialSvgHeight,
  initialSvgWidth,
  initialSvgViewBox,
  initialSvgPreserveAspectRatio,
  initialPathId,
  initialPathFill,
  initialPathStroke,
  initialPathStrokeWidth,
  initialPathD,
  addedPath
}) => {
  
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

  const svgValues = pathD + ";" + addedPath + ";" + pathD;

  // Add Hook Handles based on events

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      xmlns:svg="http://www.w3.org/2000/svg"
      style={{ position: 'fixed', left: 0 }}
      id = {svgId}
      height = {svgHeight}
      width = {svgWidth}
      viewBox = {svgViewBox}
      preserveAspectRatio = {svgPreserveAspectRatio}>
        <path
          id = {pathId}
          fill = {pathFill}
          stroke = {pathStroke}
          strokeWidth = {pathStrokeWidth}
          d = {pathD}>
              <animate
                attributeName="d"
                attributeType="XML"
                keyTimes="0; 0.5; 1"
                values={svgValues}
                dur="3s"
                repeatCount="indefinite" />
              </path>
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