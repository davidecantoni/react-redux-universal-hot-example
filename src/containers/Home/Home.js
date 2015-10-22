import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');

    return (
      <div className={styles.home}>

        <Link to="/listing" className="menu-userbox-icon">Listing page</Link>

      </div>
    );
  }
}
