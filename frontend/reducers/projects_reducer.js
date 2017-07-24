import {} from '../actions/project_actions.js';
import { RECEIVE_PROJECTS, RECEIVE_PROJECT, RECEIVE_PROJECT_ERRORS } from '../actions/project_actions';
import merge from 'lodash/merge';

const ProjectsReducer= (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PROJECTS:
      const projects = action.projects;
      return merge({}, projects);
    case RECEIVE_PROJECT:
      const project = action.project;
      return  merge({}, state, {[project.id]: project});
    case RECEIVE_PROJECT_ERRORS:
      const errors = action.errors;
      return merge({}, state, {
        errors
      });
    default:
      return state;
  }
};

export default ProjectsReducer;
