import { Outlet } from 'react-router';

const MainPage: React.FC = (): JSX.Element => {
  return (
    <>
      <header></header>
      <main className="container">
        <Outlet />
      </main>
    </>
  );
};

export default MainPage;
