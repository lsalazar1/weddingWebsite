import React from 'react';
import { Link } from 'react-router-dom';

export const DashboardActions = () => {
    return (
        <div class="dash-buttons">
        <Link to="/edit-profile" class="btn btn-light">
            <i class="fas fa-check text-primary" /> Edit Your RSVP
        </Link>
        <Link to="/add-guest" class="btn btn-light">
            <i class="fas fa-user-friends text-primary" /> Add a Guest
        </Link>
      </div>
    );
};

export default DashboardActions;
