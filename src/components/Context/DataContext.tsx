import React, { Component, ReactNode } from 'react';
import { starshipsType } from '../../utils/api/getStarships';

const DataContext = React.createContext<{
  starshipsResult: starshipsType[];
  updateData: (result: starshipsType[]) => void;
}>({
  starshipsResult: [],
  updateData: () => {},
});

interface DataProviderProps {
  children: ReactNode;
}

export class DataProvider extends Component<DataProviderProps> {
  state = {
    // searchValue: '',
    starshipsResult: [],
  };

  updateData = (result: starshipsType[]): void => {
    console.log(555);
    this.setState({ starshipsResult: result });
  };

  render() {
    const { starshipsResult } = this.state;
    const { updateData } = this;
    return (
      <DataContext.Provider
        value={{
          starshipsResult,
          updateData,
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export default DataContext;
