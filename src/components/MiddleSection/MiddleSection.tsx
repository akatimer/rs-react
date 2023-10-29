import { Component } from 'react';
import './MiddleSection.css';
import Loader from '../Loader/Loader';
import DataContext from '../Context/DataContext';
import Catalog from '../Catalog/Catalog';
import { searchStarships } from '../../utils/api/searchStarships';
import { getStarships } from '../../utils/api/getStarships';

class MiddleSection extends Component {
  declare context: React.ContextType<typeof DataContext>;

  componentDidMount(): void {
    if (this.context.searchValue) {
      searchStarships(this.context.searchValue).then((res) => {
        console.log(res);
        this.context.updateData(res.results);
        this.context.setIsLoading(false);
      });
    } else {
      getStarships().then((res) => {
        console.log(res);
        this.context.updateData(res.results);
        this.context.setIsLoading(false);
      });
    }
  }

  render() {
    const { isLoading } = this.context;
    return <>{isLoading ? <Loader /> : <Catalog />}</>;
  }
}

MiddleSection.contextType = DataContext;

export default MiddleSection;
