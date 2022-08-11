import React, { useRef, useEffect } from "react";

const Canvas = (props: any) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    

    useEffect(() => {
        const canvas = canvasRef.current;
        
        const context = canvas ? canvas.getContext("2d") : undefined;
        if (context) {
        context.fillStyle = '#000000'
        context.fillRect(0, 0, context.canvas.width, context.canvas.height)
        }
    }, []);
    return <img alt="olas del mar" src="https://w7.pngwing.com/pngs/1003/771/png-transparent-body-of-water-deep-sea-wind-wave-dispersion-water-circle-blue-cloud-ocean-thumbnail.png" ref={canvasRef} {...props} /> 
};

export default Canvas;