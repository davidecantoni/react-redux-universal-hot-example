import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as projectActions from 'redux/modules/project';
import {isLoaded, load as loadProject} from 'redux/modules/project';
import DocumentMeta from 'react-document-meta';

@connect(
  state => ({
    project: state.project.data,
    projectUrl: state.router.params.projectUrl,
    error: state.project.error,
    loaded: state.project.loaded,
    loading: state.project.loading
  }),
  {...projectActions}
)

export default class Project extends Component {
  static propTypes = {
    history: PropTypes.object,
    projectUrl: PropTypes.string,
    project: PropTypes.object,
    error: PropTypes.string,
    loaded: PropTypes.bool,
    loading: PropTypes.bool,
    load: PropTypes.func.isRequired
  }

  static fetchDataDeferred(getState, dispatch) {
    const { router } = getState();
    if (!isLoaded(getState())) {
      return dispatch(loadProject(router.params.projectUrl));
    }
  }

  goBack() {
    const { history } = this.props;
    history.goBack();
  }

  render() {
    const { project, loaded } = this.props;

    return (
      <ul>
        {loaded &&
          <div>project detail page<br/>
            <DocumentMeta {...project.meta}/>
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

