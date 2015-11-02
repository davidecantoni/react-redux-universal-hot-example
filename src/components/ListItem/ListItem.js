import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class ListItem extends Component {
  static propTypes = {
    project: PropTypes.object,
    params: PropTypes.object
  }

  render() {
    const { project, params } = this.props;
    const styles = require('./ListItem.scss');
    const useBed = '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="../../sprite.svg#i-bed"></use>';
    // this is just a placeholder, gotta get the keychain icon, also it would be nice to have some kind of helper for this things
    const useShare = '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="../../sprite.svg#i-share"></use>';

    return (
      <li className={styles['list-item']}>
        <div className={styles.image}>
          <Link to={`/${params.lang}/${params.newprojects}/developer-name/${project.id}`}>
            <img className="pure-img" src={project.thumbnail} alt={project.title} />
            <span className={styles['icons-wrapper']}>
              2 to 5 <svg dangerouslySetInnerHTML={{__html: useBed}} className={styles['svg-i'] + ' ' + styles['svg-smaller'] + ' ' + styles['svg-white']} />
              <span className={styles['pull-right']}>
                <svg dangerouslySetInnerHTML={{__html: useShare}} className={styles['svg-i'] + ' ' + styles['svg-smaller'] + ' ' + styles['svg-white']} /> Q2 2017
              </span>
            </span>
          </Link>
        </div>
        <div className={styles.info}>
          <Link to={`/${params.lang}/${params.newprojects}/developer-name/${project.id}`} className={styles['info-link']}>{project.title}</Link>
          <div className={styles['info-developer']}>Cayan Group</div>
          <div>217 apartments</div>
          <div className={styles['info-price']}>{project.price}</div>
          <div className={styles['info-location']}>{project.location}</div>
          <div className={styles['info-status']}>Under construction</div>

          <div className={styles['info-developer-logo']}>
            <img src="../../cayan.png" alt={project.title} />
          </div>

          <button className={styles['info-button'] + ' ' + styles.button}>
            Read more
          </button>
        </div>
      </li>
    );
  }
}
