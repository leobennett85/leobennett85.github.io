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

    // M 0 20 C 30 60 70 -30 100 20
    // Add initial values to initCoords
    initCoords.set("mxInit", 0);
    initCoords.set("myInit", 20);
    initCoords.set("cx1Init", 30);
    initCoords.set("cy1Init", 60);
    initCoords.set("cx2Init", 70);
    initCoords.set("cy2Init", -30);
    initCoords.set("endPointX", 100);
    initCoords.set("endPointY", 20);

    const updatePath = (map, i) => {
        const mx = map.get('mxInit');
        const my = map.get('myInit');
        const cx1 = map.get('cx1Init');
        const cy1 = map.get('cy1Init');
        const cx2 = map.get('cx2Init');
        const cy2 = map.get('cy2Init');
        const epX = map.get('endPointX');
        const epY = map.get('endPointY');
        const path = "M" + mx + "," + my + " C" + cx1 + "," + cy1 + " " + cx2 + "," + cy2 + " " +  epX + "," + epY;

        return path;
    }
    
    // Define Initial Path
    const initPath = "M" + mxInit + "," + myInit + " C" + cx1Init + "," + cy1Init + " " + cx2Init + "," + cy2Init + " " +  endPointX + "," + endPointY;
    
    // Create newCoord maps for coordinate data
    const newCoords = {};
    let mx, my, cx1, cy1, cx2, cy2, epX, epY;

    // A function to alter coords
    const changeInitCoord = (key, coord, i) => {
            switch (key) {
                case 'mxInit':
                    console.log(i + ": " + "Before: " + key + ": " + coord);
                    mx = coord + 1;
                    console.log(i + ": " + "After: " + key + ": " + mx);
                    return mx;

                case 'myInit':
                    console.log(i + ": " + "Before: " + key + ": " + coord);
                    if (i % 2 == 0 || i == 0) {
                        my = coord;
                    } else {
                        my = coord +1;
                    };
                    console.log(i + ": " + "After: " + key + ": " + my);
                    return my;

                case 'cx1Init':
                    console.log(i + ": " + "Before: " + key + ": " + coord);
                    if (i % 2 == 0 || i == 0) {
                        cx1 = coord;
                    } else {
                        cx1 = coord + 5;
                    };
                    console.log(i + ": " + "After: " + key + ": " + cx1);
                    return cx1;

                case 'cy1Init':
                    console.log(i + ": " + "Before: " + key + ": " + coord);
                    if (i % 2 == 0 || i == 0) {
                        cy1 = coord + 75;
                    } else {
                        cy1 = coord - 85;
                    };
                    console.log(i + ": " + "After: " + key + ": " + cy1);
                    return cy1;

                case 'cx2Init':
                    console.log(i + ": " + "Before: " + key + ": " + coord);
                    if (i % 2 == 0 || i == 0) {
                        cx2 = coord;
                    } else {
                        cx2 = coord + 5;
                    };
                    console.log(i + ": " + "After: " + key + ": " + cx2);
                    return cx2;

                case 'cy2Init':
                    console.log(i + ": " + "Before: " + key + ": " + coord);
                    if (i % 2 == 0 || i == 0) {
                        cy2 = coord - 80;
                    } else {
                        cy2 = coord + 85;
                    };
                    console.log(i + ": " + "After: " + key + ": " + cy2);
                    return cy2;

                case 'endPointX':
                    console.log(i + ": " + "Before: " + key + ": " + coord);
                    epX = coord;
                    console.log(i + ": " + "After: " + key + ": " + epX);
                    return epX;

                case 'endPointY':
                    console.log(i + ": " + "Before: " + key + ": " + coord);
                    if (i % 2 == 0 || i == 0) {
                        epY = coord;
                    } else {
                        epY = coord - 1;
                    };
                    console.log(i + ": " + "After: " + key + ": " + epY);
                    return epY;
            }
        }
        
    for (let i = 0; i < 10; i++) {
        const mapName = `newCoords${i}`;
        let newPaths = [];
        newCoords[mapName] = new Map();
        if (i === 0) {
            for (const [key, coord] of initCoords) {
                newCoords[mapName].set(key, coord);
            };
            console.log("New Map Name: " + mapName);
            console.log([...newCoords[mapName].entries()]);
        } else if (i > 0) {
            const oldI = i - 1;
            const prevMap = `newCoords${oldI}`;
            for (const [key, coord] of newCoords[prevMap]) {
                newCoords[mapName].set(key, coord);
            };
            console.log("New Map Name: " + mapName);
            for (const [key, coord] of newCoords[mapName]) {
                const currentKey = key;
                const currentCoord = coord;
                console.log("Current Key: " + currentKey);
                console.log("Current Coord: " + currentCoord);
                const changedCoord = changeInitCoord(currentKey, currentCoord, i);
                console.log("Changed Coord: " + changedCoord);
                newCoords[mapName].set(currentKey, changedCoord);
            };
            console.log("New Map Name: " + mapName);
            console.log("New Map Entries: " + [...newCoords[mapName].entries()]);
        };
    };   
    
    
    {/*
    const newCoords = new Map();
    for (const [key,  value] of initCoords) {
        const changedCoord = changedCoordInit(key, coord);
        transformeCoords.set(key, transformedCoord);
    }

        for(let i = 0; i < 15; i++) {
            initCoords.set("mxInit", 0);
            initCoords.set("myInit", 20);
            initCoords.set("cx1Init", 30);
            initCoords.set("cy1Init", -30);
            initCoords.set("cx2Init", 70);
            initCoords.set("cy2Init", 60);
            initCoords.set("endPointX", 100);
        }
    };

    */}

    const pathD1 = "M 0 20 C 30 60 70 -30 100 20"; // 0

    const pathD2 = "M 0 21 C 35 -25 75 55 100 19"; // 1 
    const pathD3 = "M 0 21 C 35 50 75 -25 100 19"; // 2 

    const pathD4 = "M 0 22 C 40 -20 80 50 100 18"; // 3 
    const pathD5 = "M 0 22 C 40 50 80 -20 100 18"; // 4

    const pathD6 = "M 0 23 C 45 -15 85 45 100 17"; // 5
    const pathD7 = "M 0 23 C 45 45 85 -15 100 17"; // 6

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
};

export default DrawWiggle;