import React, { Component, ReactNode } from 'react';
import { starshipsType } from '../../utils/api/getStarships';

const DataContext = React.createContext<{
  starshipsResult: starshipsType[];
  updateData: (result: starshipsType[]) => void;
  isLoading: boolean;
  setIsLoading: (status: boolean) => void;
  searchValue: string;
  updateSearchValue: (searchValue: string) => void;
}>({
  starshipsResult: [],
  updateData: () => {},
  isLoading: true,
  setIsLoading: () => {},
  searchValue: '',
  updateSearchValue: () => {},
});

interface DataProviderProps {
  children: ReactNode;
}

export class DataProvider extends Component<DataProviderProps> {
  state = {
    searchValue: localStorage.getItem('starshipSearch') || '',
    starshipsResult: [],
    isLoading: true,
  };

  updateData = (result: starshipsType[]): void => {
    this.setState({ starshipsResult: result });
  };

  setIsLoading = (status: boolean) => {
    this.setState({ isLoading: status });
  };

  updateSearchValue = (searchValue: string) => {
    localStorage.setItem('starshipSearch', searchValue);
    this.setState({ searchValue: searchValue });
  };

  render() {
    const { starshipsResult, isLoading, searchValue } = this.state;
    const { updateData, setIsLoading, updateSearchValue } = this;

    return (
      <DataContext.Provider
        value={{
          starshipsResult,
          updateData,
          isLoading,
          setIsLoading,
          searchValue,
          updateSearchValue,
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export default DataContext;
