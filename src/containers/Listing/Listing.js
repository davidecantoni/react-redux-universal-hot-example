import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {isLoaded, load as loadProjects} from 'redux/modules/projects';
import * as projectActions from 'redux/modules/projects';
import * as filtersActions from 'redux/modules/filters';
import { ListItem, Map } from 'components';

@connect(
  state => ({
    projects: state.projects.data,
    error: state.projects.error,
    loading: state.projects.loading,
    filters: state.filters
  }),
  {...projectActions, ...filtersActions}
)

export default class Listing extends Component {
  static propTypes = {
    projects: PropTypes.object,
    error: PropTypes.object,
    loading: PropTypes.bool,
    filters: PropTypes.object,
    isLoaded: PropTypes.func.isRequired,
    load: PropTypes.func.isRequired,
    changeLat: PropTypes.func.isRequired,
    changeLng: PropTypes.func.isRequired
  }

  static fetchDataDeferred(getState, dispatch) {
    if (!isLoaded(getState())) {
      return dispatch(loadProjects(getState().filters));
    }
  }

  changeLat(event) {
    event.preventDefault();
    this.props.changeLat(event.target.value);
  }

  changeLng(event) {
    event.preventDefault();
    this.props.changeLng(event.target.value);
  }

  render() {
    const styles = require('./Listing.scss');
    const {projects, filters} = this.props;
    return (
      <ul className={styles.listing}>
        { projects && projects.res && projects.res.length &&
          projects.res.map((project) =>
            <ListItem key={project.id} {...project}/>
          )
        }
        <input type="text" onChange={::this.changeLat} value={filters.lat} />
        <input type="text" onChange={::this.changeLng} value={filters.lng} />
        <Map {...this.props}/>
      </ul>
    );
  }
}
