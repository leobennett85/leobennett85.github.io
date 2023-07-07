import './Svg.css';
import SvgTest1 from './SvgTest1';
import TopLeft from './TopLeft';
import TopRight from './TopRight';
import SvgMainWiggle from './SvgMainWiggle';

const Svg = () => {
    const printCoord = (x,y) => {
        let coordX = document.getElementById('newCoordX')
        coordX.innerHTML = 'x: ' + x;
        let coordY = document.getElementById('newCoordY')
        coordY.innerHTML = 'y: ' + y;
    };

    const getPos = (event) => {
        let x = (event.screenX);
        let y = (event.screenY);
        printCoord(x,y);
    };

    window.addEventListener('mousemove', (event) => {
        getPos(event);
    });
    
    return (
        <>
            <SvgMainWiggle />
            <div id="newCoordX"></div>
            <div id="newCoordY"></div>
        </>
    )
}

export default Svg;