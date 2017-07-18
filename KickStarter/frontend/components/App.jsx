import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <h1>Impetus</h1>
    </header>
    <switch>
      <Route exact path = "/" component = {GreetingContainer} />
      <AuthRoute path = "/login" component = {SessionFormContainer} />
      <AuthRoute path = "/signup" component = {SessionFormContainer} />
    </switch>
  </div>
);

export default App;
