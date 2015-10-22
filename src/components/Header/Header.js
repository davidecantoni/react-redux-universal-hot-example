import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  render() {
    const styles = require('./Header.scss');
    const logo = require('./propertyfinder-logo.svg');
    const user = require('./user.svg');
    const menu = require('./menu.svg');

    return (
      <header className={styles['menu-wrapper']}>
        <nav className="pure-menu">
          <a className={styles['menu-toggle']}>
            <img src={menu} />
          </a>
          <Link to="/" className={styles.logo + ' pure-menu-heading'}><img src={logo} /></Link>
          <a className={styles['userbox-icon']}><img src={user} /></a>
        </nav>

        <nav className={styles['menu-horizontal'] + ' pure-menu pure-menu-horizontal'}>
          <li>
            <a>Rent</a>
          </li>
          <li>
            <a>Buy</a>
          </li>
          <li>
            <a>Commercial</a>
          </li>
          <li>
            <Link to="/newprojects">New Projects</Link>
          </li>
          <li>
            <a>More</a>
          </li>
        </nav>
      </header>
    );
  }
}
