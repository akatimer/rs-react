import { useContext, useState } from 'react';
import './TopSection.css';
import SearchPanel from '../SearchPanel/SearchPanel';
import DataContext from '../Context/DataContext';
import Err from '../Err/Err';

const TopSection: React.FC = (): JSX.Element => {
  const context = useContext(DataContext);
  const [newErr, setNewErr] = useState<boolean>(false);

  return (
    <>
      <button
        onClick={() => {
          setNewErr(true);
        }}
      >
        Error
      </button>
      {newErr && <Err />}
      <SearchPanel state={{ value: context.searchValue }} />
    </>
  );
};

export default TopSection;
