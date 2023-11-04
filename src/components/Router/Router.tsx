import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <div>404</div>,
    children: [],
  },
]);

export default router;
