import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class ListItem extends Component {
  static propTypes = {
    params: PropTypes.object
  }

  render() {
    const { params } = this.props;
    const styles = require('../../containers/App/App.scss');
    return (
      <div className={styles.language}>
        <Link to={`/en/${params.newprojects}/`}>en</Link>&nbsp;|&nbsp;
        <Link to={`/ar/${params.newprojects}/`}>ar</Link><br/>
        {/*current language is {params.lang}<br/>*/}
      </div>
    );
  }
}
