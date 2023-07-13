import SvgConstructor from "../SvgConstructor";

const DrawWiggle = () => {
    // New Paths from m 0 20 c 40 15 40 -15 100 10
    const initPath = "M 0 10 C 10 15 10 -20 100 10";
    const pathD1 = "M 0 20 C 20 20 5 -25 100 20";
    const pathD2 = "M 0 15 C 15 25 0 -10 100 15";
    const pathD3 = "M 0 10 C 10 15 5 -5 100 10";
    const pathD4 = "M 0 25 C 25 5 10 -15 100 25";
    const pathD5 = "M 0 15 C 15 10 15  -10 100 15";
    const pathD6 = "M 0 20 C 20 25 20 -5 100 20";
    const pathD7 = "M 0 10 C 10 5 5 -10 100 10";

    // Inverse 
    const pathD8 = "M 0 10 C -10 15 10 -30 100 10";
    const pathD9 = "M 0 15 C -20 20 5 -15 100 20";
    const pathD10 = "M 0 10 C -15 25 0 -15 100 15";
    const pathD11 = "M 0 25 C -10 15 5 -15 100 10";
    const pathD12 = "M 0 15 C -25 5 10 -15 100 25";
    const pathD13 = "M 0 20 C -15 10 15 -15 100 15";
    const pathD14 = "M 0 10 C -20 5 20 -15 100 20";

    return (
        <>
        {/* SVG 1 */}
        <SvgConstructor 
            initialSvgId = "initialWiggle" 
            initialSvgHeight = "100%"
            initialSvgWidth = "100%"
            initialSvgViewBox = "0 0 75 75"
            initialSvgPreserveAspectRatio = "none"
            initialPathId = "initialPathWiggle"
            initialPathFill = "none"
            initialPathStroke = "black"
            initialPathStrokeWidth = "0.05"
            initialPathD = {initPath}
            addedPath = {pathD1}
        />
        {/* SVG 2 */}
        <SvgConstructor 
            initialSvgId = "initialWiggle" 
            initialSvgHeight = "100%"
            initialSvgWidth = "100%"
            initialSvgViewBox = "0 0 75 75"
            initialSvgPreserveAspectRatio = "none"
            initialPathId = "initialPathWiggle"
            initialPathFill = "none"
            initialPathStroke = "black"
            initialPathStrokeWidth = "0.05"
            initialPathD = {initPath}
            addedPath = {pathD2}
        />
        {/* SVG 3 */}
        <SvgConstructor 
            initialSvgId = "initialWiggle" 
            initialSvgHeight = "100%"
            initialSvgWidth = "100%"
            initialSvgViewBox = "0 0 75 75"
            initialSvgPreserveAspectRatio = "none"
            initialPathId = "initialPathWiggle"
            initialPathFill = "none"
            initialPathStroke = "black"
            initialPathStrokeWidth = "0.05"
            initialPathD = {initPath}
            addedPath = {pathD3}
        />
        {/* SVG 4 */}
        <SvgConstructor 
            initialSvgId = "initialWiggle" 
            initialSvgHeight = "100%"
            initialSvgWidth = "100%"
            initialSvgViewBox = "0 0 75 75"
            initialSvgPreserveAspectRatio = "none"
            initialPathId = "initialPathWiggle"
            initialPathFill = "none"
            initialPathStroke = "black"
            initialPathStrokeWidth = "0.05"
            initialPathD = {initPath}
            addedPath = {pathD4}
        />
        {/* SVG 5 */}
        <SvgConstructor 
            initialSvgId = "initialWiggle" 
            initialSvgHeight = "100%"
            initialSvgWidth = "100%"
            initialSvgViewBox = "0 0 75 75"
            initialSvgPreserveAspectRatio = "none"
            initialPathId = "initialPathWiggle"
            initialPathFill = "none"
            initialPathStroke = "black"
            initialPathStrokeWidth = "0.05"
            initialPathD = {initPath}
            addedPath = {pathD5}
        />
        {/* SVG 6 */}
        <SvgConstructor 
            initialSvgId = "initialWiggle" 
            initialSvgHeight = "100%"
            initialSvgWidth = "100%"
            initialSvgViewBox = "0 0 75 75"
            initialSvgPreserveAspectRatio = "none"
            initialPathId = "initialPathWiggle"
            initialPathFill = "none"
            initialPathStroke = "black"
            initialPathStrokeWidth = "0.05"
            initialPathD = {initPath}
            addedPath = {pathD6}
        />
        {/* SVG 7*/}
        <SvgConstructor 
            initialSvgId = "initialWiggle" 
            initialSvgHeight = "100%"
            initialSvgWidth = "100%"
            initialSvgViewBox = "0 0 75 75"
            initialSvgPreserveAspectRatio = "none"
            initialPathId = "initialPathWiggle"
            initialPathFill = "none"
            initialPathStroke = "black"
            initialPathStrokeWidth = "0.05"
            initialPathD = {initPath}
            addedPath = {pathD7}
        />
        {/* SVG 8 */}
        <SvgConstructor 
            initialSvgId = "initialWiggle" 
            initialSvgHeight = "100%"
            initialSvgWidth = "100%"
            initialSvgViewBox = "0 0 75 75"
            initialSvgPreserveAspectRatio = "none"
            initialPathId = "initialPathWiggle"
            initialPathFill = "none"
            initialPathStroke = "black"
            initialPathStrokeWidth = "0.05"
            initialPathD = {initPath}
            addedPath = {pathD8}
        />
        {/* SVG 9 */}
        <SvgConstructor 
            initialSvgId = "initialWiggle" 
            initialSvgHeight = "100%"
            initialSvgWidth = "100%"
            initialSvgViewBox = "0 0 75 75"
            initialSvgPreserveAspectRatio = "none"
            initialPathId = "initialPathWiggle"
            initialPathFill = "none"
            initialPathStroke = "black"
            initialPathStrokeWidth = "0.05"
            initialPathD = {initPath}
            addedPath = {pathD9}
        />
        {/* SVG 10 */}
        <SvgConstructor 
            initialSvgId = "initialWiggle" 
            initialSvgHeight = "100%"
            initialSvgWidth = "100%"
            initialSvgViewBox = "0 0 75 75"
            initialSvgPreserveAspectRatio = "none"
            initialPathId = "initialPathWiggle"
            initialPathFill = "none"
            initialPathStroke = "black"
            initialPathStrokeWidth = "0.05"
            initialPathD = {initPath}
            addedPath = {pathD10}
        />
        {/* SVG 11 */}
        <SvgConstructor 
            initialSvgId = "initialWiggle" 
            initialSvgHeight = "100%"
            initialSvgWidth = "100%"
            initialSvgViewBox = "0 0 75 75"
            initialSvgPreserveAspectRatio = "none"
            initialPathId = "initialPathWiggle"
            initialPathFill = "none"
            initialPathStroke = "black"
            initialPathStrokeWidth = "0.05"
            initialPathD = {initPath}
            addedPath = {pathD11}
        />
        {/* SVG 12 */}
        <SvgConstructor 
            initialSvgId = "initialWiggle" 
            initialSvgHeight = "100%"
            initialSvgWidth = "100%"
            initialSvgViewBox = "0 0 75 75"
            initialSvgPreserveAspectRatio = "none"
            initialPathId = "initialPathWiggle"
            initialPathFill = "none"
            initialPathStroke = "black"
            initialPathStrokeWidth = "0.05"
            initialPathD = {initPath}
            addedPath = {pathD12}
        />
        {/* SVG 13 */}
        <SvgConstructor 
            initialSvgId = "initialWiggle" 
            initialSvgHeight = "100%"
            initialSvgWidth = "100%"
            initialSvgViewBox = "0 0 75 75"
            initialSvgPreserveAspectRatio = "none"
            initialPathId = "initialPathWiggle"
            initialPathFill = "none"
            initialPathStroke = "black"
            initialPathStrokeWidth = "0.05"
            initialPathD = {initPath}
            addedPath = {pathD13}
        />
        {/* SVG 14 */}
        <SvgConstructor 
            initialSvgId = "initialWiggle" 
            initialSvgHeight = "100%"
            initialSvgWidth = "100%"
            initialSvgViewBox = "0 0 75 75"
            initialSvgPreserveAspectRatio = "none"
            initialPathId = "initialPathWiggle"
            initialPathFill = "none"
            initialPathStroke = "black"
            initialPathStrokeWidth = "0.05"
            initialPathD = {initPath}
            addedPath = {pathD14}
        />
        </>
    )
}

export default DrawWiggle;