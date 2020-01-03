import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import amazon from './assets/amazon.png';

const Information = ({ auth: {isAuthenticated, loading} }) => {
    const style ={
        border:0,
        marginwidth:"10px"
    };

    const guestView =(
        <div className="registry">
            <h2>Registry</h2>
            <div className="img-container">
                <img 
                    className="img-amazon" 
                    src={amazon} 
                    onClick={() =>
                        window.location.assign('https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.amazon.com%2Fwedding%2Fliam-salazar-sandra-hayes-toronto-october-2020%2Fregistry%2FVE4C65UTZV6C%3Ffbclid%3DIwAR2Jc48yKto00GcK9oX9BkURfXEIcP80vHQ_layGNoiF6CoLoqv4bIe9JpA&h=AT25AdzAtxQximJC9wh-6ME9O18O-f86baaA99DsdK58SwsEmexRUVTdF_8FsW97G6Spy-u0npl4JPv7qT3KXj7XQJLGESSr8Bzir-kyazRkvlMKFK9vn03EdrLZhZVGr4Y')
                    } 
                />
                <div className="img-text-centered">Click here for wedding registry</div>
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
                    <p className="no-cursive">The ceremony and reception will take place at Fantasy Farms near the Don Valley Pkwy. The wedding is scheduled to begin at 4pm on October 17, 2020. The venue will provide free parking for guests, if you plan on using your car.</p>
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
                    <p className="no-cursive">We have blocked numerous rooms for you at the  x {'hotel'} for those travelling into town. The {'hotel'} is x minutes away.</p>
                </div>
            </div>
            <div className="registry">
                <h2>Registry</h2>
                <div className="img-container">
                    <img 
                        className="img-amazon" 
                        src={amazon} 
                        onClick={() =>
                            window.location.assign('https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.amazon.com%2Fwedding%2Fliam-salazar-sandra-hayes-toronto-october-2020%2Fregistry%2FVE4C65UTZV6C%3Ffbclid%3DIwAR2Jc48yKto00GcK9oX9BkURfXEIcP80vHQ_layGNoiF6CoLoqv4bIe9JpA&h=AT25AdzAtxQximJC9wh-6ME9O18O-f86baaA99DsdK58SwsEmexRUVTdF_8FsW97G6Spy-u0npl4JPv7qT3KXj7XQJLGESSr8Bzir-kyazRkvlMKFK9vn03EdrLZhZVGr4Y')
                        }  
                    />
                    <div className="img-text-centered">Click here for wedding registry</div>
                </div>
            </div>
        </div>
    );

    
    return (
        <Fragment>
            <h1 className="large text-primary">Information</h1>
            <p className="lead">
                <i className="fas fa-info-circle" />{' '} Helpful info about the event and wedding registry
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