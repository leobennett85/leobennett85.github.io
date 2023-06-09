import './Svg.css';
import Logo from '../assets/logo.svg';

const Svg = () => {
    const path = 'M0,0' +
                 'H10' +
                 'V10';
    {/* C {controlpoint start of curve} {controlpoint end of curve} {coords where path ends} */}
    const pathCubic = 'M 0,0     C 0,0 0,30 95,10' +
                      'M 95,10   C 100,0 0,0 0,20';
                       
    return (
        <>
        {/*<img src={Logo} />*/}
        {/* 
            SVG starting at top left
            follows a horizontal path of 10
            then follows a path of 10 vertically
        */}
        <svg height="100%" width="100%" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path
            id="MyPath"
            fill="none"
            stroke="red"
            strokeWidth="0.2"
            d={pathCubic} />
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