import TopSection from '../TopSection/TopSection';
import MiddleSection from '../MiddleSection/MiddleSection';

const MainPage: React.FC = (): JSX.Element => {
  return (
    <>
      <h1>Manga Searcher</h1>
      <TopSection />
      <MiddleSection />
    </>
  );
};

export default MainPage;
