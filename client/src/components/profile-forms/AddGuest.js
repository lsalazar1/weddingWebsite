import React, { Fragment, useState }  from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addGuest } from '../../actions/profile';


const AddGuest = ({ addGuest , history }) => {
    const [formData, setFormData] = useState({
        name: '',
        food:'',
        specialFoodRequest: ''
    });

    const { name, food, specialFoodRequest } = formData;

    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });

    return (
        <Fragment>
            <h1 className="large text-primary">
                Guests
            </h1>
            <p className="lead">
                <i className="fas fa-user-friends" />{' '} Add any guests that you will be bringing to the wedding. This will help us keep an accurate head count.
            </p>
            <small className="form-text">* = required field</small>
            <form className="form" onSubmit={e => {
                e.preventDefault();
                addGuest(formData, history);
            }}>
                <div className="form-group">
                    <input type="text" placeholder="* Guest name" name="name" value={name} onChange={e => onChange(e)} required />
                    <small className="form-text">Enter one guest</small>
                </div>
               
                <div className="form-group">
                    <select name="food" value={food} onChange={e => onChange(e)}>
                        <option value="0">* Main Entree </option>
                        <option value="Beef">10 oz. AAA New York Strip Steak</option>
                        <option value="Chicken">8 oz. Grilled Chicken</option>
                        <option value="Fish">8 oz. Atlantic Salmon</option>
                        <option value="Vegetarian">Vegetarian Option</option>
                    </select>
                    <small className="form-text">Choose one entree. You will be served salad, pasta, sides, and a dessert during the reception.</small>
                </div>

                <div className="form-group">
                    <textarea
                        name="specialFoodRequest"
                        cols="30"
                        rows="5"
                        placeholder=""
                        value={specialFoodRequest}
                        onChange={e => onChange(e)}
                    />
                    <small className="form-text">If your guest has any food allergies or dietary restrictions, please let us know. Otherwise, leave this blank.</small>
                </div>

                <input type="submit" className="btn btn-primary my-1" />
                <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
            </form>
        </Fragment>
    )
};

AddGuest.propTypes = {
    addGuest: PropTypes.func.isRequired
};

export default connect(
    null, 
    { addGuest }
)(withRouter(AddGuest));
