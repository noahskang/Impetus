import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import ProjectFormContainer from './projects/project_form_container';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBar from './navbar/navbar_container';
import Home from './home';
import { nexstState, replaceState } from 'react-router-dom';
import UserProjectsContainer from './projects/user_projects_container';
import RewardsFormContainer from './rewards/rewards_form_container';
import ProjectShowPageContainer from './projects/project_show_page_container';
import PledgesFormContainer from './projects/pledges_form_container';

const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/login" component = {SessionFormContainer} />
      <AuthRoute path="/signup" component = {SessionFormContainer} />
      // because the above are authroutes -- as soon as I log in a user, they will automatically redirect to the home page.
      <Route component={NavBar} />
    </Switch>
    <Switch>
      <ProtectedRoute exact path="/user/projects" component= {UserProjectsContainer} />
      <ProtectedRoute path="/projects/:projectId/rewards" component={RewardsFormContainer} />
      <ProtectedRoute path="/projects/new" component = {ProjectFormContainer}/>
      <ProtectedRoute path="/projects/:projectId/pledges" component={PledgesFormContainer}/>
      <ProtectedRoute path="/projects/:projectId/" component={ProjectShowPageContainer}/>
      <Route exact path="/" component = {Home}/>
    </Switch>
  </div>
);

export default App;
