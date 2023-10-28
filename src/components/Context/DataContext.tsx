import React, { Component, ReactNode } from 'react';
import { starshipsType } from '../../utils/api/getStarships';

const DataContext = React.createContext<{
  starshipsResult: starshipsType[];
  updateData: (result: starshipsType[]) => void;
  isLoading: boolean;
  setIsLoading: (status: boolean) => void;
}>({
  starshipsResult: [],
  updateData: () => {},
  isLoading: true,
  setIsLoading: () => {},
});

interface DataProviderProps {
  children: ReactNode;
}

export class DataProvider extends Component<DataProviderProps> {
  state = {
    // searchValue: '',
    starshipsResult: [],
    isLoading: true,
  };

  updateData = (result: starshipsType[]): void => {
    console.log(555);
    this.setState({ starshipsResult: result });
  };

  setIsLoading = (status: boolean) => {
    this.setState({ isLoading: status });
  };

  render() {
    const { starshipsResult, isLoading } = this.state;
    const { updateData, setIsLoading } = this;
    return (
      <DataContext.Provider
        value={{
          starshipsResult,
          updateData,
          isLoading,
          setIsLoading,
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export default DataContext;
