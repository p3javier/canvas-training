import React from "react";
import Canvas from "../Canvas/Canvas";
const ImageCanvasOverlay = ({image, width, height}:{image: HTMLImageElement, width?: number, height?: number}) => {
    return (
        
        <div className="outside-wrapper">
                <div className="inside-wrapper">
                    <Canvas className="canvas" width={width} height={height} />
                    <img className="canvas-image" alt={image.alt} src={image.src} />
                </div>
            </div>
        
    )
}

export default ImageCanvasOverlay;