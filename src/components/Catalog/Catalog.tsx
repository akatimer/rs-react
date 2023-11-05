import './Catalog.css';
import Card from '../Card/Card';
import { Await, LoaderFunction, defer, useLoaderData } from 'react-router-dom';
import { MangaResponseData, MangaResponseType } from '../../utils/api/apiTypes';
import Loader from '../Loader/Loader';
import { Suspense } from 'react';
import { searchManga } from '../../utils/api/searchManga';

type MangaPromise = {
  data: Promise<MangaResponseType>;
};

const Catalog: React.FC = (): JSX.Element => {
  const { data } = useLoaderData() as MangaPromise;
  return (
    <Suspense fallback={<Loader />}>
      <Await resolve={data}>
        {(mangaCards) => (
          <div className="catalog">
            {mangaCards.data.map((card: MangaResponseData) => (
              <Card key={card.mal_id} {...card} />
            ))}
          </div>
        )}
      </Await>
    </Suspense>
  );
};

export const mangaLoader: LoaderFunction = async ({ params }) => {
  console.log(params.limit, params.page, params.term);
  return defer({ data: searchManga(params.limit, params.page, params.term) });
};

export default Catalog;
