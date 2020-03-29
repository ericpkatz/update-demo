import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Nav = ({ chefs, location })=> {
  console.log(location);
  return (
    <nav>
      <Link to='/chefs'>Chefs ({ chefs.length })</Link>
    </nav>
  );
};

export default connect( state => state )(Nav);
