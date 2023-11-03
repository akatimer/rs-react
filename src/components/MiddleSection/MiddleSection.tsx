import { useContext } from 'react';
import './MiddleSection.css';
import Loader from '../Loader/Loader';
import DataContext from '../Context/DataContext';
import Catalog from '../Catalog/Catalog';

const MiddleSection: React.FC = (): JSX.Element => {
  const { isLoading } = useContext(DataContext);

  return <>{isLoading ? <Loader /> : <Catalog />}</>;
};

export default MiddleSection;
