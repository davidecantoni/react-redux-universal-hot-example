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
    changeZoom: PropTypes.func.isRequired,
    changeLat: PropTypes.func.isRequired,
    changeLng: PropTypes.func.isRequired
  }

  static fetchDataDeferred(getState, dispatch) {
    if (!isLoaded(getState())) {
      return dispatch(loadProjects(getState().filters));
    }
  }

  render() {
    const styles = require('./Listing.scss');
    const {projects, loading} = this.props;

    return (
      <div className={styles.listing}>
        <Map {...this.props}/>
        <div className={styles.results}>
          { projects && projects.res && projects.res.length > 0 &&
            <ul>
              results {projects.res.length}
              {projects.res.map((project) =>
                <ListItem key={project.id} {...project}/>
              )}
            </ul>
          }
          { projects && projects.res && projects.res.length <= 0 &&
          <ul>
            zero properties found in the selected and filtered area
          </ul>
          }
        </div>
        { loading &&
          <div className={styles['sk-double-bounce-wrapper']}>
            <div className={styles['sk-double-bounce']}>
              <div className={styles['sk-child'] + ' ' + styles['sk-double-bounce1']}></div>
              <div className={styles['sk-child'] + ' ' + styles['sk-double-bounce2']}></div>
            </div>
          </div>
        }
      </div>
    );
  }
}
