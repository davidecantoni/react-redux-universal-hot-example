import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as projectActions from 'redux/modules/project';
//import {isLoaded, load as loadProject} from 'redux/modules/project';
import {load as loadProject} from 'redux/modules/project';
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
    //if (!isLoaded(getState())) {
    return dispatch(loadProject(router.params.projectUrl));
    //}
  }

  goBack() {
    const { history } = this.props;
    history.goBack();
  }

  render() {
    const { project, loaded } = this.props;

    return (
      <div>
        {loaded &&
          <div>
            <DocumentMeta {...project.meta}/>

            <div className="image-intro">
              Image
            </div>

            <div className="intro">
              <div className="info">
                <h1>{project.description} {project.id}</h1>
                <h2>TAGLINE</h2>

                <div>
                  RERA
                </div>

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


          </div>
        }
      </div>
    );
  }
}

