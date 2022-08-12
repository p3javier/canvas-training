import * as React from 'react';
import { useState } from 'react';
import Canvas from "../Canvas/Canvas";

import "./canvas.css"

import ImageCanvasOverlay from "../ImageCanvasOverlay/ImageCanvasOverlay"
const CanvasImage = () => {
    return (
        <div className="container">
            <div className="textbox">
            <h1>Draw Canvas Test</h1>
            <details>
                <summary>Description</summary>
                <samp>This is a practice project to learn how to draw canvas on an image.</samp><br />
                <samp><strong>Javier@HP:</strong>~/projects/sat_web_lfr$ </samp>
            </details>
            </div>
            <ImageCanvasOverlay image={{alt: "olas", src: "https://w7.pngwing.com/pngs/1003/771/png-transparent-body-of-water-deep-sea-wind-wave-dispersion-water-circle-blue-cloud-ocean-thumbnail.png" }}/>
            <div className="outside-wrapper">
                <div className="inside-wrapper">
                    <Canvas className="canvas" width="30" height="50"/>
                    <img className="canvas-image" alt="olas del mar" src="https://w7.pngwing.com/pngs/1003/771/png-transparent-body-of-water-deep-sea-wind-wave-dispersion-water-circle-blue-cloud-ocean-thumbnail.png"/>
                </div>
            </div>
        </div>
    );
};

export default CanvasImage;