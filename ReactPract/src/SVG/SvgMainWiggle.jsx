const SvgMainWiggle = () => {
    
    const dMainWiggle  = "m 0,25 " +
                         "c 0,0 " +
                            "117,-6 " +
                            "75,11 " +
                            "-55,17 " +
                            "65,2 " +
                            "65,2"

    
    return (
        <>
            <svg 
                id="mainWiggle"
                height="100%" 
                width="100%" 
                viewBox="0 0 100 100" 
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:svg="http://www.w3.org/2000/svg">
                <path 
                    id="mainWigglePath"
                    fill="none"
                    stroke="black"
                    strokeWidth="0.07"
                    d={dMainWiggle} />
            </svg>               

        </>
    )
}

export default SvgMainWiggle