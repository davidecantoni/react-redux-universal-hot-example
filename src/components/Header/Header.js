import React, {Component} from 'react';
import { IndexLink, Link } from 'react-router';

const NavbarLink = ({to, className, component, children}) => {
  const Comp = component || Link;

  return (
    <Comp to={to} className={className} activeStyle={{
      color: '#33e0ff'
    }}>
      {children}
    </Comp>
  );
};

export default class Header extends Component {
  render() {
//    const {info, load} = this.props; // eslint-disable-line no-shadow
//    const styles = require('./Header.scss');


    return (
      <header>
        <div className="pure-g">
          <div className="pure-u-1-3">MENU</div>

          <NavbarLink to="/" className="pure-u-1-3" component={IndexLink}>
            Properyfinder
          </NavbarLink>

          <div className="pure-u-1-3">
            <Link to="/listing">Listing</Link>
          </div>

          <ul className="regional">
          </ul>
        </div>
      </header>
    );
  }
}
