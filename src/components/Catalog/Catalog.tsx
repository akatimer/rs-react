'use client';
import './Catalog.css';
import Card from '../Card/Card';
import { MangaResponseData } from '../../utils/api/apiTypes';
import Loader from '../Loader/Loader';
import searchManga from '../../utils/api/searchManga';
import Pagination from '../Pagination/Pagination';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Catalog: React.FC = (): JSX.Element => {
  const navigate = useRouter();
  const lsTerm = localStorage.getItem('mangaSearch');

  const windowUrl =
    typeof window !== 'undefined' && window.location.search
      ? window.location.search
      : '';
  useEffect(() => {
    if (!windowUrl) {
      navigate.replace(`/?limit=12&page=1&term=${lsTerm}`);
    }
  }, [lsTerm, navigate, windowUrl]);
  const searchParams = useSearchParams();
  const limit = searchParams.get('limit');
  const page = searchParams.get('page');
  const term = searchParams.get('term');

  const { data, isLoading } = searchManga.endpoints.searchManga.useQuery({
    limit,
    page,
    term,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (data) {
    return (
      <>
        <div className="catalog">
          {data.data.map((card: MangaResponseData) => (
            <Card key={card.mal_id} {...card} />
          ))}
        </div>
        <Pagination data={data} />
      </>
    );
  } else {
    return <div>No data</div>;
  }
};

export default Catalog;
