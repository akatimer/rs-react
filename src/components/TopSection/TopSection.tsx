import { useState } from 'react';
import './TopSection.css';
import SearchPanel from '../SearchPanel/SearchPanel';
import Err from '../Err/Err';

const TopSection: React.FC = (): JSX.Element => {
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
      <SearchPanel />
    </>
  );
};

export default TopSection;
