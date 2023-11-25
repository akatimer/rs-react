import TopSection from '../TopSection';
import { Outlet } from 'react-router-dom';

const MainPage: React.FC = (): JSX.Element => {
  return (
    <>
      <header>
        <TopSection />
      </header>
      <main className="container">
        <Outlet />
      </main>
    </>
  );
};

export default MainPage;
