import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';

const CreateProfile = ({ createProfile, history }) => {
    const [formData, setFormData] = useState({
        food: '',
        status: '',
        specialFoodRequest: ''
    });

    const {
        food,
        status,
        specialFoodRequest
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        createProfile(formData, history);
    };

    return (
        <Fragment>
            <h1 className="large text-primary">RSVP</h1>
            <p className="lead">
            <i className="fas fa-user" />{' '}
                Please fill this out by June 17, 2020. If needed, you will be able to change info after you've RSVP'd.
            </p>
            <small className="form-text">* = required field</small>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                <select name="status" value={status} onChange={e => onChange(e)}>
                    <option value="0">* </option>
                    <option value="Accept">Joyfully Accepts</option>
                    <option value="Decline">Regretfully Decline</option>
                </select>
                <small className="form-text">Will you graciously accept an invitation to our wedding?</small>
                </div>

                {status && status === 'Accept' && (
                    <div className="form-group">
                        <select name="food" value={food} onChange={e => onChange(e)}>
                            <option value="0">* Main Entree </option>
                            <option value="Beef">10 oz. AAA New York Strip Steak</option>
                            <option value="Chicken">8 oz. Grilled Chicken</option>
                            <option value="Fish">8 oz. Atlantic Salmon</option>
                            <option value="Vegetarian">Vegetarian option - Stuffed Pepper</option>
                            <option value="kidsMeal">Kids' Meal - Chicken Tenders & French Fries</option>
                        </select>
                        <small className="form-text">Choose one entree. This entree will be part of a four-course meal that includes salad, pasta, and a dessert.</small>
                        <textarea
                            name="specialFoodRequest"
                            cols="30"
                            rows="5"
                            placeholder=""
                            value={specialFoodRequest}
                            onChange={e => onChange(e)}
                        />
                        <small className="form-text">If you have any food allergies or dietery restrictions, please let us know. Otherwise, leave this blank.</small>
                    </div>
                )}

                
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
