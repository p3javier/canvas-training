import React, { useRef, useEffect } from "react";

const Canvas = (props: any) => {
    const { reference } = props
    const canvasRef = useRef<HTMLCanvasElement>(null);
    

    useEffect(() => {
        const canvas = canvasRef.current;
        reference(canvas)
        const context = canvas ? canvas.getContext("2d") : undefined;
        if (context) {
        context.fillStyle = '#000000'
        context.fillRect(0, 0, context.canvas.width, context.canvas.height)
        }
    }, []);
    return <canvas ref={canvasRef} {...props} /> 
};

export default Canvas;