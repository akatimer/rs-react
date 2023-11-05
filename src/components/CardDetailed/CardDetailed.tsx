import { Await, LoaderFunction, defer, useLoaderData } from 'react-router-dom';
import './CardDetailed.css';
import { searchMangaById } from '../../utils/api/searchMangaById';
import { MangaResponseData } from '../../utils/api/apiTypes';
import { Suspense } from 'react';
import Loader from '../Loader/Loader';

type DetailedMangaPromise = {
  data: Promise<MangaResponseData>;
};

const CardDetailed: React.FC = (): JSX.Element => {
  const { data } = useLoaderData() as DetailedMangaPromise;
  return (
    <Suspense fallback={<Loader />}>
      <Await resolve={data}>
        {(data) => {
          console.log(data);
          return (
            <div key={data.data.mal_id} className="card">
              <div className="card__img">
                <img src={data.data.images.webp.image_url} />
              </div>
              <div className="card__info">
                <div className="card__line">
                  <h3>Title: </h3>
                  <h3>{data.data.title}</h3>
                </div>
                <div className="card__line">
                  <h3>Score: </h3>
                  <h3>{data.data.score || '---'}</h3>
                </div>
                <div className="card__line">
                  <h3>Status: </h3>
                  <h3>{data.data.status}</h3>
                </div>
                <div className="card__line">
                  <h3>Synopsys: </h3>
                  <h3>{data.data.synopsis || '---'}</h3>
                </div>
              </div>
            </div>
          );
        }}
      </Await>
    </Suspense>
  );
};

export const detailedMangaLoader: LoaderFunction = async ({ params }) => {
  return defer({ data: searchMangaById(params.id!) });
};

export default CardDetailed;
