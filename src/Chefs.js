import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Chefs = ({ chefs })=> {
  return (
    <ul>
      {
        chefs.map( chef => {
          return (
            <li key={chef.id}>
              <Link to={`/chefs/${chef.id}`}>
                { chef.name }
              </Link>
            </li>
          );
        })
      }
    </ul>
  );
};

export default connect( state => state )(Chefs);
