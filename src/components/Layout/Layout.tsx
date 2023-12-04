import { Outlet } from 'react-router';

const Layout: React.FC = (): JSX.Element => {
  return (
    <>
      <header></header>
      <main className="container">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
