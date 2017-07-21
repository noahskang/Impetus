import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login, signup, logout} from './actions/session_actions';
import { fetchProjects, fetchProject, createProject, updateProject, destroyProject } from './util/project_api_util';


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
  window.fetchProjects = fetchProjects;
  window.fetchProject = fetchProject;
  window.createProject = createProject;
  window.updateProject = updateProject;
  window.destroyProject = destroyProject;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
