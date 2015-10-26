import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as projectActions from 'redux/modules/project';
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

  render() {
    const { loaded, loading } = this.props;

    let project = {};
    if (this.props.project && this.props.project.res && this.props.project.res[0]) {
      project = this.props.project.res[0];
    }

    //http://localhost:3000/mobileapi/search?id=3500901
    project = {
      ...project,
      meta: project.title
    };

    return (
      <div>
        {!loading && loaded &&
          <div>
            <DocumentMeta {...project.meta}/>

            <div className="image-intro">
              <img src={project.thumbnail_big} />
            </div>

            <div className="intro">
              <div className="info">
                <h1>{project.title} {project.id}</h1>
                <h2>TAGLINE {project.type}</h2>

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

            <Link to={`/listing`}>Back to map</Link>
          </div>
        }
        {loading &&
          <div>data is been fetched</div>
        }
      </div>
    );
  }
}

