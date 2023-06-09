import './Svg.css';
import Logo from '../assets/logo.svg';

const Svg = () => {
    {/* C {controlpoint start of curve} {controlpoint end of curve} {coords where path ends} */}
    const pathCubic = 'M 0,0    C 0,0 10,20 75,15 '+
                               'S 60 -10, 25 20' +
                               'S -5 -15, 30 5' +
                               'S 50 50, 80 50' +
                               'S 100 0, 10 25'
                               ;
    const pathCubic2 = 'M 0,15  C 122,2 12,22 75,15 '+
                               'S 62 -12, 25 22' +
                               'S -5 -15, 32 5' +
                               'S 52 52, 82 52' +
                               'S 2 2, 12 25'
    ;                               
    return (
        <>
        {/*<img src={Logo} />*/}
        {/* 
            SVG starting at top left
            follows a horizontal path of 10
            then follows a path of 10 vertically
        */}


        <svg height="100%" width="100%" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path
            id="MyPath"
            fill="none"
            fillOpacity="1"
            stroke="red"
            strokeWidth="0.2"
            d={pathCubic}
        />
        <circle r="5" fill="red">
            <animateMotion
                dur="10s"
                repeatCount="indefinite"
                path={pathCubic}
            />
        </circle>
        </svg>
        {/* 
            SVG starting at top left
            ollows a horizontal path of 10f
            then follows a path of 10 vertically
        */}
        </>
    )
}

export default Svg;