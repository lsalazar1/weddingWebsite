import React from 'react';
import { Link } from 'react-router-dom';

export const DashboardActions = () => {
    return (
        <div class="dash-buttons">
        <Link to="/edit-profile" class="btn btn-light">
            <i class="fas fa-check text-primary"></i> Your RSVP
        </Link>
        <Link to="/add-guest" class="btn btn-light">
            <i class="fas fa-user-friends text-primary"></i> Add Guest
        </Link>
        <Link to="www.google.com" class="btn btn-light">
            <i class="fas fa-camera text-primary"></i> Add a Profile Picture
        </Link>
      </div>
    );
};

export default DashboardActions;
