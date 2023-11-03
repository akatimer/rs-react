import './App.css';
import TopSection from '../TopSection/TopSection';
import MiddleSection from '../MiddleSection/MiddleSection';
import { DataProvider } from '../Context/DataContext';

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <h1>Starship Searcher</h1>
      <DataProvider>
        <TopSection />
        <MiddleSection />
      </DataProvider>
    </>
  );
};

export default App;
