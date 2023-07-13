import SvgConstructor from "../SvgConstructor";

const DrawWiggle = () => {
    // New Paths from m 0 20 c 40 15 40 -15 100 10
    const initPath = "M 0 10 C 40 15 40 -15 80 0";
    const pathD1 = "M 0 20 C 60 15 60 -15 60 0";
    const pathD2 = "M 0 30 C 60 15 60 -15 40 0";
    const pathD3 = "M 0 40 C 60 15 60 -15 20 0";
    const pathD4 = "M 0 50 C 60 15 60 -15 60 0";
    const pathD5 = "M 0 40 C 60 15 60 -15 40 0";
    const pathD6 = "M 0 30 C 60 15 60 -15 20 0";
    const pathD7 = "M 0 20 C 60 15 60 -15 80 0";

    // Inverse 
    const pathD8 = "M 20 0 C 60 15 60 -15 0 60";
    const pathD9 = "M 30 0 C 60 15 60 -15 0 40";
    const pathD10 = "M 40 0 C 60 15 60 -15 0 20";
    const pathD11 = "M 50 0 C 60 15 60 -15 0 60";
    const pathD12 = "M 40 0 C 60 15 60 -15 0 40";
    const pathD13 = "M 30 0 C 60 15 60 -15 0 20";
    const pathD14 = "M 20 0 C 60 15 60 -15 0 80";

    return (
        <>
        {/* SVG 1 */}
        <SvgConstructor 
            initialSvgId = "initialWiggle" 
            initialSvgHeight = "100%"
            initialSvgWidth = "100%"
            initialSvgViewBox = "0 0 100 100"
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
            initialSvgViewBox = "0 0 100 100"
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
            initialSvgViewBox = "0 0 100 100"
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
            initialSvgViewBox = "0 0 100 100"
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
            initialSvgViewBox = "0 0 100 100"
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
            initialSvgViewBox = "0 0 100 100"
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
            initialSvgViewBox = "0 0 100 100"
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
            initialSvgViewBox = "0 0 100 100"
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
            initialSvgViewBox = "0 0 100 100"
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
            initialSvgViewBox = "0 0 100 100"
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
            initialSvgViewBox = "0 0 100 100"
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
            initialSvgViewBox = "0 0 100 100"
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
            initialSvgViewBox = "0 0 100 100"
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
            initialSvgViewBox = "0 0 100 100"
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