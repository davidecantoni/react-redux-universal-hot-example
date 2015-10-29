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
    return (
      <li className={styles['list-item']}>
        <div className={styles.image}>
          <Link to={`/${params.lang}/${params.newproject}/developer-name/${project.id}`}>
            <img className="pure-img" src={project.thumbnail} alt={project.title} />
          </Link>
        </div>
        <div className={styles.info}>
          <Link to={`/${params.lang}/${params.newproject}/developer-name/${project.id}`}>{project.title}</Link>
          <div>{project.price}</div>
          <div>{project.location}</div>
        </div>
      </li>
    );
  }
}
