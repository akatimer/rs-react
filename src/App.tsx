import { RouterProvider } from 'react-router';
import './App.css';
import router from './components/Router/Router';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
