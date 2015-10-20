import React, {Component} from 'react';

export default class Developer extends Component {
  goBack() {
    const { history } = this.props;
    history.goBack();
  }

  render() {
    return (
      <ul>
        developer detail page<br/>
        <a onClick={this.goBack.bind(this)}>go back</a>
      </ul>
    );
  }
};
