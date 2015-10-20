import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as projectActions from 'redux/modules/projects';
import {isLoaded, load as loadProjects} from 'redux/modules/projects';
import { ProjectListing } from 'components';

@connect(
  state => ({
    projects: state.projects.data,
    editing: state.projects.editing,
    error: state.projects.error,
    loading: state.projects.loading
  }),
  {...projectActions}
)

export default class Listing extends Component {
  static propTypes = {
    projects: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool,
    editing: PropTypes.object.isRequired,
    load: PropTypes.func.isRequired,
    editStart: PropTypes.func.isRequired
  }

  static fetchDataDeferred(getState, dispatch) {
    if (!isLoaded(getState())) {
      return dispatch(loadProjects());
    }
  }

  render() {
    const {projects} = this.props;

    return (
      <ul>
        { projects && projects.length &&
          projects.map((project) =>
            <ProjectListing key={project.id} {...project}/>
          )
        }
      </ul>
    );
  }
}
