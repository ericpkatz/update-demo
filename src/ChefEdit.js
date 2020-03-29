import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateChef } from './store';

class ChefEdit extends Component{
  render(){
    return <hr />;
  }
}

const mapStateToProps = ({chefs})=> {
  return {
  };
};

const mapDispatchToProps = (dispatch)=> {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChefEdit);
