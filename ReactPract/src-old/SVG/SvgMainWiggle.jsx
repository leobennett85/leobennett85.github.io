const SvgMainWiggle = () => {
    
    const mOrigin =  [0,20];
    const c1Origin = [40,15];
    const c2Origin = [40,-15];
    const c3Origin = [100,10];

    {/* Constructor function for creating wiggles */}
    function Wiggle(mOrigin, c1Origin, c2Origin, c3Origin) {
        this.m = mOrigin;
        this.c1 = c1Origin;
        this.c2 = c2Origin;
        this.c3 = c3Origin;
    }

    {/* Create new Wiggle Object */}
    const wiggleTestObj = new Wiggle(
        "m " + mOrigin[0] + "," + mOrigin[1] + " ",
        "c " + c1Origin[0] + "," + c1Origin[1] + " ",
        c2Origin[0] + "," + c2Origin[1] + " ",
        c3Origin[0] + "," + c3Origin[1]
    );

    {/* Prototype toString() to build Wiggle String for SVG path "d" */}
    Wiggle.prototype.toString = function() {
        return `${this.m} ${this.c1} ${this.c2} ${this.c3}`;
    }

    const pathOriginString = wiggleTestObj.toString();

{/* Create new Wiggle Object */}
{/*Swivle Shape*/}
const svgSpiro = "m 57.446808,81.574469 c -2.586428,-4.298065 -4.00893,-9.28905 -4.077092,-14.304858 -0.06816,-5.015808 1.218194,-10.043604 3.686873,-14.410364 2.46868,-4.366761 6.113365,-8.061312 10.446178,-10.589098 4.332813,-2.527787 9.342666,-3.882341 14.358937,-3.882341 5.016271,0 10.026124,1.354554 14.358937,3.882341 4.332809,2.527786 7.977499,6.222337 10.446179,10.589098 2.46868,4.36676 3.75503,9.394556 3.68687,14.410364 -0.0682,5.015808 -1.49066,10.006793 -4.07709,14.304858 -3.24253,5.388362 -8.18856,9.583307 -11.489367,14.936168 -4.891904,7.933113 -5.691933,18.272103 -1.980273,26.821293 1.855831,4.27459 4.773621,8.08527 8.42539,10.98024 3.65177,2.89496 8.03126,4.8674 12.62187,5.66903 4.5906,0.80163 9.38309,0.42934 13.79007,-1.08551 4.40699,-1.51484 8.41838,-4.17038 11.52329,-7.6454 3.10491,-3.47502 5.29507,-7.76262 6.27638,-12.3182 0.98131,-4.55557 0.74986,-9.3685 -0.678,-13.80443 -0.57896,-1.79866 -1.35075,-3.53518 -2.29787,-5.170214";

{/* Animate wiggle path*/}

    {/* SVG attributes */}
    let svgId = 'mainWiggle';
    let svgHeight = '100%';
    let svgWidth = '100%';
    let svgViewBox = '0 0 100 100';
    {/* SVG Path attributes */}
    let pathId = 'mainWigglePath';
    let pathD = svgSpiro;

    {/* Create new SVGs */}
    const renderNewSVG = () => {
        {/* Create namespaces for SVG */ }
        const svgWiggle = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); // Namespace for SVG
        const pathWiggle = document.createElementNS('http://www.w3.org/2000/svg', 'path'); // Namespace for SVG Path

        {/* Set Attributes for new SVG */}
        svgWiggle.setAttribute('id', svgId);
        svgWiggle.setAttribute('height', svgHeight);
        svgWiggle.setAttribute('width', svgWidth);
        svgWiggle.setAttribute('viewBox', svgViewBox);
        svgWiggle.setAttribute('preserveAspectRation', 'none');

        {/* Set Attributes for new SVG Path */}
        pathWiggle.setAttribute('id', pathId);
        pathWiggle.setAttribute('fill', 'none');
        pathWiggle.setAttribute('stroke', 'black');
        pathWiggle.setAttribute('strokeWidth', 0.07);
        pathWiggle.setAttribute('d', pathD);

        {/* Add Path attributes to new SVG*/}
        svgWiggle.appendChild(pathWiggle);

        {/* Add svg */}
        document.body.appendChild(svgWiggle);

        console.log(svgWiggle);
    }
    
    return (
        <>
        {renderNewSVG()}
        {/* SVG Hard Code 
            <svg 
                id="mainWiggleHardCode"
                height="100%" 
                width="100%" 
                viewBox="0 0 100 100" 
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:svg="http://www.w3.org/2000/svg">
                <path 
                    id="mainWigglePathHardCode"
                    fill="none"
                    stroke="black"
                    strokeWidth="0.07"
                    d={pathOriginString} />
            </svg>
    */}
        </>
    )
}

export default SvgMainWiggle