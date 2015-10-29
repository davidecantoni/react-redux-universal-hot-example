import React, {Component, PropTypes} from 'react';

export default class SearchField extends Component {
  static propTypes = {
    filters: PropTypes.object,
    changeDeveloper: PropTypes.func,
    changeProject: PropTypes.func,
    onSelect: PropTypes.func
  }

  componentDidMount() {
    const node = this.refs.input;

    if (window) {
      const nbaTeams = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        local: [
          {
            team: 'New Jersey Devils'
          },
          {
            team: 'New York Islanders'
          },
          {
            team: 'New York Rangers'
          }
        ]
      });

      const nhlTeams = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.whitespace,
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        local: [
          'Boston Celtics',
          'Dallas Mavericks'
        ]
      });

      $(node).typeahead(
        {
          highlight: true
        },
        {
          name: 'nba-teams',
          display: 'team',
          source: nbaTeams,
          templates: {
            header: '<h3 class="league-name">NBA Teams</h3>'
          }
        },
        {
          name: 'nhl-teams',
          display: 'team',
          source: nhlTeams,
          templates: {
            header: '<h3 class="league-name">NHL Teams</h3>'
          }
        }
      );
    }
  }

  handleClick() {
    const node = this.refs.input;
    const text = node.value.trim();
    console.log('detect if location, agent or developer', text);
    // set the value here https://twitter.github.io/typeahead.js/examples/#multiple-datasets
    this.props.changeDeveloper('');
    this.props.changeProject('projectName');
    // trigger data refetch
    this.props.onSelect();
    node.value = '';
  }

  render() {
    const styles = require('./SearchField.scss');
    return (
      <div>
        <input className={styles.typeahead} type="text" ref="input" placeholder="Search by developer, project or location" />
        <button className={styles.search} onClick={::this.handleClick}>
          Search
        </button>
      </div>
    );
  }
}
