import React, { Fragment } from 'react';

// Pictures used for slideshow
import engagement1 from './assets/engagement1.jpeg';
import engagement2 from './assets/engagement2.jpeg';
import engagement3 from './assets/engagement3.jpeg';
import engagement4 from './assets/engagement4.jpeg';
import engagement5 from './assets/engagement5.jpeg';
import engagement6 from './assets/engagement6.jpeg';
import engagement7 from './assets/engagement7.jpeg';


export const RandomPicture = () => {
    const imageArray = [
        engagement2, 
        engagement1, 
        engagement3, 
        engagement4, 
        engagement5, 
        engagement6, 
        engagement7
    ];

    let imagePicker = imageArray[Math.floor(Math.random()*imageArray.length)];

    return (
        <Fragment>
            <img alt="Photos taken by Alicia Yarrish" src={imagePicker} />
        </Fragment>
    )
};

export default RandomPicture;
