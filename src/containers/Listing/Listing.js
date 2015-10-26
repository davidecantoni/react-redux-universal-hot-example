import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {isLoaded, load as loadProjects} from 'redux/modules/projects';
import * as projectActions from 'redux/modules/projects';
import * as filtersActions from 'redux/modules/filters';
import * as mapActions from 'redux/modules/map';
import { ListItem, Map, SearchField } from 'components';

@connect(
  state => ({
    projects: state.projects.data,
    error: state.projects.error,
    loading: state.projects.loading,
    filters: state.filters,
    map: state.map
  }),
  {
    ...projectActions,
    ...filtersActions,
    ...mapActions
  }
)

export default class Listing extends Component {
  static propTypes = {
    route: PropTypes.object,
    projects: PropTypes.object,
    error: PropTypes.object,
    loading: PropTypes.bool,
    filters: PropTypes.object,
    map: PropTypes.object,
    isLoaded: PropTypes.func.isRequired,
    load: PropTypes.func.isRequired,
    updateMap: PropTypes.func.isRequired
  }

  refetchProjects() {
    this.props.load(this.props.map);
  }

  static fetchDataDeferred(getState, dispatch) {
    // developer url is given
    if (getState().router.params && getState().router.params.developerUrl) {
      console.log(getState().router.params);
    }

    if (!isLoaded(getState())) {
      return dispatch(loadProjects(getState().map));
    }
  }

  render() {
    const styles = require('./Listing.scss');
    const {projects, loading} = this.props;

    return (
      <div className={styles.listing}>
        <Map {...this.props} onUpdateMap={::this.refetchProjects}/>
        <div className={styles.results}>
          <SearchField {...this.props} onSelect={::this.refetchProjects}/>
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
