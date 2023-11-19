import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from '../Router/Router';

const App: React.FC = (): JSX.Element => {
  return <RouterProvider router={router} />;
};

export default App;
