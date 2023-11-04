import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { MangaResponseData } from '../../utils/api/apiTypes';
import { searchManga } from '../../utils/api/searchManga';
import { getAllManga } from '../../utils/api/getManga';

const DataContext = React.createContext<{
  mangaResult: MangaResponseData[];
  setMangaResult: Dispatch<SetStateAction<MangaResponseData[]>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}>({
  mangaResult: [],
  setMangaResult: () => {},
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
    localStorage.getItem('mangaSearch') || ''
  );
  const [mangaResult, setMangaResult] = useState<MangaResponseData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (localStorage.getItem('mangaSearch')) {
      searchManga(`${localStorage.getItem('mangaSearch')}`).then((res) => {
        setMangaResult(res.data);
        setIsLoading(false);
      });
    } else {
      getAllManga().then((res) => {
        setMangaResult(res.data);
        setIsLoading(false);
      });
    }
  }, []);

  return (
    <DataContext.Provider
      value={{
        mangaResult,
        setMangaResult,
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
