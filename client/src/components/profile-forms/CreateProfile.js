import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';

const CreateProfile = ({ createProfile, history }) => {
    const [formData, setFormData] = useState({
        bio: '',
        location: '',
        food: '',
        status: '',
    });

    const {
        bio,
        food,
        location,
        status,
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        createProfile(formData, history);
    };

    return (
        <Fragment>
            <h1 className="large text-primary">
                RSVP
            </h1>
            <p className="lead">
            <i className="fas fa-user"></i>
                Please fill this out by June 17, 2020. If needed, you will be able to change info after you've RSVP'd.
            </p>
            <small>* = required field</small>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                <select name="status" value={status} onChange={e => onChange(e)}>
                    <option value="0">* </option>
                    <option value="Accept">Joyfully Accepts</option>
                    <option value="Decline">Regretfully Decline</option>
                </select>
                <small>Will you graciously accept an invitation to our wedding?</small>
                </div>

                <div className="form-group">
                <input type="text" placeholder="Where will you be flying from?" name="location" value={location} onChange={e => onChange(e)} />
                <small className="form-text">City & State/Province suggested (eg. Boston, MA)</small>
                </div>

                <div className="form-group">
                    <select name="food" value={food} onChange={e => onChange(e)}>
                        <option value="0">* Main Entree </option>
                        <option value="Beef">10 oz. AAA New York Strip</option>
                        <option value="Chicken">8 oz. Grilled Chicken</option>
                        <option value="Fish">8 oz. Atlantic Salmon</option>
                        <option value="vegetarian">Vegetarian Option</option>
                    </select>
                    <small className="form-text">Choose one entree. You will be served salad, pasta, sides, and a dessert during the reception.</small>
                </div>

                <div className="form-group">
                <textarea placeholder="" name="bio" value={bio} onChange={e => onChange(e)}></textarea>
                <small className="form-text">This is optional, but this is used for the guest list in the 'guests' tab. You'll be able to familarize yourself with people at the wedding.</small>
                </div>
                
                <input type="submit" className="btn btn-primary my-1" />
                <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
            </form>
        </Fragment>
    )
}

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
