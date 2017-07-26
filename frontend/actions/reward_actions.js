import * as APIUtil from '../util/reward_api_util';

export const RECEIVE_REWARDS = 'RECEIVE_REWARDS';
export const RECEIVE_REWARD = 'RECEIVE_REWARD';
export const RECEIVE_REWARD_ERRORS = 'RECEIVE_REWARD_ERRORS';

export const receiveRewards = (rewards) => ({
  type: RECEIVE_REWARDS,
  rewards
});

export const receiveReward = (reward) => ({
  type: RECEIVE_REWARD,
  reward
});


export const receiveRewardErrors = (errors) => ({
  type: RECEIVE_REWARD_ERRORS,
  errors
});

export const fetchRewards = () => dispatch => (
  APIUtil.fetchRewards().then(response => (
    dispatch(receiveRewards(response))
  ), err => (
    dispatch(receiveRewardErrors(err.responseJSON))
  ))
);

export const createReward = (reward) => dispatch => (
  APIUtil.createReward(reward).then(response => (
    dispatch(receiveReward(response))
  ), err => (
    dispatch(receiveRewardErrors(err.responseJSON))
  ))
);

export const destroyReward = id => dispatch => (
  APIUtil.destroyReward(id).then(reward => (
    dispatch(receiveReward(null))
  ))
);
