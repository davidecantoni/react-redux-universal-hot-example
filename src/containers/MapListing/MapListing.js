import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { isLoaded, load as loadProjects } from 'redux/modules/projects';
import * as projectActions from 'redux/modules/projects';
import * as filtersActions from 'redux/modules/filters';
import * as mapActions from 'redux/modules/map';
import { ListItem, Map, SearchField, LanguageSwitch } from 'components';


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
    projects: PropTypes.object,
    /*todos: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    }).isRequired).isRequired*/
    error: PropTypes.object,
    loading: PropTypes.bool,
    filters: PropTypes.object,
    map: PropTypes.object,
    params: PropTypes.object,
    isLoaded: PropTypes.func.isRequired,
    load: PropTypes.func.isRequired,
    updateMap: PropTypes.func.isRequired
  }

  refetchProjects() {
    this.props.load(this.props);
  }

  static fetchDataDeferred(getState, dispatch) {
    if (!isLoaded(getState())) {
      return dispatch(loadProjects(getState()));
    }
  }

  render() {
    const styles = require('./MapListing.scss');
    const { projects, loading, params } = this.props;
    return (
      <div className={styles.listing}>
        <Map {...this.props} onUpdateMap={::this.refetchProjects}/>
        <div className={styles.results}>
          <SearchField {...this.props} onSelect={::this.refetchProjects}/>
          { projects && projects.res && projects.res.length > 0 &&
            <div>
              <div className={styles['results-count']}>{projects.res.length} projects found</div>
              <ul>
                {projects.res.map((item) =>
                  <ListItem key={item.id} project={item} params={params}/>
                )}
              </ul>
            </div>
          }
          { projects && projects.res && projects.res.length <= 0 &&
          <ul>
            zero properties found in the selected and filtered area
          </ul>
          }
          <LanguageSwitch params={params}/>
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
