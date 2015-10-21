import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';

export default class ListingItem extends Component {
  static propTypes = {
    project: PropTypes.object
  }

  render() {
    const project = this.props;

    return (
      <li>
        <img src={project.thumbnail} alt={project.title} /><br/>
        {project.title}<br/>
        {project.price}<br/>
        {project.location}<br/>
        <Link to={`/developer/${project.id}/project/${project.id}`}>go to the project</Link>
      </li>
    );
  }
}
