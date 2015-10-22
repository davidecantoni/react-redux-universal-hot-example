import React, {Component} from 'react';

export default class Header extends Component {
  render() {
//    const {info, load} = this.props; // eslint-disable-line no-shadow
//    const styles = require('./Header.scss');


    return (
      <footer>
        <ul>
          <li>About us</li>
          <li>Terms &amp; Conditions</li>
          <li>Privacy Policy</li>
          <li>Client Login</li>
        </ul>

        <div className="pf-logo">
          &copy; propertyfinder
        </div>
      </footer>
    );
  }
}
