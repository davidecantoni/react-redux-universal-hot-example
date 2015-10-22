import React, {Component} from 'react';
import { Link } from 'react-router';

//const NavbarLink = ({to, className, component, children}) => {
//  const Comp = component || Link;
//
//  return (
//    <Comp to={to} className={className} activeStyle={{
//      color: '#33e0ff'
//    }}>
//      {children}
//    </Comp>
//  );
//};

export default class Header extends Component {
  render() {
    const styles = require('./Header.scss');
    const logo = require('./propertyfinder-logo.svg');

    return (
      <header className={styles.customer_menu_wrapper}>
        <nav className="pure-menu">
          <div>
            <Link to="/menu" className="menu-toggle">MENU</Link>
            <Link to="/" className="pure-menu-heading"><img src={logo} /></Link>
            <Link to="/user" className="menu-userbox-icon">USER</Link>
          </div>
        </nav>

        <nav className>
        </nav>
      </header>
    );
  }
}