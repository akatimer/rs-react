import { Component } from 'react';
import './SearchPanel.css';

type searchPanelPropsType = {
  state: {
    value: string;
  };
};

class SearchPanel extends Component<searchPanelPropsType, { value: string }> {
  constructor(props: searchPanelPropsType) {
    super(props);
    this.state = {
      value: props.state.value,
    };
  }

  onChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div>
        <input
          type="search"
          placeholder="Search"
          value={this.state.value}
          onChange={(e) => this.onChange(e)}
        />
        <button>Search</button>
      </div>
    );
  }
}

export default SearchPanel;
