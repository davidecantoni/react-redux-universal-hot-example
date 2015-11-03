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
    if (!isLoaded(getState())) {
      return dispatch(loadProject(getState()));
    }
  }

  render() {
    const { activeProject, params } = this.props;
    const styles = require('../App/App.scss');
    const usePhone = '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/sprite.svg#i-phone"></use>';
    const useCheck = '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/sprite.svg#i-check"></use>';
    const useArrow = '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/sprite.svg#i-chevron-down"></use>';
    return (
      <div>
        {!activeProject.loading && activeProject.loaded &&
          <div>
            <DocumentMeta {...activeProject.data.meta} />

            <img src={activeProject.data.image} className={styles['main-img'] + ' ' + styles['responsive-img']} alt="Main Image" />

            <div className={styles['centered-content-desktop'] + ' ' + styles['pos-relative']}>
              <span className={styles.rera}>RERA no: <strong>{activeProject.data.rera}</strong></span>
            </div>

            <section className={styles['centered-content-desktop']}>
              <section className={styles['contact-form-wrapper']}>
                <img src={activeProject.data.developer_logo} className={styles['client-logo']} alt={activeProject.data.developer_name} />
                <hr className={styles['separator-line']} />

                <div className={styles['contact-form']}>
                  <input className={styles['text-input']} type="text" name="name" placeholder="Name" />
                  <input className={styles['text-input']} type="text" name="email" placeholder="Email address" />
                  <input className={styles['text-input']} type="text" name="phone" placeholder="Phone number" />

                  <div className={styles['action-buttons']}>
                    <button className={styles['action-button'] + ' ' + styles.button}>Get Brochure</button>
                    <button className={styles['action-button'] + ' ' + styles['pull-right'] + ' ' + styles.button}>
                      <svg dangerouslySetInnerHTML={{__html: usePhone}} className={styles['svg-i'] + ' ' + styles['svg-largest'] + ' ' + styles['svg-white']} />
                      Call Now
                    </button>
                  </div>
                </div>
              </section>

              <section className={styles['key-features'] + ' ' + styles['pull-right']}>
                <h3>Key Features</h3>
                <p>Facilities at the {activeProject.data.developer_name} residency include:</p>
                <ul className={styles['features-list']}>
                  <li className={styles['features-item']}>
                    <svg dangerouslySetInnerHTML={{__html: useCheck}} className={styles['svg-i'] + ' ' + styles['svg-normal'] + ' ' + styles['svg-green']} />
                    Beautiful large swimming pool
                  </li>
                  <li className={styles['features-item']}>
                    <svg dangerouslySetInnerHTML={{__html: useCheck}} className={styles['svg-i'] + ' ' + styles['svg-normal'] + ' ' + styles['svg-green']} />
                    Kid&#39;s pool at the podium level
                  </li>
                  <li className={styles['features-item']}>
                    <svg dangerouslySetInnerHTML={{__html: useCheck}} className={styles['svg-i'] + ' ' + styles['svg-normal'] + ' ' + styles['svg-green']} />
                    State of the art gymnasium Modern sauna
                  </li>
                  <li className={styles['features-item']}>
                    <svg dangerouslySetInnerHTML={{__html: useCheck}} className={styles['svg-i'] + ' ' + styles['svg-normal'] + ' ' + styles['svg-green']} />
                    Steam room and jacuzzi
                  </li>
                  <li className={styles['features-item']}>
                    <svg dangerouslySetInnerHTML={{__html: useCheck}} className={styles['svg-i'] + ' ' + styles['svg-normal'] + ' ' + styles['svg-green']} />
                    Car parking spots for each appartment
                  </li>
                </ul>
              </section>

              <section className={styles['primary-content'] + ' ' + styles['centered-content']}>
                <h1>{activeProject.data.name}</h1>
                <h2>{activeProject.data.tagline}</h2>

                <table className={styles.facts + ' ' + styles.table}>
                  <tbody>
                  <tr>
                    <th scope="row">Starting Price</th>
                    <td className={styles.price}>
                      <span className={styles.val}>{activeProject.data.price}</span>
                      <span className={styles.currency}>{activeProject.data.currency}</span>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">Price per Sqft</th>
                    <td className={styles['price-sqft']}>
                      <span className={styles.val}>{activeProject.data.price_sqft}</span>
                      <span className={styles['currency-sqft']}>{activeProject.data.currency}/Sqft</span>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">Payable Now</th>
                    <td className={styles['price-payable']}>
                      <span className={styles.val}>{activeProject.data.price_payable}</span>
                      <span className={styles.currency}>{activeProject.data.currency}</span>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">Status</th>
                    <td>{activeProject.data.status}</td>
                  </tr>

                  <tr>
                    <th scope="row">Total Units</th>
                    <td>{activeProject.data.total_units} apartments</td>
                  </tr>

                  <tr>
                    <th scope="row">Possession from</th>
                    <td>{activeProject.data.possession}</td>
                  </tr>

                  <tr>
                    <th scope="row">Title</th>
                    <td>{activeProject.data.title_type}</td>
                  </tr>

                  <tr>
                    <th scope="row">Location</th>
                    <td>{activeProject.data.location}</td>
                  </tr>
                  </tbody>
                </table>

                <article className={styles.about}>
                  <header>
                    <h3>About Project</h3>
                  </header>

                  <div dangerouslySetInnerHTML={{__html: activeProject.data.description}} />

                  <button className={styles.button + ' ' + styles['read-more']}>
                    <svg dangerouslySetInnerHTML={{__html: useArrow}} className={styles['svg-i'] + ' ' + styles['svg-small'] + ' ' + styles['svg-red']} />
                    Read more
                  </button>
                </article>
              </section>
            </section>

            <section className={styles['developer-mid-info']}>
              <div className={styles['centered-content']}>
                <div className={styles['dev-item']}>
                  <h2>MASTER DEVELOPER</h2>
                  <img src={activeProject.data.master_developer.img} alt={activeProject.data.master_developer.name} />
                </div>
                <div className={styles['dev-item']}>
                  <h2>DEVELOPER</h2>
                  <img src={activeProject.data.developer.img} alt={activeProject.data.developer.name} />
                </div>
                <div className={styles['dev-item']}>
                  <h2>CUSTODIAN BANK</h2>
                  <img src={activeProject.data.bank.img} alt={activeProject.data.bank.name} />
                </div>
              </div>
            </section>

            <img src={activeProject.data.secondary_image} className={styles['secondary-img'] + ' ' + styles['responsive-img']} alt="Secondary Image" />

            <div>
              <Link to={`/${params.lang}/${params.newprojects}/`}>Back to map</Link><br/>
              <a href="/somewhereelse">Some other place outside of new project</a><br/>
              <Link to={`/${params.lang}/${params.newprojects}/asdwerwer`}>link to a non existing page</Link><br/>
            </div>
          </div>
        }
        {activeProject.loading &&
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
