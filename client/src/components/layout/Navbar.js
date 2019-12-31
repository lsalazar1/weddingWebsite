import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth'; 

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to="/our-story">
        <i className="fas fa-book" />{' '}
          <span className="hide-sm">Our Story</span>
        </Link>
      </li>
      <li>
        <Link to="/information">
        <i className="fas fa-info-circle" />{' '}
          <span className="hide-sm">Information</span>
        </Link>
      </li>
      <li>
        <Link to="/posts">
          <i className="fas fa-envelope" />{' '} 
          <span className="hide-sm">Posts</span>
        </Link>
      </li>
      <li>
        <Link to='/dashboard'>
          <i className='fas fa-user' />{' '}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
      <li>
        <Link onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt"/>{'  '}
          <span className="hide-sm">Logout</span>
        </Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/our-story">
        <i className="fas fa-book" />{' '}
          Our Story
        </Link>
      </li>     
      <li><Link to="/register">Register</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  );

  return (
      <nav className="navbar bg-dark">
      <h1>
        <Link to="/"><i className="far fa-heart"></i> Sandra &amp; Liam</Link>
      </h1>
      { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>) }
    </nav>  
  )
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps, 
  { logout }
)(Navbar);