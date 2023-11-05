import './MiddleSection.css';
import Catalog from '../Catalog/Catalog';
import { Outlet } from 'react-router-dom';

const MiddleSection: React.FC = (): JSX.Element => {
  return (
    <>
      <Catalog />
      <Outlet />
    </>
  );
};

export default MiddleSection;
