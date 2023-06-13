import './Svg.css';
import Logo from '../assets/logo.svg';

const Svg = () => {
    {/* C {controlpoint start of curve} {controlpoint end of curve} {coords where path ends} */}
    const pathCubic = 'M 0,0    C 0,0 10,20 75,15 '+
                               'S 60 -10, 25 20' +
                               'S -5 -15, 30 5' +
                               'S 50 50, 80 50' +
                               'S 100 0, 10 25';
    const pathCubic2 = 'M 0,15  C 122,2 12,22 75,15 '+
                               'S 62 -12, 25 22' +
                               'S -5 -15, 32 5' +
                               'S 52 52, 82 52' +
                               'S 2 2, 12 25'
    ;                  
    
    const testPath = 'M 0,0 c -7.12813,18.94262 -90.98145,162.94563 -77.05591,173.55749 42.50564,-47.20244 167.55993,-169.55899 212.36017,-161.70534 -37.12082,44.82043 -89.84002,52.57957 -218.42149,494.63066 2.52917,-35.66841 1.39251,-65.22711 -11.96825,-74.4123 -3.27123,-2.24889 184.65163,-391.44127 192.44583,-383.95307 -93.67748,23.20847 -168.87058,147.45589 -188.4508,162.88549 -12.11482,-21.67544 72.12276,-180.3005 72.83813,-185.18655 2.61934,-6.45661 -152.75953,96.87504 -233.42082,272.14016 0,0 16.99069,-29.46857 7.03722,-54.05344 C 516.92286,379.22502 180.85726,649.185 180.85726,649.185 c -15.99846,3.96849 114.43886,-117.05981 165.30745,-99.46709 0,0 14.4953,10.03521 17.84037,28.9906 0,0 79.36223,-75.63169 105.41769,-75.42902 z';
    const svgPath = {
        id: "MyPath",
        fill: "none",
        fillOpacity: "1",
        stroke: "red",
        strokeWidth: "0.2",
        d: {pathCubic2}
    };

    const svg2 = toString(svgPath);
        
    console.log(svg2);
    const getPos = (event) => {
        let x = event.clientX;
        let y = event.clientY;
        console.log("x: " + x + "  y: " + y);
    };

    window.addEventListener('mousemove', (event) => {
        getPos(event);
    });
    
    return (
        <>
        {/*<img src={Logo} />*/}
        {/* 
            SVG starting at top left
            follows a horizontal path of 10
            then follows a path of 10 vertically
        */}


        <svg height="100%" width="100%" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path id="MyPath"
            fill="none"
            fillOpacity="1"
            stroke="red"
            strokeWidth="0.2"
            d={pathCubic} >
                <animate
                attributeName="d"
                attributeType="XML"
                from={pathCubic}
                to={pathCubic2}
                dur="1s"
                repeatCount="indefinite"
                />
        </path>
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