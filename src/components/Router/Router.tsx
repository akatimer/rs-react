import { Navigate, createBrowserRouter } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import MiddleSection from '../MiddleSection/MiddleSection';
import CardDetailed, {
  detailedMangaLoader,
} from '../CardDetailed/CardDetailed';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <div>404</div>,
    children: [
      {
        path: '',
        element: (
          <Navigate
            to={
              localStorage.getItem('mangaSearch')
                ? `/limit/25/page/1/term/${localStorage.getItem('mangaSearch')}`
                : `/limit/25/page/1/term/`
            }
          />
        ),
      },
      {
        path: `/limit/:limit/page/:page/term/:term?`,
        element: <MiddleSection />,
        // loader: mangaLoader,
        children: [
          {
            path: `detailed/:id`,
            element: <CardDetailed />,
            loader: detailedMangaLoader,
          },
        ],
      },
    ],
  },
]);

export default router;
