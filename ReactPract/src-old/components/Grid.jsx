import './Grid.css';

const Grid = () => {

    const pathH = 'M5,0  V100 M10,0 V100 M15,0 V100 M20,0 V100 M25,0 V100 M30,0 V100 M35,0 V100 M40,0 V100 M45,0 V100 M50,0 V100 ' +
                  'M55,0 V100 M60,0 V100 M65,0 V100 M70,0 V100 M75,0 V100 M80,0 V100 M85,0 V100 M90,0 V100 M95,0 V100';
    const pathV = 'M0,5  H100 M0,10 H100 M0,15 H100 M0,20 H100 M0,25 H100 M0,30 H100 M0,35 H100 M0,40 H100 M0,45 H100 M0,50 H100 ' +
                  'M0,55 H100 M0,60 H100 M0,65 H100 M0,70 H100 M0,75 H100 M0,80 H100 M0,85 H100 M0,90 H100 M0,95 H100';

    return (
    <>
        <svg height="100%" width="100%" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path
            id="GridPath"
            fill="none"
            stroke="black"
            strokeWidth="0.07"
            d={pathH + pathV}/>
        </svg>
    </>
    )
}

export default Grid;