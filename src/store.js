import axios from 'axios';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunks from 'redux-thunk';

const LOAD_CHEFS = 'LOAD_CHEFS';
const UPDATE_CHEF = 'UPDATE_CHEF';

const chefsReducer = (state = [], action)=> {
  if(action.type === LOAD_CHEFS){
    return action.chefs;
  }
  if(action.type === UPDATE_CHEF){
    return state.map( chef => chef.id === action.chef.id ? action.chef : chef);
  }
  return state;
};

const recipesReducer = (state = [], action)=> {
  return state;
};

const reducer = combineReducers({
  chefs: chefsReducer,
  recipes: recipesReducer
});

const _loadChefs = (chefs)=> ({ chefs,type: LOAD_CHEFS });

const loadChefs = ()=> {
  return (dispatch)=> {
    setTimeout(()=> {
      dispatch(_loadChefs([{ id: 1, name: 'moe'}, { id: 2, name: 'lucy'}]));
    }, 500);

  };
};

const store = createStore(reducer, applyMiddleware(thunks));

export default store;

export {
  loadChefs
};
