import { Component } from 'react';
import './SearchPanel.css';
import { getStarshipsResultsType } from '../../utils/api/getStarships';
import DataContext from '../Context/DataContext';
import { searchStarships } from '../../utils/api/searchStarships';

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
    console.log(this.state.value);
    const result = searchStarships(this.state.value)
      .then((res) => {
        return res;
      })
      .catch(() => {
        console.error();
      });
    return result;
  }

  render() {
    const { setIsLoading, updateData } = this.context;

    return (
      <form
        className="search-form"
        onSubmit={async (e) => {
          e.preventDefault();
          setIsLoading(true);
          this.getData().then((res) => {
            if (res) {
              updateData(res.results);
              console.log(res.results);
              setIsLoading(false);
            }
          });
        }}
      >
        <input
          className="search-form__input"
          type="search"
          placeholder="Search"
          value={this.state.value}
          onChange={(e) => this.onChange(e)}
        />
        <button className="search-form__button" type="submit">
          Search
        </button>
      </form>
    );
  }
}

SearchPanel.contextType = DataContext;

export default SearchPanel;
