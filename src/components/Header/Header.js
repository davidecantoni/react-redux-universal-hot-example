import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  render() {
    const styles = require('./Header.scss');
    const logo = require('./propertyfinder-logo.svg');

    return (
      <header className={styles['menu-wrapper']}>
        <nav className="pure-menu">
          <div className="">
            <a className={styles['menu-toggle']}>MENU</a>
            <Link to="/" className={styles['menu-logo'] + ' pure-menu-heading'}><img src={logo} /></Link>
            <a className={styles['menu-userbox-icon']}>USER</a>
          </div>
        </nav>

        <nav className={styles['menu-horizontal'] + ' pure-menu pure-menu-horizontal'}>
          <li>
            <Link to="/rent">Rent</Link>
          </li>
          <li>
            <Link to="/rent">Buy</Link>
          </li>
          <li>
            <Link to="/rent">Commercial</Link>
          </li>
          <li>
            <Link to="/rent">New Projects</Link>
          </li>
          <li>
            <Link to="/rent">More</Link>
          </li>
        </nav>
      </header>
    );
  }
}
