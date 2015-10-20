import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';

export default class ListingItem extends Component {
  static propTypes = {
    developer: PropTypes.object,
    project: PropTypes.object
  }

  render() {
    const { developer, project } = this.props;

    console.log(this.props);

    return (
      <li>
        <Link to={`/developer/${developer.url}/project/${project.url}`}>go to the project: {project.name}</Link><br/>
        <Link to={`/developer/${developer.url}`}>go to the developer: {developer.name}</Link>
      </li>
    );
  }
}
