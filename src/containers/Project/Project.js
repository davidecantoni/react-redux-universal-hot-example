import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as projectActions from 'redux/modules/project';
import {isLoaded, load as loadProject} from 'redux/modules/project';

@connect(
  state => ({
    project: state.project.data,
    error: state.project.error,
    loading: state.project.loading
  }),
  {...projectActions}
)

export default class Project extends Component {
  static propTypes = {
    history: PropTypes.object,
    project: PropTypes.object,
    error: PropTypes.string,
    loading: PropTypes.bool,
    load: PropTypes.func.isRequired,
  }

  static fetchDataDeferred(getState, dispatch) {
    if (!isLoaded(getState())) {
      return dispatch(loadProject());
    }
  }

  goBack() {
    const { history } = this.props;
    history.goBack();
  }

  render() {
    const { project, loading } = this.props;
    return (
      <ul>
        {!loading &&
          <div>project detail page<br/>
            {project.id}
            {' '}
            {project.description}
            <a onClick={this.goBack.bind(this)}>go back</a>
          </div>
        }
      </ul>
    );
  }
}

