import SvgConstructor from "../SvgConstructor";

const DrawWiggle = () => {
    return (
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
            initialPathD = "m 0 20 c 40 15 40 -15 100 10"
        />
    )
}

export default DrawWiggle;