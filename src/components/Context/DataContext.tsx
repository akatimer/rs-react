import React, { Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { MangaResponseData, MangaResponseType } from '../../utils/api/apiTypes';

const DataContext = React.createContext<{
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  allManga: MangaResponseType | null;
  setAllManga: Dispatch<SetStateAction<MangaResponseType | null>>;
  manga: MangaResponseData | null;
  setManga: Dispatch<SetStateAction<MangaResponseData | null>>;
}>({
  searchValue: '',
  setSearchValue: () => {},
  allManga: null,
  setAllManga: () => {},
  manga: null,
  setManga: () => {},
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
  const [allManga, setAllManga] = useState<MangaResponseType | null>(null);
  const [manga, setManga] = useState<MangaResponseData | null>(null);

  return (
    <DataContext.Provider
      value={{
        searchValue,
        setSearchValue,
        allManga,
        setAllManga,
        manga,
        setManga,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
