import React, {Component, PropTypes} from 'react';

export default class Project extends Component {
  static propTypes = {
    history: PropTypes.object
  }

  goBack() {
    const { history } = this.props;
    history.goBack();
  }

  render() {
    return (
      <ul>
        project detail page<br/>
        <a onClick={this.goBack.bind(this)}>go back</a>
      </ul>
    );
  }
}

