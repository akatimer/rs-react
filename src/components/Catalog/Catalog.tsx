import './Catalog.css';
import Card from '../Card/Card';
import { Await, LoaderFunction, defer, useLoaderData } from 'react-router-dom';
import { MangaResponseData, MangaResponseType } from '../../utils/api/apiTypes';
import Loader from '../Loader/Loader';
import { Suspense, useContext } from 'react';
import { searchManga } from '../../utils/api/searchManga';
import Pagination from '../Pagination/Pagination';
import DataContext from '../Context/DataContext';

export type MangaPromise = {
  data: Promise<MangaResponseType>;
};

const Catalog: React.FC = (): JSX.Element => {
  const { data } = useLoaderData() as MangaPromise;
  const { setAllManga } = useContext(DataContext);

  Promise.resolve(data).then((res) => {
    setAllManga(res);
  });

  return (
    <Suspense fallback={<Loader />}>
      <Await resolve={data}>
        {(mangaCards) => {
          return (
            <>
              <div className="catalog">
                {mangaCards.data.map((card: MangaResponseData) => (
                  <Card key={card.mal_id} {...card} />
                ))}
              </div>
              <Pagination />
            </>
          );
        }}
      </Await>
    </Suspense>
  );
};

export const mangaLoader: LoaderFunction = async ({ params }) => {
  return defer({ data: searchManga(params.limit, params.page, params.term) });
};

export default Catalog;
