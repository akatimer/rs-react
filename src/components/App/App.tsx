import { Component } from 'react';
import './App.css';
import TopSection from '../TopSection/TopSection';
import MiddleSection from '../MiddleSection/MiddleSection';

class App extends Component {
  render() {
    return (
      <>
        <h1>Hello</h1>
        <TopSection />
        <MiddleSection />
      </>
    );
  }
}

export default App;
