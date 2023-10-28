import { Component } from 'react';
import './SearchPanel.css';
import {
  getStarships,
  getStarshipsResultsType,
} from '../../utils/api/getStarships';
import DataContext from '../Context/DataContext';

type searchPanelPropsType = {
  state: {
    value: string;
  };
};

class SearchPanel extends Component<searchPanelPropsType, { value: string }> {
  declare context: React.ContextType<typeof DataContext>;
  constructor(props: searchPanelPropsType) {
    super(props);
    this.state = {
      value: props.state.value,
    };
  }

  onChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: e.target.value });
  }

  getData(): Promise<void | getStarshipsResultsType> {
    const result = getStarships()
      .then((res) => {
        return res;
      })
      .catch(() => {
        console.error();
      });
    return result;
  }

  render() {
    const { starshipsResult, setIsLoading, updateData } = this.context;

    return (
      <div>
        <input
          type="search"
          placeholder="Search"
          value={this.state.value}
          onChange={(e) => this.onChange(e)}
        />
        <button
          onClick={async () => {
            setIsLoading(true);
            this.getData().then((res) => {
              console.log(321);
              if (res) {
                console.log(res);
                updateData(res.results);
                console.log(starshipsResult);
                setIsLoading(false);
              }
            });
          }}
        >
          Search
        </button>
      </div>
    );
  }
}

SearchPanel.contextType = DataContext;

export default SearchPanel;
