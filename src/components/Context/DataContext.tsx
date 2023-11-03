import React, { Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { starshipsType } from '../../utils/api/getStarships';

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
