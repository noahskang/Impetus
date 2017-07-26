import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login, signup, logout} from './actions/session_actions';
import { fetchProjects, fetchProject, createProject, updateProject, destroyProject } from './actions/project_actions';
import { fetchRewards, createReward, destroyReward } from './actions/reward_actions';
import { fetchUsers } from './actions/user_actions';
import { selectProject } from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  window.login = login;

  if(window.currentUser){
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.store = store;
  window.selectProject = selectProject;
  window.fetchProjects = fetchProjects;
  window.fetchProject = fetchProject;
  window.createProject = createProject;
  window.updateProject = updateProject;
  window.createProject = createProject;
  window.destroyProject = destroyProject;
  window.fetchRewards = fetchRewards;
  window.createReward = createReward;
  window.destroyReward = destroyReward;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);

});
