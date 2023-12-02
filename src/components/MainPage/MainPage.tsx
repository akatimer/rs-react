import { Outlet } from 'react-router';
import UncontroledForm from '../UncontroledForm/UncontroledForm';

const MainPage: React.FC = (): JSX.Element => {
  return (
    <>
      <header>
        <UncontroledForm />
      </header>
      <main className="container">
        <Outlet />
      </main>
    </>
  );
};

export default MainPage;
