import * as React from 'react';
import { useState } from 'react';
import Canvas from "../Canvas/Canvas";

import "./canvas.css"
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
            <Canvas />
            <img alt="olas del mar" src="https://w7.pngwing.com/pngs/1003/771/png-transparent-body-of-water-deep-sea-wind-wave-dispersion-water-circle-blue-cloud-ocean-thumbnail.png"/>
            
        </div>
    );
};

export default CanvasImage;