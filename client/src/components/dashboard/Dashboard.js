import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import DasboardActions from './DashboardActions';
import Guests from './Guests';

const Dashboard = ({ 
    getCurrentProfile,
    deleteAccount,
    auth: { user }, 
    profile: { profile, loading } 
}) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);

    return loading && profile === null ? <Spinner /> : <Fragment>
        <h1 className="large text-primary">Dashboard</h1>
        <p className="lead">
            <i className="fas fa-user"></i> Welcome { user && user.name.trim().split(' ')[0]}!
        </p>
        {profile !== null ? (
            <Fragment>
                <DasboardActions />
                <Guests guest={profile.guests} />

                <div className="my-2">
                    <button className="btn btn-danger" onClick={() => deleteAccount()}>
                    <i className="fas fa-user-minus" />
                        Delete My Account
                    </button>
                </div> 
            </Fragment>
        ) : (
            <Fragment>
                <p className="form-text">Thank you so much for going through these extra steps of going through 
                our website to RSVP! We found RSVP cards were expensive, so we decided 
                to create a website that did everything for us.</p>
                <Link to="/create-profile" className="btn btn-primary my-1">
                    RSVP
                </Link>
            </Fragment>
        )}
    </Fragment>
};

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(
    mapStateToProps, 
    { getCurrentProfile, deleteAccount }
)(Dashboard);
