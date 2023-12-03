import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import UncontroledForm from '../UncontroledForm/UncontroledForm';
import Layout from '../Layout/Layout';
import ControledForm from '../ControledForm/ControledForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <div>404</div>,
    children: [
      {
        path: `/`,
        element: <MainPage />,
      },
      {
        path: `/uncontroled`,
        element: <UncontroledForm />,
      },
      {
        path: `/controled`,
        element: <ControledForm />,
      },
    ],
  },
]);

export default router;
