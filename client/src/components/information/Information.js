import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import amazon from './assets/amazon.png';

const Information = ({ auth: {isAuthenticated, loading} }) => {
    const style ={
        border:0,
        marginwidth:"10px"
    };

    const registryLink = 'https://www.amazon.com/wedding/liam-salazar-sandra-hayes-toronto-october-2020/registry/VE4C65UTZV6C';

    const guestView =(
        <div className="registry">
            <h2>Registry</h2>
            <div className="img-container">
                <img 
                    className="img-amazon" 
                    src={amazon} 
                    onClick={() =>
                        window.location.assign(registryLink)
                    } 
                />
                <div className="img-text-centered">Click here for wedding registry</div>
            </div>
            <div className="my-1 p-1 bg-white">
                <p className="no-cursive my-1">Sandra and I would like to say that your presence is the greatest gift we could ask for. The time, effort, and expense of travelling to be with us is something we appreciate. We are excited to celebrate with you all. Please be aware that gifts are not necessary. However, if you wish to honor us with a gift, a registry is provided.</p>
            </div>
        </div>
    );

    const authView = (
        <div className="my-2">
            <h2>Notable Locations</h2>
            <div className="my-1 bg-light location">
                <div className="p-2">
                    <h2>Fantasy Farms</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46178.73793045959!2d-79.39896679763146!3d43.6654108203537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4ccbd049a18f1%3A0x53160479e6f6dfd1!2sFantasy%20Farms!5e0!3m2!1sen!2sca!4v1577650185377!5m2!1sen!2sca" 
                        width="500" 
                        height="300" 
                        frameBorder="0"
                        style={style}
                        allowFullscreen=""
                    />
                    <p className="no-cursive m-1">The ceremony and reception will take place at Fantasy Farms near the Don Valley Parkway. It is scheduled to begin at 3:30pm on October 17, 2020. The venue will provide free parking for guests if they plan on using their car.</p>
                </div>
                <hr />
                <div className="p-2">
                    <h2>Don Valley Hotel & Suites</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.32876690869!2d-79.32954808453805!3d43.72449667911887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cda385b711b1%3A0xf525b265582069d!2sToronto%20Don%20Valley%20Hotel%20%26%20Suites!5e0!3m2!1sen!2sca!4v1578016207228!5m2!1sen!2sca"
                        width="500"
                        height="300"
                        frameBorder="0"
                        style={style}
                        allowFullscreen=""
                    />
                    <p className="no-cursive m-1">
                        We recommend booking at Don Valley Hotel & Suites, because it is a 15 minute drive to and from 
                        the venue. By using the promo code <strong>"WED"</strong>, you will be able to save 10% off the Best Available Rate at the time of 
                        booking. You may also look into booking an AirBnb, which may be a cheaper alternative.
                    </p>
                </div>
            </div>
            <div className="registry">
                <h2>Registry</h2>
                <div className="img-container">
                    <img 
                        className="img-amazon" 
                        src={amazon} 
                        onClick={() =>
                            window.location.assign(registryLink)
                        }  
                    />
                    <div className="img-text-centered">Click here for wedding registry</div>
                </div>
                <div className="my-1 p-1 bg-white">
                    <p className="no-cursive my-1">Sandra and I would like to say that your presence is the greatest gift we could ask for. The time, effort, and expense of travelling to be with us is something we appreciate. We are excited to celebrate with you all. Please be aware that gifts are not necessary. However, if you wish to honor us with a gift, a registry is provided.</p>
                </div>
            </div>
        </div>
    );

    return (
        <Fragment>
            <h1 className="large text-primary">Information</h1>
            <p className="lead">
                <i className="fas fa-info-circle" />{' '} Helpful info about the event
            </p>
            { !loading && (<Fragment>{ isAuthenticated ? authView : guestView  }</Fragment>)}
        </Fragment>
    );
};

Information.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    {}
)(Information);