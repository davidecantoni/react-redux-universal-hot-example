import React from 'react';
import { IndexRoute, Route} from 'react-router';
//import { isLoaded as isAuthLoaded, load as loadAuth } from 'redux/modules/auth';
import {
    App,
    MapListing,
    Project,
    NotFound,
  } from 'containers';

export default () => {
  /*const requireLogin = (nextState, replaceState, cb) => {
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
  };*/

  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/:lang/:newproject/" component={App}>
      { /* Home (main) route */ }
      <IndexRoute component={MapListing}/>

      { /* Routes requiring login
      <Route onEnter={requireLogin}>
        <Route path="chat" component={Chat}/>
        <Route path="loginSuccess" component={LoginSuccess}/>
      </Route>

      { Routes }
      <Route path="about" component={About}/>
      <Route path="login" component={Login}/>
      <Route path="survey" component={Survey}/>
      <Route path="widgets" component={Widgets}/>*/ }

      { /* NP Routes */ }
      <Route path="/:lang/:newproject/listing" component={MapListing}/>
      <Route path="/:lang/:newproject/%D9%82%D8%A7%D8%A6%D9%85%D8%A9" component={MapListing}/>
      <Route path="/:lang/:newproject/:developerUrl/:projectUrl" component={Project}/>

      { /* Catch all route */ }
      <Route path="/:lang/:newproject/*" component={NotFound} status={404} />
    </Route>
  );
};
