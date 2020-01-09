import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteGuest } from '../../actions/profile';


const Guests = ({ guest, deleteGuest }) => {
    const guests = guest.map(g => (
        <tr key={g.id}>
            <td>{g.name}</td>
            <td className="hide-sm">{g.food}</td>
            <td>
                <button 
                    onClick={() => deleteGuest(g._id)}
                    className="btn btn-danger"
                >
                <i className="fa fa-times" />
                </button>
            </td>    
        </tr>
    ));

    return (
        <Fragment>
            <h2 className="my-2">Your Guests</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th className="hide-sm">Name</th>
                        <th className="hide-sm">Food</th>
                        <th />
                    </tr>
                </thead>
                <tbody>{guests}</tbody>
            </table>
        </Fragment>
    );
};

Guests.propTypes = {
    guest: PropTypes.array.isRequired,
    deleteGuest: PropTypes.func.isRequired
};

export default connect(null, { deleteGuest })(Guests);