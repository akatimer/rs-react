import { Component } from 'react';
import './App.css';
import TopSection from '../TopSection/TopSection';
import MiddleSection from '../MiddleSection/MiddleSection';
import { DataProvider } from '../Context/DataContext';

class App extends Component {
  render() {
    return (
      <>
        <h1>Hello</h1>
        <DataProvider>
          <TopSection />
          <MiddleSection />
        </DataProvider>
      </>
    );
  }
}

export default App;
