import { RECEIVE_REWARDS, RECEIVE_REWARD, RECEIVE_REWARD_ERRORS } from '../actions/reward_actions';
import { RECEIVE_PLEDGE } from '../actions/pledge_actions';
import merge from 'lodash/merge';

const RewardsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_REWARDS:
      const rewards = action.rewards;
      return merge({}, rewards);
    case RECEIVE_PLEDGE:
      const rewardId= action.pledge.reward_id;
      return merge({}, state, {[rewardId]: {pledge_count: state[rewardId].pledge_count+1}});
    case RECEIVE_REWARD:
      if(!action.reward){ return state; }
      const reward = action.reward;
      return  merge({}, state, {[reward.id]: reward});
    case RECEIVE_REWARD_ERRORS:
      const errors = action.errors;
      return merge({}, state, {
        errors
      });
    default:
      return state;
  }
};

export default RewardsReducer;
