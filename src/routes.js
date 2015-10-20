import React from 'react';
import {IndexRoute, Route} from 'react-router';
import { isLoaded as isAuthLoaded, load as loadAuth } from 'redux/modules/auth';
import {
    App,
    Chat,
    Developer,
    Home,
    Listing,
    Widgets,
    About,
    Login,
    LoginSuccess,
    Project,
    Survey,
    NotFound,
  } from 'containers';

export default (store) => {
  const requireLogin = (nextState, replaceState, cb) => {
    function checkAuth() {
      const { auth: { user }} = store.getState();
      if (!user) {
        // oops, not logged in, so can't be here!
        replaceState(null, '/');
      }
      cb();
    }

    if (!isAuthLoaded(store.getState())) {
      store.dispatch(loadAuth()).then(checkAuth);
    } else {
      checkAuth();
    }
  };

  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      { /* Home (main) route */ }
      <IndexRoute component={Home}/>

      { /* Routes requiring login */ }
      <Route onEnter={requireLogin}>
        <Route path="chat" component={Chat}/>
        <Route path="loginSuccess" component={LoginSuccess}/>
      </Route>

      { /* Routes */ }
      <Route path="about" component={About}/>
      <Route path="login" component={Login}/>
      <Route path="survey" component={Survey}/>
      <Route path="widgets" component={Widgets}/>

      { /* NP Routes */ }
      <Route path="/listing" component={Listing}/>
      <Route path="developer/:developerUrl" component={Developer}/>
      <Route path="developer/:developerUrl/project/:projectUrl" component={Project}/>

      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
