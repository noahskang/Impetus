import * as APIUtil from '../util/pledge_api_util';

export const RECEIVE_PLEDGES = 'RECEIVE_PLEDGES';
export const RECEIVE_PLEDGE = 'RECEIVE_REWARD';
export const RECEIVE_PLEDGE_ERRORS = 'RECEIVE_PLEDGE_ERRORS';

export const receivePledges = (pledges) => ({
  type: RECEIVE_PLEDGES,
  pledges
});

export const receivePledge = (pledge) => ({
  type: RECEIVE_PLEDGE,
  pledge
});


export const receivePledgeErrors = (errors) => ({
  type: RECEIVE_PLEDGE_ERRORS,
  errors
});

export const createPledge = (pledge) => dispatch => (
  APIUtil.createPledge(pledge).then(response => (
    dispatch(receivePledge(response))
  ), err => (
    dispatch(receivePledgeErrors(err.responseJSON))
  ))
);
