import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import { createSelector } from 'reselect';
import * as projectActions from 'redux/modules/project';
import {load as loadProject, isLoaded} from 'redux/modules/project';
import DocumentMeta from 'react-document-meta';

const projectSelector = createSelector(
  state => state.project,
  state => state.router.params.projectUrl,
  (project, projectUrl) => {
    const data = {
      project,
      projectUrl,
      activeProject: {}
    };
    if (projectUrl && project[projectUrl]) {
      data.activeProject = project[projectUrl];
    }

    return data;
  }
);

@connect(
  projectSelector,
  {...projectActions}
)

export default class Project extends Component {
  static propTypes = {
    //history: PropTypes.object,
    //router: PropTypes.object,
    projectUrl: PropTypes.string,
    project: PropTypes.object,
    params: PropTypes.object,
    activeProject: PropTypes.object,
    //error: PropTypes.string,
    //loaded: PropTypes.bool,
    //loading: PropTypes.bool,
    load: PropTypes.func.isRequired
  }

  static fetchDataDeferred(getState, dispatch) {
    const { router } = getState();
    const id = router.params.projectUrl;
    if (!isLoaded(getState(), id)) {
      return dispatch(loadProject(id));
    }
  }

  render() {
    const { activeProject, params } = this.props;
    return (
      <div>
        {!activeProject.loading && activeProject.loaded &&
          <div>
            <DocumentMeta {...activeProject.data.meta}/>

            <div className="image-intro">
              <img src={activeProject.data.image} />
            </div>

            <div className="intro">
              <div className="info">
                <h1>{activeProject.data.title}</h1>
                <h2>TAGLINE</h2>

                <div>
                  RERA
                </div>
                {activeProject.data.description}
                <ul>
                  <li>PARAMS</li>
                </ul>
              </div>

              <form className="contact-box">
                <img className="logo" />
                <input type="text" name="Name" placeholder="Name" />
                <input type="text" name="Name" placeholder="Email" />
                <input type="text" name="Name" placeholder="Phone number" />
                <button type="submit">Get Brochure</button>
              </form>
            </div>

            <div className="text-features">
              <p>
                Text
                <button className="more">READ MORE</button>
              </p>
              <ul>
                <li>KEY FEATURES</li>
              </ul>
            </div>

            <ul className="partners">
              <li>
                DEVELOPERS
              </li>
            </ul>

            <div className="second-image">
              Image
            </div>

            <div className="unit-configuration">
              UNIT CONFIG
            </div>

            <div className="map">
            </div>

            <div className="developer-about">
              ABOUT DEVELOPER
            </div>

            <Link to={`/${params.lang}/${params.newproject}/`}>Back to map</Link><br/>
            <a href="/somewhereelse">Some other place outside of new project</a><br/>
            <Link to={`/${params.lang}/${params.newproject}/asdwerwer`}>link to a non existing page</Link><br/>
          </div>
        }
        {activeProject.loading &&
          <div>data is been fetched</div>
        }
      </div>
    );
  }
}

