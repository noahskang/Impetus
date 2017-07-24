import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import ProjectFormContainer from './projects/project_form_container';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBar from './navbar/navbar_container';
import Home from './home';
import { nexstState, replaceState } from 'react-router-dom';

import ProjectPageContainer from './projects/project_page_container';

// const requireAuth = (nextState, replaceState)  => {
//   if (!auth.loggedIn())
//     replaceState({ nextPathname: nextState.location.pathname }, '/login')
// };
//stackoverflow.com/questions/34119793/react-router-redirection-after-login

const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/login" component = {SessionFormContainer} />
      <AuthRoute path="/signup" component = {SessionFormContainer} />
      // because the above are authroutes -- as soon as I log in a user, they will automatically redirect to the home page.
      <Route component={NavBar} />
    </Switch>
    <Switch>
      <Route path="/projects/new" component = {ProjectFormContainer}/>
      <Route path="/projects/:projectId" component={ProjectPageContainer}/>
      <Route exact path="/" component = {Home}/>
    </Switch>
  </div>
);

export default App;
