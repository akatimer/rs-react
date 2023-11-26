'use client';
import './Catalog.css';
import Card from '../Card/Card';
import { MangaResponseData } from '../../utils/api/apiTypes';
import Loader from '../Loader/Loader';
import searchManga from '../../utils/api/searchManga';
import Pagination from '../Pagination/Pagination';
import { useAppDispatch } from '../../store/hooks';
import sliceAllManga from '../../store/sliceAllManga';
import { useSearchParams } from 'next/navigation';

const Catalog: React.FC = (): JSX.Element => {
  const searchParams = useSearchParams();
  const limit = searchParams.get('limit');
  const page = searchParams.get('page');
  const term = searchParams.get('term');

  const { data, isLoading } = searchManga.endpoints.searchManga.useQuery({
    limit,
    page,
    term,
  });

  const dispatch = useAppDispatch();

  if (isLoading) {
    return <Loader />;
  }

  if (data) {
    dispatch(sliceAllManga.actions.setAllManga(data));
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
