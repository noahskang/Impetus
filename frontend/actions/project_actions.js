import * as APIUtil from '../util/project_api_util';
import {receiveRewards} from './reward_actions';

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const RECEIVE_PROJECT_ERRORS = 'RECEIVE_PROJECT_ERRORS';

export const receiveProjects = (projects) => ({
  type: RECEIVE_PROJECTS,
  projects
});

export const receiveProject = (project) => ({
  type: RECEIVE_PROJECT,
  project
});


export const receiveProjectErrors = (errors) => ({
  type: RECEIVE_PROJECT_ERRORS,
  errors
});

export const fetchProjects = () => dispatch => (
  APIUtil.fetchProjects().then(response => (
    dispatch(receiveProjects(response))
  ), err => (
    dispatch(receiveProjectErrors(err.responseJSON))
  ))
);

export const createProject = (project) => dispatch => (
  APIUtil.createProject(project).then(response => {
    dispatch(receiveProject(response));
    return response;
  }).fail(err =>
    dispatch(receiveProjectErrors(err.responseJSON))
  )
);

export const fetchProject = (id) => dispatch => (
  APIUtil.fetchProject(id).then(response => {
    dispatch(receiveProject(response.project));
    dispatch(receiveRewards(response.rewards));
  }, err => (
    dispatch(receiveProjectErrors(err.responseJSON))
  ))
);

export const updateProject = (data, id) => dispatch => (
  APIUtil.updateProject(data, id).then(response => (
    dispatch(receiveProject(response))
  ), err => (
    dispatch(receiveProjectErrors(err.responseJSON))
  ))
);

export const destroyProject = id => dispatch => (
  APIUtil.destroyProject(id).then(project => (
    dispatch(receiveProject(null))
  ))
);
