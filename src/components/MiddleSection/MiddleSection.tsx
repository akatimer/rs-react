import { useContext, useEffect } from 'react';
import './MiddleSection.css';
import Loader from '../Loader/Loader';
import DataContext from '../Context/DataContext';
import Catalog from '../Catalog/Catalog';
import { searchStarships } from '../../utils/api/searchStarships';
import { getStarships } from '../../utils/api/getStarships';

const MiddleSection: React.FC = (): JSX.Element => {
  const context = useContext(DataContext);

  useEffect(() => {
    if (context.searchValue) {
      searchStarships(context.searchValue).then((res) => {
        context.setStarshipsResult(res.results);
        context.setIsLoading(false);
      });
    } else {
      getStarships().then((res) => {
        context.setStarshipsResult(res.results);
        context.setIsLoading(false);
      });
    }
  });

  return <>{context.isLoading ? <Loader /> : <Catalog />}</>;
};

export default MiddleSection;
