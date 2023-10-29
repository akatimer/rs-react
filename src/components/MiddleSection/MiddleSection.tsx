import { Component } from 'react';
import './MiddleSection.css';
import Loader from '../Loader/Loader';
import DataContext from '../Context/DataContext';
import Catalog from '../Catalog/Catalog';

class MiddleSection extends Component {
  declare context: React.ContextType<typeof DataContext>;
  render() {
    const { isLoading } = this.context;
    return <>{isLoading ? <Loader /> : <Catalog />}</>;
  }
}

MiddleSection.contextType = DataContext;

export default MiddleSection;
