import './Svg.css';
import Logo from '../assets/logo.svg';

const Svg = () => {
    const path = 'M0,0' +
                 'H10' +
                 'V10';
    {/* C {path node start pos} {curvature control } {path node end pos} */}
    const pathCubic = 'M   0,0' +
                      'C   5,0   30,0  100,5,' +
                      'C  10,10   0,30   5,5' +
                      'C   0,0    0,0    0,0';
    return (
        <>
        {/*<img src={Logo} />*/}
        {/* 
            SVG starting at top left
            follows a horizontal path of 10
            then follows a path of 10 vertically
        */}
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path
            id="MyPath"
            fill="none"
            stroke="silver"
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