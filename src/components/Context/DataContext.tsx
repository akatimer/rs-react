import React, { Dispatch, ReactNode, SetStateAction, useState } from 'react';

const DataContext = React.createContext<{
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}>({
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

  return (
    <DataContext.Provider
      value={{
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
