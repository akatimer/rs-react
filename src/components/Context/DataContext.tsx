import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { getStarships, starshipsType } from '../../utils/api/getStarships';
import { searchStarships } from '../../utils/api/searchStarships';

const DataContext = React.createContext<{
  starshipsResult: starshipsType[];
  setStarshipsResult: Dispatch<SetStateAction<starshipsType[]>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}>({
  starshipsResult: [],
  setStarshipsResult: () => {},
  isLoading: true,
  setIsLoading: () => {},
  searchValue: '',
  setSearchValue: () => {},
});

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({
  children,
}): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>(
    localStorage.getItem('starshipSearch') || ''
  );
  const [starshipsResult, setStarshipsResult] = useState<starshipsType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (localStorage.getItem('starshipSearch')) {
      searchStarships(`${localStorage.getItem('starshipSearch')}`).then(
        (res) => {
          setStarshipsResult(res.results);
          setIsLoading(false);
        }
      );
    } else {
      getStarships().then((res) => {
        setStarshipsResult(res.results);
        setIsLoading(false);
      });
    }
  }, []);

  return (
    <DataContext.Provider
      value={{
        starshipsResult,
        setStarshipsResult,
        isLoading,
        setIsLoading,
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
