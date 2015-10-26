import { combineReducers } from 'redux';
import multireducer from 'multireducer';
import { routerStateReducer } from 'redux-router';

import auth from './auth';
import counter from './counter';
import {reducer as form} from 'redux-form';
import info from './info';
import widgets from './widgets';
import projects from './projects';
import project from './project';
import locale from './locale';
import filters from './filters';
import map from './map';

export default combineReducers({
  router: routerStateReducer,
  locale,
  auth,
  form,
  multireducer: multireducer({
    counter1: counter,
    counter2: counter,
    counter3: counter
  }),
  info,
  widgets,
  projects,
  project,
  filters,
  map
});
