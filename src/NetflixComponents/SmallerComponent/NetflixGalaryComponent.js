import React from 'react';
import './NetflixGalaryComponent.css';

export default function NetflixGalaryComponent() {
    return (
        <div className="gallery1">
            <div className="gallery1child" id='p1'>
                <div className="h1 text-white abc">Enjoy on your TV</div>
                <div className="h3 text-white">Watch on smart TVs, PlayStation, Xbox, Chromecast,<br/> Apple TV, Blu-ray players and more.</div>
            </div>

            <div className="gallery1child" id='img1'>
            <img  height="400px" width="400px"/>    
            </div>
        </div>
    );
}
