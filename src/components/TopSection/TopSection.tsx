import { Component } from 'react';
import './TopSection.css';
import SearchPanel from '../SearchPanel/SearchPanel';
import DataContext from '../Context/DataContext';

class TopSection extends Component {
  declare context: React.ContextType<typeof DataContext>;
  render() {
    return <SearchPanel state={{ value: this.context.searchValue }} />;
  }
}

TopSection.contextType = DataContext;

export default TopSection;
