import { RECEIVE_PLEDGES, RECEIVE_PLEDGE, RECEIVE_PLEDGE_ERRORS } from '../actions/pledge_actions';
import merge from 'lodash/merge';

const PledgesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PLEDGES:
      const pledges = action.pledges;
      return merge({}, pledges);
    case RECEIVE_PLEDGE:
      if(!action.pledge){ return state; }
      const pledge = action.pledge;
      return  merge({}, state, {[pledge.id]: pledge});
    case RECEIVE_PLEDGE_ERRORS:
      const errors = action.errors;
      return merge({}, state, {
        errors
      });
    default:
      return state;
  }
};

export default PledgesReducer;
