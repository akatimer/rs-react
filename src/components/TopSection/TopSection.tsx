import { Component } from 'react';
import './TopSection.css';
import SearchPanel from '../SearchPanel/SearchPanel';
import DataContext from '../Context/DataContext';
import Err from '../Err/Err';

class TopSection extends Component<Record<string, never>, { newErr: boolean }> {
  declare context: React.ContextType<typeof DataContext>;
  state = {
    newErr: false,
  };
  render() {
    return (
      <>
        <button
          onClick={() => {
            this.setState({ newErr: true });
          }}
        >
          Error
        </button>
        {this.state.newErr && <Err />}
        <SearchPanel state={{ value: this.context.searchValue }} />
      </>
    );
  }
}

TopSection.contextType = DataContext;

export default TopSection;
