import './App.css';
import { DataProvider } from '../Context/DataContext';
import { RouterProvider } from 'react-router-dom';
import router from '../Router/Router';

const App: React.FC = (): JSX.Element => {
  return (
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  );
};

export default App;
