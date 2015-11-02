import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  render() {
    const styles = require('./Header.scss');
    const logo = '//pfae-a.akamaihd.net/img/logos/property-finder-UAE-logo.svg';
    const useUser = '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="../../sprite.svg#i-user"></use>';
    const useClose = '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="../../sprite.svg#i-close"></use>';

    return (
      <header className={styles.header}>
        <a className={styles['hamburger-icon'] + ' ' + styles['v-center']} href="#">
          <svg className={styles['hamburger-svg']} x="0" y="0" width="36px" height="20px" viewBox="0 0 36 20">
            <g id="s-g">
              <rect x="5" y="1" width="25" height="3" rx="2" ry="2" className={styles.gc}/>
              <rect x="5" y="8" width="25" height="3" rx="2" ry="2" className={styles.gc}/>
              <rect x="5" y="15" width="25" height="3" rx="2" ry="2" className={styles.gc}/>
            </g>
          </svg>
        </a>

        <Link to="/" className={styles.logo}>
          <img src={logo} alt="propertyfinder uae" className={styles['logo-img'] + ' ' + styles['all-center']} />
        </Link>

        <div className={styles['header-nav-wrapper']}>
          <nav className={styles['header-nav']}>
            <ul className={styles['header-menu']}>
              <li>
                <a href="#">Rent</a>
              </li>
              <li>
                <a href="#">Buy</a>
              </li>
              <li>
                <a href="#">Commercial</a>
              </li>
              <li>
                <Link to="/newprojects">New Projects</Link>
              </li>
              <li className={styles.more}>
                <a href="#">More</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.avatar + ' ' + styles['v-center']}>
          <a href="#">
            <div className={styles.user + ' ' + styles['replace-by-x']}>
              <svg dangerouslySetInnerHTML={{__html: useUser }} className={styles['svg-i'] + ' ' + styles['i-user'] + ' ' + styles['svg-big'] + ' ' + styles['svg-white'] + ' ' + styles['all-center']} />
              <svg dangerouslySetInnerHTML={{__html: useClose }} className={styles['svg-i'] + ' ' + styles['i-close'] + ' ' + styles['svg-blue'] + ' ' + styles['svg-huge']} />
            </div>
          </a>
        </div>
      </header>
    );
  }
}
