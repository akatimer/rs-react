import './Catalog.css';
import Card from '../Card/Card';
import { getAllManga } from '../../utils/api/getManga';
import { Await, defer, useLoaderData } from 'react-router-dom';
import { MangaResponseData, MangaResponseType } from '../../utils/api/apiTypes';
import Loader from '../Loader/Loader';
import { Suspense } from 'react';

type MangaPromise = {
  data: Promise<MangaResponseType>;
};

const Catalog: React.FC = (): JSX.Element => {
  const { data } = useLoaderData() as MangaPromise;
  console.log(data);
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

export const mangaLoader = async () => {
  return defer({ data: getAllManga() });
};

export default Catalog;
