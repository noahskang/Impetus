import * as APIUtil from '../util/project_api_util';

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveProjects = (projects) => ({
  type: RECEIVE_PROJECTS,
  projects
});

export const receiveProject = (project) => ({
  type: RECEIVE_PROJECT,
  project
});


export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const fetchProjects = () => dispatch => (
  APIUtil.fetchProjects().then(response => (
    dispatch(receiveProjects(response))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const createProject = (project) => dispatch => (
  APIUtil.createProject(project).then(response => (
    dispatch(receiveProjects(response))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const fetchProject = (id) => dispatch => (
  APIUtil.fetchProject(id).then(response => (
    dispatch(receiveProject(response))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const updateProject = (data, id) => dispatch => (
  APIUtil.updateProject(data, id).then(response => (
    dispatch(receiveProject(response))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const destroyProject = id => dispatch => (
  APIUtil.destroyProject(id).then(project => (
    dispatch(receiveProject(null))
  ))
);
