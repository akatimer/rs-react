import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import MiddleSection from '../MiddleSection/MiddleSection';
import { mangaLoader } from '../Catalog/Catalog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <div>404</div>,
    children: [
      {
        // path: 'manga',
        index: true,
        element: <MiddleSection />,
        loader: mangaLoader,
      },
    ],
  },
]);

export default router;
