import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login, signup, logout} from './actions/session_actions';
import { fetchProjects, fetchProject, createProject, updateProject, destroyProject } from './actions/project_actions';
import { fetchRewards, createReward, destroyReward } from './actions/reward_actions';
import { fetchUsers } from './actions/user_actions';
import { selectProject } from './reducers/selectors';
import {fetchPledges} from './util/pledge_api_util';

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

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);

});
