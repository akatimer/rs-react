import { useState } from 'react';
import { MangaResponseData } from '../../utils/api/apiTypes';
import TopSection from '../TopSection/TopSection';
import { Outlet } from 'react-router-dom';

const MainPage: React.FC = (): JSX.Element => {
  const [mangaResult, setMangaResult] = useState<MangaResponseData[]>([]);
  return (
    <>
      <header>
        <TopSection />
      </header>
      <main className="container">
        <Outlet context={{ mangaResult, setMangaResult }} />
      </main>
    </>
  );
};

export default MainPage;
