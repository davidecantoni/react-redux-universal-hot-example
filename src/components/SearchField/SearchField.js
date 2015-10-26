import React, {Component, PropTypes} from 'react';

export default class SearchField extends Component {
  static propTypes = {
    filters: PropTypes.object,
    changeDeveloper: PropTypes.func,
    changeProject: PropTypes.func,
    onSelect: PropTypes.func
  }

  handleClick() {
    const node = this.refs.input;
    const text = node.value.trim();
    console.log('detect if location, agent or developer', text);
    // set the value here
    this.props.changeDeveloper('');
    this.props.changeProject('projectName');
    // trigger data refetch
    this.props.onSelect();
    node.value = '';
  }

  render() {
    return (
      <div>
        <input type="text" ref="input" placeholder="Search by developer, project or location" />
        <button onClick={::this.handleClick}>
          Search
        </button>
      </div>
    );
  }
}
