import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import ProjectFormContainer from './projects/project_form_container';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBar from './navbar/navbar_container';
import Home from './home';

const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/login" component = {SessionFormContainer} />
      <AuthRoute path="/signup" component = {SessionFormContainer} />
      <Route component={NavBar} />
    </Switch>
    <Route exact path="/" component = {Home}/>
    <ProtectedRoute path="/projects/new" component = {ProjectFormContainer} />
  </div>
);

export default App;
