import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import Nav from './Nav';
import { loadChefs } from './store';
import Chefs from './Chefs';
import ChefEdit from './ChefEdit';

class App extends Component{
  constructor(){
    super();
  }
  componentDidMount(){
    this.props.load();
  }
  render(){
    return (
      <HashRouter>
        <h1>The Acme Bakery</h1>
        <Route component={ Nav } />
        <Route path='/chefs' component={ Chefs } exact/>
        <Route path='/chefs/:id' component={ ChefEdit } />
      </HashRouter>
    );
  }
};

const mapDispatchToProps = (dispatch)=> {
  return {
    load: ()=> {
      dispatch(loadChefs());
    }
  };
};

export default connect(null, mapDispatchToProps)(App);

