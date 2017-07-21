import {} from '../actions/project_actions.js';
import { RECEIVE_PROJECTS, RECEIVE_PROJECT, RECEIVE_ERRORS } from '../actions/project_actions';
import merge from 'lodash/merge';

const ProjectsReducer= (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PROJECTS:
      return action.projects;
    case RECEIVE_PROJECT:
      return action.project;
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, {
        errors
      });
    default:
      return state;
  }
};

export default ProjectsReducer;
