import './Catalog.css';
import Card from '../Card/Card';
import { useParams } from 'react-router-dom';
import { MangaResponseData } from '../../utils/api/apiTypes';
import Loader from '../Loader/Loader';
import { useEffect } from 'react';
import searchManga from '../../utils/api/searchManga';
import Pagination from '../Pagination/Pagination';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import sliceAllManga from '../../store/sliceAllManga';

const Catalog: React.FC = (): JSX.Element => {
  const { limit, page, term } = useParams();
  const { data, isLoading } = searchManga.endpoints.searchManga.useQuery({
    limit,
    page,
    term,
  });
  console.log(limit, page, term, 'cat');
  const searchTerm = localStorage.getItem('mangaSearch');
  console.log(searchTerm, 'mangaSearch');

  const allManga = useAppSelector((state) => {
    return state.allManga.allManga;
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(sliceAllManga.actions.setAllManga(data));
    }
  }, [data, allManga, dispatch]);

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
        <Pagination />
      </>
    );
  } else {
    return <div>No data</div>;
  }
};

export default Catalog;
