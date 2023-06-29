const SvgMainWiggle = () => {
    
    {/* Constructor function for creating wiggles */}
    const mOrigin =  [0,20];
    const c1Origin = [40,15];
    const c2Origin = [40,-15];
    const c3Origin = [100,10];

    function Wiggle(mOrigin, c1Origin, c2Origin, c3Origin) {
        this.m = mOrigin;
        this.c1 = c1Origin;
        this.c2 = c2Origin;
        this.c3 = c3Origin;
    }

    Wiggle.prototype.toString = function() {
        return `${this.m} ${this.c1} ${this.c2} ${this.c3}`;
    }

    const wiggleTestObj = new Wiggle(
        "m " + mOrigin[0] + "," + mOrigin[1] + " ",
        "c " + c1Origin[0] + "," + c1Origin[1] + " ",
        c2Origin[0] + "," + c2Origin[1] + " ",
        c3Origin[0] + "," + c3Origin[1]
    );
    
    console.log(wiggleTestObj.toString());

    const pathOriginString = wiggleTestObj.toString();


                    
    
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
                    d={pathOriginString} />
            </svg>    

        </>
    )
}

export default SvgMainWiggle