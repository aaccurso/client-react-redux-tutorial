import {Map} from 'immutable';
import actionTypes from './actionTypes';

function setState(state, newState) {
  return state.merge(newState);
}

export default function(state = Map(), action) {
  switch (action.type) {
  case actionTypes.SET_STATE:
    return setState(state, action.state);
  }
  return state;
}
