import { Link, useParams } from 'react-router-dom';
import './Pagintaion.css';
import searchManga from '../../utils/api/searchManga';

const Pagination: React.FC = (): JSX.Element => {
  const { limit, page, term } = useParams();
  const { data } = searchManga.endpoints.searchManga.useQuery({
    limit,
    page,
    term,
  });

  return (
    <div className="pagination">
      <Link
        className="link_button"
        to={
          term
            ? `/limit/${limit}/page/${1}/term/${localStorage.getItem(
                'mangaSearch'
              )}`
            : `/limit/${limit}/page/${1}/term/`
        }
      >
        {'<<'}
      </Link>
      <Link
        className="link_button"
        to={`/limit/${limit}/page/${
          Number(page) > 2 ? Number(page) - 1 : page
        }/term/${term || ''}`}
      >
        {'<'}
      </Link>
      <div className="link_button">{page}</div>
      <Link
        className="link_button"
        to={`/limit/${limit}/page/${
          Number(page) < data.pagination.last_visible_page
            ? Number(page) + 1
            : page
        }/term/${term}`}
      >
        {'>'}
      </Link>
      <Link
        className="link_button"
        to={`/limit/${limit}/page/${data.pagination.last_visible_page}/term/${term}`}
      >
        {'>>'}
      </Link>
    </div>
  );
};

export default Pagination;
