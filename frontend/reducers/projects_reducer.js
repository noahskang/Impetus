 import { RECEIVE_PROJECTS, RECEIVE_PROJECT, RECEIVE_PROJECT_ERRORS } from '../actions/project_actions';
 import {RECEIVE_PLEDGE} from '../actions/pledge_actions';
import merge from 'lodash/merge';

const ProjectsReducer= (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PROJECTS:
      const projects = action.projects;
      return merge({}, projects);
    case RECEIVE_PLEDGE:
      const projectId =action.pledge.reward.project_id;
      return merge({}, state, {[projectId]: {funding_raised: state[projectId].funding_raised+action.pledge.reward.amount} });
    case RECEIVE_PROJECT:
      if(!action.project){ return state; }
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
