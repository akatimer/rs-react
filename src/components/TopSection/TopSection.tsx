import { Component } from 'react';
import './TopSection.css';
import SearchPanel from '../SearchPanel/SearchPanel';

class TopSection extends Component {
  render() {
    return (
      <>
        <h2>TopSection</h2>
        <SearchPanel state={{ value: 'TestPropsValue' }} />
      </>
    );
  }
}

export default TopSection;
