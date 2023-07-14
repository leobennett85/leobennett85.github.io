import SvgConstructor from "../SvgConstructor";

const DrawWiggle = () => {
    // Initial values of Wiggle Path
    const mxInit = 0;
    const myInit = 20;
    const cx1Init = 30;
    const cy1Init = -30;
    const cx2Init = 70;
    const cy2Init = 60;
    const endPointX = 100;
    const endPointY = 20;

    // Define a map to handle initial coords for Wiggle path
    let initCoords = new Map();
    // Add initial values to initCoords
    initCoords.set("mxInit", 0);
    initCoords.set("myInit", 20);
    initCoords.set("cx1Init", 30);
    initCoords.set("cy1Init", -30);
    initCoords.set("cx2Init", 70);
    initCoords.set("cy2Init", 60);
    initCoords.set("endPointX", 100);
    
    // Define Initial Path
    const initPath = "M" + mxInit + "," + myInit + " C" + cx1Init + "," + cy1Init + " " + cx2Init + "," + cy2Init + " " +  endPointX + "," + endPointY;
    {/*
    // A function to return new values 15 times
    const newCoords = (initCoords) => {}
        for( let i = 0; i < 15; i++) {
            initCoords.set("mxInit", 0);
            initCoords.set("myInit", 20);
            initCoords.set("cx1Init", 30);
            initCoords.set("cy1Init", -30);
            initCoords.set("cx2Init", 70);
            initCoords.set("cy2Init", 60);
            initCoords.set("endPointX", 100);
        }
    };*/}


    const pathD1 = "M 0 20 C 30 60 70 -30 100 20";

    const pathD2 = "M 0 21 C 35 -25 75 55 100 19";
    const pathD3 = "M 0 21 C 35 55 75 -25 100 19";

    const pathD4 = "M 0 22 C 40 -20 80 50 100 18";
    const pathD5 = "M 0 22 C 40 50 80 -20 100 18";

    const pathD6 = "M 0 23 C 45 -15 85 45 100 17";
    const pathD7 = "M 0 23 C 45 45 85 -15 100 17";

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
        // FOR LOOP
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
            initialPathD = {pathD2}
            addedPath = {pathD3}
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
            initialPathD = {pathD4}
            addedPath = {pathD5}
        />
        {/* SVG 4 /}
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
        {/* SVG 5 /}
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
        {/* SVG 6 /}
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
        {/* SVG 7/}
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
        {/* SVG 8 /}
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
        {/* SVG 9 /}
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
        {/* SVG 10 /}
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
        {/* SVG 11 /}
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
        {/* SVG 12 /}
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
        {/* SVG 13 /}
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
        {/* SVG 14 /}
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
    */}
        </>
    )
}

export default DrawWiggle;