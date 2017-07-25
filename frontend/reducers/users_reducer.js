import { RECEIVE_USERS } from '../actions/user_actions';
import merge from 'lodash/merge';

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USERS:
      const users = action.users;
      return merge({}, state, users);
    default:
      return state;
  }
};

export default UsersReducer ;
