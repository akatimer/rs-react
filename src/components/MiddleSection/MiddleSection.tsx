import { Component } from 'react';
import './MiddleSection.css';
import Loader from '../Loader/Loader';
import DataContext from '../Context/DataContext';

class MiddleSection extends Component {
  declare context: React.ContextType<typeof DataContext>;
  render() {
    const { isLoading } = this.context;
    return (
      <>
        <h2>MiddleSection</h2>
        {isLoading ? <Loader /> : <h2>DONE</h2>}
      </>
    );
  }
}

MiddleSection.contextType = DataContext;

export default MiddleSection;
