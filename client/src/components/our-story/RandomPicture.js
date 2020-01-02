import React, { Fragment } from 'react';

// Pictures used for slideshow
import engagement1 from './assets/engagement1.jpeg';
import engagement2 from './assets/engagement2.jpeg';
import engagement4 from './assets/engagement4.jpeg';
import engagement6 from './assets/engagement6.jpeg';

export const RandomPicture = () => {
    const imageArray = [
        engagement2, 
        engagement1, 
        engagement4, 
        engagement6, 
    ];

    let imagePicker = imageArray[Math.floor(Math.random()*imageArray.length)];

    return (
        <Fragment>
            <img alt="Photos taken by Alicia Yarrish" src={imagePicker} />
        </Fragment>
    )
};

export default RandomPicture;
