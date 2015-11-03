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
    const usePlus = '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/sprite.svg#i-plus-square"></use>';
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

                <table className={styles.facts + ' ' + styles.table + ' ' + styles.split}>
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

            <section className={styles['secondary-content'] + ' ' + styles['centered-content']}>
              <h3>Unit Configuration</h3>

              <button className={styles.button + ' ' + styles['huge-button'] + ' ' + styles['select-button']}>
                2 BEDROOMS
                <svg dangerouslySetInnerHTML={{__html: useArrow}} className={styles['svg-i'] + ' ' + styles['svg-huge'] + ' ' + styles['svg-gray'] + ' ' + styles['pull-right']} />
              </button>

              <div className={styles['tabs-wrapper']}>
                <div className={styles.tabs}>
                  <input className={styles['tab-input']} type="radio" id="tab-1" name="tab-group" />
                  <label className={styles.tab} htmlFor="tab-1">STUDIO</label>

                  <input className={styles['tab-input']} type="radio" id="tab-2" name="tab-group" />
                  <label className={styles.tab} htmlFor="tab-2">1 BEDROOM</label>

                  <input className={styles['tab-input']} type="radio" id="tab-3" name="tab-group" />
                  <label className={styles.tab} htmlFor="tab-3">2 BEDROOMS</label>

                  <input className={styles['tab-input']} type="radio" id="tab-4" name="tab-group" defaultChecked />
                  <label className={styles.tab} htmlFor="tab-4">3 BEDROOMS</label>

                  <input className={styles['tab-input']} type="radio" id="tab-5" name="tab-group" />
                  <label className={styles.tab} htmlFor="tab-5">VILLA</label>
                </div>

                <div className={styles['tabs-content']}>
                  <div className={styles['visual-content']}>
                    <input type="checkbox" id="switch-2d-3d" className={styles['switch-checkbox']} defaultChecked />

                    <img src={activeProject.data.layout2d} className={styles['house-layout'] + ' ' + styles['responsive-img'] + ' ' + styles.layout2d} alt="House Layout" />
                    <img src={activeProject.data.layout3d} className={styles['house-layout'] + ' ' + styles['responsive-img'] + ' ' + styles.layout3d} alt="House Layout" />

                    <div className={styles['switch-button-wrapper']}>
                      <span className={styles['button-aux-text']}>View the floorplan in</span>
                      <label className={styles.button + ' ' + ['switch-button']} htmlFor="switch-2d-3d">
                        <span className={styles['option-2d'] + ' ' + styles['switch-option']}>2D</span>
                        <span className={styles['option-3d'] + ' ' + styles['switch-option']}>3D</span>
                      </label>
                    </div>
                  </div>

                  <div className={styles['facts-wrapper']}>
                    <table className={styles.table + ' ' + styles.facts}>
                      <tbody>
                        <tr>
                          <th scope="row">Price from</th>
                          <td className={styles.price}>
                            <span className={styles.val}>891,000</span>
                            <span className={styles.currency}>AED</span>
                          </td>
                        </tr>

                        <tr>
                          <th scope="row">Price per Sqft</th>
                          <td className={styles['price-sqft']}>
                            <span className={styles.val}>985</span>
                            <span className={styles['currency-sqft']}>AED/Sqft</span>
                          </td>
                        </tr>

                        <tr>
                          <th scope="row">Size</th>
                          <td>964 AED</td>
                        </tr>

                        <tr>
                          <th scope="row">Unit Type</th>
                          <td>Apartment</td>
                        </tr>
                      </tbody>
                    </table>
                    <a className={styles['more-details']} href="#">
                      <svg dangerouslySetInnerHTML={{__html: usePlus}} className={styles['svg-i'] + ' ' + styles['svg-medium'] + ' ' + styles['svg-blue']} />
                      More details
                    </a>
                  </div>

                  <div className={styles['payment-info']}>
                    <table className={styles.table + ' ' + styles['payment-table']}>
                      <thead>
                        <tr>
                          <th scope="row" className={styles['center-col']}>% PAYABLE</th>
                          <th scope="row">PAYABLE WHEN</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td scope="row" className={styles['center-col']}>10%</td>
                          <td scope="row">ON BOOKING + 4% OQOOD + AED 1520 UNIT REGISTRATION</td>
                        </tr>
                        <tr>
                          <td scope="row" className={styles['center-col']}>10%</td>
                          <td scope="row">WITHIN 60 DAYS FROM 1ST INSTALLMENT</td>
                        </tr>
                        <tr>
                          <td scope="row" className={styles['center-col']}>10%</td>
                          <td scope="row">WITHIN 90 DAYS FROM 2ND INSTALLMENT</td>
                        </tr>
                        <tr>
                          <td scope="row" className={styles['center-col']}>10%</td>
                          <td scope="row">WITHIN 60 DAYS FROM 3RD INSTALLMENT</td>
                        </tr>
                        <tr>
                          <td scope="row" className={styles['center-col']}>10%</td>
                          <td scope="row">WITHIN 90 DAYS FROM 4TH INSTALLMENT</td>
                        </tr>
                        <tr>
                          <td scope="row" className={styles['center-col']}>50%</td>
                          <td scope="row">ON KEY TIME</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

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
