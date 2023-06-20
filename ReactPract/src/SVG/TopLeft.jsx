import './Svg.css';

const TopLeft = () => {
    const mainPath =  'M 0 0 L 30 0' +
                      'M 0 0 L 0 30' +
                      'M' ;
    const mainPath2 = 'M 0 0 Q -10 3, 6 9';
    return (
        <>
            <svg 
                height="100%" 
                width="100%" 
                viewBox="0 0 100 100" 
                preserveAspectRatio="none" 
                xmlns="http://www.w3.org/2000/svg">

                <path id="topLeftPathMain"
                    fill="none"
                    fillOpacity="1"
                    stroke="red"
                    strokeWidth="0.2"
                    d={mainPath}>

                    <animate
                        attributeName="d"
                        attributeType="XML"
                        from={mainPath}
                        to={mainPath}
                        dur="1s"
                        repeatCount="indefinite" />

                </path>
            </svg>
                  

        </>
    )
}

export default TopLeft