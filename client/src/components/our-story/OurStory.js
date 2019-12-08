import React, { Fragment } from 'react';
import engagement from './engagement.jpeg';

const OurStory = () => {
    return (
        <Fragment>
            <h1 className="large text-primary">Our Story</h1>
            <p className="lead">
                <i className="fas fa-book" />{' '} Meeting on the Internet & Overcoming Long Distance Relationships 
            </p>
            <img src={engagement}/>
            <div className="my-2 p-1 bg-white no-cursive">
                <p className="my-1 tab margin-right">
                    Believe it or not, we both met on a popular blogging website called Tumblr. We were both following a 
                    penpal blog, where each blog post was a bio of a person. On March 22, 2014, we exchanged information and started
                    texting and Skyping. This became a daily habit after two months. We decided to be more than just friends, despite the 2500km that seperated us.
                </p>
                <p className="my-1 tab margin-right">
                    Liam would start taking one of many trips to and from Canada (two by GreyHound, yuck). We first met in person on 
                    August 15, 2014 and spent a week together. We both admired each other's company and planned for more trips to come. Liam even went as
                    far as spending whole summers with the Hayes Family.
                </p>
                <p className="my-1 tab margin-right">
                    Fast forward to May 19th, 2018 -  our fourth year anniversary and Sandra's second time in the States, Liam planned on proposing to her.
                    While we went horseback riding and played mini-golf, a small group of friends prepared to give Sandra a surprise at Houston's Elenor Tinsley
                    Park. After a 40 minute drive and some beating around the bush, Liam finally popped the question.
                </p>
                <p className="my-1 tab margin-right">
                    Almost 2 years from that date, we're about to get married and can't wait to share this special moment with you all...
                </p>
            </div>
        </Fragment>
    );
};

export default OurStory;
