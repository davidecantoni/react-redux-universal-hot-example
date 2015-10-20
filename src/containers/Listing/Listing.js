import React, {Component} from 'react';
import { ProjectListing } from 'components';

export default class Listing extends Component {

  render() {
    const props1 = {
      developer: {
        id: 1,
        name: 'Azizi',
        url: 'لعقارات'
      },
      project: {
        id: 1,
        name: 'Project name test',
        url: 'project-name-test'
      }
    };

    const props2 = {
      developer: {
        id: 1,
        name: 'Deyaar Properties',
        url: 'deyaar-properties'
      },
      project: {
        id: 1,
        name: 'Very nice',
        url: 'very-nice'
      }
    };

    console.log(props1);

    return (
      <ul>
        <ProjectListing {...props1}/>
        <ProjectListing {...props2}/>
      </ul>
    );
  }
}

