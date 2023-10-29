import { Component } from 'react';
import './TopSection.css';
import SearchPanel from '../SearchPanel/SearchPanel';

class TopSection extends Component {
  render() {
    return <SearchPanel state={{ value: 'Starship' }} />;
  }
}

export default TopSection;
